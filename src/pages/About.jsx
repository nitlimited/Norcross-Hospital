import { Suspense, lazy } from "react";
import Bloom from "../components/Bloom.jsx";
import Eyebrow from "../components/Eyebrow.jsx";
import ValueCard from "../components/ValueCard.jsx";
import CTASection from "../components/CTASection.jsx";
import PhotoGallery from "../components/PhotoGallery.jsx";
import { coreValues, founders } from "../data/content.js";
import { images } from "../data/images.js";

const VRTour = lazy(() => import("../components/VRTour.jsx"));

export default function About() {
  return (
    <div>
      {/* Header */}
      <section className="relative overflow-hidden">
        <div className="relative h-[320px] sm:h-[380px]">
          <img src={images.heroExterior} alt="Norcross Hospital" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-blue-950/55" />
          <Bloom size={420} color="var(--color-blue-800)" opacity={0.35} className="absolute -right-24 -bottom-24 pointer-events-none" />
          <div className="relative h-full flex items-center justify-center text-center px-6">
            <div className="max-w-3xl">
              <Eyebrow tone="orange">About Norcross Hospital</Eyebrow>
              <h1 className="font-display text-[36px] sm:text-[48px] leading-[1.1] text-white mt-5">
                Bringing world-class healthcare closer to home.
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="mx-auto max-w-4xl px-6 lg:px-10 py-12 space-y-6">
        <p className="text-[17px] leading-relaxed text-slate">
          Norcross Hospital is a proudly Ghanaian-owned, multi-specialty healthcare institution
          founded by Dr. Samuel Kwame Ewiah, PharmD, MBA, and Mrs. Josiane Ewiah, Family and
          Psychiatric Mental Health Nurse Practitioner.
        </p>
        <p className="text-[17px] leading-relaxed text-slate">
          The vision for Norcross Hospital was born from a desire to bring world-class healthcare
          closer to home. After more than two decades of education, professional training, and
          healthcare experience in the United States, Dr. Ewiah returned to Ghana with a commitment
          to invest his knowledge, expertise, and resources into building a healthcare institution
          dedicated to serving the people of Ghana.
        </p>
        <p className="text-[17px] leading-relaxed text-slate">
          Dr. Ewiah earned his advanced professional and business education in the United States
          and practiced there for many years, gaining valuable experience within one of the world's
          most advanced healthcare systems. Throughout his career, he remained committed to a
          lifelong dream: creating a modern healthcare institution in Ghana that combines
          international standards of care with affordability, accessibility, compassion, and
          community impact.
        </p>
        <p className="text-[17px] leading-relaxed text-slate">
          Alongside him is his wife, Mrs. Josiane Ewiah, an experienced Family and Psychiatric
          Mental Health Nurse Practitioner with extensive expertise in primary care, family
          medicine, behavioral health, and patient advocacy. Together, they share a common vision
          of creating a healthcare institution where every patient is treated with dignity,
          respect, compassion, and clinical excellence.
        </p>
        <p className="text-[17px] leading-relaxed text-slate">
          Today, that vision has become Norcross Hospital — a modern healthcare destination
          committed to improving lives through exceptional medical care, innovation, and an
          unwavering dedication to putting patients first.
        </p>
      </section>

      {/* Founders */}
      <section className="mx-auto max-w-5xl px-6 lg:px-10 py-12 grid sm:grid-cols-2 gap-6">
        {founders.map((f) => (
          <div key={f.name} className="rounded-2xl bg-blue-50 p-8">
            <div className="w-14 h-14 rounded-full bg-blue-800 flex items-center justify-center mb-6">
              <Bloom size={30} color="var(--color-orange-500)" />
            </div>
            <h3 className="font-display text-[21px] text-blue-900 leading-snug">{f.name}</h3>
            <p className="text-[13px] text-orange-600 font-semibold mt-1 mb-4">
              {f.role} · {f.credentials}
            </p>
            <p className="text-[15px] text-slate leading-relaxed">{f.bio}</p>
          </div>
        ))}
      </section>

      {/* Mission & Vision */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-16 grid md:grid-cols-2 gap-6">
        <div className="rounded-2xl border border-line bg-white p-9">
          <Eyebrow>Our Mission</Eyebrow>
          <p className="font-display text-[22px] leading-snug text-blue-900 mt-4">
            To provide safe, affordable, compassionate, and patient-centered healthcare through
            clinical excellence, innovation, and a commitment to improving the health and
            well-being of the communities we serve.
          </p>
        </div>
        <div className="rounded-2xl border border-line bg-white p-9">
          <Eyebrow tone="orange">Our Vision</Eyebrow>
          <p className="font-display text-[22px] leading-snug text-blue-900 mt-4">
            To become one of Ghana's leading healthcare institutions, recognized for clinical
            excellence, innovation, quality outcomes, and exceptional patient experiences.
          </p>
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-blue-900 py-24 relative overflow-hidden">
        <Bloom size={420} color="var(--color-blue-800)" opacity={0.5} className="absolute right-0 top-0 pointer-events-none" />
        <div className="relative mx-auto max-w-3xl px-6 lg:px-10 text-center">
          <Eyebrow tone="orange">Our Philosophy</Eyebrow>
          <h2 className="font-display italic text-[32px] sm:text-[42px] leading-[1.2] text-white mt-6">
            "The Patient Is Everything."
          </h2>
          <p className="text-[16px] leading-relaxed text-blue-100/85 mt-6">
            This philosophy guides every clinical decision, every service we provide, every
            investment we make, and every interaction we have. We believe healthcare should be
            delivered with compassion, respect, professionalism, and a relentless commitment to
            achieving the best possible outcomes for our patients and their families. Our goal is
            not simply to treat illness, but to improve lives, promote wellness, and build
            healthier communities.
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-20">
        <Eyebrow>Our Core Values</Eyebrow>
        <h2 className="font-display text-[32px] sm:text-[38px] leading-[1.15] text-blue-900 mt-4 mb-12 max-w-xl">
          Seven principles that shape how we care.
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10">
          {coreValues.map((v) => (
            <ValueCard key={v.name} {...v} />
          ))}
        </div>
      </section>

      {/* Commitment to Ghana */}
      <section className="mx-auto max-w-4xl px-6 lg:px-10 py-16 text-center">
        <Eyebrow>Our Commitment to Ghana</Eyebrow>
        <p className="text-[18px] sm:text-[20px] leading-relaxed text-blue-900 font-display mt-6">
          Norcross Hospital was established with a simple but powerful purpose: to contribute
          meaningfully to the healthcare development of Ghana. By combining international
          healthcare experience with local understanding, we aim to provide accessible,
          affordable, and high-quality healthcare services that improve lives, strengthen
          communities, and contribute to a healthier future for generations to come.
        </p>
      </section>

      {/* Inside the hospital — photos leading into the VR tour */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 pt-8 pb-4">
        <Eyebrow tone="orange">See It For Yourself</Eyebrow>
        <h2 className="font-display text-[32px] sm:text-[38px] leading-[1.15] text-blue-900 mt-4 mb-10 max-w-xl">
          A look inside our laboratories, wards, and consulting rooms.
        </h2>
        <PhotoGallery />
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

      {/* Doctors team — placeholder, ready for real profiles */}
      <section id="doctors-team" className="mx-auto max-w-7xl px-6 lg:px-10 py-16">
        <Eyebrow tone="orange">Our Team</Eyebrow>
        <h2 className="font-display text-[32px] sm:text-[38px] leading-[1.15] text-blue-900 mt-4 mb-4 max-w-xl">
          Meet our specialists.
        </h2>
        <p className="text-[15px] text-slate-light max-w-xl mb-10">
          Doctor and specialist profiles are on the way — this section is ready to be populated
          with real photos, names, and credentials.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="rounded-2xl border border-dashed border-line bg-white p-6 text-center">
              <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mx-auto mb-4">
                <Bloom size={30} color="var(--color-blue-100)" />
              </div>
              <p className="text-[14px] text-slate-light">Specialist profile coming soon</p>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </div>
  );
}
