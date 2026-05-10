import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Services — Halsted Ledger",
  description:
    "Tax preparation, bookkeeping, business advisory, and estate planning for Chicago's small businesses.",
};

const icons: Record<string, React.ReactNode> = {
  "tax-preparation": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <path d="M14 3H6a2 2 0 00-2 2v14a2 2 0 002 2h12a2 2 0 002-2V8l-5-5z" />
      <path d="M14 3v5h5M9 12h6M9 16h6" />
    </svg>
  ),
  bookkeeping: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <path d="M4 19.5A2.5 2.5 0 016.5 17H20M4 19.5V5a2.5 2.5 0 012.5-2.5H20v15M4 19.5a2.5 2.5 0 002.5 2.5H20" />
      <path d="M9 8h6M9 12h4" />
    </svg>
  ),
  advisory: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
    </svg>
  ),
  "estate-planning": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  ),
};

export default function ServicesPage() {
  return (
    <main className="pt-16">
      {/* Page header */}
      <section className="bg-navy py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <p className="font-sans text-[0.68rem] tracking-[0.22em] uppercase text-gold font-medium mb-4">
              What we do
            </p>
          </Reveal>
          <Reveal delay={0.06}>
            <h1
              className="font-serif font-light text-white leading-tight mb-6"
              style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)" }}
            >
              Full-service accounting, built for small businesses.
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="font-sans text-[0.95rem] text-white/55 max-w-lg leading-relaxed">
              We cover the full financial picture — from day-to-day bookkeeping
              to long-term planning — so you can run your business without
              worrying about the numbers.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Overview cards */}
      <section className="bg-surface py-20 border-b border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((s, i) => (
              <Reveal key={s.id} delay={0.06 + i * 0.06}>
                <a
                  href={`#${s.id}`}
                  className="group flex items-start gap-5 bg-white border border-border rounded-sm p-7 hover:shadow-sm hover:border-gold/30 transition-all duration-200"
                >
                  <div className="w-10 h-10 rounded-sm bg-navy/[0.06] flex items-center justify-center text-navy-mid flex-shrink-0 mt-0.5">
                    {icons[s.id]}
                  </div>
                  <div>
                    <h3 className="font-serif font-semibold text-navy text-[1.05rem] mb-1">
                      {s.title}
                    </h3>
                    <p className="font-sans text-[0.83rem] text-navy/50 leading-relaxed">
                      {s.description}
                    </p>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Expanded detail for each service */}
      {services.map((s, i) => (
        <section
          key={s.id}
          id={s.id}
          className={`py-24 border-b border-border ${i % 2 === 0 ? "bg-white" : "bg-surface"}`}
        >
          <div className="max-w-6xl mx-auto px-6">
            <Reveal>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-10 rounded-sm bg-navy/[0.06] flex items-center justify-center text-navy-mid flex-shrink-0">
                  {icons[s.id]}
                </div>
                <h2
                  className="font-serif font-semibold text-navy"
                  style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}
                >
                  {s.title}
                </h2>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* What's included */}
              <Reveal delay={0.06} className="lg:col-span-2">
                <div>
                  <p className="font-sans text-[0.65rem] tracking-[0.2em] uppercase text-gold font-medium mb-4">
                    What&apos;s included
                  </p>
                  <ul className="space-y-2.5">
                    {s.included.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="text-gold mt-0.5 flex-shrink-0 text-[0.9rem]">—</span>
                        <span className="font-sans text-[0.88rem] text-navy/65 leading-relaxed">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              {/* Who it's for + engagement */}
              <Reveal delay={0.1}>
                <div className="space-y-7">
                  <div className="bg-gold/8 border border-gold/20 rounded-sm p-6">
                    <p className="font-sans text-[0.65rem] tracking-[0.2em] uppercase text-gold font-medium mb-3">
                      Who it&apos;s for
                    </p>
                    <p className="font-sans text-[0.84rem] text-navy/65 leading-relaxed">
                      {s.whoFor}
                    </p>
                  </div>
                  <div className="bg-navy/[0.04] border border-border rounded-sm p-6">
                    <p className="font-sans text-[0.65rem] tracking-[0.2em] uppercase text-navy/40 font-medium mb-3">
                      Typical engagement
                    </p>
                    <p className="font-sans text-[0.84rem] text-navy/65 leading-relaxed">
                      {s.engagement}
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="bg-navy py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <Reveal>
            <h2
              className="font-serif font-light text-white mb-4"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}
            >
              Not sure which service fits?
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="font-sans text-[0.9rem] text-white/50 mb-8 max-w-md mx-auto leading-relaxed">
              Most clients come to us with a mix of needs. Let&apos;s talk — a
              free consultation is the best place to start.
            </p>
          </Reveal>
          <Reveal delay={0.14}>
            <Link
              href="/contact"
              className="inline-block font-sans text-[0.82rem] font-medium bg-gold text-navy px-8 py-3.5 rounded-sm hover:bg-gold-light transition-colors duration-200"
            >
              Book a free consultation →
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
