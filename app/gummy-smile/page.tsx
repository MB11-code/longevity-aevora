import type { Metadata } from "next";
import { GummySmileContent } from "./content";

export const metadata: Metadata = {
  title: "Gummy Smile Behandeling Amsterdam — Lip Repositioning",
  description:
    "Gummy smile behandeling bij ORAVIVUM Amsterdam. Correctie met botulinetoxine in 10-15 minuten met direct resultaat. Ervaren orthodontist bij het Museumplein.",
};

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: "Gummy smile correctie met botulinetoxine",
    description:
      "Behandeling van overmatig zichtbaar tandvlees (gummy smile) met botulinetoxine. De bovenlip wordt subtiel ontspannen zodat minder tandvlees zichtbaar is bij het lachen. De behandeling duurt 10-15 minuten.",
    procedureType: "NoninvasiveProcedure",
    bodyLocation: "Bovenlip (m. levator labii superioris)",
    howPerformed:
      "Botulinetoxine wordt geïnjecteerd in de spieren die de bovenlip optrekken, waardoor de lip lager valt en minder tandvlees zichtbaar is",
    url: "https://oravivum.com/gummy-smile",
    performedBy: {
      "@type": "Dentist",
      "@id": "https://oravivum.com/#organization",
      name: "ORAVIVUM — Oral Longevity Clinic",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Is de gummy smile behandeling pijnlijk?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Vrijwel pijnloos. Er worden zeer dunne naalden gebruikt en de injectie duurt slechts enkele seconden.",
        },
      },
      {
        "@type": "Question",
        name: "Kan ik na de behandeling normaal lachen?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absoluut. De behandeling is subtiel afgestemd zodat u natuurlijk kunt lachen met minder tandvlees zichtbaar.",
        },
      },
      {
        "@type": "Question",
        name: "Hoelang duurt het resultaat van een gummy smile correctie?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Gemiddeld 3 tot 4 maanden. Daarna kan de behandeling eenvoudig herhaald worden.",
        },
      },
      {
        "@type": "Question",
        name: "Zijn er alternatieven voor botulinetoxine bij een gummy smile?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Bij een ernstige gummy smile kan een chirurgische lip-repositioning worden overwogen. Botulinetoxine is de minst invasieve optie en een goed startpunt.",
        },
      },
    ],
  },
];

export default function GummySmilePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />
      <GummySmileContent />
    </>
  );
}
