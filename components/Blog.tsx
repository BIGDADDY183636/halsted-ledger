import Reveal from "@/components/Reveal";

const posts = [
  {
    tag: "Tax Planning",
    title: "What the 2025 tax code changes mean for your small business",
    preview:
      "Three provisions buried in the recent omnibus bill could meaningfully affect how you structure deductions this year.",
    date: "Jan 15, 2025",
  },
  {
    tag: "Entity Structure",
    title: "Should you convert your sole proprietorship to an S-Corp?",
    preview:
      "If you're clearing more than $50k in net profit, the answer is probably yes — but the timing and method matter.",
    date: "Mar 4, 2025",
  },
  {
    tag: "Bookkeeping",
    title: "Five bookkeeping mistakes Chicago restaurant owners make (and how to fix them)",
    preview:
      "Commingled accounts, late reconciliation, and ignored POS reports top the list. Here's the practical fix for each.",
    date: "Apr 22, 2025",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="bg-surface py-28 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <p className="font-sans text-[0.68rem] tracking-[0.22em] uppercase text-gold font-medium mb-4">
            From the firm
          </p>
        </Reveal>
        <Reveal delay={0.06}>
          <h2
            className="font-serif font-light text-navy leading-tight mb-16"
            style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}
          >
            Practical guidance, no jargon.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <Reveal key={post.title} delay={0.08 + i * 0.1}>
              <article className="bg-white border border-border rounded-sm p-7 flex flex-col h-full hover:shadow-sm transition-shadow duration-200">
                <div className="flex items-center justify-between mb-5">
                  <span className="font-sans text-[0.62rem] tracking-[0.16em] uppercase text-gold font-medium bg-gold/10 px-2.5 py-1 rounded-sm">
                    {post.tag}
                  </span>
                  <span className="font-sans text-[0.7rem] text-navy/35">
                    {post.date}
                  </span>
                </div>
                <h3 className="font-serif font-semibold text-navy text-[1rem] leading-snug mb-3 flex-1">
                  {post.title}
                </h3>
                <p className="font-sans text-[0.82rem] text-navy/50 leading-relaxed mb-6">
                  {post.preview}
                </p>
                <a
                  href="#contact"
                  className="font-sans text-[0.76rem] font-medium text-gold hover:text-navy transition-colors duration-150 mt-auto"
                >
                  Read more →
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
