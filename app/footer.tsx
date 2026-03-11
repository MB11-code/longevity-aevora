"use client";

import Link from "next/link";
import { useLang } from "./lang-context";

export function Footer() {
  const { t } = useLang();

  return (
    <footer className="bg-charcoal text-offwhite/70">
      <div className="max-w-7xl mx-auto px-8 lg:px-12 py-24">
        <div className="grid md:grid-cols-12 gap-12 lg:gap-16">
          <div className="md:col-span-4">
            <h3 className="font-playfair text-2xl text-offwhite mb-5">ORAVIVUM</h3>
            <p className="text-sm leading-[1.8] text-offwhite/40 max-w-xs">
              {t(
                "De eerste oral longevity kliniek van Amsterdam. Uw mond als spiegel van uw gezondheid.",
                "Amsterdam's first oral longevity clinic. Your mouth as a mirror of your health."
              )}
            </p>
          </div>
          <div className="md:col-span-3">
            <h4 className="text-gold text-[11px] tracking-[0.2em] uppercase mb-6">{t("Behandelingen", "Treatments")}</h4>
            <div className="space-y-3 text-sm">
              <p><Link href="/botox-bruxisme" className="text-offwhite/40 hover:text-offwhite transition-colors duration-300">{t("Botox Bruxisme", "Botox for Bruxism")}</Link></p>
              <p><Link href="/gummy-smile" className="text-offwhite/40 hover:text-offwhite transition-colors duration-300">Gummy Smile</Link></p>
              <p><Link href="/slaapapneu" className="text-offwhite/40 hover:text-offwhite transition-colors duration-300">{t("Slaapapneu Screening", "Sleep Apnea Screening")}</Link></p>
            </div>
          </div>
          <div className="md:col-span-2">
            <h4 className="text-gold text-[11px] tracking-[0.2em] uppercase mb-6">Contact</h4>
            <div className="space-y-3 text-sm text-offwhite/40">
              <p>Teniersstraat 2 hs</p>
              <p>1071 DX Amsterdam</p>
              <p className="pt-2">020 72 35 222</p>
            </div>
          </div>
          <div className="md:col-span-3">
            <h4 className="text-gold text-[11px] tracking-[0.2em] uppercase mb-6">{t("Openingstijden", "Opening Hours")}</h4>
            <div className="space-y-3 text-sm text-offwhite/40">
              <p>{t("Werkdagen", "Weekdays")}: 08:30 – 17:30</p>
              <p>{t("Zaterdag", "Saturday")}: 09:30 – 16:00</p>
              <p>{t("Zondag: Gesloten", "Sunday: Closed")}</p>
            </div>
          </div>
        </div>
        <div className="border-t border-offwhite/8 mt-20 pt-8 text-center text-[11px] text-offwhite/20 tracking-wide">
          {t("© 2026 ORAVIVUM — Oral Longevity Clinic Amsterdam", "© 2026 ORAVIVUM — Oral Longevity Clinic Amsterdam")}
        </div>
      </div>
    </footer>
  );
}
