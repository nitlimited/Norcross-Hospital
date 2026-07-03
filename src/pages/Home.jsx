import { Link } from "react-router-dom";
import Eyebrow from "../components/Eyebrow.jsx";
import LogoMark from "../components/LogoMark.jsx";
import CTASection from "../components/CTASection.jsx";
import PhotoGallery from "../components/PhotoGallery.jsx";
import { services, facilities, coreValues } from "../data/content.js";
import { images } from "../data/images.js";
import { usePublicContent } from "../hooks/usePublicContent.js";

const storyHighlights = [
  {
    icon: "01",
    title: "Patient-Focused Care",
    text: "Every interaction is shaped around comfort, clear communication, and practical next steps for patients and families.",
  },
  {
    icon: "02",
    title: "Expert Medical Team",
    text: "Specialist-led care across everyday health needs, diagnostics, treatment, and recovery support.",
  },
  {
    icon: "03",
    title: "Advanced Technology",
    text: "Modern diagnostic and clinical systems help teams make timely, informed decisions.",
  },
  {
    icon: "04",
    title: "Calm Healing Spaces",
    text: "Thoughtful hospital environments designed for cleanliness, privacy, and confidence during care.",
  },
];

const serviceImages = [
  images.reception,
  images.laboratory,
  images.ward,
  images.corridor,
  images.glassBuilding,
  images.heroExterior,
];

const partners = [
  "GHS",
  "NHIA",
  "MedLab",
  "CarePlus",
  "PharmaLink",
  "HealthNet",
  "Wellcare",
  "DiagnoHub",
];

const facilityIcons = [
  {
    match: "Inpatient",
    icon: "M4 17h16M6 17V9a2 2 0 0 1 2-2h3v10M13 17v-6h3a4 4 0 0 1 4 4v2M8 11h3",
  },
  {
    match: "Emergency",
    icon: "M12 3v18M3 12h18M6.5 6.5l11 11M17.5 6.5l-11 11",
  },
  {
    match: "operating",
    icon: "M5 19l6-6M8 16l-3 3M13 11l5-5a2.1 2.1 0 0 1 3 3l-5 5M10 8l6 6M4 4l16 16",
  },
  {
    match: "laboratory",
    icon: "M9 3h6M10 3v6l-5 8a3 3 0 0 0 2.6 4.5h8.8A3 3 0 0 0 19 17l-5-8V3M8 15h8",
  },
  {
    match: "imaging",
    icon: "M4 7h16v10H4zM8 11h8M12 7v10M7 20h10",
  },
  {
    match: "consulting",
    icon: "M8 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM2 21a6 6 0 0 1 12 0M17 8h5M17 12h5M17 16h4",
  },
  {
    match: "Physiotherapy",
    icon: "M8 5a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM7 11l4 2 3 5M10 13l-3 6M14 8h5l-2 5",
  },
  {
    match: "Dental",
    icon: "M8 4c2 0 2.5 1 4 1s2-1 4-1c3 0 4 2.5 4 5.5 0 5-3 11.5-5 11.5-1.2 0-1-4-3-4s-1.8 4-3 4c-2 0-5-6.5-5-11.5C4 6.5 5 4 8 4Z",
  },
  {
    match: "Pharmacy",
    icon: "M10 4h4v16h-4zM4 10h16v4H4zM7 7l10 10M17 7 7 17",
  },
  {
    match: "waiting",
    icon: "M5 20v-7a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v7M8 20v-4h8v4M9 5h6",
  },
  {
    match: "Conference",
    icon: "M4 5h16v10H4zM8 19h8M12 15v4M7 9h10M7 12h6",
  },
  {
    match: "parking",
    icon: "M8 20V4h7a4 4 0 0 1 0 8H8M8 12h7",
  },
];

