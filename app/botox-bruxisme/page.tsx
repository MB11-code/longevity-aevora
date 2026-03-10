import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Botox Bruxisme Amsterdam — Tandenknarsen Behandeling",
  description:
    "Botox tegen bruxisme (tandenknarsen) bij ORAVIVUM Amsterdam. Behandeling duurt 15 minuten, werkt 3-6 maanden. Ervaren orthodontist bij het Museumplein.",
  openGraph: {
    title: "Botox Bruxisme Amsterdam | ORAVIVUM",
    description: "Effectieve botox behandeling tegen tandenknarsen. 15 minuten, resultaat na 1-2 weken.",
  },
};

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: "Botox behandeling tegen bruxisme",
    procedureType: "NonInvasive",
    bodyLocation: "Kaakspieren (m. masseter)",
    preparation: "Geen voorbereiding nodig",
    howPerformed: "Botulinum toxine type A wordt geïnjecteerd in de m. masseter om overactieve kaakspieren te ontspannen",
    followup: "Controle na 2-4 weken",
    status: "EventScheduled",
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "Hoelang werkt botox tegen tandenknarsen?", acceptedAnswer: { "@type": "Answer", text: "Botox tegen bruxisme werkt gemiddeld 3 tot 6 maanden. Na deze periode kunt u de behandeling herhalen. Bij herhaalde behandelingen merken veel patiënten dat het effect langer aanhoudt." } },
      { "@type": "Question", name: "Doet de behandeling pijn?", acceptedAnswer: { "@type": "Answer", text: "De meeste patiënten ervaren minimale pijn. Er worden zeer dunne naalden gebruikt en de injectie duurt slechts enkele seconden per zijde. Verdoving is meestal niet nodig." } },
      { "@type": "Question", name: "Kan ik na de behandeling normaal eten?", acceptedAnswer: { "@type": "Answer", text: "Ja, u kunt direct na de behandeling normaal eten en drinken. Wij adviseren de eerste 4 uur niet te liggen en het behandelde gebied niet te masseren." } },
      { "@type": "Question", name: "Hoeveel kost botox tegen bruxisme in Amsterdam?", acceptedAnswer: { "@type": "Answer", text: "De kosten voor botox tegen bruxisme zijn op aanvraag. Neem contact op met ORAVIVUM voor een persoonlijke prijsindicatie." } },
      { "@type": "Question", name: "Zijn er bijwerkingen van botox in de kaak?", acceptedAnswer: { "@type": "Answer", text: "Bijwerkingen zijn zeldzaam en mild. Mogelijk een kleine blauwe plek of lichte zwelling op de injectieplaats die binnen enkele dagen verdwijnt. De kauwfunctie blijft volledig intact." } },
    ],
  },
];

