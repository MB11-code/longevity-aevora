import type { Metadata } from "next";
import { SlaapapneuContent } from "./content";

export const metadata: Metadata = {
  title: "Slaapapneu Screening Amsterdam — Tandarts Slaapapneu",
  description:
    "Slaapapneu screening bij ORAVIVUM Amsterdam. Ontdek de relatie tussen kaakpositie en luchtwegobstructie. MRA-apparaat behandeling bij het Museumplein.",
};

export default function SlaapapneuPage() {
  return <SlaapapneuContent />;
}