function FacilityIcon({ facility }) {
  const icon = facilityIcons.find((item) => facility.toLowerCase().includes(item.match.toLowerCase())) ?? facilityIcons[0];

  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
      <path
        d={icon.icon}
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Home() {
  const { announcement } = usePublicContent();

  return (
    <div>
      {announcement.enabled && (
        <section className="border-b border-orange-100 bg-orange-50">
          <div className="mx-auto max-w-7xl px-6 lg:px-10 py-4 flex flex-wrap items-center gap-x-4 gap-y-1">
            <p className="font-semibold text-blue-900 text-[14px]">{announcement.title}</p>
            <p className="text-slate text-[14px]">{announcement.body}</p>
          </div>
        </section>
      )}

      {/* Hero — full-bleed dark, matching reference layout */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-blue-950">
        <img
          src={images.heroExterior}
          alt="Norcross Hospital building"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-950/85 to-blue-950/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-transparent to-blue-950/40" />

        <div className="relative w-full mx-auto max-w-7xl px-6 lg:px-10 pt-40 pb-40">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2.5 bg-white/10 border border-white/20 rounded-full pl-1.5 pr-4 py-1.5 mb-7">
              <span className="bg-white text-blue-900 text-[12px] font-semibold rounded-full px-3 py-1">Trusted</span>
              <span className="text-white/90 text-[14px]">Accra Hospital · Multi-Specialty Care</span>
            </span>

            <h1 className="font-display text-[42px] sm:text-[58px] lg:text-[68px] leading-[1.04] text-white mb-6">
              Clinical Excellence,
              <br />
              <span className="text-orange-500">Every Day.</span>
            </h1>

            <p className="text-[17px] leading-relaxed text-white/80 max-w-lg mb-9">
              Take charge of your well-being and explore the many advantages of modern,
              compassionate healthcare through Norcross Hospital in Accra.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-12">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-white text-blue-900 text-[15px] font-semibold px-7 py-3.5 hover:bg-blue-50 transition-colors"
              >
                Book Appointment
                <span aria-hidden="true">→</span>
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-full border border-white/35 text-white text-[15px] font-semibold px-7 py-3.5 hover:bg-white/10 transition-colors"
              >
                About Us
                <span aria-hidden="true">→</span>
              </Link>
            </div>

            <div className="inline-flex flex-wrap items-center gap-4 rounded-2xl border border-white/15 bg-white/10 px-5 py-4 backdrop-blur-sm">
              <div className="flex text-orange-500 text-[18px] tracking-[0.12em]" aria-label="Five star rating">
                ★★★★★
              </div>
              <div>
                <p className="text-[15px] font-semibold text-white">Trusted patient experience</p>
                <p className="text-[13px] text-white/70">Friendly care, clear guidance, and dependable follow-up.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute left-0 right-0 bottom-8 px-6 lg:px-10">
          <div className="mx-auto max-w-5xl text-center">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-white/55 mb-5">
              Partners
            </p>
            <div className="partner-fade overflow-hidden">
              <div className="flex w-max gap-4 animate-[partner-scroll_34s_linear_infinite]">
                {[...partners, ...partners].map((partner, index) => (
                  <div
                    key={`${partner}-${index}`}
                    className="flex h-14 min-w-36 items-center justify-center rounded-2xl border border-white/15 bg-white/10 px-6 text-[15px] font-semibold text-white/80 backdrop-blur-sm"
                  >
                    {partner}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-24">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Eyebrow>Our Story</Eyebrow>
          <h2 className="font-display text-[34px] sm:text-[46px] leading-[1.08] text-blue-900 mt-5 mb-5">
            Care that feels personal, modern, and dependable.
          </h2>
          <p className="text-[16px] leading-relaxed text-slate max-w-2xl mx-auto mb-8">
            Norcross Hospital brings together thoughtful service, specialist support, and practical healthcare systems for individuals and families in Accra.
          </p>
          <Link
            to="/about"
            className="inline-flex items-center gap-2 rounded-xl bg-blue-700 text-white text-[15px] font-semibold px-7 py-3.5 shadow-[0_18px_35px_-20px_rgba(41,83,169,0.7)] hover:bg-blue-800 transition-colors"
          >
            Learn More About Us
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="rounded-[1.6rem] bg-line/70 p-3 grid lg:grid-cols-[1fr_1fr_1fr] gap-3">
          <div className="grid gap-3">
            {storyHighlights.slice(0, 2).map((item) => (
              <div key={item.title} className="reveal-card rounded-[1.15rem] bg-white p-6 lg:p-8 min-h-[210px]">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-700 font-mono text-[13px] font-semibold mb-10">
                  {item.icon}
                </span>
                <h3 className="font-display text-[22px] text-blue-900 mb-3">{item.title}</h3>
                <p className="text-[15px] leading-relaxed text-slate">{item.text}</p>
              </div>
            ))}
          </div>
          <div className="relative min-h-[430px] overflow-hidden rounded-[1.15rem] bg-white">
            <img src={images.corridor} alt="Norcross Hospital care team" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-950/35 to-transparent" />
          </div>
          <div className="grid gap-3">
            {storyHighlights.slice(2).map((item) => (
              <div key={item.title} className="reveal-card rounded-[1.15rem] bg-white p-6 lg:p-8 min-h-[210px]">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-700 font-mono text-[13px] font-semibold mb-10">
                  {item.icon}
                </span>
                <h3 className="font-display text-[22px] text-blue-900 mb-3">{item.title}</h3>
                <p className="text-[15px] leading-relaxed text-slate">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section id="departments" className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-[0.8fr_1.2fr] gap-12">
          <div className="lg:sticky lg:top-32 self-start">
            <Eyebrow>Our Clinical Services</Eyebrow>
            <h2 className="font-display text-[34px] sm:text-[44px] leading-[1.1] text-blue-900 mt-4 mb-5">
              Healthcare services arranged around real patient needs.
            </h2>
            <p className="text-[16px] leading-relaxed text-slate mb-8">
              Browse key departments at a glance, then view the full service list when you are ready to plan care.
            </p>
            <Link to="/services" className="inline-flex items-center gap-2 rounded-full bg-blue-800 text-white text-[15px] font-semibold px-6 py-3 hover:bg-blue-700 transition-colors">
              View all services
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="space-y-5">
            {services.slice(0, 8).map((service, index) => (
              <article
                key={service.name}
                className="reveal-card group grid sm:grid-cols-[170px_1fr] gap-5 rounded-[1.35rem] border border-line bg-paper p-4 transition-all duration-500 hover:-translate-y-1 hover:border-blue-700/30 hover:shadow-[0_28px_70px_-40px_rgba(41,83,169,0.45)]"
              >
                <div className="relative h-44 sm:h-full min-h-36 overflow-hidden rounded-[1rem]">
                  <img
                    src={serviceImages[index % serviceImages.length]}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="py-2 pr-2">
                  <span className="font-mono text-[12px] text-orange-600">{String(index + 1).padStart(2, "0")}</span>
                  <h3 className="font-display text-[24px] leading-snug text-blue-900 mt-3 mb-3">{service.name}</h3>
                  <p className="text-[15px] leading-relaxed text-slate">{service.blurb}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="bg-blue-900 py-20 relative overflow-hidden">
        <LogoMark opacity={0.22} className="absolute -left-24 top-1/2 -translate-y-1/2 w-[470px] pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <Eyebrow tone="orange">Our Facilities</Eyebrow>
          <h2 className="font-display text-[32px] sm:text-[38px] leading-[1.15] text-white mt-4 mb-12 max-w-xl">
            A modern, healing environment for patients and families.
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {facilities.map((facility) => (
              <div key={facility} className="reveal-card flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.07] p-5 backdrop-blur-sm">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-blue-800">
                  <FacilityIcon facility={facility} />
                </span>
                <p className="text-[15px] text-blue-100/90 leading-relaxed pt-1">{facility}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core values preview */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-24">
        <div className="max-w-2xl mb-12">
          <Eyebrow>Our Core Values</Eyebrow>
          <h2 className="font-display text-[34px] sm:text-[44px] leading-[1.1] text-blue-900 mt-4">
            The principles behind every decision we make.
          </h2>
        </div>
        <div className="grid md:grid-cols-4 auto-rows-[minmax(170px,auto)] gap-5">
          {coreValues.map((value, index) => (
            <div
              key={value.name}
              className={`reveal-card relative overflow-hidden rounded-[1.35rem] p-7 border border-line ${
                index === 0
                  ? "md:col-span-2 md:row-span-2 bg-blue-900 text-white"
                  : index === 4 || index === 6
                    ? "md:col-span-2 bg-orange-50"
                    : "bg-white"
              }`}
            >
              {index === 0 && (
                <>
                  <img src={images.ward} alt="" className="absolute inset-0 h-full w-full object-cover opacity-[0.18]" />
                  <div className="absolute inset-0 bg-blue-950/75" />
                </>
              )}
              <div className="relative">
                <span className={`font-mono text-[12px] ${index === 0 ? "text-orange-500" : "text-orange-600"}`}>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className={`font-display text-[24px] mt-5 mb-3 ${index === 0 ? "text-white" : "text-blue-900"}`}>
                  {value.name}
                </h3>
                <p className={`text-[15px] leading-relaxed ${index === 0 ? "text-blue-100/85" : "text-slate"}`}>
                  {value.blurb}
                </p>
              </div>
            </div>
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

      <CTASection />
    </div>
  );
}
