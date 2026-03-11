"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useLang } from "./lang-context";

export function Navbar() {
  const { lang, toggle, t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-offwhite/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 lg:px-12 py-5 flex items-center justify-between">
        <Link href="/" className="font-playfair font-bold tracking-[0.05em] text-teal">
          <span className="text-[1.6rem] leading-none">ORAVIVUM</span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-10">
          <Link href="/botox-bruxisme" className="text-[11px] tracking-[0.2em] uppercase text-charcoal/60 hover:text-teal transition-colors duration-300">
            {t("Bruxisme", "Bruxism")}
          </Link>
          <Link href="/gummy-smile" className="text-[11px] tracking-[0.2em] uppercase text-charcoal/60 hover:text-teal transition-colors duration-300">
            Gummy Smile
          </Link>
          <Link href="/slaapapneu" className="text-[11px] tracking-[0.2em] uppercase text-charcoal/60 hover:text-teal transition-colors duration-300">
            {t("Slaapapneu", "Sleep Apnea")}
          </Link>
          <Link href="/over-ons" className="text-[11px] tracking-[0.2em] uppercase text-charcoal/60 hover:text-teal transition-colors duration-300">
            {t("Over Ons", "About")}
          </Link>
          <Link
            href="/contact"
            className="text-[11px] tracking-[0.2em] uppercase bg-teal text-offwhite px-6 py-2.5 hover:bg-teal-light transition-colors duration-300"
          >
            {t("Afspraak", "Appointment")}
          </Link>
          <button
            onClick={toggle}
            className="text-[11px] tracking-[0.15em] text-charcoal/40 hover:text-teal transition-colors duration-300"
            aria-label="Switch language"
          >
            {lang === "nl" ? "NL" : "EN"} <span className="text-charcoal/20">|</span> {lang === "nl" ? "EN" : "NL"}
          </button>
        </div>

        {/* Mobile */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={toggle}
            className="text-[11px] tracking-[0.15em] text-charcoal/40"
          >
            {lang === "nl" ? "NL | EN" : "EN | NL"}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-1"
            aria-label="Menu"
          >
            <svg className="w-6 h-6 text-charcoal/70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
              {mobileOpen ? (
                <path strokeLinecap="round" d="M6 6l12 12M6 18L18 6" />
              ) : (
                <path strokeLinecap="round" d="M4 7h16M4 12h12M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-offwhite/98 backdrop-blur-lg border-t border-sand/20 px-8 py-8 space-y-6 animate-[fadeIn_0.2s_ease]">
          {[
            { href: "/botox-bruxisme", label: t("Bruxisme", "Bruxism") },
            { href: "/gummy-smile", label: "Gummy Smile" },
            { href: "/slaapapneu", label: t("Slaapapneu", "Sleep Apnea") },
            { href: "/over-ons", label: t("Over Ons", "About") },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="block text-[11px] tracking-[0.2em] uppercase text-charcoal/70"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="block text-[11px] tracking-[0.2em] uppercase text-teal font-semibold pt-2 border-t border-sand/20"
          >
            {t("Afspraak maken", "Book Appointment")}
          </Link>
        </div>
      )}
    </nav>
  );
}
