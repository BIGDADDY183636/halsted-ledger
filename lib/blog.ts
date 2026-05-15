export type Post = {
  slug: string;
  tag: string;
  title: string;
  preview: string;
  date: string;
  body: string;
};

export const posts: Post[] = [
  {
    slug: "2025-tax-code-changes",
    tag: "Tax Planning",
    title: "What the 2025 tax code changes mean for your small business",
    preview:
      "Three provisions buried in the recent omnibus bill could meaningfully affect how you structure deductions this year.",
    date: "Jan 15, 2026",
    body: "The Tax Relief for American Families and Workers Act of 2025 introduced three changes that directly affect small business owners: an extension of 100% bonus depreciation through 2026, revised thresholds for the §179 deduction ($1.22M for 2025), and updated safe-harbor rules for home office deductions. For Chicago small businesses operating as pass-through entities, the most actionable change is the bonus depreciation extension — any equipment purchased before December 31st, 2025 qualifies for full first-year expensing rather than the phased depreciation schedule that would otherwise apply. If you made significant capital investments this year or are planning to, book a strategy session with us before Q4 closes. The window matters.",
  },
  {
    slug: "s-corp-conversion-guide",
    tag: "Entity Structure",
    title: "Should you convert your sole proprietorship to an S-Corp?",
    preview:
      "If you're clearing more than $50k in net profit, the answer is probably yes — but the timing and method matter.",
    date: "Mar 4, 2026",
    body: "The core argument for S-Corp election is straightforward: as a sole proprietor, you pay self-employment tax (15.3%) on your entire net profit. As an S-Corp shareholder-employee, you only pay payroll taxes on a 'reasonable salary' — the remainder flows through as a distribution, which isn't subject to SE tax. On $120k of net profit with a $70k reasonable salary, that's roughly $7,650 in annual SE tax savings, minus the additional cost of running payroll and filing an 1120-S. The math usually works in your favor above $50k in net profit, but the election must be filed by March 15th of the year you want it to take effect — or within 75 days of forming a new entity. We help clients evaluate the tradeoff, set the right salary, and handle the IRS paperwork. The conversion itself is mechanical; the planning around it is where the value is.",
  },
  {
    slug: "restaurant-bookkeeping-mistakes",
    tag: "Bookkeeping",
    title: "Five bookkeeping mistakes Chicago restaurant owners make (and how to fix them)",
    preview:
      "Commingled accounts, late reconciliation, and ignored POS reports top the list. Here's the practical fix for each.",
    date: "Apr 22, 2026",
    body: "After ten years of working with Chicago restaurant owners, the same five errors show up on nearly every set of books we inherit: (1) Commingled personal and business expenses — the fix is a dedicated business debit card and a 30-minute monthly review. (2) Reconciling quarterly instead of monthly — by the time you find the error, it's compounded. (3) Ignoring POS reports — your point-of-sale system produces a daily sales summary; it should match your bank deposit every single day. (4) Misclassifying inventory purchases as expenses — food cost is an inventory item until it's used, and the distinction matters for your P&L. (5) Not tracking tips correctly — tip income is taxable, and the IRS has specific rules about allocated tips for employers. None of these are catastrophic in isolation, but together they produce financials that can't be trusted — which means you're flying blind every time you make a pricing, staffing, or expansion decision.",
  },
];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
