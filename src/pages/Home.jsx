import { Link } from "react-router-dom";
import Bloom from "../components/Bloom.jsx";
import Eyebrow from "../components/Eyebrow.jsx";
import ServiceCard from "../components/ServiceCard.jsx";
import ValueCard from "../components/ValueCard.jsx";
import CTASection from "../components/CTASection.jsx";
import PhotoGallery from "../components/PhotoGallery.jsx";
import { services, facilities, coreValues, founders } from "../data/content.js";
import { images } from "../data/images.js";

const stats = [
  { value: "18", label: "Clinical Service Lines" },
  { value: "2", label: "Founding Clinicians" },
  { value: "20+", label: "Years of U.S. Healthcare Experience" },
  { value: "1", label: "Guiding Principle — The Patient Is Everything" },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden pt-16 pb-20 lg:pt-24 lg:pb-28">
        <Bloom
          size={640}
          color="var(--color-blue-100)"
          opacity={0.9}
          className="absolute -right-40 -top-24 pointer-events-none hidden lg:block"
        />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
          <div>
            <Eyebrow>Ghanaian-Owned · Multi-Specialty Care · Accra</Eyebrow>
            <h1 className="font-display text-[42px] sm:text-[56px] lg:text-[64px] leading-[1.04] text-blue-900 mt-5 mb-6">
              Clinical Excellence,
              <br />
              <span className="italic text-blue-700">Every Day.</span>
            </h1>
            <p className="text-[17px] leading-relaxed text-slate max-w-lg mb-9">
              Norcross Hospital brings world-class healthcare closer to home — combining
              international standards of care with affordability, accessibility, and
              compassion for the communities of Ghana.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-full bg-orange-600 text-white text-[15px] font-semibold px-7 py-3.5 hover:bg-orange-700 transition-colors"
              >
                Explore Our Services
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-full border border-blue-800/20 text-blue-900 text-[15px] font-semibold px-7 py-3.5 hover:bg-blue-50 transition-colors"
              >
                About Norcross
              </Link>
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="relative w-full max-w-sm aspect-square rounded-[2.5rem] overflow-hidden">
              <img
                src={images.heroExterior}
                alt="Norcross Hospital building"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/70 via-blue-950/10 to-transparent" />
              <Bloom size={90} color="var(--color-orange-600)" className="absolute bottom-6 right-6" />
            </div>
            <div className="absolute -bottom-6 -left-4 sm:-left-8 bg-white rounded-2xl border border-line shadow-[0_20px_50px_-25px_rgba(18,33,61,0.4)] px-6 py-5 max-w-[220px]">
              <p className="font-display italic text-[15px] text-blue-900 leading-snug">
                "The Patient Is Everything."
              </p>
              <p className="font-mono text-[11px] text-slate-light uppercase tracking-wide mt-2">
                Our Guiding Philosophy
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Specialty marquee — real service lines, not decoration */}
      <div className="border-y border-line bg-white py-5 overflow-hidden">
        <div className="flex gap-10 animate-[scroll_38s_linear_infinite] whitespace-nowrap w-max">
          {[...services, ...services].map((s, i) => (
            <span key={i} className="font-mono text-[13px] tracking-wide text-slate-light uppercase flex items-center gap-10">
              {s.name}
              <span className="text-orange-600">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* Stats */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-20 grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((s) => (
          <div key={s.label}>
            <p className="font-display text-[40px] text-blue-700 leading-none mb-2">{s.value}</p>
            <p className="text-[14px] text-slate leading-snug">{s.label}</p>
          </div>
        ))}
      </section>

      {/* Founders / Philosophy */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-16 grid lg:grid-cols-[1fr_1fr] gap-14 items-center">
        <div>
          <Eyebrow>Our Story</Eyebrow>
          <h2 className="font-display text-[32px] sm:text-[38px] leading-[1.15] text-blue-900 mt-4 mb-6">
            Built by clinicians who came home to serve.
          </h2>
          <p className="text-[16px] leading-relaxed text-slate mb-4">
            Norcross Hospital was founded by Dr. Samuel Kwame Ewiah and Mrs. Josiane Ewiah,
            who brought more than two decades of U.S. healthcare experience back to Ghana —
            with a shared vision of clinical excellence, dignity, and compassion for every patient.
          </p>
          <Link to="/about" className="inline-flex items-center gap-2 text-blue-700 font-semibold text-[15px] hover:text-orange-600 transition-colors">
            Read our full story →
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 gap-5">
          {founders.map((f) => (
            <div key={f.name} className="rounded-2xl bg-blue-50 p-7">
              <div className="w-12 h-12 rounded-full bg-blue-800 flex items-center justify-center mb-5">
                <Bloom size={26} color="var(--color-orange-500)" />
              </div>
              <h3 className="font-display text-[18px] text-blue-900 leading-snug">{f.name}</h3>
              <p className="text-[13px] text-orange-600 font-semibold mt-0.5 mb-3">{f.credentials}</p>
              <p className="text-[14px] text-slate leading-relaxed">{f.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services preview */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-16">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <Eyebrow>Our Clinical Services</Eyebrow>
            <h2 className="font-display text-[32px] sm:text-[38px] leading-[1.15] text-blue-900 mt-4">
              Comprehensive care, at every stage of life.
            </h2>
          </div>
          <Link to="/services" className="inline-flex items-center gap-2 text-blue-700 font-semibold text-[15px] hover:text-orange-600 transition-colors shrink-0">
            View all 18 services →
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.slice(0, 6).map((s, i) => (
            <ServiceCard key={s.name} {...s} index={i + 1} />
          ))}
        </div>
      </section>

      {/* Inside the hospital — photo gallery */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-16 grid lg:grid-cols-[0.9fr_1.1fr] gap-14 items-center">
        <div>
          <Eyebrow tone="orange">Inside Norcross Hospital</Eyebrow>
          <h2 className="font-display text-[32px] sm:text-[38px] leading-[1.15] text-blue-900 mt-4 mb-5">
            A modern, comfortable environment for care.
          </h2>
          <p className="text-[16px] leading-relaxed text-slate mb-6">
            From our reception to our ultra-modern laboratory, every space at Norcross Hospital
            is designed for comfort, cleanliness, and clinical precision.
          </p>
          <Link to="/about#virtual-tour" className="inline-flex items-center gap-2 text-blue-700 font-semibold text-[15px] hover:text-orange-600 transition-colors">
            Take the virtual tour →
          </Link>
        </div>
        <PhotoGallery />
      </section>

      {/* Facilities */}
      <section className="bg-blue-900 py-20 mt-8 relative overflow-hidden">
        <Bloom size={480} color="var(--color-blue-800)" opacity={0.5} className="absolute -left-32 top-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <Eyebrow tone="orange">Our Facilities</Eyebrow>
          <h2 className="font-display text-[32px] sm:text-[38px] leading-[1.15] text-white mt-4 mb-12 max-w-xl">
            A modern, healing environment for patients and families.
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-5">
            {facilities.map((f) => (
              <div key={f} className="flex items-start gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-orange-600 shrink-0" />
                <p className="text-[15px] text-blue-100/90 leading-relaxed">{f}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core values preview */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-20">
        <Eyebrow>Our Core Values</Eyebrow>
        <h2 className="font-display text-[32px] sm:text-[38px] leading-[1.15] text-blue-900 mt-4 mb-12 max-w-xl">
          The principles behind every decision we make.
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10">
          {coreValues.slice(0, 6).map((v) => (
            <ValueCard key={v.name} {...v} />
          ))}
        </div>
      </section>

      <CTASection />
    </div>
  );
}
