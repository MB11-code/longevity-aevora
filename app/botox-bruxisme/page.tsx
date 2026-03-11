import type { Metadata } from "next";
import { BotoxContent } from "./content";

export const metadata: Metadata = {
  title: "Botox Bruxisme Amsterdam — Tandenknarsen Behandeling",
  description:
    "Botox tegen bruxisme (tandenknarsen) bij ORAVIVUM Amsterdam. Behandeling duurt 15 minuten, werkt 3-6 maanden. Ervaren orthodontist bij het Museumplein.",
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
  },
];

export default function BotoxBruxismePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }} />
      <BotoxContent />
    </>
  );
}
