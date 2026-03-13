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
    procedureType: "NonInvasive",
    bodyLocation: "Kaakspieren (m. masseter)",
    preparation: "Geen voorbereiding nodig",
    howPerformed: "Botulinum toxine type A wordt geïnjecteerd in de m. masseter om overactieve kaakspieren te ontspannen",
    followup: "Controle na 2-4 weken",
  },
];

export default function BruxismeBehandelingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }} />
      <BruxismeContent />
    </>
  );
}
