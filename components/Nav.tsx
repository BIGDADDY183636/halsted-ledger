"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { label: "Home",     href: "/" },
  { label: "Services", href: "/services" },
  { label: "Team",     href: "/team" },
  { label: "Blog",     href: "/blog" },
  { label: "Contact",  href: "/contact" },
];

export default function Nav() {
  const pathname = usePathname();

  function active(href: string) {
    return href === "/" ? pathname === "/" : pathname.startsWith(href);
  }

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-sm bg-navy flex items-center justify-center flex-shrink-0">
            <span className="font-serif text-gold text-[0.7rem] font-semibold leading-none">
              HL
            </span>
          </div>
          <span className="font-serif font-semibold text-navy text-[1rem] tracking-tight">
            Halsted Ledger
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          {links.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className={`relative font-sans text-[0.8rem] transition-colors duration-150 pb-1 ${
                active(href) ? "text-navy" : "text-navy/50 hover:text-navy"
              }`}
            >
              {label}
              {/* Gold underline on active route */}
              {active(href) && (
                <span className="absolute bottom-0 left-0 w-full h-px bg-gold" />
              )}
            </Link>
          ))}
          <Link
            href="/contact"
            className="font-sans text-[0.78rem] font-medium bg-navy text-white px-5 py-2 rounded-sm hover:bg-navy-mid transition-colors duration-150"
          >
            Book a consultation
          </Link>
        </nav>

        {/* Mobile CTA */}
        <Link
          href="/contact"
          className="md:hidden font-sans text-[0.76rem] font-medium bg-navy text-white px-4 py-2 rounded-sm"
        >
          Book now
        </Link>
      </div>
    </header>
  );
}
