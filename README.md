# Norcross Hospital — Website

A React + Vite + Tailwind CSS v4 website for Norcross Hospital, structured after the
Healcure Framer template and built entirely from the Norcross Hospital brief and logo.

This repo is self-contained: it does not depend on Emergent services, generated
platform config, or a separate backend to render the public website.

## Run locally

Requires Node.js 20.19+ or 22.12+.

```bash
npm install
npm run dev
```

Then open the printed local URL (usually http://localhost:5173).

## Run locally with Docker

```bash
COPYFILE_DISABLE=1 docker build -t norcross-hospital .
docker run --rm -p 8080:80 norcross-hospital
```

Open http://localhost:8080.

## Build for production

```bash
npm run build
```

Output goes to `dist/`. The production Docker image builds this folder and
serves it with nginx.

## Deploy on Coolify

Create a new Coolify application from this Git repository and choose
**Dockerfile** as the build pack.

- Dockerfile path: `Dockerfile`
- Exposed port: `80`
- Environment variables: none required for the static website
- Health check path: `/`

Coolify should build the Vite app, copy `dist/` into nginx, and serve the site
from the container on port 80. The nginx config in the Dockerfile includes an
SPA fallback so direct visits to `/about`, `/services`, and `/contact` work.

## Pages

- `/` — Home
- `/about` — Story, mission, vision, philosophy, core values, team placeholder
- `/services` — All 18 clinical service lines + facilities
- `/contact` — Contact details, embedded Google Map, contact form, FAQ

## Things left as placeholders (not in the original brief)

- **Email / hours** — phone and address are filled in; see `src/data/content.js` → `contact` object for the remaining placeholders.
- **Doctor/specialist profiles** — placeholder cards in `src/pages/About.jsx` (#doctors-team).
- **Contact form submission** — the form UI works, but isn't wired to an email
  service yet. Easiest options: Formspree, EmailJS, or a small backend endpoint.

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
