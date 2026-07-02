import Bloom from "./Bloom.jsx";

export default function ServiceCard({ name, blurb, index }) {
  return (
    <div className="group relative rounded-2xl border border-line bg-white p-7 hover:border-blue-700/40 hover:shadow-[0_20px_50px_-25px_rgba(41,83,169,0.35)] transition-all duration-300">
      <div className="flex items-start justify-between mb-6">
        <span className="font-mono text-[13px] text-slate-light">{String(index).padStart(2, "0")}</span>
        <Bloom size={26} color="var(--color-blue-100)" className="group-hover:opacity-0 transition-opacity" />
        <Bloom
          size={26}
          color="var(--color-orange-600)"
          className="absolute right-7 top-7 opacity-0 group-hover:opacity-100 transition-opacity"
        />
      </div>
      <h3 className="font-display text-[20px] leading-snug text-blue-900 mb-2.5">{name}</h3>
      <p className="text-[15px] leading-relaxed text-slate">{blurb}</p>
    </div>
  );
}
