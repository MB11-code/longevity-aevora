"use client";

import { useLang } from "../lang-context";

export function PrivacyContent() {
  const { t } = useLang();

  return (
    <section className="py-28 bg-offwhite">
      <div className="max-w-3xl mx-auto px-6 prose prose-charcoal">
        <h1 className="font-playfair text-4xl mb-10">{t("Privacybeleid", "Privacy Policy")}</h1>

        <p className="text-sm text-charcoal/40 mb-8">{t("Laatst bijgewerkt: maart 2026", "Last updated: March 2026")}</p>

        <h2 className="font-playfair text-2xl mt-10 mb-4">{t("1. Wie zijn wij?", "1. Who are we?")}</h2>
        <p>
          {t(
            "ORAVIVUM — Oral Longevity Clinic Amsterdam is gevestigd aan de Teniersstraat 2 hs, 1071 DX Amsterdam. Wij zijn verantwoordelijk voor de verwerking van uw persoonsgegevens zoals beschreven in dit privacybeleid.",
            "ORAVIVUM — Oral Longevity Clinic Amsterdam is located at Teniersstraat 2 hs, 1071 DX Amsterdam. We are responsible for the processing of your personal data as described in this privacy policy."
          )}
        </p>

        <h2 className="font-playfair text-2xl mt-10 mb-4">{t("2. Welke gegevens verzamelen wij?", "2. What data do we collect?")}</h2>
        <p>{t("Wij verzamelen de volgende persoonsgegevens:", "We collect the following personal data:")}</p>
        <ul className="list-disc pl-6 space-y-1 text-charcoal/70">
          <li>{t("Naam, e-mailadres en telefoonnummer (via het contactformulier)", "Name, email address and phone number (via the contact form)")}</li>
          <li>{t("Technische gegevens: IP-adres, browsertype, bezochte pagina's (via cookies)", "Technical data: IP address, browser type, pages visited (via cookies)")}</li>
        </ul>

        <h2 className="font-playfair text-2xl mt-10 mb-4">{t("3. Cookies", "3. Cookies")}</h2>
        <p>{t("Onze website gebruikt de volgende soorten cookies:", "Our website uses the following types of cookies:")}</p>
        <ul className="list-disc pl-6 space-y-1 text-charcoal/70">
          <li>
            <strong>{t("Noodzakelijke cookies:", "Necessary cookies:")}</strong>{" "}
            {t(
              "Deze zijn essentieel voor het functioneren van de website, zoals het opslaan van uw taalvoorkeur en cookie-consent. Deze cookies worden altijd geplaatst.",
              "These are essential for the website to function, such as storing your language preference and cookie consent. These cookies are always placed."
            )}
          </li>
          <li>
            <strong>{t("Analytische cookies:", "Analytical cookies:")}</strong>{" "}
            {t(
              "Met uw toestemming gebruiken wij Google Analytics om het gebruik van de website te analyseren. Deze gegevens worden geanonimiseerd verwerkt.",
              "With your consent, we use Google Analytics to analyze website usage. This data is processed anonymously."
            )}
          </li>
        </ul>
        <p>
          {t(
            "U kunt uw cookie-voorkeuren op elk moment wijzigen door uw browserinstellingen aan te passen of uw lokale opslag te wissen.",
            "You can change your cookie preferences at any time by adjusting your browser settings or clearing your local storage."
          )}
        </p>

        <h2 className="font-playfair text-2xl mt-10 mb-4">{t("4. Waarvoor gebruiken wij uw gegevens?", "4. What do we use your data for?")}</h2>
        <ul className="list-disc pl-6 space-y-1 text-charcoal/70">
          <li>{t("Het beantwoorden van uw contactverzoek", "Responding to your contact request")}</li>
          <li>{t("Het inplannen van afspraken", "Scheduling appointments")}</li>
          <li>{t("Het verbeteren van onze website", "Improving our website")}</li>
        </ul>

        <h2 className="font-playfair text-2xl mt-10 mb-4">{t("5. Bewaartermijn", "5. Retention period")}</h2>
        <p>
          {t(
            "Wij bewaren uw gegevens niet langer dan noodzakelijk. Contactformulier-gegevens worden maximaal 12 maanden bewaard.",
            "We do not retain your data longer than necessary. Contact form data is stored for a maximum of 12 months."
          )}
        </p>

        <h2 className="font-playfair text-2xl mt-10 mb-4">{t("6. Uw rechten", "6. Your rights")}</h2>
        <p>
          {t(
            "Op grond van de AVG heeft u het recht op inzage, correctie, verwijdering en overdracht van uw persoonsgegevens. Ook kunt u bezwaar maken tegen de verwerking. Neem hiervoor contact met ons op via telefoon: 020 72 35 222.",
            "Under the GDPR, you have the right to access, correct, delete and transfer your personal data. You can also object to processing. Please contact us by phone: 020 72 35 222."
          )}
        </p>

        <h2 className="font-playfair text-2xl mt-10 mb-4">{t("7. Contact", "7. Contact")}</h2>
        <p>
          ORAVIVUM — Oral Longevity Clinic Amsterdam<br />
          Teniersstraat 2 hs<br />
          1071 DX Amsterdam<br />
          {t("Telefoon", "Phone")}: 020 72 35 222
        </p>
      </div>
    </section>
  );
}
