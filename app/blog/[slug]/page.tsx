import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { posts, getPostBySlug } from "@/lib/blog";

// Pre-render all slugs at build time
export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} — Halsted Ledger`,
    description: post.preview,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <main className="pt-16">
      {/* Article header */}
      <section className="bg-navy py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <div className="flex items-center gap-3 mb-6">
              <span className="font-sans text-[0.62rem] tracking-[0.16em] uppercase text-gold font-medium bg-gold/15 px-2.5 py-1 rounded-sm">
                {post.tag}
              </span>
              <span className="font-sans text-[0.72rem] text-white/35">{post.date}</span>
            </div>
          </Reveal>
          <Reveal delay={0.06}>
            <h1
              className="font-serif font-light text-white leading-tight mb-6"
              style={{ fontSize: "clamp(2rem, 4.5vw, 3.4rem)" }}
            >
              {post.title}
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="font-serif italic text-white/60 text-[1.05rem] leading-relaxed">
              {post.preview}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Article body */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <div className="prose-custom">
              <p className="font-sans text-[0.95rem] text-navy/70 leading-[1.9]">
                {post.body}
              </p>
            </div>
          </Reveal>

          {/* Divider */}
          <Reveal delay={0.1}>
            <div className="my-14 flex items-center gap-4">
              <div className="flex-1 h-px bg-border" />
              <span className="font-serif text-gold/50 text-[1.2rem]">HL</span>
              <div className="flex-1 h-px bg-border" />
            </div>
          </Reveal>

          {/* CTA */}
          <Reveal delay={0.12}>
            <div className="bg-surface border border-border rounded-sm p-8 text-center">
              <p className="font-serif font-semibold text-navy text-[1.1rem] mb-2">
                Questions about how this applies to your business?
              </p>
              <p className="font-sans text-[0.85rem] text-navy/50 mb-6">
                First consultations are free. We&apos;ll give you a straight answer.
              </p>
              <Link
                href="/contact"
                className="inline-block font-sans text-[0.8rem] font-medium bg-navy text-white px-7 py-3 rounded-sm hover:bg-navy-mid transition-colors duration-200"
              >
                Book a consultation →
              </Link>
            </div>
          </Reveal>

          {/* Back link */}
          <Reveal delay={0.14}>
            <div className="mt-12">
              <Link
                href="/blog"
                className="font-sans text-[0.78rem] text-navy/40 hover:text-navy transition-colors"
              >
                ← Back to all articles
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
