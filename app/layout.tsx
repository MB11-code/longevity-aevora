import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { LangProvider } from "./lang-context";
import { Navbar } from "./navbar";
import { Footer } from "./footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "ORAVIVUM — Oral Longevity Clinic Amsterdam",
    template: "%s | ORAVIVUM",
  },
  description:
    "ORAVIVUM is de eerste oral longevity kliniek van Amsterdam. Wij verbinden mondgezondheid met gezond ouder worden. Botox bruxisme, gummy smile en slaapapneu screening.",
  openGraph: {
    type: "website",
    locale: "nl_NL",
    siteName: "ORAVIVUM",
  },
  robots: { index: true, follow: true },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["MedicalBusiness", "MedicalClinic", "Dentist"],
  name: "ORAVIVUM — Oral Longevity Clinic Amsterdam",
  alternateName: "ORAVIVUM",
  description:
    "De eerste oral longevity kliniek van Amsterdam. Botox bruxisme, gummy smile behandeling en slaapapneu screening.",
  url: "https://oravivum.nl",
  telephone: "020 72 35 222",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Teniersstraat 2 hs",
    addressLocality: "Amsterdam",
    postalCode: "1071 DX",
    addressCountry: "NL",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 52.3579,
    longitude: 4.879,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:30",
      closes: "17:30",
    },
  ],
  medicalSpecialty: "Orthodontics",
  priceRange: "€€€",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-inter bg-offwhite text-charcoal antialiased">
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <LangProvider>
          <Navbar />
          <main className="pt-[72px]">{children}</main>
          <Footer />
        </LangProvider>
      </body>
    </html>
  );
}
