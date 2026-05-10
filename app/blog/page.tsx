import type { Metadata } from "next";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Blog — Halsted Ledger",
  description:
    "Practical tax and accounting guidance for Chicago small business owners. No jargon.",
};

export default function BlogPage() {
  return (
    <main className="pt-16">
      {/* Page header */}
      <section className="bg-navy py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="font-sans text-[0.68rem] tracking-[0.22em] uppercase text-gold font-medium mb-4">
            From the firm
          </p>
          <h1
            className="font-serif font-light text-white leading-tight mb-6"
            style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)" }}
          >
            Practical guidance, no jargon.
          </h1>
          <p className="font-sans text-[0.95rem] text-white/55 max-w-lg leading-relaxed">
            Articles on tax planning, entity structure, bookkeeping, and the
            financial decisions that actually move the needle for small businesses.
          </p>
        </div>
      </section>

      {/* All posts — Blog component without limit */}
      <Blog />
    </main>
  );
}
