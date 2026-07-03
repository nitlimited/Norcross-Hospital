import { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { navLinks } from "../data/content.js";
import logo from "../assets/norcross-logo.svg";

const DARK_HERO_PATHS = ["/", "/services"];

export default function Navbar() {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const canBeTransparent = DARK_HERO_PATHS.includes(pathname);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  const solid = !canBeTransparent || scrolled || open;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        solid ? "bg-paper/95 backdrop-blur-md border-b border-line" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-5 lg:px-8 flex items-center justify-between h-24">
        <Link to="/" className="flex items-center gap-3 shrink-0" onClick={() => setOpen(false)}>
          <img
            src={logo}
            alt="Norcross Hospital"
            className={`h-14 sm:h-16 w-auto transition-all duration-300 ${solid ? "" : "brightness-0 invert"}`}
          />
        </Link>

        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `text-[15px] font-medium tracking-tight transition-colors ${
                  solid
                    ? isActive ? "text-blue-700" : "text-ink hover:text-blue-700"
                    : isActive ? "text-white" : "text-white/80 hover:text-white"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <Link
          to="/contact"
          className={`hidden lg:inline-flex items-center gap-2 rounded-full text-[14px] font-semibold px-5 py-2.5 transition-colors ${
            solid ? "bg-blue-800 text-white hover:bg-blue-700" : "bg-white text-blue-900 hover:bg-blue-50"
          }`}
        >
          Book Appointment
        </Link>

        <button
          className="lg:hidden inline-flex flex-col justify-center gap-1.5 w-10 h-10 items-center"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className={`block h-0.5 w-6 transition-transform ${solid ? "bg-ink" : "bg-white"} ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block h-0.5 w-6 transition-opacity ${solid ? "bg-ink" : "bg-white"} ${open ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 transition-transform ${solid ? "bg-ink" : "bg-white"} ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </nav>

      {open && (
        <div className="lg:hidden border-t border-line bg-paper px-6 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `text-[17px] font-medium ${isActive ? "text-blue-700" : "text-ink"}`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="inline-flex items-center justify-center rounded-full bg-blue-800 text-white text-[15px] font-semibold px-5 py-3"
          >
            Book Appointment
          </Link>
        </div>
      )}
    </header>
  );
}
