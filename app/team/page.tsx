import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { team } from "@/lib/team";

export const metadata: Metadata = {
  title: "Team — Halsted Ledger",
  description:
    "Meet the people behind Halsted Ledger — CPAs, financial planners, and bookkeeping specialists serving Chicago small businesses.",
};

export default function TeamPage() {
  return (
    <main className="pt-16">
      {/* Page header */}
      <section className="bg-navy py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <p className="font-sans text-[0.68rem] tracking-[0.22em] uppercase text-gold font-medium mb-4">
              The team
            </p>
          </Reveal>
          <Reveal delay={0.06}>
            <h1
              className="font-serif font-light text-white leading-tight mb-6"
              style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)" }}
            >
              People you&apos;ll actually work with.
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="font-sans text-[0.95rem] text-white/55 max-w-lg leading-relaxed">
              We&apos;re a small firm by design. Every client works directly with
              a named advisor — no handoffs to junior staff, no mystery about
              who&apos;s handling your account.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Team members */}
      {team.map((member, i) => (
        <section
          key={member.name}
          className={`py-24 border-b border-border ${i % 2 === 0 ? "bg-white" : "bg-surface"}`}
        >
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 items-start">
              {/* Avatar + quick stats */}
              <Reveal>
                <div className="flex flex-col items-start">
                  <div className="w-20 h-20 rounded-full bg-navy flex items-center justify-center mb-5">
                    <span className="font-serif text-gold font-semibold text-[1.4rem] tracking-wide">
                      {member.initials}
                    </span>
                  </div>
                  <h2 className="font-serif font-semibold text-navy text-[1.2rem] mb-1">
                    {member.name}
                  </h2>
                  <p className="font-sans text-[0.7rem] text-gold font-medium tracking-widest uppercase mb-5">
                    {member.title}
                  </p>
                  <div className="w-10 h-px bg-gold/30 mb-5" />
                  <p className="font-sans text-[0.72rem] text-navy/45 leading-relaxed mb-5">
                    {member.education}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {member.focus.map((f) => (
                      <span
                        key={f}
                        className="font-sans text-[0.6rem] tracking-[0.1em] uppercase text-gold/80 bg-gold/8 border border-gold/15 px-2 py-1 rounded-sm"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>

              {/* Full bio */}
              <div className="lg:col-span-3 space-y-5">
                {member.fullBio.map((paragraph, j) => (
                  <Reveal key={j} delay={0.06 + j * 0.06}>
                    <p className="font-sans text-[0.92rem] text-navy/65 leading-[1.85]">
                      {paragraph}
                    </p>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="bg-surface py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <Reveal>
            <h2
              className="font-serif font-light text-navy mb-4"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}
            >
              Ready to work with us?
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="font-sans text-[0.9rem] text-navy/50 mb-8 max-w-sm mx-auto">
              First consultations are free and take about 30 minutes.
            </p>
          </Reveal>
          <Reveal delay={0.14}>
            <Link
              href="/contact"
              className="inline-block font-sans text-[0.82rem] font-medium bg-navy text-white px-8 py-3.5 rounded-sm hover:bg-navy-mid transition-colors duration-200"
            >
              Book a consultation →
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
