import LogoMark from "./LogoMark.jsx";
import { images } from "../data/images.js";

const serviceImages = [
  images.reception,
  images.laboratory,
  images.ward,
  images.corridor,
  images.glassBuilding,
  images.heroExterior,
];

export default function ServiceCard({ name, blurb, index }) {
  const image = serviceImages[(index - 1) % serviceImages.length];

  return (
    <article className="reveal-card group relative overflow-hidden rounded-[1.35rem] border border-line bg-white shadow-[0_18px_45px_-35px_rgba(18,33,61,0.5)] transition-all duration-500 hover:-translate-y-1 hover:border-blue-700/30 hover:shadow-[0_28px_70px_-35px_rgba(41,83,169,0.45)]">
      <div className="relative h-44 overflow-hidden">
        <img
          src={image}
          alt=""
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-950/70 via-blue-950/10 to-transparent" />
        <span className="absolute left-5 bottom-4 font-mono text-[12px] tracking-wide text-white/80">
          {String(index).padStart(2, "0")}
        </span>
        <LogoMark
          opacity={0.9}
          className="absolute right-5 bottom-3 w-8 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="font-display text-[20px] leading-snug text-blue-900 mb-2.5">{name}</h3>
        <p className="text-[14.5px] leading-relaxed text-slate">{blurb}</p>
      </div>
    </article>
  );
}
