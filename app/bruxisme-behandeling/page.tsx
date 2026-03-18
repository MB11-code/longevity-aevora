import type { Metadata } from "next";
import { BruxismeContent } from "./content";

export const metadata: Metadata = {
  title: "Bruxisme Behandeling Amsterdam — Tandenknarsen Behandeling",
  description:
    "Botulinetoxine tegen bruxisme (tandenknarsen) bij ORAVIVUM Amsterdam. Behandeling duurt 15 minuten, werkt 3-6 maanden. Ervaren orthodontist bij het Museumplein.",
};

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: "Botulinetoxine behandeling tegen bruxisme",
    description:
      "Behandeling van tandenknarsen (bruxisme) met botulinetoxine. De kaakspieren worden gericht ontspannen door middel van injecties in de m. masseter. De behandeling duurt 15 minuten en het effect houdt 3 tot 6 maanden aan.",
    procedureType: "NoninvasiveProcedure",
    bodyLocation: "Kaakspieren (m. masseter)",
    preparation: "Geen voorbereiding nodig",
    howPerformed:
      "Botulinetoxine type A wordt geïnjecteerd in de m. masseter om overactieve kaakspieren te ontspannen",
    followup: "Controle na 2-4 weken",
    url: "https://oravivum.com/bruxisme-behandeling",
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
        name: "Hoelang werkt botulinetoxine tegen tandenknarsen?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Gemiddeld 3 tot 6 maanden. Bij herhaalde behandelingen merken veel patiënten dat het effect langer aanhoudt doordat de spier kleiner wordt.",
        },
      },
      {
        "@type": "Question",
        name: "Doet de bruxisme behandeling pijn?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Minimaal. Er worden zeer dunne naalden gebruikt. De meeste patiënten omschrijven het als een licht prikje. Verdoving is niet nodig.",
        },
      },
      {
        "@type": "Question",
        name: "Kan ik na de behandeling normaal eten?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ja, direct. Wij adviseren de eerste 4 uur niet te liggen en het gebied niet te masseren.",
        },
      },
      {
        "@type": "Question",
        name: "Zijn er bijwerkingen van botulinetoxine bij bruxisme?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Bijwerkingen zijn zeldzaam: mogelijk een kleine blauwe plek of lichte zwelling die binnen dagen verdwijnt. De kauwfunctie blijft intact.",
        },
      },
      {
        "@type": "Question",
        name: "Hoe vaak moet ik terugkomen voor een bruxisme behandeling?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Gemiddeld 2-3 keer per jaar. Na verloop van tijd kan de frequentie afnemen doordat de spier structureel ontspant.",
        },
      },
    ],
  },
];

export default function BruxismeBehandelingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />
      <BruxismeContent />
    </>
  );
}
