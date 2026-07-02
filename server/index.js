import compression from "compression";
import express from "express";
import helmet from "helmet";
import mongoose from "mongoose";
import morgan from "morgan";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { z } from "zod";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const distDir = path.join(rootDir, "dist");

const PORT = Number(process.env.PORT || 3000);
const MONGO_URI = process.env.MONGO_URI;
const ADMIN_TOKEN = process.env.ADMIN_TOKEN;
const HMS_API_BASE_URL = process.env.HMS_API_BASE_URL;
const HMS_API_TOKEN = process.env.HMS_API_TOKEN;

if (!MONGO_URI) {
  throw new Error("MONGO_URI is required. Provision MongoDB and set MONGO_URI before starting the app.");
}

if (!ADMIN_TOKEN || ADMIN_TOKEN.length < 24) {
  throw new Error("ADMIN_TOKEN is required and should be at least 24 characters.");
}

const timestamps = { timestamps: true };

const contactSubmissionSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    phone: { type: String, trim: true },
    message: { type: String, required: true, trim: true },
    status: { type: String, enum: ["new", "reviewed", "closed"], default: "new" },
  },
  timestamps,
);

const appointmentRequestSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, trim: true, lowercase: true },
    phone: { type: String, required: true, trim: true },
    service: { type: String, required: true, trim: true },
    preferredDate: { type: String, trim: true },
    notes: { type: String, trim: true },
    status: { type: String, enum: ["requested", "contacted", "scheduled", "cancelled"], default: "requested" },
  },
  timestamps,
);

const siteContentSchema = new mongoose.Schema(
  {
    key: { type: String, required: true, unique: true, trim: true },
    value: { type: mongoose.Schema.Types.Mixed, required: true },
  },
  timestamps,
);

const ContactSubmission = mongoose.model("ContactSubmission", contactSubmissionSchema);
const AppointmentRequest = mongoose.model("AppointmentRequest", appointmentRequestSchema);
const SiteContent = mongoose.model("SiteContent", siteContentSchema);

const defaultPublicContent = {
  contact: {
    phone: "055 196 4864",
    email: "[Add email address]",
    address: "Nii Martey Tsuru St, Spintex, Accra, Ghana",
    mapQuery: "Norcross Hospital, Nii Martey Tsuru St, Spintex, Accra, Ghana",
    hours: "[Add opening hours]",
  },
  announcement: {
    enabled: false,
    title: "",
    body: "",
  },
};

const contactSubmissionInput = z.object({
  name: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(160),
  phone: z.string().trim().max(40).optional().default(""),
  message: z.string().trim().min(5).max(3000),
});

const appointmentInput = z.object({
  name: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(160).optional().or(z.literal("")).default(""),
  phone: z.string().trim().min(6).max(40),
  service: z.string().trim().min(2).max(160),
  preferredDate: z.string().trim().max(40).optional().default(""),
  notes: z.string().trim().max(3000).optional().default(""),
});

const siteContentInput = z.object({
  contact: z.object({
    phone: z.string().trim().max(80),
    email: z.string().trim().max(160),
    address: z.string().trim().max(240),
    mapQuery: z.string().trim().max(240),
    hours: z.string().trim().max(160),
  }),
  announcement: z.object({
    enabled: z.boolean(),
    title: z.string().trim().max(140),
    body: z.string().trim().max(600),
  }),
});

function parse(schema, body) {
  const result = schema.safeParse(body);
  if (!result.success) {
    const message = result.error.issues.map((issue) => issue.message).join(", ");
    const error = new Error(message);
    error.status = 400;
    throw error;
  }
  return result.data;
}

function requireAdmin(req, res, next) {
  const auth = req.get("authorization") || "";
  const token = auth.startsWith("Bearer ") ? auth.slice(7) : "";
  if (token !== ADMIN_TOKEN) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  next();
}

async function getPublicContent() {
  const stored = await SiteContent.findOne({ key: "public" }).lean();
  return stored?.value || defaultPublicContent;
}

function asyncRoute(handler) {
  return (req, res, next) => Promise.resolve(handler(req, res, next)).catch(next);
}

function hmsConfigured() {
  return Boolean(HMS_API_BASE_URL && HMS_API_TOKEN);
}

function hmsUrl(pathname) {
  return new URL(pathname, HMS_API_BASE_URL).toString();
}

