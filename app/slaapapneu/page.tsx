import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Slaapapneu Screening Amsterdam — Tandarts Slaapapneu",
  description:
    "Slaapapneu screening bij ORAVIVUM Amsterdam. Ontdek de relatie tussen kaakpositie en luchtwegobstructie. MRA-apparaat behandeling bij het Museumplein.",
  openGraph: {
    title: "Slaapapneu Screening Amsterdam | ORAVIVUM",
    description: "Slaapapneu screening en MRA-behandeling. 10-15% van de Nederlanders heeft slaapapneu.",
  },
};

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: "Slaapapneu screening en MRA-behandeling",
    procedureType: "NonInvasive",
    bodyLocation: "Kaak en luchtweg",
    howPerformed: "Screening van de relatie tussen kaakpositie en luchtwegobstructie, gevolgd door eventuele behandeling met een Mandibulaire Repositie Apparaat (MRA)",
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "Wat is slaapapneu?", acceptedAnswer: { "@type": "Answer", text: "Obstructief slaapapneu syndroom (OSAS) is een aandoening waarbij de luchtweg tijdens de slaap herhaaldelijk wordt afgesloten. Dit veroorzaakt ademstops van 10 seconden of langer, wat leidt tot zuurstoftekort, verstoorde slaap en overdag vermoeidheid. Naar schatting heeft 10-15% van de Nederlandse bevolking een vorm van slaapapneu." } },
      { "@type": "Question", name: "Wat heeft de tandarts met slaapapneu te maken?", acceptedAnswer: { "@type": "Answer", text: "De kaakpositie en -grootte hebben direct invloed op de ruimte voor de luchtweg. Een te kleine of terugliggende onderkaak kan de luchtweg vernauwen. Orthodontisten en tandartsen kunnen dit beoordelen en behandelen met een MRA (Mandibulaire Repositie Apparaat) dat de onderkaak naar voren brengt." } },
      { "@type": "Question", name: "Wat is een MRA-apparaat?", acceptedAnswer: { "@type": "Answer", text: "Een MRA (Mandibulaire Repositie Apparaat) is een op maat gemaakt mondstuk dat u 's nachts draagt. Het brengt de onderkaak licht naar voren, waardoor de luchtweg wordt geopend en ademstops worden voorkomen. Het is een effectief alternatief voor CPAP bij licht tot matig ernstig slaapapneu." } },
      { "@type": "Question", name: "Wordt een MRA-apparaat vergoed?", acceptedAnswer: { "@type": "Answer", text: "Bij een bewezen diagnose van obstructief slaapapneu wordt een MRA-apparaat in veel gevallen vergoed door de basisverzekering. De vergoeding kan variëren per zorgverzekeraar. ORAVIVUM adviseert u graag over de mogelijkheden." } },
    ],
  },
];

