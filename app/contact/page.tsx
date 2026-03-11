import type { Metadata } from "next";
import { ContactContent } from "./content";

export const metadata: Metadata = {
  title: "Contact — ORAVIVUM Oral Longevity Clinic Amsterdam",
  description:
    "Maak een afspraak bij ORAVIVUM. Gevestigd aan de Teniersstraat 2 hs, Amsterdam, bij het Museumplein. Bel, mail of plan online uw afspraak.",
};

export default function ContactPage() {
  return <ContactContent />;
}
