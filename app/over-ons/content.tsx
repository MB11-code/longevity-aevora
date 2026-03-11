"use client";

import Link from "next/link";
import Image from "next/image";
import { useLang } from "../lang-context";
import { ScrollReveal } from "../scroll-reveal";

export function OverOnsContent() {
  const { t } = useLang();

  return (
    <>
      <section className="py-28 bg-sand/10">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <p className="text-gold text-xs tracking-[0.35em] uppercase mb-4">{t("Over ons", "About us")}</p>
            <h1 className="font-playfair text-4xl md:text-6xl mb-8">
              {t("De mond als gateway to the body", "The mouth as gateway to the body")}
            </h1>
            <p className="text-xl text-charcoal/60 max-w-2xl leading-relaxed">
              {t(
                'ORAVIVUM — "De Levende Mond" — is geboren uit de overtuiging dat mondgezondheid de sleutel is tot een langer, gezonder leven.',
                'ORAVIVUM — "The Living Mouth" — was born from the conviction that oral health is the key to a longer, healthier life.'
              )}
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="font-playfair text-3xl mb-10">{t("Ons verhaal", "Our story")}</h2>
            <div className="space-y-5 text-charcoal/60 leading-relaxed">
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
          </ScrollReveal>
        </div>
      </section>

      <section className="py-24 bg-sand/10">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-20 items-start">
            <ScrollReveal>
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-sand/30">
                <Image
                  src="/images/lotte-meereboer.jpg"
                  alt="Lotte Meereboer - Tandarts voor Orthodontie bij ORAVIVUM"
                  fill
                  className="object-cover"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal staggerIndex={1}>
              <div>
                <h2 className="font-playfair text-3xl mb-3">Lotte Meereboer, MSc</h2>
                <p className="text-gold text-xs tracking-[0.2em] uppercase mb-8">{t("Tandarts voor Orthodontie", "Orthodontist")}</p>
                <div className="space-y-5 text-charcoal/60 leading-relaxed">
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
                <div className="mt-10 space-y-2 text-sm text-charcoal/40">
                  <p>BIG-{t("geregistreerd tandarts", "registered dentist")}</p>
                  <p>VTvO {t("kwaliteitskeurmerk", "quality certification")}</p>
                  <p>European Aligner Society (EAS)</p>
                  <p>ANT ({t("Associatie Nederlandse Tandartsen", "Association of Dutch Dentists")})</p>
                  <p>{t("Oprichter Dutch Aligner Society", "Founder Dutch Aligner Society")}</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="font-playfair text-3xl mb-14">{t("Onze visie op longevity", "Our vision on longevity")}</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-10">
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
            ].map(([title, desc], i) => (
              <ScrollReveal key={title} staggerIndex={i}>
                <div className="p-8 border border-sand/20 bg-sand/5 rounded-lg">
                  <div className="w-8 h-[1px] bg-gold mb-6" />
                  <h3 className="font-playfair text-xl mb-4">{title}</h3>
                  <p className="text-sm text-charcoal/60 leading-relaxed">{desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Praktijk met foto */}
      <section className="py-24 bg-sand/10">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="font-playfair text-3xl mb-10">
              {t("De praktijk aan het Museumplein", "The clinic at the Museumplein")}
            </h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div className="space-y-5 text-charcoal/60 leading-relaxed">
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
                <div className="mt-6">
                  <Link href="/contact" className="inline-block bg-teal text-offwhite px-10 py-4 text-xs tracking-[0.25em] uppercase rounded-lg hover:bg-teal/90 transition-colors">
                    {t("Neem contact op", "Contact us")}
                  </Link>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal staggerIndex={1}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-sand/30">
                <Image
                  src="/images/behandelkamer.jpg"
                  alt="Behandelkamer Orthodontie Museumplein"
                  fill
                  className="object-cover"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Kwaliteitskeurmerken / Social Proof */}
      <section className="py-16 bg-offwhite">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <p className="text-center text-xs tracking-[0.2em] uppercase text-charcoal/40 mb-10">
              {t("Aangesloten bij", "Affiliated with")}
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
              {[
                { name: "VTvO", desc: t("Vereniging Tandartsen voor Orthodontie", "Association of Dentists for Orthodontics"), label: t("Erkend lid", "Certified member") },
                { name: "EAS", desc: "European Aligner Society", label: t("Erkend lid", "Certified member") },
                { name: "ANT", desc: t("Associatie Nederlandse Tandartsen", "Association of Dutch Dentists"), label: t("Erkend lid", "Certified member") },
                { name: "OK", desc: t("OK Register Kwaliteitskeurmerk", "OK Register Quality Certification"), label: t("Geregistreerd", "Registered") },
              ].map((item) => (
                <div key={item.name} className="text-center p-8 border-2 border-teal/20 rounded-xl bg-white">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-teal/10 flex items-center justify-center">
                    <svg className="w-6 h-6 text-teal" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                    </svg>
                  </div>
                  <p className="font-playfair text-xl text-teal font-bold mb-1">{item.name}</p>
                  <p className="text-[10px] text-charcoal/50 leading-snug mb-3">{item.desc}</p>
                  <p className="text-[10px] tracking-[0.2em] uppercase text-gold">{item.label}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
