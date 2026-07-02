import { Link } from "react-router-dom";
import { navLinks, contact, services } from "../data/content.js";
import Bloom from "./Bloom.jsx";
import logo from "../assets/norcross-logo.svg";

export default function Footer() {
  return (
    <footer className="bg-blue-950 text-blue-100 relative overflow-hidden">
      <Bloom
        size={420}
        color="var(--color-blue-800)"
        opacity={0.35}
        className="absolute -right-24 -bottom-24 pointer-events-none"
      />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-[1.3fr_1fr_1fr_1.2fr] gap-12">
          <div>
            <img src={logo} alt="Norcross Hospital" className="h-10 w-auto mb-5 brightness-0 invert" />
            <p className="text-[15px] leading-relaxed text-blue-100/80 max-w-xs">
              A Ghanaian-owned, multi-specialty healthcare institution in Accra. The Patient Is Everything.
            </p>
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

        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-[13px] text-blue-100/60">© {new Date().getFullYear()} Norcross Hospital. All rights reserved.</p>
          <p className="text-[13px] text-blue-100/60 italic font-display">The Patient Is Everything.</p>
        </div>
      </div>
    </footer>
  );
}
