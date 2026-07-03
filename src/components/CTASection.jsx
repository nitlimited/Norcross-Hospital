import { Link } from "react-router-dom";
import LogoMark from "./LogoMark.jsx";
import { contact } from "../data/content.js";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-blue-800 rounded-[2rem] mx-6 lg:mx-10 my-24 px-8 lg:px-16 py-16 lg:py-20 text-center">
      <LogoMark
        opacity={0.45}
        className="absolute -left-20 top-10 w-[420px] pointer-events-none"
      />
      <LogoMark
        opacity={0.18}
        className="absolute -right-14 -bottom-20 w-64 pointer-events-none rotate-12"
      />
      <div className="relative max-w-2xl mx-auto">
        <h2 className="font-display text-[32px] sm:text-[40px] leading-[1.1] text-white mb-4">
          Visit Norcross Hospital
        </h2>
        <p className="text-blue-100/85 text-[16px] leading-relaxed mb-9">
          {contact.address}. Reach out to our team to learn more about our services or plan your visit.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-orange-600 text-white text-[15px] font-semibold px-7 py-3.5 hover:bg-orange-700 transition-colors"
          >
            Get in Touch
          </Link>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 rounded-full border border-white/30 text-white text-[15px] font-semibold px-7 py-3.5 hover:bg-white/10 transition-colors"
          >
            View Our Services
          </Link>
        </div>
      </div>
    </section>
  );
}
