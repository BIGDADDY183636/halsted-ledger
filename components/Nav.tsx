const links = [
  { label: "Services", href: "#services" },
  { label: "Team",     href: "#team" },
  { label: "Blog",     href: "#blog" },
  { label: "Contact",  href: "#contact" },
];

export default function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo mark */}
        <a href="/" className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-sm bg-navy flex items-center justify-center flex-shrink-0">
            <span className="font-serif text-gold text-[0.7rem] font-semibold leading-none">
              HL
            </span>
          </div>
          <span className="font-serif font-semibold text-navy text-[1rem] tracking-tight">
            Halsted Ledger
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-7">
          {links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="font-sans text-[0.8rem] text-navy/55 hover:text-navy transition-colors duration-150"
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            className="font-sans text-[0.78rem] font-medium bg-navy text-white px-5 py-2 rounded-sm hover:bg-navy-mid transition-colors duration-150"
          >
            Book a consultation
          </a>
        </nav>

        <a
          href="#contact"
          className="md:hidden font-sans text-[0.76rem] font-medium bg-navy text-white px-4 py-2 rounded-sm"
        >
          Book now
        </a>
      </div>
    </header>
  );
}
