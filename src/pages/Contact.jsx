import { useState } from "react";
import Bloom from "../components/Bloom.jsx";
import Eyebrow from "../components/Eyebrow.jsx";
import { contact, faqs } from "../data/content.js";

const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(contact.mapQuery)}&output=embed`;

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <div>
      <section className="relative overflow-hidden pt-36 pb-16 lg:pt-44">
        <Bloom size={520} color="var(--color-blue-100)" opacity={0.9} className="absolute -left-40 -top-24 pointer-events-none hidden lg:block" />
        <div className="relative mx-auto max-w-4xl px-6 lg:px-10 text-center">
          <Eyebrow>Contact Us</Eyebrow>
          <h1 className="font-display text-[36px] sm:text-[48px] leading-[1.1] text-blue-900 mt-5">
            We're here to help.
          </h1>
          <p className="text-[16px] leading-relaxed text-slate mt-5 max-w-xl mx-auto">
            Reach out to the Norcross Hospital team in Accra with any questions about our
            services or to plan a visit.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-8 grid lg:grid-cols-[1fr_1fr] gap-10">
        {/* Details + form */}
        <div>
          <div className="grid sm:grid-cols-2 gap-5 mb-10">
            <div className="rounded-2xl border border-line bg-white p-6">
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-orange-600 font-semibold mb-2">Address</p>
              <p className="text-[15px] text-blue-900 leading-relaxed">{contact.address}</p>
            </div>
            <div className="rounded-2xl border border-line bg-white p-6">
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-orange-600 font-semibold mb-2">Phone</p>
              <p className="text-[15px] text-blue-900 leading-relaxed">{contact.phone}</p>
            </div>
            <div className="rounded-2xl border border-line bg-white p-6">
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-orange-600 font-semibold mb-2">Email</p>
              <p className="text-[15px] text-blue-900 leading-relaxed">{contact.email}</p>
            </div>
            <div className="rounded-2xl border border-line bg-white p-6">
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-orange-600 font-semibold mb-2">Hours</p>
              <p className="text-[15px] text-blue-900 leading-relaxed">{contact.hours}</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-2xl border border-line bg-white p-7 space-y-5">
            <h3 className="font-display text-[20px] text-blue-900 mb-1">Send us a message</h3>
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-[13px] font-medium text-slate mb-1.5" htmlFor="name">Full name</label>
                <input
                  id="name"
                  required
                  type="text"
                  className="w-full rounded-lg border border-line px-4 py-2.5 text-[15px] focus:border-blue-700 outline-none"
                  placeholder="Ama Mensah"
                />
              </div>
              <div>
                <label className="block text-[13px] font-medium text-slate mb-1.5" htmlFor="phone">Phone number</label>
                <input
                  id="phone"
                  type="tel"
                  className="w-full rounded-lg border border-line px-4 py-2.5 text-[15px] focus:border-blue-700 outline-none"
                  placeholder="024 000 0000"
                />
              </div>
            </div>
            <div>
              <label className="block text-[13px] font-medium text-slate mb-1.5" htmlFor="email">Email address</label>
              <input
                id="email"
                required
                type="email"
                className="w-full rounded-lg border border-line px-4 py-2.5 text-[15px] focus:border-blue-700 outline-none"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-[13px] font-medium text-slate mb-1.5" htmlFor="message">Message</label>
              <textarea
                id="message"
                required
                rows={4}
                className="w-full rounded-lg border border-line px-4 py-2.5 text-[15px] focus:border-blue-700 outline-none resize-none"
                placeholder="How can we help?"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full bg-blue-800 text-white text-[15px] font-semibold px-7 py-3 hover:bg-blue-700 transition-colors"
            >
              Send Message
            </button>
            {sent && (
              <p className="text-[14px] text-orange-600">
                Thanks — this form isn't wired to an email service yet. Connect it to your
                preferred provider (e.g. Formspree, or a backend endpoint) to start receiving messages.
              </p>
            )}
          </form>
        </div>

        {/* Map */}
        <div className="rounded-2xl overflow-hidden border border-line min-h-[420px] bg-white">
          <iframe
            title="Norcross Hospital location"
            src={mapSrc}
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: 420 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-6 lg:px-10 py-20">
        <Eyebrow>Frequently Asked Questions</Eyebrow>
        <h2 className="font-display text-[32px] sm:text-[38px] leading-[1.15] text-blue-900 mt-4 mb-10">
          Common questions, answered.
        </h2>
        <div className="divide-y divide-line border-t border-b border-line">
          {faqs.map((f) => (
            <details key={f.q} className="group py-5">
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <span className="font-display text-[17px] text-blue-900">{f.q}</span>
                <span className="text-orange-600 text-xl group-open:rotate-45 transition-transform shrink-0 ml-4">+</span>
              </summary>
              <p className="text-[15px] leading-relaxed text-slate mt-3 pr-8">{f.a}</p>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}
