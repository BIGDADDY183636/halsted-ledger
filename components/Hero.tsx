import CountUp from "@/components/CountUp";

const stats = [
  { target: 12, suffix: "+", label: "Years in practice" },
  { target: 300, suffix: "+", label: "Clients served" },
  { target: 98, suffix: "%", label: "Client retention" },
];

export default function Hero() {
  return (
    <section className="min-h-screen bg-white flex items-center pt-16">
      <div className="max-w-6xl mx-auto px-6 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/25 px-3 py-1.5 rounded-sm mb-8">
              <div className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
              <span className="font-sans text-[0.65rem] tracking-[0.18em] uppercase text-gold font-medium">
                Independent firm &ensp;·&ensp; Chicago, IL
              </span>
            </div>

            <h1
              className="font-serif font-light text-navy leading-[1.1]"
              style={{ fontSize: "clamp(2.4rem, 4.5vw, 4rem)" }}
            >
              Tax, accounting, and advisory for Chicago&apos;s small businesses.
            </h1>

            <p className="font-sans text-[1rem] text-navy/55 leading-relaxed mt-6 max-w-md">
              Independent firm. Real partnership. Year-round support — not just
              during filing season.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">
              <a
                href="#contact"
                className="font-sans text-[0.82rem] font-medium bg-navy text-white px-7 py-3.5 rounded-sm hover:bg-navy-mid transition-colors duration-200"
              >
                Book a consultation →
              </a>
              <a
                href="#services"
                className="font-sans text-[0.82rem] text-navy/55 hover:text-navy border border-border px-7 py-3.5 rounded-sm transition-colors duration-200"
              >
                Our services
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-14 pt-10 border-t border-border">
              {stats.map((s) => (
                <div key={s.label}>
                  <p
                    className="font-serif text-navy font-semibold tabular-nums"
                    style={{ fontSize: "clamp(1.8rem, 3vw, 2.4rem)" }}
                  >
                    <CountUp target={s.target} suffix={s.suffix} />
                  </p>
                  <p className="font-sans text-[0.73rem] text-navy/45 mt-1 leading-snug">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* SVG illustration */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-md">
              <svg
                viewBox="0 0 440 340"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-auto"
                aria-hidden="true"
              >
                {/* Grid lines */}
                {[280, 210, 140, 70].map((y) => (
                  <line
                    key={y}
                    x1="40"
                    y1={y}
                    x2="420"
                    y2={y}
                    stroke="#e2e8f0"
                    strokeWidth="1"
                  />
                ))}
                {/* Axis */}
                <line x1="40" y1="280" x2="420" y2="280" stroke="#e2e8f0" strokeWidth="1.5" />

                {/* Bars */}
                {[
                  { x: 65,  h: 80,  y: 200 },
                  { x: 130, h: 120, y: 160 },
                  { x: 195, h: 100, y: 180 },
                  { x: 260, h: 155, y: 125 },
                  { x: 325, h: 130, y: 150 },
                  { x: 390, h: 190, y: 90  },
                ].map(({ x, h, y }) => (
                  <rect
                    key={x}
                    x={x - 20}
                    y={y}
                    width="40"
                    height={h}
                    fill="#2a4a6b"
                    opacity="0.12"
                    rx="2"
                  />
                ))}

                {/* Trend line (gold) */}
                <path
                  d="M45 260 C120 240 200 200 260 160 C320 120 370 100 420 70"
                  stroke="#c9a96e"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  fill="none"
                />
                {/* Trend dots */}
                {[
                  [45,  260],
                  [260, 160],
                  [420, 70],
                ].map(([cx, cy]) => (
                  <circle
                    key={`${cx}-${cy}`}
                    cx={cx}
                    cy={cy}
                    r="4"
                    fill="#c9a96e"
                  />
                ))}

                {/* Callout card */}
                <rect x="290" y="40" width="120" height="50" rx="4" fill="white" stroke="#e2e8f0" strokeWidth="1.5" />
                <text x="350" y="62" textAnchor="middle" fontFamily="Georgia,serif" fontSize="13" fontWeight="600" fill="#c9a96e">+24%</text>
                <text x="350" y="78" textAnchor="middle" fontFamily="system-ui,sans-serif" fontSize="9" fill="#0f1c2e" opacity="0.5">avg. tax savings</text>

                {/* Y-axis labels */}
                {["$0", "$50k", "$100k", "$150k"].map((label, i) => (
                  <text
                    key={label}
                    x="32"
                    y={284 - i * 70}
                    textAnchor="end"
                    fontFamily="system-ui,sans-serif"
                    fontSize="9"
                    fill="#0f1c2e"
                    opacity="0.35"
                  >
                    {label}
                  </text>
                ))}
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
