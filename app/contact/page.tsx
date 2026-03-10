import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — ORAVIVUM Oral Longevity Clinic Amsterdam",
  description:
    "Maak een afspraak bij ORAVIVUM. Gevestigd aan de Van Baerlestraat 33h, Amsterdam, bij het Museumplein. Bel, mail of plan online uw afspraak.",
  openGraph: {
    title: "Contact | ORAVIVUM Amsterdam",
    description: "Maak een afspraak bij ORAVIVUM — Oral Longevity Clinic aan het Museumplein.",
  },
};

export default function ContactPage() {
  return (
    <>
      <section className="py-24 bg-sand/10">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4">Contact</p>
          <h1 className="font-playfair text-4xl md:text-6xl mb-6">Maak een afspraak</h1>
          <p className="text-xl text-charcoal/70 max-w-2xl">
            Neem contact op met ORAVIVUM voor een afspraak of vrijblijvend advies. Wij staan graag voor u klaar.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Contact info */}
            <div>
              <h2 className="font-playfair text-2xl mb-8">Contactgegevens</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm tracking-widest uppercase text-gold mb-2">Adres</h3>
                  <p className="text-charcoal/70">Van Baerlestraat 33h</p>
                  <p className="text-charcoal/70">1071 AP Amsterdam</p>
                  <p className="text-charcoal/50 text-sm mt-1">Bij het Museumplein, op loopafstand van het Concertgebouw</p>
                </div>
                <div>
                  <h3 className="text-sm tracking-widest uppercase text-gold mb-2">Telefoon</h3>
                  <p className="text-charcoal/70">[TELEFOON — WORDT AANGEVULD]</p>
                </div>
                <div>
                  <h3 className="text-sm tracking-widest uppercase text-gold mb-2">E-mail</h3>
                  <p className="text-charcoal/70">[EMAIL — WORDT AANGEVULD]</p>
                </div>
                <div>
                  <h3 className="text-sm tracking-widest uppercase text-gold mb-2">Openingstijden</h3>
                  <div className="text-charcoal/70 text-sm space-y-1">
                    <p>Maandag – Vrijdag: 08:00 – 18:00</p>
                    <p>Zaterdag &amp; Zondag: Gesloten</p>
                    <p className="text-charcoal/50 italic mt-2">[Openingstijden worden aangevuld]</p>
                  </div>
                </div>
                <div>
                  <h3 className="text-sm tracking-widest uppercase text-gold mb-2">Bereikbaarheid</h3>
                  <div className="text-charcoal/70 text-sm space-y-1">
                    <p>🚊 Tram 2, 5, 12 — halte Museumplein</p>
                    <p>🚗 Parkeergarage Q-Park Museumplein</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact form */}
            <div>
              <h2 className="font-playfair text-2xl mb-8">Afspraak aanvragen</h2>
              <form className="space-y-6" action="#" method="POST">
                <div>
                  <label htmlFor="naam" className="block text-sm tracking-widest uppercase text-charcoal/70 mb-2">Naam *</label>
                  <input
                    type="text"
                    id="naam"
                    name="naam"
                    required
                    className="w-full border border-sand/50 bg-white px-4 py-3 text-sm focus:outline-none focus:border-teal transition-colors"
                    placeholder="Uw volledige naam"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm tracking-widest uppercase text-charcoal/70 mb-2">E-mail *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full border border-sand/50 bg-white px-4 py-3 text-sm focus:outline-none focus:border-teal transition-colors"
                    placeholder="uw@email.nl"
                  />
                </div>
                <div>
                  <label htmlFor="telefoon" className="block text-sm tracking-widest uppercase text-charcoal/70 mb-2">Telefoon</label>
                  <input
                    type="tel"
                    id="telefoon"
                    name="telefoon"
                    className="w-full border border-sand/50 bg-white px-4 py-3 text-sm focus:outline-none focus:border-teal transition-colors"
                    placeholder="06 - 1234 5678"
                  />
                </div>
                <div>
                  <label htmlFor="behandeling" className="block text-sm tracking-widest uppercase text-charcoal/70 mb-2">Gewenste behandeling</label>
                  <select
                    id="behandeling"
                    name="behandeling"
                    className="w-full border border-sand/50 bg-white px-4 py-3 text-sm focus:outline-none focus:border-teal transition-colors"
                  >
                    <option value="">Selecteer een behandeling</option>
                    <option value="botox-bruxisme">Botox Bruxisme</option>
                    <option value="gummy-smile">Gummy Smile</option>
                    <option value="slaapapneu">Slaapapneu Screening</option>
                    <option value="consult">Algemeen Consult</option>
                    <option value="anders">Anders</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="bericht" className="block text-sm tracking-widest uppercase text-charcoal/70 mb-2">Bericht</label>
                  <textarea
                    id="bericht"
                    name="bericht"
                    rows={4}
                    className="w-full border border-sand/50 bg-white px-4 py-3 text-sm focus:outline-none focus:border-teal transition-colors resize-none"
                    placeholder="Vertel ons kort over uw klachten of vraag..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-teal text-offwhite px-8 py-4 text-sm tracking-widest uppercase hover:bg-teal/90 transition-colors"
                >
                  Verstuur aanvraag
                </button>
                <p className="text-xs text-charcoal/40">
                  Dit formulier is momenteel niet actief. Neem telefonisch of per e-mail contact op voor een afspraak.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="bg-sand/20 h-[400px] flex items-center justify-center">
        <div className="text-center text-charcoal/30">
          <p className="text-4xl mb-4">📍</p>
          <p className="font-playfair text-xl">Van Baerlestraat 33h, Amsterdam</p>
          <p className="text-sm mt-2">Google Maps integratie volgt</p>
        </div>
      </section>
    </>
  );
}
