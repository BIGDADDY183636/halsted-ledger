import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact — Halsted Ledger",
  description:
    "Book a free consultation with Halsted Ledger. First meetings are free and take about 30 minutes.",
};

export default function ContactPage() {
  return (
    <main className="pt-16">
      {/* Page header */}
      <section className="bg-navy py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <p className="font-sans text-[0.68rem] tracking-[0.22em] uppercase text-gold font-medium mb-4">
              Get in touch
            </p>
          </Reveal>
          <Reveal delay={0.06}>
            <h1
              className="font-serif font-light text-white leading-tight mb-6"
              style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)" }}
            >
              Book a consultation.
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="font-sans text-[0.95rem] text-white/55 max-w-lg leading-relaxed">
              First consultations are free and take about 30 minutes. We&apos;ll
              tell you honestly whether we&apos;re the right fit — and if
              we&apos;re not, we&apos;ll point you in the right direction.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Contact form section */}
      <Contact />

      {/* Map placeholder */}
      <section className="bg-surface py-16 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <p className="font-sans text-[0.68rem] tracking-[0.22em] uppercase text-gold font-medium mb-6">
              Find us
            </p>
          </Reveal>
          <Reveal delay={0.06}>
            {/* Map placeholder block */}
            <div className="relative w-full rounded-sm overflow-hidden border border-border bg-white" style={{ height: "320px" }}>
              {/* SVG map stand-in */}
              <svg
                viewBox="0 0 800 320"
                className="w-full h-full"
                aria-label="Map placeholder showing office location"
              >
                {/* Grid */}
                {Array.from({ length: 9 }).map((_, i) => (
                  <line key={`h${i}`} x1="0" y1={i * 40} x2="800" y2={i * 40} stroke="#e2e8f0" strokeWidth="1" />
                ))}
                {Array.from({ length: 21 }).map((_, i) => (
                  <line key={`v${i}`} x1={i * 40} y1="0" x2={i * 40} y2="320" stroke="#e2e8f0" strokeWidth="1" />
                ))}
                {/* Block fills suggesting city blocks */}
                {[
                  [0, 0, 120, 80], [160, 0, 100, 80], [300, 0, 140, 80],
                  [0, 120, 80, 80], [120, 120, 120, 80], [280, 120, 100, 80],
                  [0, 240, 160, 80], [200, 240, 80, 80],
                  [440, 0, 120, 120], [600, 0, 160, 80],
                  [440, 160, 80, 80], [560, 160, 160, 80],
                  [440, 280, 200, 40],
                ].map(([x, y, w, h], i) => (
                  <rect key={i} x={x} y={y} width={w} height={h} fill="#f4f6f8" rx="2" />
                ))}
                {/* Pin marker for office */}
                <circle cx="400" cy="160" r="12" fill="#0f1c2e" />
                <circle cx="400" cy="160" r="5" fill="#c9a96e" />
                <line x1="400" y1="172" x2="400" y2="195" stroke="#0f1c2e" strokeWidth="2" />
                {/* Address label */}
                <rect x="290" y="200" width="220" height="44" rx="4" fill="white" stroke="#e2e8f0" strokeWidth="1.5" />
                <text x="400" y="218" textAnchor="middle" fontFamily="system-ui,sans-serif" fontSize="10" fontWeight="600" fill="#0f1c2e">234 W Hubbard St, Suite 400</text>
                <text x="400" y="234" textAnchor="middle" fontFamily="system-ui,sans-serif" fontSize="9" fill="#0f1c2e" opacity="0.5">Chicago, IL 60654</text>
              </svg>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6 font-sans text-[0.82rem] text-navy/55">
              <div>
                <p className="font-medium text-navy mb-1">Address</p>
                <p>234 W Hubbard St, Suite 400<br />Chicago, IL 60654</p>
              </div>
              <div>
                <p className="font-medium text-navy mb-1">Hours</p>
                <p>Monday – Friday<br />8:00 am – 6:00 pm</p>
              </div>
              <div>
                <p className="font-medium text-navy mb-1">Nearest transit</p>
                <p>Brown/Purple Line — Merchandise Mart<br />0.3 miles</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
