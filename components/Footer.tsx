export default function Footer() {
  return (
    <footer className="bg-navy py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-7 h-7 rounded-sm bg-white/10 flex items-center justify-center flex-shrink-0">
                <span className="font-serif text-gold text-[0.7rem] font-semibold">HL</span>
              </div>
              <span className="font-serif font-semibold text-white text-[0.95rem]">
                Halsted Ledger
              </span>
            </div>
            <p className="font-sans text-[0.8rem] text-white/40 leading-relaxed max-w-xs">
              Independent tax, accounting, and advisory for Chicago&apos;s small businesses.
              Real partnership. Year-round support.
            </p>
          </div>

          {/* Services */}
          <div>
            <p className="font-sans text-[0.62rem] tracking-[0.2em] uppercase text-gold/60 mb-3">
              Services
            </p>
            {["Tax Preparation", "Bookkeeping", "Advisory", "Estate Planning"].map((s) => (
              <a
                key={s}
                href="#services"
                className="block font-sans text-[0.78rem] text-white/40 hover:text-white/70 transition-colors duration-150 mb-1.5"
              >
                {s}
              </a>
            ))}
          </div>

          {/* Contact */}
          <div>
            <p className="font-sans text-[0.62rem] tracking-[0.2em] uppercase text-gold/60 mb-3">
              Contact
            </p>
            <div className="space-y-1.5 font-sans text-[0.78rem] text-white/40">
              <p>234 W Hubbard St, Suite 400</p>
              <p>Chicago, IL 60654</p>
              <p className="pt-1">(312) 555-0190</p>
              <a href="mailto:hello@halstedledger.com" className="block text-gold/70 hover:text-gold transition-colors">
                hello@halstedledger.com
              </a>
              <p className="pt-1">Mon – Fri, 8am – 6pm</p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/[0.07] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="font-sans text-[0.68rem] text-white/20">
            © 2025 Halsted Ledger &ensp;·&ensp; Chicago, IL &ensp;·&ensp; Not a real firm. Concept build for JBAR Design Studio.
          </p>
          <p className="font-sans text-[0.68rem] text-white/15">
            CPA services are licensed and regulated. This is a design demo.
          </p>
        </div>
      </div>
    </footer>
  );
}
