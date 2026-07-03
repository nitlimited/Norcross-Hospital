import { Suspense, lazy } from "react";
import { Link } from "react-router-dom";
import LogoMark from "../components/LogoMark.jsx";
import Eyebrow from "../components/Eyebrow.jsx";
import CTASection from "../components/CTASection.jsx";
import { coreValues, founders, services } from "../data/content.js";
import { images } from "../data/images.js";

const VRTour = lazy(() => import("../components/VRTour.jsx"));

const careStats = [
  { label: "Clinical service lines", value: "18" },
  { label: "Patient-first philosophy", value: "100%" },
  { label: "Modern care environment", value: "24/7" },
];

const whyChooseUs = [
  {
    title: "Clinical Excellence",
    text: "Care is guided by professional standards, modern systems, and a commitment to quality outcomes.",
    icon: "M12 3l2.4 4.9 5.4.8-3.9 3.8.9 5.4L12 15.4 7.2 18l.9-5.4-3.9-3.8 5.4-.8L12 3Z",
  },
  {
    title: "Compassionate Care Journey",
    text: "Patients and families are supported with respect, dignity, clear guidance, and responsive follow-up.",
    icon: "M7 12h10M7 8h6M7 16h8M19 4H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z",
  },
  {
    title: "Specialist-Led Services",
    text: "The hospital brings together general practice, diagnostics, surgery, rehabilitation, and specialty care.",
    icon: "M8 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM2 21a6 6 0 0 1 12 0M17 8h5M17 12h5M17 16h4",
  },
  {
    title: "Modern Facilities",
    text: "Clean, comfortable spaces support consultations, procedures, diagnostics, inpatient care, and recovery.",
    icon: "M4 20V6l8-3 8 3v14M8 20v-7h8v7M9 8h.01M12 8h.01M15 8h.01",
  },
];

const doctorProfiles = [
  { name: "Primary Care Specialist", credential: "General Practice", focus: "Preventive care and chronic disease support", image: images.reception },
  { name: "Pediatrics Specialist", credential: "Child & Adolescent Care", focus: "Health services for infants, children, and teenagers", image: images.ward },
  { name: "Surgical Specialist", credential: "Surgical Services", focus: "Modern general and specialty surgical care", image: images.glassBuilding },
  { name: "Rehabilitation Specialist", credential: "Physiotherapy", focus: "Mobility, pain management, and stroke recovery", image: images.corridor },
  { name: "Diagnostics Specialist", credential: "Laboratory & Imaging", focus: "Accurate testing and timely clinical decisions", image: images.laboratory },
  { name: "Women’s Health Specialist", credential: "OB-GYN", focus: "Antenatal services, family planning, and wellness", image: images.heroExterior },
];

