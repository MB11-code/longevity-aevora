import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Script from "next/script";

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

function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-offwhite/90 backdrop-blur-md border-b border-sand/40">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-playfair font-bold tracking-wide text-teal">
          <span className="text-2xl">ORAVIVUM</span>
          <span className="hidden sm:inline text-xs text-gold ml-2 tracking-widest uppercase">De Levende Mond</span>
        </Link>
        <div className="hidden md:flex items-center gap-6">
          <Link href="/botox-bruxisme" className="text-xs tracking-widest uppercase text-charcoal hover:text-teal transition-colors">Bruxisme</Link>
          <Link href="/gummy-smile" className="text-xs tracking-widest uppercase text-charcoal hover:text-teal transition-colors">Gummy Smile</Link>
          <Link href="/slaapapneu" className="text-xs tracking-widest uppercase text-charcoal hover:text-teal transition-colors">Slaapapneu</Link>
          <Link href="/over-ons" className="text-xs tracking-widest uppercase text-charcoal hover:text-teal transition-colors">Over Ons</Link>
          <Link href="/contact" className="text-xs tracking-widest uppercase bg-teal text-offwhite px-5 py-2.5 hover:bg-teal/90 transition-colors">
            Afspraak
          </Link>
        </div>
        {/* Mobile menu button - simple toggle */}
        <details className="md:hidden relative">
          <summary className="list-none cursor-pointer p-2">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </summary>
          <div className="absolute right-0 top-full mt-2 bg-offwhite border border-sand/40 shadow-lg py-4 px-6 flex flex-col gap-4 min-w-[200px]">
            <Link href="/botox-bruxisme" className="text-xs tracking-widest uppercase">Bruxisme</Link>
            <Link href="/gummy-smile" className="text-xs tracking-widest uppercase">Gummy Smile</Link>
            <Link href="/slaapapneu" className="text-xs tracking-widest uppercase">Slaapapneu</Link>
            <Link href="/over-ons" className="text-xs tracking-widest uppercase">Over Ons</Link>
            <Link href="/contact" className="text-xs tracking-widest uppercase text-teal font-semibold">Afspraak maken</Link>
          </div>
        </details>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="bg-charcoal text-offwhite/80">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          <div>
            <h3 className="font-playfair text-2xl text-offwhite mb-4">ORAVIVUM</h3>
            <p className="text-sm leading-relaxed">
              De eerste oral longevity kliniek van Amsterdam. Uw mond als spiegel van uw gezondheid.
            </p>
          </div>
          <div>
            <h4 className="text-gold text-sm tracking-widest uppercase mb-4">Behandelingen</h4>
            <div className="space-y-2 text-sm">
              <p><Link href="/botox-bruxisme" className="hover:text-offwhite transition-colors">Botox Bruxisme</Link></p>
              <p><Link href="/gummy-smile" className="hover:text-offwhite transition-colors">Gummy Smile</Link></p>
              <p><Link href="/slaapapneu" className="hover:text-offwhite transition-colors">Slaapapneu Screening</Link></p>
            </div>
          </div>
          <div>
            <h4 className="text-gold text-sm tracking-widest uppercase mb-4">Contact</h4>
            <div className="space-y-2 text-sm">
              <p>Teniersstraat 2 hs</p>
              <p>1071 DX Amsterdam</p>
              <p>020 72 35 222</p>
            </div>
          </div>
          <div>
            <h4 className="text-gold text-sm tracking-widest uppercase mb-4">Openingstijden</h4>
            <div className="space-y-2 text-sm">
              <p>Werkdagen: 08:30 – 17:30</p>
              <p>Zaterdag: 09:30 – 16:00 | Zondag: Gesloten</p>
            </div>
          </div>
        </div>
        <div className="border-t border-offwhite/10 mt-12 pt-8 text-center text-xs text-offwhite/40">
          © 2026 ORAVIVUM — Oral Longevity Clinic Amsterdam. Alle rechten voorbehouden.
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-inter bg-offwhite text-charcoal antialiased">
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <Navbar />
        <main className="pt-[72px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
