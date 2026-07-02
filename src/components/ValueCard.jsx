export default function ValueCard({ name, blurb }) {
  return (
    <div className="border-l-2 border-orange-600 pl-6 py-1">
      <h3 className="font-display text-[19px] text-blue-900 mb-1.5">{name}</h3>
      <p className="text-[15px] leading-relaxed text-slate">{blurb}</p>
    </div>
  );
}