export default function SlaapapneuPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }} />

      <section className="py-24 bg-sand/10">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4">Screening & Behandeling</p>
          <h1 className="font-playfair text-4xl md:text-6xl mb-6">Slaapapneu screening</h1>
          <p className="text-xl text-charcoal/70 max-w-2xl">
            Naar schatting heeft 10-15% van de Nederlandse bevolking een vorm van obstructief slaapapneu.
            Bij veel mensen wordt dit niet gediagnosticeerd. Wij onderzoeken de relatie tussen uw kaakpositie en luchtwegobstructie.
          </p>
          <div className="mt-8 inline-block bg-gold/20 text-gold border border-gold/30 px-6 py-3 text-sm tracking-widest uppercase">
            Binnenkort volledig beschikbaar
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-playfair text-3xl mb-8">Wat is slaapapneu?</h2>
          <div className="space-y-4 text-charcoal/70">
            <p>
              Obstructief slaapapneu syndroom (OSAS) is een aandoening waarbij de bovenste luchtweg tijdens de slaap
              herhaaldelijk gedeeltelijk of volledig wordt afgesloten. Dit veroorzaakt ademstops van 10 seconden of langer,
              soms tientallen keren per nacht.
            </p>
            <p>De gevolgen zijn verstrekkend:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Chronische vermoeidheid en concentratieproblemen</li>
              <li>Verhoogd risico op hart- en vaatziekten (2-3x hoger)</li>
              <li>Verhoogd risico op diabetes type 2</li>
              <li>Depressie en stemmingsstoornissen</li>
              <li>Verhoogd ongevalsrisico door slaperigheid overdag</li>
            </ul>
            <p>
              Vanuit het longevity-perspectief is slaapapneu een van de belangrijkste behandelbare risicofactoren voor vroegtijdige veroudering.
              Goede slaap is essentieel voor celreparatie, immuunfunctie en cognitieve gezondheid.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-sand/10">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-playfair text-3xl mb-8">De link met kaakpositie</h2>
          <div className="space-y-4 text-charcoal/70">
            <p>
              De positie en grootte van uw kaak hebben direct invloed op de ruimte voor de luchtweg achter de tong.
              Een terugliggende of te kleine onderkaak (retrognathie) kan de luchtweg significant vernauwen.
            </p>
            <p>
              Als orthodontist kan Lotte Meereboer deze relatie beoordelen en behandelen. Dit maakt de tandarts
              een belangrijke schakel in de diagnose en behandeling van slaapapneu.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-playfair text-3xl mb-8">Onze screening</h2>
          <div className="space-y-4 text-charcoal/70 mb-12">
            <p>Bij ORAVIVUM onderzoeken wij:</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              ["🦷", "Kaakpositie", "Beoordeling van de kaakstand en de ruimte voor de luchtweg"],
              ["📊", "Risicofactoren", "Inventarisatie van symptomen, BMI, nekomvang en slaappatroon"],
              ["🔬", "Doorverwijzing", "Bij indicatie verwijzen wij voor een slaaponderzoek (polysomnografie)"],
            ].map(([icon, title, desc]) => (
              <div key={title} className="bg-sand/10 p-6 border border-sand/30">
                <span className="text-2xl">{icon}</span>
                <h3 className="font-playfair text-lg mt-3 mb-2">{title}</h3>
                <p className="text-sm text-charcoal/70">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-sand/10">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-playfair text-3xl mb-8">Het MRA-apparaat</h2>
          <div className="space-y-4 text-charcoal/70">
            <p>
              Een MRA (Mandibulaire Repositie Apparaat) is een op maat gemaakt mondstuk dat u &apos;s nachts draagt.
              Het brengt de onderkaak licht naar voren, waardoor de luchtweg wordt geopend en ademstops worden voorkomen.
            </p>
            <p>
              Het MRA is een effectief en comfortabel alternatief voor CPAP bij licht tot matig ernstig slaapapneu.
              Onderzoek toont aan dat 60-80% van de patiënten met een MRA significant minder ademstops heeft.
            </p>
            <p>
              Bij een bewezen diagnose van obstructief slaapapneu wordt het MRA in veel gevallen vergoed door de basisverzekering.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-playfair text-3xl text-center mb-12">Veelgestelde vragen over slaapapneu</h2>
          <div className="space-y-4">
            {[
              ["Hoe weet ik of ik slaapapneu heb?", "Veelvoorkomende symptomen zijn snurken, ademstops tijdens de slaap (geconstateerd door partner), overmatige slaperigheid overdag, ochtendhoofpijn en concentratieproblemen. Een screening bij ORAVIVUM kan uitwijzen of nader onderzoek nodig is."],
              ["Wat heeft de tandarts met slaapapneu te maken?", "De kaakpositie heeft direct invloed op de luchtweg. Een orthodontist kan beoordelen of de kaakstand bijdraagt aan luchtwegvernauwing en kan een MRA-apparaat aanmeten."],
              ["Wat is het verschil tussen een MRA en CPAP?", "CPAP blaast lucht via een masker in de luchtweg. Een MRA is een mondstuk dat de kaak naar voren brengt. Het MRA is stiller, draagbaarder en geschikt voor licht tot matig slaapapneu."],
              ["Wordt slaapapneu behandeling vergoed?", "Bij een bewezen diagnose wordt het MRA vaak vergoed door de basisverzekering. Neem contact op voor meer informatie over uw specifieke situatie."],
              ["Is slaapapneu gevaarlijk?", "Onbehandeld slaapapneu verhoogt het risico op hart- en vaatziekten, beroerte, diabetes type 2 en verkeersongevallen significant. Behandeling kan deze risico's sterk verminderen."],
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

      <section className="py-20 bg-teal text-offwhite text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-playfair text-3xl md:text-4xl mb-6">Benieuwd of u risico loopt op slaapapneu?</h2>
          <p className="text-offwhite/70 mb-8">Maak een afspraak voor een screening.</p>
          <Link href="/contact" className="inline-block bg-gold text-charcoal px-8 py-4 text-sm tracking-widest uppercase hover:bg-gold/90 transition-colors">
            Plan een screening
          </Link>
        </div>
      </section>
    </>
  );
}
