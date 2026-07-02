// Virtual Reality Tour — scene registry.
//
// HOW TO ADD YOUR 360° PHOTOS:
// 1. Shoot or export each space as an equirectangular JPG (2:1 aspect ratio,
//    e.g. 4000x2000px) — most 360 cameras (Insta360, Ricoh Theta, etc.)
//    export this format automatically.
// 2. Name the file to match the `id` below (e.g. "laboratory.jpg").
// 3. Drop it into `public/vr-tour/`.
// That's it — the site detects the image automatically and switches the
// scene from "coming soon" to a live, drag-to-look-around 360° viewer.

export const vrScenes = [
  {
    id: "reception",
    title: "Reception & Lobby",
    blurb: "The welcoming entrance and patient reception area.",
  },
  {
    id: "laboratory",
    title: "Ultra-Modern Laboratory",
    blurb: "Our fully equipped diagnostic and testing laboratory.",
  },
  {
    id: "operating-theatre",
    title: "Operating Theatre",
    blurb: "A modern, sterile theatre built for surgical precision.",
  },
  {
    id: "patient-ward",
    title: "Inpatient Ward",
    blurb: "Comfortable private rooms and inpatient wards.",
  },
  {
    id: "consulting-suite",
    title: "Specialist Consulting Suite",
    blurb: "Private consulting rooms for specialist appointments.",
  },
  {
    id: "physiotherapy",
    title: "Physiotherapy & Rehabilitation",
    blurb: "Our rehabilitation center for mobility and recovery.",
  },
];

export const vrImagePath = (id) => `/vr-tour/${id}.jpg`;
