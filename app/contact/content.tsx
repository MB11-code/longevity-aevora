"use client";

import { useLang } from "../lang-context";

export function ContactContent() {
  const { t } = useLang();

  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-20 bg-sand/8">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="max-w-2xl">
            <div className="section-divider mb-8" />
            <p className="text-gold text-[11px] tracking-[0.4em] uppercase mb-5">Contact</p>
            <h1 className="font-playfair text-4xl md:text-6xl leading-[1.1] mb-8">
              {t("Maak een afspraak", "Book an appointment")}
            </h1>
            <p className="text-lg text-charcoal/55 max-w-xl leading-relaxed">
              {t(
                "Neem contact op met ORAVIVUM voor een afspraak of vrijblijvend advies. Wij staan graag voor u klaar.",
                "Contact ORAVIVUM for an appointment or no-obligation advice. We look forward to hearing from you."
              )}
            </p>
          </div>
        </div>
      </section>

      <section className="py-28 lg:py-32">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="grid md:grid-cols-2 gap-20 lg:gap-28">
            {/* Contact info */}
            <div>
              <h2 className="font-playfair text-2xl mb-12">{t("Contactgegevens", "Contact details")}</h2>
              <div className="space-y-10">
                <div>
                  <h3 className="text-[11px] tracking-[0.2em] uppercase text-gold mb-4">{t("Adres", "Address")}</h3>
                  <p className="text-charcoal/60 text-[15px]">Teniersstraat 2 hs</p>
                  <p className="text-charcoal/60 text-[15px]">1071 DX Amsterdam</p>
                  <p className="text-charcoal/35 text-[13px] mt-3">
                    {t(
                      "Bij het Museumplein, op loopafstand van het Concertgebouw",
                      "Near the Museumplein, walking distance from the Concertgebouw"
                    )}
                  </p>
                </div>
                <div>
                  <h3 className="text-[11px] tracking-[0.2em] uppercase text-gold mb-4">{t("Telefoon", "Phone")}</h3>
                  <p className="text-charcoal/60 text-[15px]">020 72 35 222</p>
                </div>
                <div>
                  <h3 className="text-[11px] tracking-[0.2em] uppercase text-gold mb-4">E-mail</h3>
                  <p className="text-charcoal/35 text-[13px] italic">{t("Wordt aangevuld", "To be confirmed")}</p>
                </div>
                <div>
                  <h3 className="text-[11px] tracking-[0.2em] uppercase text-gold mb-4">{t("Openingstijden", "Opening hours")}</h3>
                  <div className="text-charcoal/55 text-[15px] space-y-2">
                    <p>{t("Werkdagen", "Weekdays")}: 08:30 – 17:30</p>
                    <p>{t("Zaterdag", "Saturday")}: 09:30 – 16:00</p>
                    <p>{t("Zondag: Gesloten", "Sunday: Closed")}</p>
                  </div>
                </div>
                <div>
                  <h3 className="text-[11px] tracking-[0.2em] uppercase text-gold mb-4">{t("Bereikbaarheid", "Getting here")}</h3>
                  <div className="text-charcoal/55 text-[15px] space-y-2">
                    <p>Tram 3, 5, 12, 16 — {t("halte", "stop")} Van Baerlestraat / Concertgebouw</p>
                    <p>{t("Auto", "Car")}: Teniersstraat ({t("gratis parkeren", "free parking")}) &amp; Q-Park Museumplein</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact form */}
            <div>
              <h2 className="font-playfair text-2xl mb-12">{t("Afspraak aanvragen", "Request an appointment")}</h2>
              <form className="space-y-7" action="#" method="POST">
                <div>
                  <label htmlFor="naam" className="block text-[11px] tracking-[0.2em] uppercase text-charcoal/45 mb-3">{t("Naam", "Name")} *</label>
                  <input
                    type="text"
                    id="naam"
                    name="naam"
                    required
                    className="w-full border border-sand/40 bg-white px-5 py-4 text-[15px] focus:outline-none focus:border-teal transition-colors duration-300"
                    placeholder={t("Uw volledige naam", "Your full name")}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-[11px] tracking-[0.2em] uppercase text-charcoal/45 mb-3">E-mail *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full border border-sand/40 bg-white px-5 py-4 text-[15px] focus:outline-none focus:border-teal transition-colors duration-300"
                    placeholder={t("uw@email.nl", "your@email.com")}
                  />
                </div>
                <div>
                  <label htmlFor="telefoon" className="block text-[11px] tracking-[0.2em] uppercase text-charcoal/45 mb-3">{t("Telefoon", "Phone")}</label>
                  <input
                    type="tel"
                    id="telefoon"
                    name="telefoon"
                    className="w-full border border-sand/40 bg-white px-5 py-4 text-[15px] focus:outline-none focus:border-teal transition-colors duration-300"
                    placeholder="06 - 1234 5678"
                  />
                </div>
                <div>
                  <label htmlFor="behandeling" className="block text-[11px] tracking-[0.2em] uppercase text-charcoal/45 mb-3">
                    {t("Gewenste behandeling", "Preferred treatment")}
                  </label>
                  <select
                    id="behandeling"
                    name="behandeling"
                    className="w-full border border-sand/40 bg-white px-5 py-4 text-[15px] focus:outline-none focus:border-teal transition-colors duration-300"
                  >
                    <option value="">{t("Selecteer een behandeling", "Select a treatment")}</option>
                    <option value="botox-bruxisme">{t("Botox Bruxisme", "Botox for Bruxism")}</option>
                    <option value="gummy-smile">Gummy Smile</option>
                    <option value="slaapapneu">{t("Slaapapneu Screening", "Sleep Apnea Screening")}</option>
                    <option value="consult">{t("Algemeen Consult", "General Consultation")}</option>
                    <option value="anders">{t("Anders", "Other")}</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="bericht" className="block text-[11px] tracking-[0.2em] uppercase text-charcoal/45 mb-3">{t("Bericht", "Message")}</label>
                  <textarea
                    id="bericht"
                    name="bericht"
                    rows={5}
                    className="w-full border border-sand/40 bg-white px-5 py-4 text-[15px] focus:outline-none focus:border-teal transition-colors duration-300 resize-none"
                    placeholder={t("Vertel ons kort over uw klachten of vraag...", "Briefly tell us about your concerns or question...")}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-teal text-offwhite px-8 py-4 text-[11px] tracking-[0.25em] uppercase hover:bg-teal-light transition-colors duration-300"
                >
                  {t("Verstuur aanvraag", "Send request")}
                </button>
                <p className="text-[11px] text-charcoal/30 leading-relaxed">
                  {t(
                    "Dit formulier is momenteel niet actief. Neem telefonisch of per e-mail contact op voor een afspraak.",
                    "This form is not yet active. Please contact us by phone or email to book an appointment."
                  )}
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="bg-sand/10 h-[400px] flex items-center justify-center">
        <div className="text-center text-charcoal/20">
          <p className="font-playfair text-xl mb-2">Teniersstraat 2 hs, Amsterdam</p>
          <p className="text-[13px]">{t("Kaartintegratie volgt", "Map integration coming soon")}</p>
        </div>
      </section>
    </>
  );
}
