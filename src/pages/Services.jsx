import Bloom from "../components/Bloom.jsx";
import Eyebrow from "../components/Eyebrow.jsx";
import ServiceCard from "../components/ServiceCard.jsx";
import CTASection from "../components/CTASection.jsx";
import { services, facilities } from "../data/content.js";
import { images } from "../data/images.js";

export default function Services() {
  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="relative h-[280px] sm:h-[340px]">
          <img src={images.laboratory} alt="Norcross Hospital laboratory" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-blue-950/60" />
          <div className="relative h-full flex items-center justify-center text-center px-6">
            <div className="max-w-3xl">
              <Eyebrow tone="orange">Our Clinical Services</Eyebrow>
              <h1 className="font-display text-[36px] sm:text-[48px] leading-[1.1] text-white mt-5">
                Comprehensive healthcare for every stage of life.
              </h1>
              <p className="text-[16px] leading-relaxed text-blue-100/85 mt-5 max-w-2xl mx-auto">
                Norcross Hospital provides comprehensive healthcare services designed to meet the
                needs of individuals and families at every stage of life — across 18 specialty lines.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <ServiceCard key={s.name} {...s} index={i + 1} />
          ))}
        </div>
      </section>

      {/* Facilities */}
      <section className="bg-blue-900 py-20 mt-8 relative overflow-hidden">
        <Bloom size={480} color="var(--color-blue-800)" opacity={0.5} className="absolute -right-32 top-1/2 -translate-y-1/2 pointer-events-none" />
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
