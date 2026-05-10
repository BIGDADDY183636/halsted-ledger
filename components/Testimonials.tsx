import Reveal from "@/components/Reveal";

const testimonials = [
  {
    quote:
      "Working with Halsted Ledger transformed how I think about our business finances. We went from dreading tax season to actually looking forward to the annual review. The advisory work alone paid for three years of fees.",
    company: "North Branch Restaurant Group",
    role: "Founder & CEO",
  },
  {
    quote:
      "They identified deductions we had missed for three years running. The ROI on their advisory service paid for itself in the first quarter. More importantly, I finally understand my own financials.",
    company: "Lakeview Holdings",
    role: "Managing Director",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-navy py-28">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <p className="font-sans text-[0.68rem] tracking-[0.22em] uppercase text-gold font-medium mb-4">
            Client results
          </p>
        </Reveal>
        <Reveal delay={0.06}>
          <h2
            className="font-serif font-light text-white leading-tight mb-16"
            style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}
          >
            What our clients say.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <Reveal key={t.company} delay={0.1 + i * 0.1}>
              <div className="bg-white/[0.05] border border-white/10 rounded-sm p-8">
                {/* Gold quote mark */}
                <div
                  className="font-serif text-gold/40 mb-4 leading-none select-none"
                  style={{ fontSize: "4rem" }}
                  aria-hidden="true"
                >
                  &ldquo;
                </div>
                <p className="font-serif italic text-white/80 text-[1rem] leading-relaxed mb-8">
                  {t.quote}
                </p>
                <div className="flex items-center gap-3 pt-6 border-t border-white/10">
                  <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                    <span className="font-serif text-gold text-[0.7rem] font-semibold">
                      {t.company[0]}
                    </span>
                  </div>
                  <div>
                    <p className="font-sans text-[0.78rem] font-medium text-white">
                      {t.company}
                    </p>
                    <p className="font-sans text-[0.7rem] text-white/40">
                      {t.role}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
