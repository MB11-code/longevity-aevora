import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Gummy Smile Behandeling Amsterdam — Lip Repositioning Botox",
  description:
    "Gummy smile behandeling bij ORAVIVUM Amsterdam. Botox correctie in 10-15 minuten met direct resultaat. Ervaren orthodontist bij het Museumplein.",
  openGraph: {
    title: "Gummy Smile Behandeling Amsterdam | ORAVIVUM",
    description: "Gummy smile botox correctie. 10-15 minuten, direct resultaat, duur 3-4 maanden.",
  },
};

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: "Gummy smile botoxbehandeling",
    procedureType: "NonInvasive",
    bodyLocation: "Bovenlip (m. levator labii superioris)",
    howPerformed: "Botulinum toxine wordt geïnjecteerd in de spieren die de bovenlip optrekken, waardoor minder tandvlees zichtbaar wordt bij het lachen",
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "Wat is een gummy smile?", acceptedAnswer: { "@type": "Answer", text: "Een gummy smile is wanneer bij het lachen meer dan 3-4 millimeter tandvlees zichtbaar is boven de boventanden. Dit komt voor bij ongeveer 10-25% van de bevolking en wordt vaker gezien bij vrouwen." } },
      { "@type": "Question", name: "Is een gummy smile behandeling met botox pijnlijk?", acceptedAnswer: { "@type": "Answer", text: "De behandeling is vrijwel pijnloos. Er worden zeer dunne naalden gebruikt en de injectie duurt slechts enkele seconden. De meeste patiënten ervaren alleen een licht prikje." } },
      { "@type": "Question", name: "Hoelang duurt het resultaat van een gummy smile behandeling?", acceptedAnswer: { "@type": "Answer", text: "Het resultaat van een gummy smile botoxbehandeling houdt gemiddeld 3 tot 4 maanden aan. Daarna kan de behandeling herhaald worden." } },
      { "@type": "Question", name: "Kan ik na een gummy smile behandeling normaal lachen?", acceptedAnswer: { "@type": "Answer", text: "Ja, absoluut. De behandeling is subtiel afgestemd zodat u natuurlijk kunt lachen met minder tandvlees zichtbaar. Uw lach wordt niet bevroren of onnatuurlijk." } },
      { "@type": "Question", name: "Hoeveel kost een gummy smile behandeling in Amsterdam?", acceptedAnswer: { "@type": "Answer", text: "De kosten voor een gummy smile behandeling zijn op aanvraag. Neem contact op met ORAVIVUM voor een persoonlijk advies en prijsindicatie." } },
    ],
  },
];

export default function GummySmilePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }} />

      <section className="py-24 bg-sand/10">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4">Behandeling</p>
          <h1 className="font-playfair text-4xl md:text-6xl mb-6">Gummy smile behandeling</h1>
          <p className="text-xl text-charcoal/70 max-w-2xl">
            Een gummy smile — wanneer bij het lachen opvallend veel tandvlees zichtbaar is — kan onzekerheid veroorzaken.
            Met een gerichte botoxbehandeling bereiken wij een natuurlijkere lachlijn.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-playfair text-3xl mb-8">Wat is een gummy smile?</h2>
          <div className="space-y-4 text-charcoal/70">
            <p>
              Bij een gummy smile is meer dan 3-4 millimeter tandvlees zichtbaar boven de boventanden wanneer u lacht.
              Dit komt voor bij ongeveer 10-25% van de bevolking en wordt vaker gezien bij vrouwen.
            </p>
            <p>Oorzaken kunnen zijn:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Overactieve lipspieren die de bovenlip te ver optrekken</li>
              <li>Overmatige tandvleesgroei (gingivale hyperplasie)</li>
              <li>Korte boventanden of vertraagd passief doorbreken</li>
              <li>Overontwikkeling van de bovenkaak (verticaal maxillair exces)</li>
            </ul>
            <p>
              Een gummy smile is medisch niet schadelijk, maar kan wel invloed hebben op uw zelfvertrouwen en hoe u zich voelt bij het lachen.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-sand/10">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-playfair text-3xl mb-12">De behandeling</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              ["⏱️", "Duur", "10-15 minuten", "Vrijwel pijnloos"],
              ["✨", "Resultaat", "Direct zichtbaar", "Optimaal na 1-2 weken"],
              ["🔄", "Werkingsduur", "3-4 maanden", "Herhaalbaar"],
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

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-playfair text-3xl mb-8">Hoe werkt de behandeling?</h2>
          <div className="space-y-4 text-charcoal/70">
            <p>
              Botulinum toxine wordt geïnjecteerd in de spieren die de bovenlip optrekken (m. levator labii superioris).
              Door deze spieren subtiel te ontspannen, wordt de bovenlip minder ver opgetrokken bij het lachen.
            </p>
            <p>
              Het resultaat is een natuurlijkere lachlijn waarbij minder tandvlees zichtbaar is.
              De behandeling is zeer precies: uw glimlach wordt niet &quot;bevroren&quot; maar subtiel gecorrigeerd.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-sand/10">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-playfair text-3xl text-center mb-12">Veelgestelde vragen over gummy smile</h2>
          <div className="space-y-4">
            {[
              ["Is een gummy smile behandeling met botox pijnlijk?", "Vrijwel pijnloos. Er worden zeer dunne naalden gebruikt en de injectie duurt slechts enkele seconden. De meeste patiënten ervaren alleen een licht prikje."],
              ["Hoelang duurt het resultaat?", "Het resultaat houdt gemiddeld 3 tot 4 maanden aan. Daarna kan de behandeling eenvoudig herhaald worden."],
              ["Kan ik na de behandeling normaal lachen?", "Absoluut. De behandeling is subtiel afgestemd zodat u natuurlijk kunt lachen met minder tandvlees zichtbaar. Uw lach wordt niet onnatuurlijk."],
              ["Voor wie is deze behandeling geschikt?", "Voor iedereen die bij het lachen meer tandvlees toont dan gewenst, mits de oorzaak (deels) spieractiviteit is. Tijdens het consult bespreken wij of botox de juiste oplossing is voor uw situatie."],
              ["Hoeveel kost een gummy smile behandeling?", "De kosten zijn op aanvraag. Neem contact op voor een persoonlijk advies."],
              ["Zijn er alternatieven voor botox?", "Bij een ernstige gummy smile kan een chirurgische lip-repositioning of een kaakchirurgische ingreep worden overwogen. Botox is de minst invasieve optie en een goed startpunt."],
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

      <section className="py-20 bg-teal text-offwhite text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-playfair text-3xl md:text-4xl mb-6">Wilt u meer weten over gummy smile correctie?</h2>
          <p className="text-offwhite/70 mb-8">Maak een afspraak voor een vrijblijvend consult.</p>
          <Link href="/contact" className="inline-block bg-gold text-charcoal px-8 py-4 text-sm tracking-widest uppercase hover:bg-gold/90 transition-colors">
            Plan een afspraak
          </Link>
        </div>
      </section>
    </>
  );
}
