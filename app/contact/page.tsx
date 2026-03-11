import type { Metadata } from "next";
import { ContactContent } from "./content";

export const metadata: Metadata = {
  title: "Contact — ORAVIVUM Oral Longevity Clinic Amsterdam",
  description:
    "Neem contact op met ORAVIVUM voor een afspraak of vrijblijvend advies. Gevestigd aan de Teniersstraat 2 hs, Amsterdam, bij het Museumplein. Bel 020 72 35 222.",
};

export default function ContactPage() {
  return <ContactContent />;
}
