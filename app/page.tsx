import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ORAVIVUM — Oral Longevity Clinic Amsterdam | De Levende Mond",
  description:
    "ORAVIVUM is de eerste oral longevity kliniek van Amsterdam. Botox bruxisme, gummy smile behandeling en slaapapneu screening bij het Museumplein.",
  openGraph: {
    title: "ORAVIVUM — Oral Longevity Clinic Amsterdam",
    description: "Uw gezondheid begint in de mond. De eerste oral longevity kliniek van Amsterdam.",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Wat is oral longevity?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oral longevity is een nieuwe benadering die mondgezondheid verbindt met gezond ouder worden. Wetenschappelijk onderzoek toont aan dat chronische ontstekingen in de mond, zoals parodontitis, geassocieerd zijn met een 20-40% verhoogd risico op hart- en vaatziekten, diabetes type 2 en neurodegeneratieve aandoeningen.",
      },
    },
    {
      "@type": "Question",
      name: "Wat doet ORAVIVUM anders dan een gewone tandarts?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ORAVIVUM kijkt verder dan alleen uw gebit. Wij combineren orthodontische expertise met longevity-wetenschap en bieden behandelingen als botox tegen bruxisme, gummy smile correctie en slaapapneu screening — allemaal vanuit het perspectief dat mondgezondheid de basis is voor een langer, gezonder leven.",
      },
    },
    {
      "@type": "Question",
      name: "Welke behandelingen biedt ORAVIVUM aan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ORAVIVUM biedt drie kernbehandelingen: (1) Botox tegen bruxisme (tandenknarsen), een behandeling van 15 minuten die 3-6 maanden werkt; (2) Gummy smile correctie, een behandeling van 10-15 minuten met direct resultaat; (3) Slaapapneu screening en behandeling met een MRA-apparaat.",
      },
    },
    {
      "@type": "Question",
      name: "Is botox tegen tandenknarsen veilig?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja, botox tegen bruxisme is een veilige en veelgebruikte behandeling. De botox wordt in lage doses geïnjecteerd in de kaakspieren, waardoor de spieren ontspannen zonder dat u moeite heeft met kauwen. De behandeling wordt uitgevoerd door ervaren specialisten en heeft minimale bijwerkingen.",
      },
    },
    {
      "@type": "Question",
      name: "Hoeveel Nederlanders hebben last van slaapapneu?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Naar schatting heeft 10-15% van de Nederlandse bevolking een vorm van obstructief slaapapneu syndroom (OSAS). Bij veel mensen wordt dit niet gediagnosticeerd. ORAVIVUM biedt screening aan die de relatie tussen kaakpositie en luchtwegobstructie onderzoekt.",
      },
    },
    {
      "@type": "Question",
      name: "Waar is ORAVIVUM gevestigd?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ORAVIVUM is gevestigd aan de Van Baerlestraat 33h in Amsterdam, direct bij het Museumplein. De kliniek is goed bereikbaar met openbaar vervoer (tram 2, 5 en 12).",
      },
    },
    {
      "@type": "Question",
      name: "Wordt de behandeling vergoed door mijn zorgverzekering?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Vergoeding hangt af van uw zorgverzekering en aanvullende polis. Botox tegen bruxisme en gummy smile vallen doorgaans niet onder de basisverzekering. Slaapapneu behandeling met een MRA-apparaat wordt in sommige gevallen wel vergoed. Neem contact met ons op voor een persoonlijk advies.",
      },
    },
    {
      "@type": "Question",
      name: "Wie is de behandelaar bij ORAVIVUM?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ORAVIVUM wordt geleid door Lotte Meereboer, MSc tandarts voor orthodontie met meer dan 18 jaar ervaring. Zij studeerde Tandheelkunde aan de Vrije Universiteit en behaalde haar Master of Science Orthodontics aan de Universiteit van Murcia. Zij is BIG-geregistreerd en ingeschreven in het kwaliteitskeurmerk van de VTvO.",
      },
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal/5 via-offwhite to-sand/20" />
        <div className="absolute top-20 right-0 w-[500px] h-[500px] rounded-full bg-sand/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-teal/5 blur-3xl" />
        <div className="relative max-w-6xl mx-auto px-6 py-24">
          <div className="max-w-2xl">
            <p className="text-gold text-sm tracking-[0.3em] uppercase mb-6">Oral Longevity Clinic Amsterdam</p>
            <h1 className="font-playfair text-5xl md:text-7xl leading-[1.1] text-charcoal mb-8">
              Uw gezondheid begint in de mond
            </h1>
            <p className="text-lg md:text-xl text-charcoal/70 leading-relaxed mb-10 max-w-lg">
              ORAVIVUM verbindt orthodontische expertise met longevity-wetenschap.
              Wij kijken verder dan uw gebit — naar uw algehele gezondheid en vitaliteit.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-teal text-offwhite px-8 py-4 text-sm tracking-widest uppercase hover:bg-teal/90 transition-colors"
            >
              Plan een afspraak
            </Link>
          </div>
        </div>
      </section>

      {/* Diensten */}
      <section className="py-24 bg-offwhite">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4 text-center">Onze behandelingen</p>
          <h2 className="font-playfair text-3xl md:text-5xl text-center mb-16">Drie pijlers van oral longevity</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Botox Bruxisme",
                desc: "Tandenknarsen veroorzaakt kaakpijn, hoofdpijn en gebitsslijtage. Met botox ontspannen wij de kaakspieren in slechts 15 minuten — effectief voor 3 tot 6 maanden.",
                href: "/botox-bruxisme",
                icon: "💉",
              },
              {
                title: "Gummy Smile",
                desc: "Een gummy smile kan onzekerheid veroorzaken. Met een gerichte botoxbehandeling van 10-15 minuten bereiken wij direct een natuurlijkere lachlijn.",
                href: "/gummy-smile",
                icon: "😊",
              },
              {
                title: "Slaapapneu Screening",
                desc: "10-15% van de Nederlanders heeft slaapapneu. Wij screenen de relatie tussen kaakpositie en luchtwegobstructie voor betere slaap en meer energie.",
                href: "/slaapapneu",
                icon: "🫁",
              },
            ].map((d) => (
              <Link
                key={d.title}
                href={d.href}
                className="group bg-white p-8 border border-sand/30 hover:border-teal/30 transition-colors"
              >
                <span className="text-4xl mb-6 block">{d.icon}</span>
                <h3 className="font-playfair text-xl mb-4 group-hover:text-teal transition-colors">{d.title}</h3>
                <p className="text-charcoal/70 text-sm leading-relaxed mb-4">{d.desc}</p>
                <span className="text-teal text-sm tracking-widest uppercase">Meer info →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Wetenschap */}
      <section className="py-24 bg-sand/20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4 text-center">Wetenschap</p>
          <h2 className="font-playfair text-3xl md:text-5xl text-center mb-6">De mond als spiegel van uw gezondheid</h2>
          <p className="text-center text-charcoal/70 max-w-2xl mx-auto mb-16">
            Wetenschappelijk onderzoek laat steeds duidelijker zien dat mondgezondheid direct verbonden is met uw algehele gezondheid en levensverwachting.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { stat: "20-40%", label: "verhoogd risico op hart- en vaatziekten bij parodontitis", source: "American Heart Association, 2023" },
              { stat: "10-15%", label: "van de Nederlandse bevolking heeft obstructief slaapapneu", source: "NVALT Richtlijn OSA, 2024" },
              { stat: "70%", label: "van de volwassenen knarst of perst op de tanden", source: "KNMT, 2023" },
            ].map((s) => (
              <div key={s.stat} className="text-center p-8 bg-white border border-sand/30">
                <p className="font-playfair text-4xl md:text-5xl text-teal mb-4">{s.stat}</p>
                <p className="text-charcoal/70 text-sm leading-relaxed mb-2">{s.label}</p>
                <p className="text-xs text-charcoal/40 italic">{s.source}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team intro */}
      <section className="py-24 bg-offwhite">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4">Over het team</p>
              <h2 className="font-playfair text-3xl md:text-4xl mb-6">Lotte Meereboer, MSc</h2>
              <p className="text-charcoal/70 leading-relaxed mb-4">
                Tandarts voor orthodontie met meer dan 18 jaar ervaring. Studeerde Tandheelkunde aan de Vrije Universiteit
                en behaalde haar Master of Science Orthodontics aan de Universiteit van Murcia.
              </p>
              <p className="text-charcoal/70 leading-relaxed mb-6">
                Als oprichter van de Dutch Aligner Society en spreker op vele internationale symposia,
                combineert zij haar passie voor digitale orthodontie met de nieuwste inzichten uit longevity-wetenschap.
              </p>
              <p className="text-xs text-charcoal/50 mb-6">BIG-geregistreerd · VTvO kwaliteitskeurmerk · European Aligner Society</p>
              <Link href="/over-ons" className="text-teal text-sm tracking-widest uppercase hover:underline">
                Meer over ons team →
              </Link>
            </div>
            <div className="bg-sand/30 aspect-[3/4] flex items-center justify-center">
              <div className="text-center text-charcoal/30">
                <p className="text-6xl mb-4">👩‍⚕️</p>
                <p className="text-sm">Foto Lotte Meereboer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-sand/10">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4 text-center">Veelgestelde vragen</p>
          <h2 className="font-playfair text-3xl md:text-4xl text-center mb-16">Wat u wilt weten</h2>
          <div className="space-y-6">
            {[
              ["Wat is oral longevity?", "Oral longevity is een benadering die mondgezondheid verbindt met gezond ouder worden. Wetenschappelijk onderzoek toont aan dat chronische ontstekingen in de mond geassocieerd zijn met een 20-40% verhoogd risico op hart- en vaatziekten, diabetes type 2 en neurodegeneratieve aandoeningen. Bij ORAVIVUM behandelen wij uw mond met het oog op uw algehele gezondheid."],
              ["Wat doet ORAVIVUM anders dan een gewone tandarts?", "Wij combineren orthodontische expertise met longevity-wetenschap. Naast reguliere tandheelkunde bieden wij botox tegen bruxisme, gummy smile correctie en slaapapneu screening — allemaal vanuit het perspectief dat mondgezondheid de basis is voor een langer, gezonder leven."],
              ["Is botox tegen tandenknarsen veilig?", "Ja, botox tegen bruxisme is een veilige en veelgebruikte behandeling. De botox wordt in lage doses geïnjecteerd in de kaakspieren (m. masseter), waardoor overactieve spieren ontspannen zonder dat normaal kauwen wordt belemmerd. De behandeling duurt 15 minuten en heeft minimale bijwerkingen."],
              ["Hoeveel kost een behandeling?", "De kosten variëren per behandeling. Neem contact met ons op voor een persoonlijk advies en prijsindicatie. Sommige behandelingen worden (gedeeltelijk) vergoed door uw aanvullende zorgverzekering."],
              ["Moet ik doorverwezen worden door mijn tandarts?", "Nee, u kunt rechtstreeks een afspraak maken bij ORAVIVUM. Een verwijzing is niet nodig, maar wij werken graag samen met uw eigen tandarts voor een optimaal behandelresultaat."],
              ["Waar is ORAVIVUM gevestigd?", "ORAVIVUM is gevestigd aan de Van Baerlestraat 33h in Amsterdam, direct bij het Museumplein. De kliniek is uitstekend bereikbaar met openbaar vervoer (tram 2, 5 en 12) en per auto."],
              ["Wie is de behandelaar?", "ORAVIVUM wordt geleid door Lotte Meereboer, MSc tandarts voor orthodontie met meer dan 18 jaar ervaring. Zij is BIG-geregistreerd, ingeschreven in het VTvO kwaliteitskeurmerk en oprichter van de Dutch Aligner Society."],
              ["Wordt de behandeling vergoed?", "Vergoeding is afhankelijk van uw zorgverzekering. Botox en gummy smile vallen doorgaans niet onder de basisverzekering. Slaapapneu behandeling met MRA wordt soms wel vergoed. Wij adviseren u graag over de mogelijkheden."],
            ].map(([q, a]) => (
              <details key={q} className="group bg-white border border-sand/30 p-6">
                <summary className="cursor-pointer list-none flex justify-between items-center">
                  <span className="font-playfair text-lg pr-4">{q}</span>
                  <span className="text-teal text-xl shrink-0 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-4 text-charcoal/70 leading-relaxed text-sm">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-teal text-offwhite text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-playfair text-3xl md:text-5xl mb-6">Klaar voor een andere kijk op mondgezondheid?</h2>
          <p className="text-offwhite/70 mb-10">
            Maak een afspraak en ontdek wat oral longevity voor u kan betekenen.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-gold text-charcoal px-8 py-4 text-sm tracking-widest uppercase hover:bg-gold/90 transition-colors"
          >
            Plan een afspraak
          </Link>
        </div>
      </section>
    </>
  );
}
