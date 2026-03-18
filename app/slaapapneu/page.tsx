import type { Metadata } from "next";
import { SlaapapneuContent } from "./content";

export const metadata: Metadata = {
  title: "Slaapapneu Screening Amsterdam — Tandarts Slaapapneu",
  description:
    "Slaapapneu screening bij ORAVIVUM Amsterdam. Ontdek de relatie tussen kaakpositie en luchtwegobstructie. MRA-apparaat behandeling bij het Museumplein.",
};

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: "Slaapapneu screening en MRA-behandeling",
    description:
      "Screening op obstructief slaapapneu en behandeling met een mandibulair repositie-apparaat (MRA). De screening brengt de relatie tussen kaakpositie en luchtwegobstructie in kaart. Bij diagnose wordt een op maat gemaakt MRA-apparaat aangemeten.",
    procedureType: "NoninvasiveProcedure",
    bodyLocation: "Kaak en bovenste luchtweg",
    howPerformed:
      "Screening van de kaakpositie in relatie tot de luchtweg, gevolgd door aanmeten van een mandibulair repositie-apparaat (MRA) dat de onderkaak naar voren brengt om de luchtweg open te houden tijdens de slaap",
    url: "https://oravivum.com/slaapapneu",
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
        name: "Hoe weet ik of ik slaapapneu heb?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Veelvoorkomende symptomen zijn snurken, ademstops tijdens de slaap, overmatige slaperigheid overdag, ochtendhoofpijn en concentratieproblemen. Een screening bij ORAVIVUM kan uitwijzen of nader onderzoek nodig is.",
        },
      },
      {
        "@type": "Question",
        name: "Wat is het verschil tussen een MRA en CPAP?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "CPAP blaast lucht via een masker in de luchtweg. Een MRA is een mondstuk dat de kaak naar voren brengt. Het MRA is stiller, draagbaarder en geschikt voor licht tot matig slaapapneu.",
        },
      },
      {
        "@type": "Question",
        name: "Wordt slaapapneu behandeling vergoed?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Bij een bewezen diagnose wordt het MRA vaak vergoed door de basisverzekering. Neem contact op voor meer informatie.",
        },
      },
      {
        "@type": "Question",
        name: "Is slaapapneu gevaarlijk?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Onbehandeld slaapapneu verhoogt het risico op hart- en vaatziekten, beroerte, diabetes type 2 en verkeersongevallen significant.",
        },
      },
    ],
  },
];

export default function SlaapapneuPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />
      <SlaapapneuContent />
    </>
  );
}
