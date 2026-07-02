# Norcross Hospital — Website & Operations App

A React + Vite + Tailwind CSS v4 public website with an Express + MongoDB
operations backend for Norcross Hospital.

This repo is decoupled from Emergent. It runs as one application container and
uses MongoDB for form submissions, appointment requests, editable site content,
and integration metadata. Patient records should remain in the hospital
management system, which this app can access through secure API integration.

## Run locally

```bash
npm install
npm run dev
```

The Vite dev server opens the public frontend. API calls are proxied to
`http://localhost:3000`, so run the API server in another terminal when testing
forms or admin features:

```bash
MONGO_URI="mongodb://localhost:27017/" \
DB_NAME="norcross_hospital" \
ADMIN_TOKEN="replace-with-a-long-random-token" \
npm start
```

## Run locally with Docker

```bash
docker network create norcross-local
docker run -d --name norcross-mongo --network norcross-local -p 27017:27017 mongo:7
COPYFILE_DISABLE=1 docker build -t norcross-hospital .
docker run --rm --name norcross-hospital \
  --network norcross-local \
  -p 8080:3000 \
  -e MONGO_URI="mongodb://norcross-mongo:27017/" \
  -e DB_NAME="norcross_hospital" \
  -e ADMIN_TOKEN="replace-with-a-long-random-token" \
  norcross-hospital
```

Open http://localhost:8080.

Admin console: http://localhost:8080/admin

## Build for production

```bash
npm run build
```

Output goes to `dist/`. The production Docker image builds the frontend, installs
production Node dependencies, and starts the Express server.

## Deploy on Coolify

Create a new Coolify application from this Git repository and choose
**Dockerfile** as the build pack.

- Dockerfile path: `Dockerfile`
- Exposed port: `3000`
- Health check path: `/api/health`
- Required environment variables:
  - `MONGO_URI` — MongoDB connection string
  - `DB_NAME` — MongoDB database name, unless the database is already included in `MONGO_URI`
  - `ADMIN_TOKEN` — long random admin token used to access `/admin`
- Optional HMS integration variables:
  - `HMS_API_BASE_URL` — base URL for the hospital management system API
  - `HMS_API_TOKEN` — server-side API token for HMS access

Provision MongoDB as a separate Coolify database/service, then set `MONGO_URI`
and `DB_NAME` on the app container. You can also include the database name in
the URI path instead, for example `mongodb://host:27017/norcross_hospital`.
The application container should not embed MongoDB; that would make backups,
scaling, upgrades, and recovery harder.

Do not store HMS credentials in frontend code. The Express server proxies HMS
requests server-to-server so tokens stay in Coolify environment variables.

## Backend Features

- Contact form submissions saved to MongoDB
- Appointment requests saved to MongoDB
- Admin review queues for messages and appointments
- Editable contact details and homepage announcement
- HMS patient lookup integration scaffold

Patient records are not stored in this app. The hospital management system should
remain the source of truth. Before showing real clinical data here, agree with
the HMS developer on endpoints, allowed fields, authentication, audit logs, rate
limits, consent/retention rules, and any required healthcare compliance controls
for the operating jurisdiction.

## Pages

- `/` — Home
- `/about` — Story, mission, vision, philosophy, core values, team placeholder
- `/services` — All 18 clinical service lines + facilities
- `/contact` — Contact details, embedded Google Map, contact form, appointment request form, FAQ
- `/admin` — Protected operations console

## Things left as placeholders (not in the original brief)

- **Email / hours** — phone and address are filled in; see `src/data/content.js` → `contact` object for the remaining placeholders.
- **Doctor/specialist profiles** — placeholder cards in `src/pages/About.jsx` (#doctors-team).
- **Admin authentication** — currently token-based. Replace with staff accounts,
  MFA, roles, and audit trails before real clinical use.

## Brand

Colors and the petal "Bloom" mark are derived directly from
`src/assets/norcross-logo.svg` (blue `#2953A9`, orange `#F6852E`).
Design tokens live in `src/index.css` under `@theme`.

## Virtual Reality Tour

The About page (`/about#virtual-tour`) includes a 360° VR tour built with
Three.js — no extra libraries or accounts needed.

**To add your photos:** drop equirectangular JPGs (2:1 aspect ratio, e.g.
4000x2000px — most 360 cameras like Insta360 or Ricoh Theta export this
automatically) into `public/vr-tour/`, named to match each scene:

```
public/vr-tour/reception.jpg
public/vr-tour/laboratory.jpg
public/vr-tour/operating-theatre.jpg
public/vr-tour/patient-ward.jpg
public/vr-tour/consulting-suite.jpg
public/vr-tour/physiotherapy.jpg
```

Each scene card automatically detects whether its image exists — cards
without a photo yet show a "coming soon" placeholder with the exact filename
needed, and switch to a live, drag-to-look-around viewer the moment the file
is added. No code changes required.

To rename, add, or remove scenes, edit `src/data/vrTour.js`.
