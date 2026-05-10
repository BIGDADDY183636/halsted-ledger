import Link from "next/link";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Blog from "@/components/Blog";
import Reveal from "@/components/Reveal";

// Three service teasers for the home page — link to /services for the full picture
const serviceTeasers = [
  {
    title: "Tax Preparation",
    description:
      "Business and personal returns, quarterly estimates, and audit support. Filed accurately and on time.",
    href: "/services#tax-preparation",
  },
  {
    title: "Bookkeeping",
    description:
      "Monthly reconciliation and P&L statements — so you always know exactly where you stand.",
    href: "/services#bookkeeping",
  },
  {
    title: "Business Advisory",
    description:
      "Strategic guidance on structure, growth, and financial decisions. A thinking partner, not just a tax preparer.",
    href: "/services#advisory",
  },
];

export default function Home() {
  return (
    <main>
      {/* Hero — chart, CountUp stats, CTAs */}
      <Hero />

      {/* Service teasers */}
      <section className="bg-surface py-24 border-t border-border">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <p className="font-sans text-[0.68rem] tracking-[0.22em] uppercase text-gold font-medium mb-4">
              What we do
            </p>
          </Reveal>
          <Reveal delay={0.06}>
            <div className="flex items-end justify-between mb-12">
              <h2
                className="font-serif font-light text-navy leading-tight"
                style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}
              >
                Full-service accounting,<br />
                <em>built for small businesses.</em>
              </h2>
              <Link
                href="/services"
                className="hidden md:block font-sans text-[0.78rem] font-medium text-gold hover:text-navy transition-colors duration-150 flex-shrink-0 ml-8"
              >
                All services →
              </Link>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {serviceTeasers.map((s, i) => (
              <Reveal key={s.title} delay={0.08 + i * 0.08}>
                <Link
                  href={s.href}
                  className="group block bg-white border border-border rounded-sm p-7 hover:shadow-sm hover:border-gold/30 transition-all duration-200"
                >
                  <h3 className="font-serif font-semibold text-navy text-[1.05rem] mb-3 group-hover:text-navy-mid transition-colors">
                    {s.title}
                  </h3>
                  <p className="font-sans text-[0.83rem] text-navy/50 leading-relaxed mb-5">
                    {s.description}
                  </p>
                  <span className="font-sans text-[0.75rem] font-medium text-gold group-hover:text-navy transition-colors">
                    Learn more →
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>

          <div className="mt-8 md:hidden text-center">
            <Link href="/services" className="font-sans text-[0.78rem] font-medium text-gold hover:text-navy transition-colors">
              View all services →
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Team preview */}
      <section className="bg-white py-24 border-t border-border">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <p className="font-sans text-[0.68rem] tracking-[0.22em] uppercase text-gold font-medium mb-4">
              The team
            </p>
          </Reveal>
          <Reveal delay={0.06}>
            <div className="flex items-center justify-between mb-12">
              <h2
                className="font-serif font-light text-navy leading-tight"
                style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}
              >
                People you&apos;ll actually work with.
              </h2>
              <Link
                href="/team"
                className="hidden md:block font-sans text-[0.78rem] font-medium text-gold hover:text-navy transition-colors duration-150 flex-shrink-0 ml-8"
              >
                Meet the team →
              </Link>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { initials: "SM", name: "Sarah Marston", title: "CPA, Managing Partner" },
              { initials: "JK", name: "James Kowalski", title: "CFP, Financial Advisor" },
              { initials: "AP", name: "Alicia Patel",   title: "Senior Bookkeeper" },
            ].map((m, i) => (
              <Reveal key={m.name} delay={0.08 + i * 0.1}>
                <Link href="/team" className="group flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-navy flex items-center justify-center flex-shrink-0 group-hover:bg-navy-mid transition-colors">
                    <span className="font-serif text-gold font-semibold text-[0.9rem]">
                      {m.initials}
                    </span>
                  </div>
                  <div>
                    <p className="font-serif font-semibold text-navy text-[0.95rem] group-hover:text-navy-mid transition-colors">
                      {m.name}
                    </p>
                    <p className="font-sans text-[0.7rem] text-navy/45 mt-0.5">{m.title}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Blog preview — 2 most recent */}
      <Blog limit={2} />

      {/* CTA banner */}
      <section className="bg-gold/10 border-t border-gold/20 py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <Reveal>
            <h2
              className="font-serif font-light text-navy leading-tight mb-4"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}
            >
              Ready to stop worrying about your taxes?
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="font-sans text-[0.9rem] text-navy/55 mb-8 max-w-md mx-auto leading-relaxed">
              First consultations are free. We&apos;ll tell you honestly whether
              we&apos;re the right fit — and if we&apos;re not, we&apos;ll point
              you in the right direction.
            </p>
          </Reveal>
          <Reveal delay={0.16}>
            <Link
              href="/contact"
              className="inline-block font-sans text-[0.82rem] font-medium bg-navy text-white px-8 py-3.5 rounded-sm hover:bg-navy-mid transition-colors duration-200"
            >
              Book a free consultation →
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
