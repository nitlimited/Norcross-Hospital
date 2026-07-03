import LogoMark from "../components/LogoMark.jsx";
import Eyebrow from "../components/Eyebrow.jsx";
import ServiceCard from "../components/ServiceCard.jsx";
import CTASection from "../components/CTASection.jsx";
import { services, facilities } from "../data/content.js";
import { images } from "../data/images.js";

const departments = [
  {
    name: "Primary & Family Medicine Department",
    services: ["Primary Healthcare & General Practice", "Internal Medicine", "Pediatrics", "Dietetics & Nutrition Services"],
  },
  {
    name: "Women, Children & Wellness Department",
    services: ["Women's Health", "Hormone Replacement Therapy & Wellness Center", "Pediatrics"],
  },
  {
    name: "Surgical & Specialty Care Department",
    services: ["Surgical Services", "Plastic & Reconstructive Surgery", "Urology", "Orthopedics", "Ear, Nose & Throat (ENT)"],
  },
  {
    name: "Diagnostics & Laboratory Department",
    services: ["Diagnostic Imaging Services", "Ultra-Modern Laboratory Services", "Hematology & Sickle Cell Center"],
  },
  {
    name: "Rehabilitation, Dental & Allied Health Department",
    services: ["Physiotherapy & Stroke Rehabilitation Center", "Dental Care", "Dermatology", "Ophthalmology"],
  },
];

const departmentFaqs = [
  {
    q: "How do I know which department to contact?",
    a: "Start with the service that best matches your need. The Norcross team can route you to the right department or specialist when you contact the hospital.",
  },
  {
    q: "Are services available for both adults and children?",
    a: "Yes. Norcross includes primary care, internal medicine, pediatrics, women’s health, diagnostics, rehabilitation, and specialty services for different stages of life.",
  },
  {
    q: "Can one visit involve more than one department?",
    a: "Yes. Some patients may need coordinated support across diagnostics, consultation, treatment, pharmacy, or rehabilitation depending on the care plan.",
  },
  {
    q: "Does Norcross provide diagnostic support?",
    a: "Yes. The hospital includes diagnostic imaging and ultra-modern laboratory services to support timely clinical decision-making.",
  },
];

export default function Services() {
  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="relative h-[320px] sm:h-[400px]">
          <img src={images.laboratory} alt="Norcross Hospital laboratory" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-blue-950/60" />
          <div className="relative h-full flex items-center justify-center text-center px-6">
            <div className="max-w-3xl">
              <Eyebrow tone="orange">Departments</Eyebrow>
              <h1 className="font-display text-[36px] sm:text-[48px] leading-[1.1] text-white mt-5">
                Services and departments working together for complete care.
              </h1>
              <p className="text-[16px] leading-relaxed text-blue-100/85 mt-5 max-w-2xl mx-auto">
                Start with the service you need, then explore the clinical departments that coordinate care across Norcross Hospital.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="departments" className="mx-auto max-w-7xl px-6 lg:px-10 py-12">
        <div className="max-w-2xl mb-10">
          <Eyebrow>Clinical Services</Eyebrow>
          <h2 className="font-display text-[34px] sm:text-[44px] leading-[1.1] text-blue-900 mt-4">
            Health services offered at Norcross.
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <ServiceCard key={s.name} {...s} index={i + 1} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-16">
        <div className="max-w-2xl mb-10">
          <Eyebrow tone="orange">Department Groups</Eyebrow>
          <h2 className="font-display text-[34px] sm:text-[44px] leading-[1.1] text-blue-900 mt-4">
            How care is organized across the hospital.
          </h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-5">
          {departments.map((department) => (
            <article key={department.name} className="reveal-card rounded-[1.35rem] border border-line bg-white p-7">
              <h3 className="font-display text-[24px] text-blue-900 mb-5">{department.name}</h3>
              <div className="flex flex-wrap gap-2">
                {department.services.map((service) => (
                  <span key={service} className="rounded-full bg-blue-50 px-4 py-2 text-[13px] font-medium text-blue-900">
                    {service}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 lg:px-10 py-16">
        <Eyebrow>Department FAQs</Eyebrow>
        <h2 className="font-display text-[32px] sm:text-[38px] leading-[1.15] text-blue-900 mt-4 mb-10">
          Frequently asked department questions.
        </h2>
        <div className="divide-y divide-line border-t border-b border-line">
          {departmentFaqs.map((faq) => (
            <details key={faq.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between">
                <span className="font-display text-[17px] text-blue-900">{faq.q}</span>
                <span className="ml-4 shrink-0 text-xl text-orange-600 transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 pr-8 text-[15px] leading-relaxed text-slate">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Facilities */}
      <section className="bg-blue-900 py-20 mt-8 relative overflow-hidden">
        <LogoMark opacity={0.22} className="absolute -right-32 top-1/2 -translate-y-1/2 w-[480px] pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <Eyebrow tone="orange">Our Facilities</Eyebrow>
          <h2 className="font-display text-[32px] sm:text-[38px] leading-[1.15] text-white mt-4 mb-12 max-w-xl">
            Thoughtfully designed for a comfortable, healing environment.
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

      <CTASection />
    </div>
  );
}
