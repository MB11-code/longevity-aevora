"use client";

import Image from "next/image";
import Link from "next/link";
import { useLang } from "../lang-context";

export function OverOnsContent() {
  const { t } = useLang();

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-end overflow-hidden">
        <Image
          src="/images/clinic-exterior.jpg"
          alt={t("ORAVIVUM Kliniek Amsterdam", "ORAVIVUM Clinic Amsterdam")}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/30 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-8 lg:px-12 pb-20 pt-40 w-full">
          <div className="max-w-2xl">
            <div className="section-divider mb-8 !bg-gold" />
            <p className="text-gold/90 text-[11px] tracking-[0.4em] uppercase mb-5">{t("Over ons", "About us")}</p>
            <h1 className="font-playfair text-4xl md:text-6xl text-offwhite leading-[1.1]">
              {t("De mond als gateway to the body", "The mouth as gateway to the body")}
            </h1>
          </div>
        </div>
      </section>

      {/* Philosophy quote */}
      <section className="py-20 bg-teal">
        <div className="max-w-3xl mx-auto px-8 lg:px-12 text-center">
          <p className="font-playfair text-2xl md:text-3xl text-offwhite/90 leading-relaxed italic">
            {t(
              '"ORAVIVUM — De Levende Mond — is geboren uit de overtuiging dat mondgezondheid de sleutel is tot een langer, gezonder leven."',
              '"ORAVIVUM — The Living Mouth — was born from the conviction that oral health is the key to a longer, healthier life."'
            )}
          </p>
        </div>
      </section>

      <section className="py-28 lg:py-32">
        <div className="max-w-4xl mx-auto px-8 lg:px-12">
          <div className="section-divider mb-8" />
          <h2 className="font-playfair text-3xl md:text-4xl mb-10">{t("Ons verhaal", "Our story")}</h2>
          <div className="space-y-6 text-charcoal/55 text-[15px] leading-[1.85]">
            <p>
              {t(
                "De mond is het beginpunt van het spijsverteringskanaal, de poort tot de luchtwegen en een spiegel van uw algehele gezondheid. Wetenschappelijk onderzoek toont steeds duidelijker aan dat chronische ontstekingen in de mond — van parodontitis tot onbehandeld bruxisme — directe gevolgen hebben voor hart, hersenen en immuunsysteem.",
                "The mouth is the starting point of the digestive tract, the gateway to the airways and a mirror of your overall health. Scientific research increasingly shows that chronic oral inflammation — from periodontitis to untreated bruxism — has direct consequences for the heart, brain and immune system."
              )}
            </p>
            <p>
              {t(
                "ORAVIVUM is de eerste kliniek in Amsterdam die deze verbinding centraal stelt. Wij kijken niet alleen naar tanden en kiezen, maar naar de mond als onderdeel van uw totale gezondheid.",
                "ORAVIVUM is the first clinic in Amsterdam to place this connection at its core. We look not only at teeth, but at the mouth as part of your total health."
              )}
            </p>
            <p>
              {t(
                "De naam ORAVIVUM combineert het Latijnse ora (mond) met vivum (levend, vitaal). De Levende Mond — een mond die niet alleen functioneert, maar bijdraagt aan een vitaal en lang leven.",
                "The name ORAVIVUM combines the Latin ora (mouth) with vivum (living, vital). The Living Mouth — a mouth that not only functions, but contributes to a vital and long life."
              )}
            </p>
          </div>
        </div>
      </section>

      <section className="py-28 lg:py-32 bg-sand/8">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-start">
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="/images/lotte-portrait.jpg"
                alt="Lotte Meereboer, MSc"
                fill
                className="object-cover"
              />
            </div>
            <div className="md:pt-8">
              <div className="section-divider mb-8" />
              <h2 className="font-playfair text-3xl md:text-4xl mb-3">Lotte Meereboer, MSc</h2>
              <p className="text-gold text-[11px] tracking-[0.2em] uppercase mb-10">{t("Tandarts voor Orthodontie", "Orthodontist")}</p>
              <div className="space-y-5 text-charcoal/55 text-[15px] leading-[1.85]">
                <p>
                  {t(
                    "Lotte Meereboer studeerde Tandheelkunde aan de Vrije Universiteit Amsterdam en behaalde vervolgens haar Master of Science Orthodontics aan de Universiteit van Murcia in Spanje.",
                    "Lotte Meereboer studied Dentistry at Vrije Universiteit Amsterdam and subsequently obtained her Master of Science in Orthodontics from the University of Murcia in Spain."
                  )}
                </p>
                <p>
                  {t(
                    "Met meer dan 18 jaar ervaring in de orthodontie is zij een erkend expert in digitale orthodontie en clear aligner behandelingen. Zij is oprichter van de Dutch Aligner Society en spreker op vele nationale en internationale symposia.",
                    "With over 18 years of experience in orthodontics, she is a recognised expert in digital orthodontics and clear aligner treatments. She is the founder of the Dutch Aligner Society and a speaker at numerous national and international symposia."
                  )}
                </p>
                <p>
                  {t(
                    "Bij ORAVIVUM combineert zij haar orthodontische expertise met de nieuwste inzichten uit longevity-wetenschap.",
                    "At ORAVIVUM she combines her orthodontic expertise with the latest insights from longevity science."
                  )}
                </p>
              </div>
              <div className="mt-10 space-y-2 text-[13px] text-charcoal/35">
                <p>BIG-{t("geregistreerd tandarts", "registered dentist")}</p>
                <p>VTvO {t("kwaliteitskeurmerk", "quality certification")}</p>
                <p>European Aligner Society (EAS)</p>
                <p>ANT ({t("Associatie Nederlandse Tandartsen", "Association of Dutch Dentists")})</p>
                <p>{t("Oprichter Dutch Aligner Society", "Founder Dutch Aligner Society")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-28 lg:py-32">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="section-divider mb-8" />
          <h2 className="font-playfair text-3xl md:text-4xl mb-16">{t("Onze visie op longevity", "Our vision on longevity")}</h2>
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {[
              [
                "Evidence-based",
                t(
                  "Elke behandeling bij ORAVIVUM is gebaseerd op wetenschappelijk onderzoek. Wij volgen de nieuwste inzichten uit de longevity-wetenschap en vertalen deze naar de dagelijkse praktijk.",
                  "Every treatment at ORAVIVUM is based on scientific research. We follow the latest longevity science insights and translate them into daily practice."
                ),
              ],
              [
                t("Persoonlijk", "Personal"),
                t(
                  "Geen lopende-bandwerk maar persoonlijke aandacht. Wij nemen de tijd voor een grondige anamnese en bespreken samen met u de beste aanpak.",
                  "No assembly-line work, but personal attention. We take time for a thorough assessment and discuss the best approach together with you."
                ),
              ],
              [
                t("Preventief", "Preventive"),
                t(
                  "Voorkomen is beter dan genezen. Door vroegtijdige screening en behandeling verkleinen wij de risico's op ernstige aandoeningen.",
                  "Prevention is better than cure. Through early screening and treatment we reduce the risks of serious conditions."
                ),
              ],
            ].map(([title, desc]) => (
              <div key={title} className="p-10 lg:p-12 border border-sand/20 bg-sand/5 hover:shadow-md transition-shadow duration-500">
                <div className="w-8 h-[1px] bg-gold mb-8" />
                <h3 className="font-playfair text-2xl mb-5">{title}</h3>
                <p className="text-[15px] text-charcoal/55 leading-[1.8]">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clinic image band */}
      <section className="relative h-[50vh] overflow-hidden">
        <Image
          src="/images/behandelkamer.jpg"
          alt={t("De praktijk", "The practice")}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-charcoal/15" />
      </section>

      <section className="py-28 lg:py-32">
        <div className="max-w-4xl mx-auto px-8 lg:px-12">
          <div className="section-divider mb-8" />
          <h2 className="font-playfair text-3xl md:text-4xl mb-10">
            {t("De praktijk aan het Museumplein", "The clinic at the Museumplein")}
          </h2>
          <div className="space-y-5 text-charcoal/55 text-[15px] leading-[1.85]">
            <p>
              {t(
                "ORAVIVUM is gevestigd aan de Teniersstraat 2 hs in Amsterdam, op loopafstand van het Museumplein, het Concertgebouw en het Stedelijk Museum. De kliniek is modern ingericht met state-of-the-art apparatuur voor digitale orthodontie.",
                "ORAVIVUM is located at Teniersstraat 2 hs in Amsterdam, within walking distance of the Museumplein, the Concertgebouw and the Stedelijk Museum. The clinic features modern state-of-the-art equipment for digital orthodontics."
              )}
            </p>
            <p>
              {t(
                "De praktijk is goed bereikbaar met openbaar vervoer (tram 3, 5, 12, 16, halte Van Baerlestraat/Concertgebouw) en per auto. Parkeren kan in de Teniersstraat en Q-Park Museumplein.",
                "The practice is easily accessible by public transport (tram 3, 5, 12, 16, Van Baerlestraat/Concertgebouw stop) and by car. Parking is available at Teniersstraat and Q-Park Museumplein."
              )}
            </p>
          </div>
          <div className="mt-12">
            <Link href="/contact" className="inline-block bg-teal text-offwhite px-12 py-4 text-[11px] tracking-[0.25em] uppercase hover:bg-teal-light transition-colors duration-300">
              {t("Neem contact op", "Contact us")}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