function LineIcon({ path }) {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
      <path d={path} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function About() {
  return (
    <div>
      <section className="relative overflow-hidden pt-36 pb-24 lg:pt-44 lg:pb-28">
        <LogoMark opacity={0.08} className="absolute -left-28 top-20 w-[420px] pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-center">
          <div>
            <Eyebrow>About Norcross Hospital</Eyebrow>
            <h1 className="font-display text-[44px] sm:text-[58px] lg:text-[68px] leading-[1.02] text-blue-900 mt-5 mb-5">
              Bringing world-class healthcare closer to home.
            </h1>
            <p className="text-[18px] leading-relaxed text-blue-900 mb-3 font-semibold">
              The Patient Is Everything.
            </p>
            <p className="text-[16px] leading-relaxed text-slate max-w-xl mb-8">
              Norcross Hospital is a multi-specialty healthcare institution in Accra built around safe, compassionate, affordable, and patient-centered care.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-blue-700 text-white text-[15px] font-semibold px-7 py-3.5 shadow-[0_18px_35px_-20px_rgba(41,83,169,0.7)] hover:bg-blue-800 transition-colors"
            >
              Book Appointment
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="relative overflow-hidden rounded-[1.5rem] min-h-[430px] bg-blue-900">
            <img src={images.ward} alt="Modern hospital room" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-950/75 via-blue-950/15 to-transparent" />
            <div className="absolute left-0 right-0 bottom-0 grid grid-cols-3 divide-x divide-white/20 p-6">
              {careStats.map((stat) => (
                <div key={stat.label} className="px-4">
                  <p className="text-[13px] text-white/65 mb-2">{stat.label}</p>
                  <p className="font-display text-[42px] text-white leading-none">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-20">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Eyebrow tone="orange">Inside Our Hospital</Eyebrow>
          <h2 className="font-display text-[36px] sm:text-[48px] leading-[1.08] text-blue-900 mt-5">
            A closer look at our modern care environment.
          </h2>
        </div>
        <div className="relative overflow-hidden rounded-[1.5rem] bg-blue-950 shadow-[0_35px_90px_-60px_rgba(13,26,53,0.8)]">
          <video
            className="aspect-video w-full object-cover"
            poster={images.laboratory}
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="https://videos.pexels.com/video-files/7089602/7089602-uhd_2560_1440_25fps.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-blue-950/70 to-transparent p-6">
            <p className="max-w-xl text-[15px] leading-relaxed text-white/85">
              A visual look at the kind of calm, clean, modern care environment Norcross is building for patients and families.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-20 grid lg:grid-cols-[0.8fr_1.2fr] gap-12">
        <div className="lg:sticky lg:top-32 self-start">
          <Eyebrow>Why Choose Us</Eyebrow>
          <h2 className="font-display text-[36px] sm:text-[48px] leading-[1.1] text-blue-900 mt-5">
            What makes our care truly different today.
          </h2>
        </div>
        <div className="space-y-5">
          {whyChooseUs.map((item) => (
            <article key={item.title} className="reveal-card rounded-[1.35rem] border border-line bg-white p-7 lg:p-9">
              <span className="mb-12 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                <LineIcon path={item.icon} />
              </span>
              <h3 className="font-display text-[26px] text-blue-900 mb-3">{item.title}</h3>
              <p className="text-[16px] leading-relaxed text-slate max-w-2xl">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-blue-900 py-24 relative overflow-hidden">
        <LogoMark opacity={0.18} className="absolute -right-24 -top-24 w-[440px] pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-start">
          <div>
            <Eyebrow tone="orange">Our Story</Eyebrow>
            <h2 className="font-display text-[36px] sm:text-[46px] leading-[1.1] text-white mt-5 mb-6">
              A hospital shaped by experience, compassion, and a commitment to Ghana.
            </h2>
            <p className="text-[16px] leading-relaxed text-blue-100/85 mb-5">
              Norcross Hospital was founded by Dr. Samuel Kwame Ewiah, PharmD, MBA, and Mrs. Josiane Ewiah, a Family and Psychiatric Mental Health Nurse Practitioner.
            </p>
            <p className="text-[16px] leading-relaxed text-blue-100/85">
              After years of healthcare education, professional training, and clinical experience in the United States, the founders returned with a vision to build a modern hospital that combines international standards with affordability, accessibility, compassion, and community impact.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {founders.map((founder) => (
              <article key={founder.name} className="reveal-card rounded-[1.35rem] bg-white p-7">
                <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50">
                  <LogoMark className="w-8" />
                </div>
                <h3 className="font-display text-[22px] text-blue-900 leading-snug">{founder.name}</h3>
                <p className="text-[13px] text-orange-600 font-semibold mt-1 mb-4">
                  {founder.role} · {founder.credentials}
                </p>
                <p className="text-[15px] text-slate leading-relaxed">{founder.bio}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-20 grid lg:grid-cols-2 gap-6">
        <article className="rounded-[1.35rem] border border-line bg-white p-8 lg:p-10">
          <Eyebrow>Our Mission</Eyebrow>
          <p className="font-display text-[24px] leading-snug text-blue-900 mt-5">
            To provide safe, affordable, compassionate, and patient-centered healthcare through clinical excellence, innovation, and a commitment to improving the health and well-being of the communities we serve.
          </p>
        </article>
        <article className="rounded-[1.35rem] border border-line bg-orange-50 p-8 lg:p-10">
          <Eyebrow tone="orange">Our Vision</Eyebrow>
          <p className="font-display text-[24px] leading-snug text-blue-900 mt-5">
            To become one of Ghana’s leading healthcare institutions, recognized for clinical excellence, innovation, quality outcomes, and exceptional patient experiences.
          </p>
        </article>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-20">
        <div className="max-w-2xl mb-12">
          <Eyebrow>Core Values</Eyebrow>
          <h2 className="font-display text-[36px] sm:text-[46px] leading-[1.1] text-blue-900 mt-5">
            Seven principles that shape how we care.
          </h2>
        </div>
        <div className="grid md:grid-cols-4 gap-5">
          {coreValues.map((value, index) => (
            <article
              key={value.name}
              className={`reveal-card rounded-[1.35rem] border border-line p-7 ${
                index === 0 ? "md:col-span-2 bg-blue-900 text-white" : "bg-white"
              }`}
            >
              <span className={`font-mono text-[12px] ${index === 0 ? "text-orange-500" : "text-orange-600"}`}>
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className={`font-display text-[23px] mt-5 mb-3 ${index === 0 ? "text-white" : "text-blue-900"}`}>
                {value.name}
              </h3>
              <p className={`text-[15px] leading-relaxed ${index === 0 ? "text-blue-100/85" : "text-slate"}`}>
                {value.blurb}
              </p>
            </article>
          ))}
        </div>
      </section>

      <Suspense
        fallback={
          <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20">
            <div className="h-64 rounded-2xl bg-blue-50 animate-pulse" />
          </div>
        }
      >
        <VRTour />
      </Suspense>

      <section id="doctors-team" className="mx-auto max-w-7xl px-6 lg:px-10 py-24 scroll-mt-32">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Eyebrow tone="orange">Our Expert Team</Eyebrow>
          <h2 className="font-display text-[36px] sm:text-[48px] leading-[1.08] text-blue-900 mt-5">
            Specialist care across the departments patients need most.
          </h2>
          <p className="text-[15px] text-slate mt-5">
            These placeholders can be replaced with real doctor photos, names, and credentials when Norcross is ready to publish the clinical roster.
          </p>
        </div>
        <div className="rounded-[1.6rem] bg-line/70 p-3 grid lg:grid-cols-2 gap-3">
          {doctorProfiles.map((doctor) => (
            <article key={doctor.name} className="reveal-card grid sm:grid-cols-[180px_1fr] gap-6 rounded-[1.15rem] bg-white p-4">
              <img src={doctor.image} alt="" className="h-56 sm:h-full min-h-56 w-full rounded-[1rem] object-cover" />
              <div className="py-3 pr-3">
                <h3 className="font-display text-[26px] text-blue-900">{doctor.name}</h3>
                <p className="text-[15px] text-slate-light mt-1 pb-5 border-b border-line">{doctor.credential}</p>
                <p className="text-[15px] leading-relaxed text-slate mt-5">{doctor.focus}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-20 text-center">
        <Eyebrow>Our Commitment to Ghana</Eyebrow>
        <p className="text-[20px] sm:text-[24px] leading-relaxed text-blue-900 font-display mt-6 max-w-4xl mx-auto">
          Norcross Hospital was established with a simple but powerful purpose: to contribute meaningfully to the healthcare development of Ghana while improving lives, strengthening communities, and supporting a healthier future.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {services.slice(0, 8).map((service) => (
            <span key={service.name} className="rounded-full border border-line bg-white px-4 py-2 text-[13px] font-medium text-slate">
              {service.name}
            </span>
          ))}
        </div>
      </section>

      <CTASection />
    </div>
  );
}