export default function BotoxBruxismePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }} />

      {/* Hero */}
      <section className="py-24 bg-sand/10">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4">Behandeling</p>
          <h1 className="font-playfair text-4xl md:text-6xl mb-6">Botox tegen bruxisme</h1>
          <p className="text-xl text-charcoal/70 max-w-2xl">
            Tandenknarsen (bruxisme) treft tot 70% van de volwassenen en veroorzaakt kaakpijn, hoofdpijn en gebitsslijtage.
            Met een gerichte botoxbehandeling ontspannen wij de kaakspieren in slechts 15 minuten.
          </p>
        </div>
      </section>

      {/* Wat is bruxisme */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-playfair text-3xl mb-8">Wat is bruxisme?</h2>
          <div className="prose prose-lg text-charcoal/70 space-y-4">
            <p>
              Bruxisme is het onbewust knarsen of klemmen van de tanden, meestal &apos;s nachts. Het wordt vaak veroorzaakt door stress,
              een afwijkende kaakstand of slaapstoornissen. Op lange termijn kan bruxisme leiden tot:
            </p>
            <ul className="space-y-2 list-disc pl-6">
              <li>Slijtage en beschadiging van het glazuur</li>
              <li>Chronische kaakpijn (TMD/CMD)</li>
              <li>Spanningshoofdpijn en migraine</li>
              <li>Oorpijn en tinnitus</li>
              <li>Gestoorde slaapkwaliteit</li>
            </ul>
            <p>
              Vanuit het longevity-perspectief is bruxisme meer dan een tandheelkundig probleem: het is een signaal van chronische
              stress dat uw algehele gezondheid beïnvloedt.
            </p>
          </div>
        </div>
      </section>

      {/* De behandeling */}
      <section className="py-20 bg-sand/10">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-playfair text-3xl mb-12">De behandeling</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              ["⏱️", "Duur", "15 minuten", "Geen verdoving nodig"],
              ["📅", "Resultaat", "Na 1-2 weken", "Geleidelijke ontspanning van de kaakspieren"],
              ["🔄", "Werkingsduur", "3-6 maanden", "Bij herhaling vaak langer effect"],
              ["💶", "Prijs", "[PRIJS OP AANVRAAG]", "Neem contact op voor een indicatie"],
            ].map(([icon, title, value, note]) => (
              <div key={title} className="bg-white p-6 border border-sand/30">
                <span className="text-2xl">{icon}</span>
                <h3 className="font-playfair text-lg mt-3 mb-1">{title}</h3>
                <p className="text-teal font-semibold text-lg">{value}</p>
                <p className="text-sm text-charcoal/50 mt-1">{note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hoe werkt het */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-playfair text-3xl mb-8">Hoe werkt botox tegen tandenknarsen?</h2>
          <div className="space-y-4 text-charcoal/70">
            <p>
              Botulinum toxine type A (botox) wordt in kleine doses geïnjecteerd in de musculus masseter — de grote kaakspier
              die verantwoordelijk is voor het klemmen en knarsen. De botox blokkeert tijdelijk de zenuwimpulsen naar de spier,
              waardoor deze ontspant.
            </p>
            <p>
              Het resultaat: minder knarsen, minder kaakpijn, minder hoofdpijn en bescherming van uw gebit.
              De behandeling tast uw normale kauwfunctie niet aan.
            </p>
          </div>
        </div>
      </section>

      {/* Voor wie */}
      <section className="py-20 bg-sand/10">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-playfair text-3xl mb-8">Voor wie is deze behandeling?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold mb-4 text-teal">✓ Geschikt voor u als:</h3>
              <ul className="space-y-2 text-charcoal/70">
                <li>• U &apos;s nachts knarst of perst op de tanden</li>
                <li>• U last heeft van kaakpijn of CMD</li>
                <li>• Spanningshoofdpijn een terugkerend probleem is</li>
                <li>• Een bitesplint onvoldoende verlichting biedt</li>
                <li>• U gebitsslijtage wilt voorkomen</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-charcoal/50">✗ Niet geschikt bij:</h3>
              <ul className="space-y-2 text-charcoal/50">
                <li>• Zwangerschap of borstvoeding</li>
                <li>• Neuromusculaire aandoeningen</li>
                <li>• Allergie voor botulinum toxine</li>
                <li>• Gebruik van bloedverdunners (overleg)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-playfair text-3xl text-center mb-12">Veelgestelde vragen over botox bruxisme</h2>
          <div className="space-y-4">
            {[
              ["Hoelang werkt botox tegen tandenknarsen?", "Gemiddeld 3 tot 6 maanden. Bij herhaalde behandelingen merken veel patiënten dat het effect langer aanhoudt doordat de spier kleiner wordt."],
              ["Doet de behandeling pijn?", "Minimaal. Er worden zeer dunne naalden gebruikt. De meeste patiënten omschrijven het als een licht prikje. Verdoving is niet nodig."],
              ["Kan ik na de behandeling normaal eten?", "Ja, direct. Wij adviseren de eerste 4 uur niet te liggen en het gebied niet te masseren."],
              ["Hoeveel kost botox tegen bruxisme in Amsterdam?", "De kosten zijn op aanvraag. Neem contact op met ORAVIVUM voor een persoonlijke prijsindicatie."],
              ["Zijn er bijwerkingen?", "Bijwerkingen zijn zeldzaam: mogelijk een kleine blauwe plek of lichte zwelling die binnen dagen verdwijnt. De kauwfunctie blijft intact."],
              ["Hoe vaak moet ik terugkomen?", "Gemiddeld 2-3 keer per jaar. Na verloop van tijd kan de frequentie afnemen doordat de spier structureel ontspant."],
            ].map(([q, a]) => (
              <details key={q} className="group bg-sand/10 border border-sand/30 p-6">
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
      <section className="py-20 bg-teal text-offwhite text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-playfair text-3xl md:text-4xl mb-6">Last van tandenknarsen?</h2>
          <p className="text-offwhite/70 mb-8">Maak een afspraak voor een vrijblijvend consult.</p>
          <Link href="/contact" className="inline-block bg-gold text-charcoal px-8 py-4 text-sm tracking-widest uppercase hover:bg-gold/90 transition-colors">
            Plan een afspraak
          </Link>
        </div>
      </section>
    </>
  );
}
