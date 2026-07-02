import { useEffect, useMemo, useState } from "react";
import Eyebrow from "../components/Eyebrow.jsx";
import { apiRequest } from "../lib/api.js";

const emptyContent = {
  contact: {
    phone: "",
    email: "",
    address: "",
    mapQuery: "",
    hours: "",
  },
  announcement: {
    enabled: false,
    title: "",
    body: "",
  },
};

function formatDate(value) {
  if (!value) return "";
  return new Intl.DateTimeFormat("en", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(value));
}

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="block text-[12px] font-semibold uppercase tracking-[0.08em] text-slate-light mb-1.5">{label}</span>
      {children}
    </label>
  );
}

function inputClass() {
  return "w-full rounded-lg border border-line px-3 py-2 text-[14px] focus:border-blue-700 outline-none bg-white";
}

export default function Admin() {
  const [token, setToken] = useState(() => localStorage.getItem("norcrossAdminToken") || "");
  const [activeToken, setActiveToken] = useState(() => localStorage.getItem("norcrossAdminToken") || "");
  const [submissions, setSubmissions] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [hmsStatus, setHmsStatus] = useState({ configured: false, baseUrl: "" });
  const [patientResults, setPatientResults] = useState([]);
  const [patientQuery, setPatientQuery] = useState("");
  const [content, setContent] = useState(emptyContent);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const auth = useMemo(() => ({ token: activeToken }), [activeToken]);

  async function refresh() {
    if (!activeToken) return;
    setError("");
    try {
      const [contactRows, appointmentRows, siteContent, hms] = await Promise.all([
        apiRequest("/api/admin/contact-submissions", auth),
        apiRequest("/api/admin/appointments", auth),
        apiRequest("/api/admin/site-content", auth),
        apiRequest("/api/admin/hms/status", auth),
      ]);
      setSubmissions(contactRows);
      setAppointments(appointmentRows);
      setContent({ ...emptyContent, ...siteContent });
      setHmsStatus(hms);
    } catch (err) {
      setError(err.message);
    }
  }

  useEffect(() => {
    refresh();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeToken]);

  function saveToken(e) {
    e.preventDefault();
    localStorage.setItem("norcrossAdminToken", token);
    setActiveToken(token);
  }

  async function updateStatus(kind, id, status) {
    const path =
      kind === "submission"
        ? `/api/admin/contact-submissions/${id}`
        : `/api/admin/appointments/${id}`;
    await apiRequest(path, { ...auth, method: "PATCH", body: { status } });
    await refresh();
  }

  async function searchPatients(e) {
    e.preventDefault();
    setMessage("");
    setError("");
    setPatientResults([]);
    try {
      const results = await apiRequest(`/api/admin/hms/patients?query=${encodeURIComponent(patientQuery)}`, auth);
      setPatientResults(Array.isArray(results) ? results : results.items || results.patients || []);
    } catch (err) {
      setError(err.message);
    }
  }

  async function saveContent(e) {
    e.preventDefault();
    setMessage("");
    setError("");
    try {
      await apiRequest("/api/admin/site-content", { ...auth, method: "PUT", body: content });
      setMessage("Site content saved.");
      await refresh();
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-10 py-14">
      <div className="flex flex-wrap items-end justify-between gap-5 mb-8">
        <div>
          <Eyebrow>Admin</Eyebrow>
          <h1 className="font-display text-[34px] sm:text-[44px] leading-[1.1] text-blue-900 mt-4">
            Operations console
          </h1>
        </div>
        <form onSubmit={saveToken} className="flex gap-2 w-full sm:w-auto">
          <input
            value={token}
            onChange={(e) => setToken(e.target.value)}
            type="password"
            className={`${inputClass()} sm:w-80`}
            placeholder="Admin token"
          />
          <button className="rounded-lg bg-blue-800 text-white px-4 py-2 text-[14px] font-semibold" type="submit">
            Unlock
          </button>
        </form>
      </div>

      <div className="rounded-lg border border-orange-100 bg-orange-50 px-4 py-3 text-[14px] text-blue-900 mb-8">
        Patient records stay in the hospital management system. This app should integrate with that system through
        approved API endpoints instead of becoming a second clinical source of truth.
      </div>

      {error && <p className="rounded-lg bg-red-50 text-red-700 px-4 py-3 text-[14px] mb-5">{error}</p>}
      {message && <p className="rounded-lg bg-blue-50 text-blue-800 px-4 py-3 text-[14px] mb-5">{message}</p>}

      <section className="grid lg:grid-cols-2 gap-6 mb-10">
        <div className="rounded-lg border border-line bg-white p-5">
          <h2 className="font-display text-[22px] text-blue-900 mb-4">Contact submissions</h2>
          <div className="space-y-4">
            {submissions.map((item) => (
              <article key={item._id} className="border border-line rounded-lg p-4">
                <div className="flex justify-between gap-4">
                  <div>
                    <h3 className="font-semibold text-blue-900">{item.name}</h3>
                    <p className="text-[13px] text-slate">{item.email} {item.phone && `· ${item.phone}`}</p>
                  </div>
                  <select
                    value={item.status}
                    onChange={(e) => updateStatus("submission", item._id, e.target.value)}
                    className="rounded-md border border-line px-2 py-1 text-[13px]"
                  >
                    <option value="new">New</option>
                    <option value="reviewed">Reviewed</option>
                    <option value="closed">Closed</option>
                  </select>
                </div>
                <p className="text-[14px] text-slate mt-3 whitespace-pre-wrap">{item.message}</p>
                <p className="text-[12px] text-slate-light mt-3">{formatDate(item.createdAt)}</p>
              </article>
            ))}
            {submissions.length === 0 && <p className="text-[14px] text-slate">No submissions yet.</p>}
          </div>
        </div>

        <div className="rounded-lg border border-line bg-white p-5">
          <h2 className="font-display text-[22px] text-blue-900 mb-4">Appointment requests</h2>
          <div className="space-y-4">
            {appointments.map((item) => (
              <article key={item._id} className="border border-line rounded-lg p-4">
                <div className="flex justify-between gap-4">
                  <div>
                    <h3 className="font-semibold text-blue-900">{item.name}</h3>
                    <p className="text-[13px] text-slate">{item.service}</p>
                  </div>
                  <select
                    value={item.status}
                    onChange={(e) => updateStatus("appointment", item._id, e.target.value)}
                    className="rounded-md border border-line px-2 py-1 text-[13px]"
                  >
                    <option value="requested">Requested</option>
                    <option value="contacted">Contacted</option>
                    <option value="scheduled">Scheduled</option>
                    <option value="cancelled">Cancelled</option>
                  </select>
                </div>
                <p className="text-[14px] text-slate mt-2">{item.phone} {item.email && `· ${item.email}`}</p>
                <p className="text-[14px] text-slate">Preferred: {item.preferredDate || "Not specified"}</p>
                {item.notes && <p className="text-[14px] text-slate mt-2 whitespace-pre-wrap">{item.notes}</p>}
                <p className="text-[12px] text-slate-light mt-3">{formatDate(item.createdAt)}</p>
              </article>
            ))}
            {appointments.length === 0 && <p className="text-[14px] text-slate">No appointment requests yet.</p>}
          </div>
        </div>
      </section>

      <section className="grid lg:grid-cols-[0.9fr_1.1fr] gap-6">
        <div className="rounded-lg border border-line bg-white p-5 space-y-4">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <h2 className="font-display text-[22px] text-blue-900">HMS patient lookup</h2>
              <p className="text-[14px] text-slate mt-1">
                Patient records are read from the hospital management system API when configured.
              </p>
            </div>
            <span className={`rounded-full px-3 py-1 text-[12px] font-semibold ${
              hmsStatus.configured ? "bg-blue-50 text-blue-800" : "bg-orange-50 text-orange-700"
            }`}>
              {hmsStatus.configured ? "Configured" : "Awaiting API"}
            </span>
          </div>

          {hmsStatus.baseUrl && (
            <p className="text-[13px] text-slate">Connected to {hmsStatus.baseUrl}</p>
          )}

          <form onSubmit={searchPatients} className="flex gap-2">
            <input
              className={inputClass()}
              value={patientQuery}
              onChange={(e) => setPatientQuery(e.target.value)}
              placeholder="Search by patient ID, phone, or name"
              minLength={2}
              required
            />
            <button className="rounded-lg bg-blue-800 text-white px-4 py-2 text-[14px] font-semibold" type="submit">
              Search
            </button>
          </form>

          <div className="space-y-3">
            {patientResults.map((record, index) => (
              <article key={record.id || record.patientCode || index} className="border border-line rounded-lg p-4">
                <h3 className="font-semibold text-blue-900">
                  {record.fullName || record.name || "Patient"}
                </h3>
                <p className="text-[13px] text-slate">
                  {record.patientCode || record.id || "No ID returned"}
                  {record.phone ? ` · ${record.phone}` : ""}
                </p>
                {(record.status || record.lastVisit) && (
                  <p className="text-[13px] text-slate mt-1">
                    {record.status || "Status unavailable"}
                    {record.lastVisit ? ` · Last visit: ${record.lastVisit}` : ""}
                  </p>
                )}
              </article>
            ))}
            {patientResults.length === 0 && (
              <p className="text-[14px] text-slate">
                No patient results loaded. Once the HMS developer provides endpoints, searches will come from that system.
              </p>
            )}
          </div>
        </div>

        <div className="space-y-6">
          <form onSubmit={saveContent} className="rounded-lg border border-line bg-white p-5 space-y-4">
            <h2 className="font-display text-[22px] text-blue-900">Editable site content</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {["phone", "email", "address", "mapQuery", "hours"].map((field) => (
                <Field key={field} label={field}>
                  <input
                    className={inputClass()}
                    value={content.contact[field] || ""}
                    onChange={(e) => setContent({
                      ...content,
                      contact: { ...content.contact, [field]: e.target.value },
                    })}
                  />
                </Field>
              ))}
            </div>
            <label className="flex items-center gap-2 text-[14px] text-blue-900">
              <input
                type="checkbox"
                checked={content.announcement.enabled}
                onChange={(e) => setContent({
                  ...content,
                  announcement: { ...content.announcement, enabled: e.target.checked },
                })}
              />
              Show homepage announcement
            </label>
            <Field label="Announcement title">
              <input
                className={inputClass()}
                value={content.announcement.title}
                onChange={(e) => setContent({
                  ...content,
                  announcement: { ...content.announcement, title: e.target.value },
                })}
              />
            </Field>
            <Field label="Announcement body">
              <textarea
                className={inputClass()}
                rows={3}
                value={content.announcement.body}
                onChange={(e) => setContent({
                  ...content,
                  announcement: { ...content.announcement, body: e.target.value },
                })}
              />
            </Field>
            <button className="rounded-lg bg-blue-800 text-white px-5 py-2.5 text-[14px] font-semibold" type="submit">
              Save Content
            </button>
          </form>

          <div className="rounded-lg border border-line bg-white p-5">
            <h2 className="font-display text-[22px] text-blue-900 mb-3">Integration requirements</h2>
            <ul className="space-y-2 text-[14px] text-slate">
              <li>Server-to-server API access only; do not expose HMS credentials to the browser.</li>
              <li>Confirm patient lookup, appointment sync, and authorization endpoints with the HMS developer.</li>
              <li>Agree on audit logs, rate limits, data retention, and allowed fields before showing clinical data here.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
