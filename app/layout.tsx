import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { LangProvider } from "./lang-context";
import { Navbar } from "./navbar";
import { Footer } from "./footer";
import { CookieBanner } from "./cookie-banner";
import { Analytics } from "./analytics";
import { GoogleTagManager, GoogleTagManagerNoScript } from "./gtm";

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
    "ORAVIVUM is de eerste oral longevity kliniek van Amsterdam. Wij verbinden mondgezondheid met gezond ouder worden. Bruxisme behandeling, gummy smile en slaapapneu screening.",
  openGraph: {
    type: "website",
    locale: "nl_NL",
    siteName: "ORAVIVUM",
  },
  robots: { index: true, follow: true },
};

// Schema 1: MedicalBusiness — ORAVIVUM
const medicalBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "@id": "https://oravivum.com/#organization",
  name: "ORAVIVUM — Oral Longevity Clinic",
  alternateName: "ORAVIVUM",
  description:
    "De eerste oral longevity kliniek van Amsterdam. Gespecialiseerd in bruxisme behandeling, gummy smile correctie en slaapapneu screening met MRA.",
  url: "https://oravivum.com",
  telephone: "020 723 5222",
  email: "balie@orthodontiemuseumplein.nl",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Teniersstraat 2 hs",
    addressLocality: "Amsterdam",
    addressRegion: "Noord-Holland",
    postalCode: "1071 BS",
    addressCountry: "NL",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 52.3547,
    longitude: 4.8833,
  },
  areaServed: {
    "@type": "City",
    name: "Amsterdam",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:30",
      closes: "17:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:30",
      closes: "16:00",
    },
  ],
  medicalSpecialty: ["Dentistry", "Orthodontics"],
  priceRange: "€€",
  parentOrganization: {
    "@type": "Dentist",
    "@id": "https://oravivum.com/#parent-organization",
    name: "Orthodontie Museumplein",
  },
  availableService: [
    {
      "@type": "MedicalTherapy",
      name: "Bruxisme behandeling",
      description:
        "Behandeling van tandenknarsen (bruxisme) met botulinetoxine voor ontspanning van de kaakspieren. Resultaat na 1-2 weken, werkingsduur 3-6 maanden.",
      url: "https://oravivum.com/bruxisme-behandeling",
    },
    {
      "@type": "MedicalTherapy",
      name: "Gummy smile correctie",
      description:
        "Correctie van overmatig zichtbaar tandvlees bij het lachen met botulinetoxine. Subtiel, niet-chirurgisch resultaat.",
      url: "https://oravivum.com/gummy-smile",
    },
    {
      "@type": "MedicalTherapy",
      name: "Slaapapneu screening & MRA",
      description:
        "Screening op obstructieve slaapapneu en behandeling met een mandibulair repositie-apparaat (MRA). Comfortabel alternatief voor CPAP.",
      url: "https://oravivum.com/slaapapneu",
    },
  ],
  sameAs: [],
};

// Schema 2: LocalBusiness (Dentist) — Orthodontie Museumplein
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  "@id": "https://oravivum.com/#parent-organization",
  name: "Orthodontie Museumplein",
  description:
    "Orthodontiepraktijk aan het Museumplein in Amsterdam. Moederpraktijk van ORAVIVUM — Oral Longevity Clinic.",
  url: "https://www.orthodontiemuseumplein.nl",
  telephone: "020 723 5222",
  email: "balie@orthodontiemuseumplein.nl",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Teniersstraat 2 hs",
    addressLocality: "Amsterdam",
    addressRegion: "Noord-Holland",
    postalCode: "1071 BS",
    addressCountry: "NL",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 52.3547,
    longitude: 4.8833,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:30",
      closes: "17:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:30",
      closes: "16:00",
    },
  ],
  priceRange: "€€",
  subOrganization: {
    "@type": "MedicalBusiness",
    "@id": "https://oravivum.com/#organization",
    name: "ORAVIVUM — Oral Longevity Clinic",
    url: "https://oravivum.com",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-inter bg-offwhite text-charcoal antialiased">
        <GoogleTagManager />
        <GoogleTagManagerNoScript />
        <Script
          id="medical-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalBusinessSchema) }}
        />
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <LangProvider>
          <Navbar />
          <main className="pt-[72px]">{children}</main>
          <Footer />
          <CookieBanner />
          <Analytics />
        </LangProvider>
      </body>
    </html>
  );
}
