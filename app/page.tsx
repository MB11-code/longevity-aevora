import type { Metadata } from "next";
import { HomeContent } from "./home-content";

export const metadata: Metadata = {
  title: "ORAVIVUM — Oral Longevity Clinic Amsterdam | De Levende Mond",
  description:
    "ORAVIVUM is de eerste oral longevity kliniek van Amsterdam. Botox bruxisme, gummy smile behandeling en slaapapneu screening bij het Museumplein.",
  openGraph: {
    title: "ORAVIVUM — Oral Longevity Clinic Amsterdam",
    description: "Uw gezondheid begint in de mond. De eerste oral longevity kliniek van Amsterdam.",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Wat is oral longevity?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oral longevity is een nieuwe benadering die mondgezondheid verbindt met gezond ouder worden. Wetenschappelijk onderzoek toont aan dat chronische ontstekingen in de mond, zoals parodontitis, geassocieerd zijn met een 20-40% verhoogd risico op hart- en vaatziekten, diabetes type 2 en neurodegeneratieve aandoeningen.",
      },
    },
    {
      "@type": "Question",
      name: "Wat doet ORAVIVUM anders dan een gewone tandarts?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ORAVIVUM kijkt verder dan alleen uw gebit. Wij combineren orthodontische expertise met longevity-wetenschap en bieden behandelingen als botox tegen bruxisme, gummy smile correctie en slaapapneu screening.",
      },
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <HomeContent />
    </>
  );
}
