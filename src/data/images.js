// TEMPORARY placeholder photography (Unsplash License — free to use).
// Swap each URL for your own photo when ready: drop the file in
// src/assets/images/ and change the value below to `import x from "../assets/images/x.jpg"`.
// Founders and doctors deliberately have NO stock photos here — only real
// photos of the actual people should ever go in those slots.

const u = (id, w = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const images = {
  heroExterior: u("photo-1479839672679-a46483c0e7c8"), // hospital building exterior
  reception: u("photo-1519494026892-80bbd2d6fd0d"), // hospital lobby / reception
  ward: u("photo-1538108149393-fbbd81895907"), // hospital bed / patient room
  laboratory: u("photo-1518152006812-edab29b069ac"), // laboratory / microscope
  corridor: u("photo-1485848395967-65dff62dc35b"), // hospital hallway / consulting
  glassBuilding: u("photo-1481026469463-66327c86e544"), // exterior alt angle
};
