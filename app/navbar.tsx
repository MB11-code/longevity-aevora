"use client";

import Link from "next/link";
import { useLang } from "./lang-context";
import { useState, useEffect } from "react";

export function Navbar() {
  const { lang, toggle, t } = useLang();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-teal/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className={`font-playfair font-bold tracking-wide transition-colors duration-300 ${scrolled ? "text-offwhite" : "text-teal"}`}>
          <span className="text-2xl">ORAVIVUM</span>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link href="/botox-bruxisme" className={`text-xs tracking-[0.2em] uppercase transition-colors ${scrolled ? "text-offwhite/70 hover:text-offwhite" : "text-charcoal/70 hover:text-teal"}`}>
            {t("Bruxisme", "Bruxism")}
          </Link>
          <Link href="/gummy-smile" className={`text-xs tracking-[0.2em] uppercase transition-colors ${scrolled ? "text-offwhite/70 hover:text-offwhite" : "text-charcoal/70 hover:text-teal"}`}>
            Gummy Smile
          </Link>
          <Link href="/slaapapneu" className={`text-xs tracking-[0.2em] uppercase transition-colors ${scrolled ? "text-offwhite/70 hover:text-offwhite" : "text-charcoal/70 hover:text-teal"}`}>
            {t("Slaapapneu", "Sleep Apnea")}
          </Link>
          <Link href="/over-ons" className={`text-xs tracking-[0.2em] uppercase transition-colors ${scrolled ? "text-offwhite/70 hover:text-offwhite" : "text-charcoal/70 hover:text-teal"}`}>
            {t("Over Ons", "About")}
          </Link>
          <Link href="/contact" className={`text-xs tracking-[0.2em] uppercase px-5 py-2.5 rounded-lg transition-colors ${scrolled ? "bg-gold text-charcoal hover:bg-gold/90" : "bg-teal text-offwhite hover:bg-teal/90"}`}>
            {t("Afspraak", "Appointment")}
          </Link>
          <button
            onClick={toggle}
            className={`text-xs tracking-[0.2em] uppercase border px-3 py-1.5 rounded-lg transition-colors ${scrolled ? "border-offwhite/30 text-offwhite/60 hover:border-offwhite hover:text-offwhite" : "border-sand/60 text-charcoal/60 hover:border-teal hover:text-teal"}`}
            aria-label="Switch language"
          >
            {lang === "nl" ? "EN" : "NL"}
          </button>
        </div>
        {/* Mobile menu */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={toggle}
            className={`text-xs tracking-[0.2em] uppercase border px-2 py-1 rounded-lg ${scrolled ? "border-offwhite/30 text-offwhite/60" : "border-sand/60 text-charcoal/60"}`}
          >
            {lang === "nl" ? "EN" : "NL"}
          </button>
          <details className="relative">
            <summary className={`list-none cursor-pointer p-2 ${scrolled ? "text-offwhite" : "text-charcoal"}`}>
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </summary>
            <div className="absolute right-0 top-full mt-2 bg-offwhite border border-sand/40 shadow-lg py-4 px-6 flex flex-col gap-4 min-w-[200px] rounded-lg">
              <Link href="/botox-bruxisme" className="text-xs tracking-[0.2em] uppercase">{t("Bruxisme", "Bruxism")}</Link>
              <Link href="/gummy-smile" className="text-xs tracking-[0.2em] uppercase">Gummy Smile</Link>
              <Link href="/slaapapneu" className="text-xs tracking-[0.2em] uppercase">{t("Slaapapneu", "Sleep Apnea")}</Link>
              <Link href="/over-ons" className="text-xs tracking-[0.2em] uppercase">{t("Over Ons", "About")}</Link>
              <Link href="/contact" className="text-xs tracking-[0.2em] uppercase text-teal font-semibold">{t("Afspraak maken", "Book Appointment")}</Link>
            </div>
          </details>
        </div>
      </div>
    </nav>
  );
}
