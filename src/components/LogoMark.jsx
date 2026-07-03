import mark from "../assets/norcross-logo-mark.svg";

export default function LogoMark({ className = "", opacity = 1, alt = "" }) {
  return (
    <img
      src={mark}
      alt={alt}
      aria-hidden={alt ? undefined : true}
      className={className}
      style={{ opacity }}
    />
  );
}
