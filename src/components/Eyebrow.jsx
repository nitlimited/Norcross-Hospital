export default function Eyebrow({ children, tone = "blue" }) {
  const color = tone === "orange" ? "text-orange-600" : "text-blue-700";
  return (
    <span className={`font-mono text-xs tracking-[0.16em] uppercase ${color} font-semibold`}>
      {children}
    </span>
  );
}
