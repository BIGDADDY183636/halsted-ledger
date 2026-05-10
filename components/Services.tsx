import Reveal from "@/components/Reveal";

const services = [
  {
    title: "Tax Preparation",
    description:
      "Individual and business returns, quarterly estimates, and full audit support. We file accurately and on time — every time.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M14 3H6a2 2 0 00-2 2v14a2 2 0 002 2h12a2 2 0 002-2V8l-5-5z" />
        <path d="M14 3v5h5M9 12h6M9 16h6" />
      </svg>
    ),
  },
  {
    title: "Bookkeeping",
    description:
      "Monthly reconciliation, P&L statements, and clean books ready for tax season — so you always know exactly where you stand.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M4 19.5A2.5 2.5 0 016.5 17H20M4 19.5V5a2.5 2.5 0 012.5-2.5H20v15M4 19.5a2.5 2.5 0 002.5 2.5H20" />
        <path d="M9 8h6M9 12h4" />
      </svg>
    ),
  },
  {
    title: "Business Advisory",
    description:
      "Strategic guidance on entity structure, growth planning, and financial decisions. We translate the IRS code into actions that actually help your business grow.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
        <polyline points="16 7 22 7 22 13" />
      </svg>
    ),
  },
  {
    title: "Estate Planning",
    description:
      "Trusts, wills, and wealth transfer strategies coordinated with your broader financial picture — for lasting peace of mind.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-surface py-28">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <p className="font-sans text-[0.68rem] tracking-[0.22em] uppercase text-gold font-medium mb-4">
            What we do
          </p>
        </Reveal>
        <Reveal delay={0.06}>
          <h2
            className="font-serif font-light text-navy leading-tight mb-4"
            style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}
          >
            Full-service accounting,<br />
            <em>built for small businesses.</em>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="font-sans text-[0.9rem] text-navy/55 mb-16 max-w-lg leading-relaxed">
            We cover the full financial picture — from day-to-day bookkeeping to
            long-term planning — so you can run your business without worrying
            about the numbers.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={0.08 + i * 0.08}>
              <div className="bg-white border border-border rounded-sm p-8 hover:shadow-sm transition-shadow duration-200">
                <div className="w-10 h-10 rounded-sm bg-navy/[0.06] flex items-center justify-center text-navy-mid mb-5">
                  {s.icon}
                </div>
                <h3 className="font-serif font-semibold text-navy text-[1.15rem] mb-3">
                  {s.title}
                </h3>
                <p className="font-sans text-[0.85rem] text-navy/55 leading-relaxed">
                  {s.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
