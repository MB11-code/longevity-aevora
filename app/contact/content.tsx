"use client";

import { useState } from "react";
import Image from "next/image";
import { useLang } from "../lang-context";
import { ScrollReveal } from "../scroll-reveal";
import { trackEvent } from "../analytics";

export function ContactContent() {
  const { t } = useLang();
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = {
      naam: (form.elements.namedItem("naam") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      telefoon: (form.elements.namedItem("telefoon") as HTMLInputElement).value,
      behandeling: (form.elements.namedItem("behandeling") as HTMLSelectElement).value,
      bericht: (form.elements.namedItem("bericht") as HTMLTextAreaElement).value,
    };

    if (!data.naam || !data.email || !data.bericht) {
      setStatus("error");
      setErrorMsg(t("Vul alle verplichte velden in.", "Please fill in all required fields."));
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("success");
        trackEvent("form_submit", {
          form_name: "contact",
          behandeling: data.behandeling || "geen",
        });
        // Dedicated conversion event for Google Ads via GTM
        trackEvent("contact_form_submit", {
          form_name: "contact",
          behandeling: data.behandeling || "geen",
        });
        form.reset();
      } else {
        const json = await res.json();
        setStatus("error");
        setErrorMsg(json.error || t("Er ging iets mis.", "Something went wrong."));
      }
    } catch {
      setStatus("error");
      setErrorMsg(t("Er ging iets mis. Probeer het later opnieuw.", "Something went wrong. Please try again later."));
    }
  }

  return (
    <>
      <section className="relative min-h-[50vh] flex items-center overflow-hidden -mt-[72px] pt-[72px]">
        <Image
          src="/images/praktijk-buiten.jpg"
          alt="ORAVIVUM praktijk Amsterdam"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 via-charcoal/50 to-transparent" />
        <div className="relative max-w-4xl mx-auto px-6 py-28">
          <p className="text-gold text-xs tracking-[0.35em] uppercase mb-8">Contact</p>
          <h1 className="font-playfair text-4xl md:text-6xl leading-[1.08] text-offwhite mb-10">
            {t("Maak een afspraak", "Book an appointment")}
          </h1>
          <p className="text-lg md:text-xl text-offwhite/70 leading-relaxed max-w-2xl">
            {t(
              "Neem contact op met ORAVIVUM voor een afspraak of vrijblijvend advies. Wij staan graag voor u klaar.",
              "Contact ORAVIVUM for an appointment or no-obligation advice. We look forward to hearing from you."
            )}
          </p>
        </div>
      </section>

      <section className="py-28 bg-sand/10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-20">
            <ScrollReveal>
              <div>
                <h2 className="font-playfair text-2xl mb-10">{t("Contactgegevens", "Contact details")}</h2>
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xs tracking-[0.2em] uppercase text-gold mb-3">{t("Adres", "Address")}</h3>
                    <p className="text-charcoal/60">Teniersstraat 2 hs</p>
                    <p className="text-charcoal/60">1071 DX Amsterdam</p>
                    <p className="text-charcoal/40 text-sm mt-2">
                      {t(
                        "Bij het Museumplein, op loopafstand van het Concertgebouw",
                        "Near the Museumplein, walking distance from the Concertgebouw"
                      )}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xs tracking-[0.2em] uppercase text-gold mb-3">{t("Telefoon", "Phone")}</h3>
                    <a href="tel:+31207235222" className="text-charcoal/60 hover:text-teal transition-colors">020 72 35 222</a>
                  </div>
                  <div>
                    <h3 className="text-xs tracking-[0.2em] uppercase text-gold mb-3">E-mail</h3>
                    <p className="text-charcoal/60">balie@orthodontiemuseumplein.nl</p>
                  </div>
                  <div>
                    <h3 className="text-xs tracking-[0.2em] uppercase text-gold mb-3">{t("Openingstijden", "Opening hours")}</h3>
                    <div className="text-charcoal/60 text-sm space-y-1">
                      <p>{t("Werkdagen", "Weekdays")}: 08:30 – 17:30</p>
                      <p>{t("Zaterdag", "Saturday")}: 09:30 – 16:00</p>
                      <p>{t("Zondag: Gesloten", "Sunday: Closed")}</p>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xs tracking-[0.2em] uppercase text-gold mb-3">{t("Bereikbaarheid", "Getting here")}</h3>
                    <div className="text-charcoal/60 text-sm space-y-2">
                      <p>Tram 3, 5, 12, 16 — {t("halte", "stop")} Van Baerlestraat / Concertgebouw</p>
                      <p>{t("Auto", "Car")}: Teniersstraat &amp; Q-Park Museumplein</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal staggerIndex={1}>
              <div>
                <h2 className="font-playfair text-2xl mb-10">{t("Afspraak aanvragen", "Request an appointment")}</h2>

                {status === "success" ? (
                  <div className="bg-teal/10 border border-teal/30 rounded-lg p-8 text-center">
                    <p className="font-playfair text-xl text-teal mb-3">
                      {t("Aanvraag verzonden!", "Request sent!")}
                    </p>
                    <p className="text-charcoal/60 text-sm">
                      {t(
                        "Wij nemen zo snel mogelijk contact met u op.",
                        "We will contact you as soon as possible."
                      )}
                    </p>
                  </div>
                ) : (
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div>
                      <label htmlFor="naam" className="block text-xs tracking-[0.2em] uppercase text-charcoal/50 mb-2">{t("Naam", "Name")} *</label>
                      <input
                        type="text"
                        id="naam"
                        name="naam"
                        required
                        className="w-full border border-sand/40 bg-white px-4 py-3.5 text-sm rounded-lg focus:outline-none focus:border-teal transition-colors"
                        placeholder={t("Uw volledige naam", "Your full name")}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs tracking-[0.2em] uppercase text-charcoal/50 mb-2">E-mail *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full border border-sand/40 bg-white px-4 py-3.5 text-sm rounded-lg focus:outline-none focus:border-teal transition-colors"
                        placeholder={t("uw@email.nl", "your@email.com")}
                      />
                    </div>
                    <div>
                      <label htmlFor="telefoon" className="block text-xs tracking-[0.2em] uppercase text-charcoal/50 mb-2">{t("Telefoon", "Phone")}</label>
                      <input
                        type="tel"
                        id="telefoon"
                        name="telefoon"
                        className="w-full border border-sand/40 bg-white px-4 py-3.5 text-sm rounded-lg focus:outline-none focus:border-teal transition-colors"
                        placeholder="06 - 1234 5678"
                      />
                    </div>
                    <div>
                      <label htmlFor="behandeling" className="block text-xs tracking-[0.2em] uppercase text-charcoal/50 mb-2">
                        {t("Gewenste behandeling", "Preferred treatment")}
                      </label>
                      <select
                        id="behandeling"
                        name="behandeling"
                        className="w-full border border-sand/40 bg-white px-4 py-3.5 text-sm rounded-lg focus:outline-none focus:border-teal transition-colors"
                      >
                        <option value="">{t("Selecteer een behandeling", "Select a treatment")}</option>
                        <option value="bruxisme-behandeling">{t("Bruxisme Behandeling", "Bruxism Treatment")}</option>
                        <option value="gummy-smile">Gummy Smile</option>
                        <option value="slaapapneu">{t("Slaapapneu Screening", "Sleep Apnea Screening")}</option>
                        <option value="consult">{t("Algemeen Consult", "General Consultation")}</option>
                        <option value="anders">{t("Anders", "Other")}</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="bericht" className="block text-xs tracking-[0.2em] uppercase text-charcoal/50 mb-2">{t("Bericht", "Message")} *</label>
                      <textarea
                        id="bericht"
                        name="bericht"
                        rows={4}
                        required
                        className="w-full border border-sand/40 bg-white px-4 py-3.5 text-sm rounded-lg focus:outline-none focus:border-teal transition-colors resize-none"
                        placeholder={t("Vertel ons kort over uw klachten of vraag...", "Briefly tell us about your concerns or question...")}
                      />
                    </div>

                    {status === "error" && (
                      <p className="text-red-600 text-sm">{errorMsg}</p>
                    )}

                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="w-full bg-teal text-offwhite px-8 py-4 text-xs tracking-[0.25em] uppercase rounded-lg hover:bg-teal/90 transition-colors disabled:opacity-60"
                    >
                      {status === "sending"
                        ? t("Versturen...", "Sending...")
                        : t("Verstuur aanvraag", "Send request")}
                    </button>
                  </form>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="bg-offwhite border-t border-sand/20">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <ScrollReveal>
            <div className="overflow-hidden rounded-lg border border-sand/30">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2436.5!2d4.876!3d52.357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c609ef8e8e3f8d%3A0x0!2sTeniersstraat%202%2C%201071%20DX%20Amsterdam!5e0!3m2!1snl!2snl!4v1"
                width="100%"
                height="400"
                style={{ border: 0, filter: "saturate(0.8) contrast(1.1)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="ORAVIVUM locatie - Teniersstraat 2, Amsterdam"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
