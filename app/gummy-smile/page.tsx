import type { Metadata } from "next";
import { GummySmileContent } from "./content";

export const metadata: Metadata = {
  title: "Gummy Smile Behandeling Amsterdam — Lip Repositioning Botox",
  description:
    "Gummy smile behandeling bij ORAVIVUM Amsterdam. Botox correctie in 10-15 minuten met direct resultaat. Ervaren orthodontist bij het Museumplein.",
};

export default function GummySmilePage() {
  return <GummySmileContent />;
}
