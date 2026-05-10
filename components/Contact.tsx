"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";

type Status = "idle" | "sending" | "sent" | "error";

const BUSINESS_TYPES = [
  "Restaurant / Food Service",
  "Retail",
  "Professional Services",
  "Real Estate",
  "Healthcare",
  "Technology",
  "Non-profit",
  "Other",
];

const inputCls =
  "w-full bg-white border border-border rounded-sm px-4 py-3 font-sans text-[0.88rem] text-navy placeholder-navy/25 focus:outline-none focus:border-gold transition-colors duration-200";
const labelCls =
  "block font-sans text-[0.65rem] tracking-[0.18em] uppercase text-navy/40 mb-2";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    await new Promise((r) => setTimeout(r, 900));
    setStatus("sent");
  }

  return (
    <section id="contact" className="bg-white py-28 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <Reveal>
              <p className="font-sans text-[0.68rem] tracking-[0.22em] uppercase text-gold font-medium mb-4">
                Get started
              </p>
            </Reveal>
            <Reveal delay={0.06}>
              <h2
                className="font-serif font-light text-navy leading-tight mb-6"
                style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}
              >
                Book a consultation.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="font-sans text-[0.9rem] text-navy/55 leading-relaxed mb-10 max-w-sm">
                Tell us about your business and what you&apos;re dealing with.
                First consultations are free. We&apos;ll respond within one business day.
              </p>
            </Reveal>
            <Reveal delay={0.16}>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-sm bg-gold/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4 text-gold" stroke="currentColor" strokeWidth="1.5">
                      <path d="M2 4h12v9a1 1 0 01-1 1H3a1 1 0 01-1-1V4zM5 4V3a1 1 0 011-1h4a1 1 0 011 1v1" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-sans text-[0.82rem] font-medium text-navy">234 W Hubbard St, Suite 400</p>
                    <p className="font-sans text-[0.78rem] text-navy/45">Chicago, IL 60654</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-sm bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4 text-gold" stroke="currentColor" strokeWidth="1.5">
                      <path d="M2 3h3l1.5 3.5-2 1.5a9 9 0 004.5 4.5l1.5-2L14 12v3a1 1 0 01-1 1A12 12 0 012 4a1 1 0 011-1z" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <a href="tel:3125550190" className="font-sans text-[0.82rem] text-navy/55 hover:text-navy transition-colors">
                    (312) 555-0190
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-sm bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4 text-gold" stroke="currentColor" strokeWidth="1.5">
                      <rect x="1" y="3" width="14" height="10" rx="1.5"/><path d="M1 6l7 4 7-4" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <a href="mailto:hello@halstedledger.com" className="font-sans text-[0.82rem] text-gold hover:text-navy transition-colors">
                    hello@halstedledger.com
                  </a>
                </div>
                <p className="font-sans text-[0.75rem] text-navy/35 pl-11">Mon – Fri, 8am – 6pm</p>
              </div>
            </Reveal>
          </div>

          {/* Right: form */}
          <Reveal delay={0.1}>
            <div>
              {status === "sent" ? (
                <div className="bg-surface border border-border rounded-sm p-10">
                  <div className="w-10 h-10 rounded-full bg-gold/15 flex items-center justify-center mb-4">
                    <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5 text-gold" stroke="currentColor" strokeWidth="1.8">
                      <path d="M4 10l5 5 7-8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3 className="font-serif font-semibold text-navy text-[1.4rem] mb-2">
                    Request received.
                  </h3>
                  <p className="font-sans text-[0.88rem] text-navy/55">
                    We&apos;ll be in touch within one business day to schedule your free consultation.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className={labelCls}>Name</label>
                    <input type="text" name="name" required placeholder="Your name" className={inputCls} />
                  </div>
                  <div>
                    <label className={labelCls}>Email</label>
                    <input type="email" name="email" required placeholder="you@yourbusiness.com" className={inputCls} />
                  </div>
                  <div>
                    <label className={labelCls}>Type of business</label>
                    <select
                      name="business_type"
                      required
                      defaultValue=""
                      className={inputCls + " appearance-none cursor-pointer"}
                    >
                      <option value="" disabled>Select one...</option>
                      {BUSINESS_TYPES.map((t) => (
                        <option key={t} value={t} style={{ background: "#fff", color: "#0f1c2e" }}>{t}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className={labelCls}>What can we help with?</label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      placeholder="Tax preparation, bookkeeping, business advisory, estate planning..."
                      className={inputCls + " resize-none"}
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full bg-navy text-white font-sans text-[0.8rem] font-medium tracking-wide py-4 rounded-sm hover:bg-navy-mid transition-colors duration-200 disabled:opacity-50"
                  >
                    {status === "sending" ? "Sending…" : "Request consultation →"}
                  </button>
                  <p className="font-sans text-[0.72rem] text-navy/35 text-center">
                    First consultations are free. No obligation.
                  </p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
