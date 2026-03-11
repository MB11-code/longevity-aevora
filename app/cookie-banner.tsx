"use client";

import { useState, useEffect } from "react";
import { useLang } from "./lang-context";

export function CookieBanner() {
  const { t } = useLang();
  const [visible, setVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("oravivum-cookies");
    if (!consent) {
      setVisible(true);
    }
  }, []);

  function accept(level: "all" | "necessary") {
    localStorage.setItem("oravivum-cookies", level);
    setVisible(false);
    if (level === "all") {
      // Load analytics here when ready
      // e.g. window.gtag?.('consent', 'update', { analytics_storage: 'granted' });
    }
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6">
      <div className="max-w-2xl mx-auto bg-white border border-sand/40 rounded-xl shadow-2xl p-6 md:p-8">
        <h3 className="font-playfair text-lg mb-3">
          {t("Cookies", "Cookies")}
        </h3>
        <p className="text-sm text-charcoal/60 leading-relaxed mb-4">
          {t(
            "Wij gebruiken cookies om onze website te verbeteren en uw ervaring te optimaliseren. Noodzakelijke cookies zijn altijd actief. Met uw toestemming plaatsen wij ook analytische cookies om het gebruik van de site te meten.",
            "We use cookies to improve our website and optimize your experience. Necessary cookies are always active. With your consent, we also place analytical cookies to measure site usage."
          )}
        </p>

        {showDetails && (
          <div className="mb-4 p-4 bg-sand/10 rounded-lg text-sm space-y-3">
            <div>
              <p className="font-semibold text-charcoal mb-1">{t("Noodzakelijk", "Necessary")}</p>
              <p className="text-charcoal/50 text-xs">
                {t(
                  "Deze cookies zijn essentieel voor het functioneren van de website (bijv. taalvoorkeur). Altijd actief.",
                  "These cookies are essential for the website to function (e.g. language preference). Always active."
                )}
              </p>
            </div>
            <div>
              <p className="font-semibold text-charcoal mb-1">{t("Analytisch", "Analytical")}</p>
              <p className="text-charcoal/50 text-xs">
                {t(
                  "Deze cookies helpen ons begrijpen hoe bezoekers de site gebruiken (Google Analytics). Geanonimiseerde data.",
                  "These cookies help us understand how visitors use the site (Google Analytics). Anonymized data."
                )}
              </p>
            </div>
          </div>
        )}

        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={() => accept("all")}
            className="bg-teal text-offwhite px-6 py-2.5 text-xs tracking-[0.15em] uppercase rounded-lg hover:bg-teal/90 transition-colors"
          >
            {t("Alles accepteren", "Accept all")}
          </button>
          <button
            onClick={() => accept("necessary")}
            className="border border-sand/40 text-charcoal/60 px-6 py-2.5 text-xs tracking-[0.15em] uppercase rounded-lg hover:border-teal hover:text-teal transition-colors"
          >
            {t("Alleen noodzakelijk", "Necessary only")}
          </button>
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="text-xs text-charcoal/40 underline underline-offset-2 hover:text-teal transition-colors"
          >
            {t("Details", "Details")}
          </button>
        </div>

        <p className="mt-4 text-[10px] text-charcoal/30">
          {t(
            "Meer informatie vindt u in ons ",
            "More information can be found in our "
          )}
          <a href="/privacy" className="underline hover:text-teal">{t("privacybeleid", "privacy policy")}</a>.
        </p>
      </div>
    </div>
  );
}
