import Reveal from "@/components/Reveal";

const team = [
  {
    initials: "SM",
    name: "Sarah Marston",
    title: "CPA, Managing Partner",
    bio: "12 years in private practice, specializing in small business tax strategy and IRS representation across Illinois.",
  },
  {
    initials: "JK",
    name: "James Kowalski",
    title: "CFP, Financial Advisor",
    bio: "Focused on retirement planning and estate strategy for Chicago families and closely-held businesses.",
  },
  {
    initials: "AP",
    name: "Alicia Patel",
    title: "Senior Bookkeeper",
    bio: "Client relations and bookkeeping specialist with a decade of experience across restaurant and retail accounting.",
  },
];

export default function Team() {
  return (
    <section id="team" className="bg-white py-28 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <p className="font-sans text-[0.68rem] tracking-[0.22em] uppercase text-gold font-medium mb-4">
            The team
          </p>
        </Reveal>
        <Reveal delay={0.06}>
          <h2
            className="font-serif font-light text-navy leading-tight mb-16"
            style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}
          >
            People you&apos;ll actually work with.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <Reveal key={member.name} delay={0.08 + i * 0.1}>
              <div className="flex flex-col">
                {/* Avatar */}
                <div className="w-16 h-16 rounded-full bg-navy flex items-center justify-center mb-5 flex-shrink-0">
                  <span className="font-serif text-gold font-semibold text-[1.1rem] tracking-wide">
                    {member.initials}
                  </span>
                </div>
                {/* Info */}
                <h3 className="font-serif font-semibold text-navy text-[1.05rem] mb-0.5">
                  {member.name}
                </h3>
                <p className="font-sans text-[0.72rem] text-gold font-medium tracking-wide uppercase mb-4">
                  {member.title}
                </p>
                <div className="w-8 h-px bg-gold/30 mb-4" />
                <p className="font-sans text-[0.83rem] text-navy/55 leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
