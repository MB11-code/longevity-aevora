import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Over Ons — ORAVIVUM Oral Longevity Clinic Amsterdam",
  description:
    "Leer het team achter ORAVIVUM kennen. Lotte Meereboer, MSc orthodontist met 18+ jaar ervaring, verbindt mondgezondheid met longevity bij het Museumplein.",
  openGraph: {
    title: "Over Ons | ORAVIVUM Amsterdam",
    description: "Het verhaal en team achter ORAVIVUM — de eerste oral longevity kliniek van Amsterdam.",
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Lotte Meereboer",
  jobTitle: "MSc Tandarts voor Orthodontie",
  worksFor: { "@type": "Organization", name: "ORAVIVUM" },
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "Vrije Universiteit Amsterdam" },
    { "@type": "CollegeOrUniversity", name: "Universiteit van Murcia" },
  ],
  description: "Orthodontist met meer dan 18 jaar ervaring. Oprichter Dutch Aligner Society. BIG-geregistreerd. Specialist in digitale orthodontie en oral longevity.",
  knowsAbout: ["Orthodontie", "Clear Aligners", "Oral Longevity", "Botox Bruxisme", "Slaapapneu"],
};

export default function OverOnsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />

      <section className="py-24 bg-sand/10">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4">Over ons</p>
          <h1 className="font-playfair text-4xl md:text-6xl mb-6">De mond als gateway to the body</h1>
          <p className="text-xl text-charcoal/70 max-w-2xl">
            ORAVIVUM — &quot;De Levende Mond&quot; — is geboren uit de overtuiging dat mondgezondheid de sleutel is tot een langer, gezonder leven.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-playfair text-3xl mb-8">Ons verhaal</h2>
          <div className="space-y-4 text-charcoal/70 leading-relaxed">
            <p>
              De mond is het beginpunt van het spijsverteringskanaal, de poort tot de luchtwegen en een spiegel van uw algehele gezondheid.
              Wetenschappelijk onderzoek toont steeds duidelijker aan dat chronische ontstekingen in de mond — van parodontitis tot
              onbehandeld bruxisme — directe gevolgen hebben voor hart, hersenen en immuunsysteem.
            </p>
            <p>
              ORAVIVUM is de eerste kliniek in Amsterdam die deze verbinding centraal stelt. Wij kijken niet alleen naar tanden en kiezen,
              maar naar de mond als onderdeel van uw totale gezondheid. Elke behandeling die wij aanbieden — van botox tegen tandenknarsen
              tot slaapapneu screening — is geworteld in deze visie.
            </p>
            <p>
              De naam ORAVIVUM combineert het Latijnse <em>ora</em> (mond) met <em>vivum</em> (levend, vitaal).
              De Levende Mond — een mond die niet alleen functioneert, maar bijdraagt aan een vitaal en lang leven.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-sand/10">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div className="bg-sand/30 aspect-[3/4] flex items-center justify-center">
              <div className="text-center text-charcoal/30">
                <p className="text-6xl mb-4">👩‍⚕️</p>
                <p className="text-sm">Foto Lotte Meereboer</p>
              </div>
            </div>
            <div>
              <h2 className="font-playfair text-3xl mb-6">Lotte Meereboer, MSc</h2>
              <p className="text-gold text-sm tracking-widest uppercase mb-6">Tandarts voor Orthodontie</p>
              <div className="space-y-4 text-charcoal/70 leading-relaxed">
                <p>
                  Lotte Meereboer studeerde Tandheelkunde aan de Vrije Universiteit Amsterdam en behaalde vervolgens haar
                  Master of Science Orthodontics aan de Universiteit van Murcia in Spanje.
                </p>
                <p>
                  Met meer dan 18 jaar ervaring in de orthodontie is zij een erkend expert in digitale orthodontie en clear aligner behandelingen.
                  Zij is oprichter van de Dutch Aligner Society en spreker op vele nationale en internationale symposia en cursussen.
                </p>
                <p>
                  Bij ORAVIVUM combineert zij haar orthodontische expertise met de nieuwste inzichten uit longevity-wetenschap,
                  met als doel patiënten niet alleen een mooie glimlach te geven, maar bij te dragen aan hun algehele gezondheid.
                </p>
              </div>
              <div className="mt-8 space-y-2 text-sm text-charcoal/50">
                <p>✓ BIG-geregistreerd tandarts</p>
                <p>✓ VTvO kwaliteitskeurmerk (Vereniging Tandartsen voor Orthodontie)</p>
                <p>✓ European Aligner Society (EAS)</p>
                <p>✓ ANT (Associatie Nederlandse Tandartsen)</p>
                <p>✓ Oprichter Dutch Aligner Society</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-playfair text-3xl mb-8">Onze visie op longevity</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              ["🔬", "Evidence-based", "Elke behandeling bij ORAVIVUM is gebaseerd op wetenschappelijk onderzoek. Wij volgen de nieuwste inzichten uit de longevity-wetenschap en vertalen deze naar de dagelijkse praktijk."],
              ["🤝", "Persoonlijk", "Geen lopende-bandwerk maar persoonlijke aandacht. Wij nemen de tijd voor een grondige anamnese en bespreken samen met u de beste aanpak voor uw situatie."],
              ["🌱", "Preventief", "Voorkomen is beter dan genezen. Door vroegtijdige screening en behandeling van bruxisme, slaapapneu en mondontsteking verkleinen wij de risico's op ernstige aandoeningen later."],
            ].map(([icon, title, desc]) => (
              <div key={title} className="p-6 border border-sand/30 bg-sand/5">
                <span className="text-3xl mb-4 block">{icon}</span>
                <h3 className="font-playfair text-xl mb-3">{title}</h3>
                <p className="text-sm text-charcoal/70 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-sand/10">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-playfair text-3xl mb-8">De praktijk aan het Museumplein</h2>
          <div className="space-y-4 text-charcoal/70 leading-relaxed">
            <p>
              ORAVIVUM is gevestigd aan de Van Baerlestraat 33h in Amsterdam, op loopafstand van het Museumplein,
              het Concertgebouw en het Stedelijk Museum. De kliniek is modern ingericht met state-of-the-art apparatuur
              voor digitale orthodontie.
            </p>
            <p>
              De praktijk is goed bereikbaar met openbaar vervoer (tram 2, 5 en 12, halte Museumplein) en per auto.
              Parkeren kan in de parkeergarage Q-Park Museumplein.
            </p>
          </div>
          <div className="mt-8">
            <Link href="/contact" className="inline-block bg-teal text-offwhite px-8 py-4 text-sm tracking-widest uppercase hover:bg-teal/90 transition-colors">
              Neem contact op
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