async function hmsRequest(pathname) {
  if (!hmsConfigured()) {
    const error = new Error("HMS integration is not configured yet.");
    error.status = 424;
    throw error;
  }

  const response = await fetch(hmsUrl(pathname), {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${HMS_API_TOKEN}`,
    },
  });

  const contentType = response.headers.get("content-type") || "";
  const data = contentType.includes("application/json") ? await response.json() : await response.text();

  if (!response.ok) {
    const error = new Error(typeof data === "string" ? data : data?.error || "HMS request failed");
    error.status = response.status;
    throw error;
  }

  return data;
}

const app = express();

app.use(
  helmet({
    contentSecurityPolicy: false,
  }),
);
app.use(compression());
app.use(express.json({ limit: "1mb" }));
app.use(morgan("combined"));

app.get("/api/health", asyncRoute(async (_req, res) => {
  const dbState = mongoose.connection.readyState === 1 ? "connected" : "disconnected";
  res.json({ ok: true, database: dbState, hms: hmsConfigured() ? "configured" : "not_configured" });
}));

app.get("/api/site-content/public", asyncRoute(async (_req, res) => {
  res.json(await getPublicContent());
}));

app.post("/api/contact-submissions", asyncRoute(async (req, res) => {
  const input = parse(contactSubmissionInput, req.body);
  const submission = await ContactSubmission.create(input);
  res.status(201).json({ id: submission._id, status: submission.status });
}));

app.post("/api/appointments", asyncRoute(async (req, res) => {
  const input = parse(appointmentInput, req.body);
  const appointment = await AppointmentRequest.create(input);
  res.status(201).json({ id: appointment._id, status: appointment.status });
}));

app.get("/api/admin/contact-submissions", requireAdmin, asyncRoute(async (_req, res) => {
  const submissions = await ContactSubmission.find().sort({ createdAt: -1 }).limit(100).lean();
  res.json(submissions);
}));

app.patch("/api/admin/contact-submissions/:id", requireAdmin, asyncRoute(async (req, res) => {
  const status = z.enum(["new", "reviewed", "closed"]).parse(req.body.status);
  const updated = await ContactSubmission.findByIdAndUpdate(req.params.id, { status }, { new: true }).lean();
  res.json(updated);
}));

app.get("/api/admin/appointments", requireAdmin, asyncRoute(async (_req, res) => {
  const appointments = await AppointmentRequest.find().sort({ createdAt: -1 }).limit(100).lean();
  res.json(appointments);
}));

app.patch("/api/admin/appointments/:id", requireAdmin, asyncRoute(async (req, res) => {
  const status = z.enum(["requested", "contacted", "scheduled", "cancelled"]).parse(req.body.status);
  const updated = await AppointmentRequest.findByIdAndUpdate(req.params.id, { status }, { new: true }).lean();
  res.json(updated);
}));

app.get("/api/admin/hms/status", requireAdmin, asyncRoute(async (_req, res) => {
  res.json({
    configured: hmsConfigured(),
    baseUrl: HMS_API_BASE_URL ? new URL(HMS_API_BASE_URL).origin : "",
  });
}));

app.get("/api/admin/hms/patients", requireAdmin, asyncRoute(async (req, res) => {
  const query = z.string().trim().min(2).max(120).parse(req.query.query || "");
  const data = await hmsRequest(`/patients?query=${encodeURIComponent(query)}`);
  res.json(data);
}));

app.get("/api/admin/site-content", requireAdmin, asyncRoute(async (_req, res) => {
  res.json(await getPublicContent());
}));

app.put("/api/admin/site-content", requireAdmin, asyncRoute(async (req, res) => {
  const value = parse(siteContentInput, req.body);
  await SiteContent.findOneAndUpdate(
    { key: "public" },
    { key: "public", value },
    { new: true, upsert: true, setDefaultsOnInsert: true },
  );
  res.json(value);
}));

app.use(express.static(distDir));

app.use((req, res, next) => {
  if (!["GET", "HEAD"].includes(req.method) || req.path.startsWith("/api/")) {
    return next();
  }
  res.sendFile(path.join(distDir, "index.html"));
});

app.use((err, _req, res, _next) => {
  const status = err.status || err.statusCode || 500;
  const message = status >= 500 ? "Server error" : err.message;
  if (status >= 500) {
    console.error(err);
  }
  res.status(status).json({ error: message });
});

await mongoose.connect(MONGO_URI);
await SiteContent.updateOne(
  { key: "public" },
  { $setOnInsert: { key: "public", value: defaultPublicContent } },
  { upsert: true },
);

app.listen(PORT, () => {
  console.log(`Norcross Hospital app listening on port ${PORT}`);
});
