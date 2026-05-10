export type TeamMember = {
  initials: string;
  name: string;
  title: string;
  shortBio: string;
  fullBio: string[];
  education: string;
  focus: string[];
};

export const team: TeamMember[] = [
  {
    initials: "SM",
    name: "Sarah Marston",
    title: "CPA, Managing Partner",
    shortBio:
      "12 years in private practice, specializing in small business tax strategy and IRS representation across Illinois.",
    fullBio: [
      "Sarah founded Halsted Ledger in 2013 after a decade at a mid-size regional firm, where she built a specialty in small business tax planning across manufacturing, food service, and professional services. Her clients come to her when they've outgrown their previous accountant — or when they've just received a letter from the IRS they don't understand.",
      "She holds a CPA license in Illinois and Indiana and a B.S. in Accounting from the University of Illinois Urbana-Champaign. She's also an Enrolled Agent, which means she can represent clients before the IRS at any level.",
      "Her clients describe her as the first accountant who ever explained their taxes in plain English. Outside the office, she volunteers with the Logan Square Chamber of Commerce's small business mentorship program and serves on the board of a local youth literacy nonprofit.",
    ],
    education: "B.S. Accounting, University of Illinois Urbana-Champaign · CPA (IL, IN) · Enrolled Agent",
    focus: ["Small business tax strategy", "IRS representation", "S-Corp elections", "Multi-state filing"],
  },
  {
    initials: "JK",
    name: "James Kowalski",
    title: "CFP, Financial Advisor",
    shortBio:
      "Focused on retirement planning and estate strategy for Chicago families and closely-held businesses.",
    fullBio: [
      "James joined Halsted Ledger in 2017 to build out the firm's financial planning and estate coordination practice. A Certified Financial Planner with a background in private wealth management, he spent eight years at a private bank before deciding he'd rather work with independent business owners than institutional clients.",
      "He holds a B.A. in Finance from DePaul University and earned his CFP designation from the CFP Board in 2012. He coordinates closely with estate attorneys and insurance advisors to make sure clients' financial, legal, and insurance plans are actually working together — something that often doesn't happen when each advisor operates in isolation.",
      "James is a South Side native who coaches youth soccer on weekends and is quietly convinced that the best retirement advice he's ever given a client started with 'here's what I'd do if I were you.'",
    ],
    education: "B.A. Finance, DePaul University · Certified Financial Planner (CFP®)",
    focus: ["Retirement planning", "Estate coordination", "Business succession", "Wealth transfer"],
  },
  {
    initials: "AP",
    name: "Alicia Patel",
    title: "Senior Bookkeeper",
    shortBio:
      "Client relations and bookkeeping specialist with a decade of experience across restaurant and retail accounting.",
    fullBio: [
      "Alicia leads client relations and bookkeeping at Halsted Ledger, where she's worked since 2019. She brings a decade of hands-on accounting experience across restaurant groups, independent retailers, and e-commerce businesses — environments where the books are complicated, the transactions are high-volume, and accuracy isn't optional.",
      "She holds an MBA from Loyola University Chicago with a concentration in Managerial Accounting. Her specialty is inheriting messy books from businesses that have outgrown their spreadsheets, and turning them into something their owners can actually use to make decisions.",
      "Alicia is meticulous, patient, and somehow enjoys reconciling years-old ledgers. She grew up in Pilsen and is still the person her family calls when their taxes get confusing.",
    ],
    education: "MBA (Managerial Accounting), Loyola University Chicago · QuickBooks ProAdvisor",
    focus: ["Monthly bookkeeping", "Restaurant accounting", "Ledger cleanup", "Client onboarding"],
  },
];
