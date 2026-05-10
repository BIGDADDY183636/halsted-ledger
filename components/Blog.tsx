import Link from "next/link";
import Reveal from "@/components/Reveal";
import { posts } from "@/lib/blog";

interface Props {
  limit?: number;
}

export default function Blog({ limit }: Props) {
  const displayed = limit ? posts.slice(0, limit) : posts;

  return (
    <section className="bg-surface py-28 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <p className="font-sans text-[0.68rem] tracking-[0.22em] uppercase text-gold font-medium mb-4">
            From the firm
          </p>
        </Reveal>
        <Reveal delay={0.06}>
          <div className="flex items-end justify-between mb-16">
            <h2
              className="font-serif font-light text-navy leading-tight"
              style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}
            >
              Practical guidance, no jargon.
            </h2>
            {limit && (
              <Link
                href="/blog"
                className="hidden md:block font-sans text-[0.78rem] font-medium text-gold hover:text-navy transition-colors duration-150 flex-shrink-0 ml-8"
              >
                Read all articles →
              </Link>
            )}
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {displayed.map((post, i) => (
            <Reveal key={post.slug} delay={0.08 + i * 0.1}>
              <article className="bg-white border border-border rounded-sm p-7 flex flex-col h-full hover:shadow-sm transition-shadow duration-200">
                <div className="flex items-center justify-between mb-5">
                  <span className="font-sans text-[0.62rem] tracking-[0.16em] uppercase text-gold font-medium bg-gold/10 px-2.5 py-1 rounded-sm">
                    {post.tag}
                  </span>
                  <span className="font-sans text-[0.7rem] text-navy/35">{post.date}</span>
                </div>
                <h3 className="font-serif font-semibold text-navy text-[1rem] leading-snug mb-3 flex-1">
                  {post.title}
                </h3>
                <p className="font-sans text-[0.82rem] text-navy/50 leading-relaxed mb-6">
                  {post.preview}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="font-sans text-[0.76rem] font-medium text-gold hover:text-navy transition-colors duration-150 mt-auto"
                >
                  Read more →
                </Link>
              </article>
            </Reveal>
          ))}
        </div>

        {limit && (
          <div className="mt-10 md:hidden text-center">
            <Link href="/blog" className="font-sans text-[0.78rem] font-medium text-gold hover:text-navy transition-colors">
              Read all articles →
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
