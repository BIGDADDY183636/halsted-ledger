export type ServiceData = {
  id: string;
  title: string;
  description: string;
  included: string[];
  whoFor: string;
  engagement: string;
};

export const services: ServiceData[] = [
  {
    id: "tax-preparation",
    title: "Tax Preparation",
    description:
      "Individual and business returns, quarterly estimates, and full audit support. We file accurately and on time — every time.",
    included: [
      "Business and personal returns (1040, 1120-S, 1065, 1120)",
      "Quarterly estimated tax payment calculations",
      "W-2 and 1099 preparation and filing",
      "State and local returns for Illinois and neighboring states",
      "Prior-year amendment filings",
      "Audit representation and IRS correspondence",
    ],
    whoFor:
      "Sole proprietors, LLCs, S-corps, partnerships, and individuals with complex situations — including real estate, investments, or multiple income streams.",
    engagement: "Annual engagement, with quarterly check-ins during peak filing season (January through April).",
  },
  {
    id: "bookkeeping",
    title: "Bookkeeping",
    description:
      "Monthly reconciliation, P&L statements, and clean books ready for tax season — so you always know exactly where you stand.",
    included: [
      "Monthly bank and credit card reconciliation",
      "Profit & loss and balance sheet statements",
      "Accounts payable and receivable tracking",
      "Payroll ledger maintenance and review",
      "Chart of accounts setup and optimization",
      "Year-end close and clean books for tax prep",
    ],
    whoFor:
      "Businesses generating $100K–$5M in annual revenue who need reliable monthly financials without the cost of a full-time bookkeeper or controller.",
    engagement: "Ongoing monthly retainer. Most clients are fully set up within 30 days.",
  },
  {
    id: "advisory",
    title: "Business Advisory",
    description:
      "Strategic guidance on entity structure, growth planning, and financial decisions. We translate the IRS code into actions that actually help your business grow.",
    included: [
      "Entity structure review (LLC vs. S-corp vs. C-corp)",
      "Annual financial strategy and goal-setting sessions",
      "Cash flow modeling and runway analysis",
      "Growth, acquisition, and exit planning",
      "Tax minimization strategy",
      "Vendor and contract financial review",
    ],
    whoFor:
      "Established businesses looking for a thinking partner, not just a tax preparer. Best for owners making decisions about structure, growth, or eventual sale.",
    engagement:
      "Quarterly advisory sessions with on-call availability between meetings. Initial onboarding takes one to two months.",
  },
  {
    id: "estate-planning",
    title: "Estate Planning",
    description:
      "Trusts, wills, and wealth transfer strategies coordinated with your broader financial picture — for lasting peace of mind.",
    included: [
      "Trust and will coordination with your estate attorney",
      "Beneficiary designation review across all accounts",
      "Retirement account distribution strategy",
      "Annual gift tax planning and exclusion tracking",
      "Business succession planning",
      "Asset titling and re-titling review",
    ],
    whoFor:
      "Business owners with significant assets, individuals approaching retirement, or anyone concerned about efficient, tax-advantaged wealth transfer to the next generation.",
    engagement:
      "One-time initial engagement (six to eight weeks) followed by an annual review. Ongoing advisory available.",
  },
];
