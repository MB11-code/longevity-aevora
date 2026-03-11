import type { Metadata } from "next";
import { PrivacyContent } from "./content";

export const metadata: Metadata = {
  title: "Privacybeleid",
  description: "Privacybeleid van ORAVIVUM — Oral Longevity Clinic Amsterdam.",
};

export default function PrivacyPage() {
  return <PrivacyContent />;
}
