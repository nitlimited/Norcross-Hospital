// Bloom — the site's signature mark. Echoes the teardrop petal cluster
// in the Norcross logo. Used sparingly: hero backdrop, section dividers,
// and as a bullet mark for lists — never as generic decoration.

const petalPath =
  "M50 50 C 50 28, 62 8, 80 2 C 86 22, 78 44, 58 54 C 55 55.5, 52.5 55, 50 50 Z";

export default function Bloom({ size = 48, color = "var(--color-blue-700)", petals = 6, opacity = 1, className = "" }) {
  const rotation = 360 / petals;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      style={{ opacity }}
      aria-hidden="true"
    >
      <g fill={color}>
        {Array.from({ length: petals }).map((_, i) => (
          <path key={i} d={petalPath} transform={`rotate(${i * rotation} 50 50)`} />
        ))}
      </g>
      <circle cx="50" cy="50" r="6" fill="var(--color-orange-600)" />
    </svg>
  );
}
