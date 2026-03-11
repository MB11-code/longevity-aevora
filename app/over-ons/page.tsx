import type { Metadata } from "next";
import { OverOnsContent } from "./content";

export const metadata: Metadata = {
  title: "Over Ons — ORAVIVUM Oral Longevity Clinic Amsterdam",
  description:
    "Leer het team achter ORAVIVUM kennen. Lotte Meereboer, MSc orthodontist met 18+ jaar ervaring, verbindt mondgezondheid met longevity bij het Museumplein.",
};

export default function OverOnsPage() {
  return <OverOnsContent />;
}
