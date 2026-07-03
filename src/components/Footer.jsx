import { Link } from "react-router-dom";
import { navLinks, contact, services } from "../data/content.js";
import LogoMark from "./LogoMark.jsx";
import logo from "../assets/norcross-logo.svg";

const socialLinks = [
  { label: "Facebook", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "LinkedIn", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-blue-950 text-blue-100 relative overflow-hidden">
      <LogoMark
        opacity={0.35}
        className="absolute -right-24 -bottom-24 w-[420px] pointer-events-none"
      />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-[1.3fr_1fr_1fr_1.2fr] gap-12">
          <div>
            <img src={logo} alt="Norcross Hospital" className="h-16 w-auto mb-5 brightness-0 invert" />
            <p className="text-[15px] leading-relaxed text-blue-100/80 max-w-xs">
              Compassionate hospital care in Accra, supported by modern diagnostics, specialist services, and a team focused on patient comfort and safety.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="inline-flex h-10 items-center rounded-full border border-white/15 px-4 text-[13px] font-semibold text-blue-100/85 hover:border-white/35 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-mono text-xs tracking-[0.14em] uppercase text-orange-500 mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {navLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-[15px] text-blue-100/85 hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-xs tracking-[0.14em] uppercase text-orange-500 mb-4">Featured Care</h4>
            <ul className="space-y-3">
              {services.slice(0, 5).map((s) => (
                <li key={s.name} className="text-[15px] text-blue-100/85">
                  {s.name}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-xs tracking-[0.14em] uppercase text-orange-500 mb-4">Contact</h4>
            <ul className="space-y-3 text-[15px] text-blue-100/85">
              <li>{contact.address}</li>
              <li>{contact.phone}</li>
              <li>{contact.email}</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 rounded-2xl border border-white/10 bg-white/5 p-5 lg:p-6 grid gap-5 lg:grid-cols-[1fr_1.2fr] items-center">
          <div>
            <h4 className="font-display text-[22px] text-white mb-2">Stay connected with Norcross</h4>
            <p className="text-[14px] leading-relaxed text-blue-100/70">
              Get hospital updates, wellness notes, and service announcements in your inbox.
            </p>
          </div>
          <form className="flex flex-col sm:flex-row gap-3" onSubmit={(event) => event.preventDefault()}>
            <label className="sr-only" htmlFor="footer-email">Email address</label>
            <input
              id="footer-email"
              type="email"
              placeholder="Email address"
              className="min-h-12 flex-1 rounded-full border border-white/15 bg-white px-5 text-[15px] text-blue-950 outline-none placeholder:text-slate-light focus:border-orange-500"
            />
            <button
              type="submit"
              className="min-h-12 rounded-full bg-orange-600 px-6 text-[15px] font-semibold text-white transition-colors hover:bg-orange-700"
            >
              Subscribe
            </button>
          </form>
        </div>

        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col gap-4">
          <p className="text-[12.5px] leading-relaxed text-blue-100/55 max-w-4xl">
            Information on this website is provided for general hospital service awareness and should not replace consultation with a qualified clinician. In an emergency, visit the hospital immediately or contact the appropriate emergency service. Use of this site is subject to appointment availability, privacy requirements, and responsible use of patient information.
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-[13px] text-blue-100/60">© {new Date().getFullYear()} Norcross Hospital. All rights reserved.</p>
            <p className="text-[13px] text-blue-100/60 italic font-display">The Patient Is Everything.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
