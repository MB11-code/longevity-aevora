import type { Metadata } from "next";
import { KaakbehandelingContent } from "./content";

export const metadata: Metadata = {
  title: "Kaakbehandeling Amsterdam — Tandenknarsen & Bruxisme Behandeling",
  description:
    "Effectieve behandeling bij tandenknarsen (bruxisme) en kaakklachten bij ORAVIVUM Amsterdam. Spierontspannende injectie in 15 minuten, resultaat binnen 1 week. Ervaren tandarts bij het Museumplein.",
};

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: "Spierontspannende kaakbehandeling bij bruxisme",
    procedureType: "NonInvasive",
    bodyLocation: "Kaakspieren (m. masseter)",
    preparation: "Geen voorbereiding nodig",
    howPerformed: "Spierontspannende injectie in de m. masseter om overactieve kaakspieren te ontspannen en bruxismeklachten te verminderen",
    followup: "Controle na 2-4 weken",
  },
];

export default function KaakbehandelingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }} />
      <KaakbehandelingContent />
    </>
  );
}
