"use client";

import Link from "next/link";
import { useLang } from "./lang-context";

export function Footer() {
  const { t } = useLang();

  return (
    <footer className="bg-charcoal text-offwhite/80">
      {/* Kwaliteitskeurmerken strip */}
      <div className="border-b border-offwhite/10">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-wrap items-center justify-center gap-8 text-xs text-offwhite/30 tracking-[0.15em] uppercase">
          <span>VTvO</span>
          <span className="text-offwhite/10">|</span>
          <span>EAS</span>
          <span className="text-offwhite/10">|</span>
          <span>ANT</span>
          <span className="text-offwhite/10">|</span>
          <span>OK Register</span>
          <span className="text-offwhite/10">|</span>
          <span>BIG-{t("geregistreerd", "registered")}</span>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-4 gap-12">
          <div>
            <h3 className="font-playfair text-2xl text-offwhite mb-4">ORAVIVUM</h3>
            <p className="text-sm leading-relaxed text-offwhite/60">
              {t(
                "De eerste oral longevity kliniek van Amsterdam. Uw mond als spiegel van uw gezondheid.",
                "Amsterdam's first oral longevity clinic. Your mouth as a mirror of your health."
              )}
            </p>
          </div>
          <div>
            <h4 className="text-gold text-xs tracking-[0.2em] uppercase mb-5">{t("Behandelingen", "Treatments")}</h4>
            <div className="space-y-3 text-sm">
              <p><Link href="/botox-bruxisme" className="text-offwhite/60 hover:text-offwhite transition-colors">{t("Botox Bruxisme", "Botox for Bruxism")}</Link></p>
              <p><Link href="/gummy-smile" className="text-offwhite/60 hover:text-offwhite transition-colors">Gummy Smile</Link></p>
              <p><Link href="/slaapapneu" className="text-offwhite/60 hover:text-offwhite transition-colors">{t("Slaapapneu Screening", "Sleep Apnea Screening")}</Link></p>
            </div>
          </div>
          <div>
            <h4 className="text-gold text-xs tracking-[0.2em] uppercase mb-5">Contact</h4>
            <div className="space-y-3 text-sm text-offwhite/60">
              <p>Teniersstraat 2 hs</p>
              <p>1071 DX Amsterdam</p>
              <p><a href="tel:+31207235222" className="hover:text-offwhite transition-colors">020 72 35 222</a></p>
            </div>
          </div>
          <div>
            <h4 className="text-gold text-xs tracking-[0.2em] uppercase mb-5">{t("Openingstijden", "Opening Hours")}</h4>
            <div className="space-y-3 text-sm text-offwhite/60">
              <p>{t("Werkdagen", "Weekdays")}: 08:30 – 17:30</p>
              <p>{t("Zaterdag", "Saturday")}: 09:30 – 16:00</p>
              <p>{t("Zondag: Gesloten", "Sunday: Closed")}</p>
            </div>
          </div>
        </div>
        <div className="border-t border-offwhite/10 mt-16 pt-8 text-center text-xs text-offwhite/30">
          {t("© 2026 ORAVIVUM — Oral Longevity Clinic Amsterdam. Alle rechten voorbehouden.", "© 2026 ORAVIVUM — Oral Longevity Clinic Amsterdam. All rights reserved.")}
        </div>
      </div>
    </footer>
  );
}
