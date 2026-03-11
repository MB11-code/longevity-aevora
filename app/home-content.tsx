"use client";

import Image from "next/image";
import Link from "next/link";
import { useLang } from "./lang-context";

export function HomeContent() {
  const { t } = useLang();

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/clinic-hero.jpg"
            alt="ORAVIVUM Clinic Amsterdam"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/70 via-charcoal/40 to-transparent" />
        </div>
        <div className="relative max-w-7xl mx-auto px-8 lg:px-12 py-40">
          <div className="max-w-xl">
            <div className="section-divider mb-10" />
            <p className="text-gold/90 text-[11px] tracking-[0.4em] uppercase mb-8">
              Oral Longevity Clinic Amsterdam
            </p>
            <h1 className="font-playfair text-5xl md:text-[4.5rem] leading-[1.05] text-offwhite mb-10">
              {t("Uw gezondheid begint in de mond", "Your health begins in the mouth")}
            </h1>
            <p className="text-lg text-offwhite/70 leading-relaxed mb-14 max-w-md">
              {t(
                "ORAVIVUM verbindt orthodontische expertise met longevity-wetenschap. Wij kijken verder dan uw gebit — naar uw algehele gezondheid en vitaliteit.",
                "ORAVIVUM connects orthodontic expertise with longevity science. We look beyond your teeth — at your overall health and vitality."
              )}
            </p>
            <Link
              href="/contact"
              className="inline-block bg-offwhite text-charcoal px-10 py-4 text-[11px] tracking-[0.25em] uppercase hover:bg-gold hover:text-charcoal transition-all duration-500"
            >
              {t("Plan een afspraak", "Book an appointment")}
            </Link>
          </div>
        </div>
      </section>

      {/* Philosophy strip */}
      <section className="py-20 bg-teal">
        <div className="max-w-4xl mx-auto px-8 lg:px-12 text-center">
          <p className="font-playfair text-2xl md:text-3xl text-offwhite/90 leading-relaxed italic">
            {t(
              '"De mond is de spiegel van uw algehele gezondheid — en de sleutel tot een langer, vitaler leven."',
              '"The mouth is the mirror of your overall health — and the key to a longer, more vital life."'
            )}
          </p>
          <p className="text-offwhite/40 text-xs tracking-[0.2em] uppercase mt-6">
            Lotte Meereboer, MSc
          </p>
        </div>
      </section>

      {/* Diensten */}
      <section className="py-32 lg:py-40 bg-offwhite">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="max-w-xl mb-20">
            <div className="section-divider mb-8" />
            <p className="text-gold text-[11px] tracking-[0.4em] uppercase mb-5">
              {t("Onze behandelingen", "Our treatments")}
            </p>
            <h2 className="font-playfair text-4xl md:text-5xl leading-[1.1]">
              {t("Drie pijlers van oral longevity", "Three pillars of oral longevity")}
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                title: t("Botox Bruxisme", "Botox for Bruxism"),
                desc: t(
                  "Tandenknarsen veroorzaakt kaakpijn, hoofdpijn en gebitsslijtage. Met botox ontspannen wij de kaakspieren in slechts 15 minuten — effectief voor 3 tot 6 maanden.",
                  "Teeth grinding causes jaw pain, headaches and dental wear. With botox we relax the jaw muscles in just 15 minutes — effective for 3 to 6 months."
                ),
                href: "/botox-bruxisme",
              },
              {
                title: "Gummy Smile",
                desc: t(
                  "Een gummy smile kan onzekerheid veroorzaken. Met een gerichte behandeling van 10-15 minuten bereiken wij direct een natuurlijkere lachlijn.",
                  "A gummy smile can cause self-consciousness. With a targeted 10-15 minute treatment we achieve a more natural smile line immediately."
                ),
                href: "/gummy-smile",
              },
              {
                title: t("Slaapapneu Screening", "Sleep Apnea Screening"),
                desc: t(
                  "10-15% van de Nederlanders heeft slaapapneu. Wij screenen de relatie tussen kaakpositie en luchtwegobstructie voor betere slaap en meer energie.",
                  "10-15% of the Dutch population has sleep apnea. We screen the relationship between jaw position and airway obstruction for better sleep and more energy."
                ),
                href: "/slaapapneu",
              },
            ].map((d) => (
              <Link
                key={d.title}
                href={d.href}
                className="group p-10 lg:p-12 border border-sand/30 hover:border-teal/20 bg-white hover:shadow-lg transition-all duration-500"
              >
                <div className="w-10 h-[1px] bg-gold mb-8 group-hover:w-16 transition-all duration-500" />
                <h3 className="font-playfair text-2xl mb-5 group-hover:text-teal transition-colors duration-300">
                  {d.title}
                </h3>
                <p className="text-charcoal/55 text-[15px] leading-[1.75] mb-8">{d.desc}</p>
                <span className="text-teal text-[11px] tracking-[0.2em] uppercase opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                  {t("Meer informatie", "Learn more")} &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Clinic image band */}
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <Image
          src="/images/behandelkamer.jpg"
          alt={t("Behandelkamer ORAVIVUM", "Treatment room ORAVIVUM")}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-charcoal/20" />
      </section>

      {/* Wetenschap */}
      <section className="py-32 lg:py-40 bg-offwhite">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="grid md:grid-cols-2 gap-20 items-start mb-20">
            <div>
              <div className="section-divider mb-8" />
              <p className="text-gold text-[11px] tracking-[0.4em] uppercase mb-5">
                {t("Wetenschap", "Science")}
              </p>
              <h2 className="font-playfair text-4xl md:text-5xl leading-[1.1]">
                {t("De mond als spiegel van uw gezondheid", "The mouth as a mirror of your health")}
              </h2>
            </div>
            <div className="md:pt-16">
              <p className="text-charcoal/55 text-[15px] leading-[1.85]">
                {t(
                  "Wetenschappelijk onderzoek laat steeds duidelijker zien dat mondgezondheid direct verbonden is met uw algehele gezondheid en levensverwachting.",
                  "Scientific research increasingly shows that oral health is directly linked to your overall health and life expectancy."
                )}
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                stat: "20–40%",
                label: t(
                  "verhoogd risico op hart- en vaatziekten bij parodontitis",
                  "increased risk of cardiovascular disease with periodontitis"
                ),
                source: "American Heart Association, 2023",
              },
              {
                stat: "10–15%",
                label: t(
                  "van de Nederlandse bevolking heeft obstructief slaapapneu",
                  "of the Dutch population has obstructive sleep apnea"
                ),
                source: "NVALT Richtlijn OSA, 2024",
              },
              {
                stat: "70%",
                label: t(
                  "van de volwassenen knarst of perst op de tanden",
                  "of adults grind or clench their teeth"
                ),
                source: "KNMT, 2023",
              },
            ].map((s) => (
              <div key={s.stat} className="p-10 lg:p-12 bg-sand/10 border border-sand/15">
                <p className="font-playfair text-5xl md:text-6xl text-teal mb-6">{s.stat}</p>
                <p className="text-charcoal/55 text-[15px] leading-[1.75] mb-4">{s.label}</p>
                <p className="text-[11px] text-charcoal/30 tracking-wide italic">{s.source}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team intro */}
      <section className="py-32 lg:py-40 bg-sand/10">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <div className="section-divider mb-8" />
              <p className="text-gold text-[11px] tracking-[0.4em] uppercase mb-5">
                {t("Over het team", "About the team")}
              </p>
              <h2 className="font-playfair text-4xl md:text-[2.8rem] leading-[1.15] mb-10">
                Lotte Meereboer, MSc
              </h2>
              <p className="text-charcoal/55 text-[15px] leading-[1.85] mb-6">
                {t(
                  "Tandarts voor orthodontie met meer dan 18 jaar ervaring. Studeerde Tandheelkunde aan de Vrije Universiteit en behaalde haar Master of Science Orthodontics aan de Universiteit van Murcia.",
                  "Orthodontist with over 18 years of experience. Studied Dentistry at Vrije Universiteit Amsterdam and obtained her Master of Science in Orthodontics from the University of Murcia."
                )}
              </p>
              <p className="text-charcoal/55 text-[15px] leading-[1.85] mb-10">
                {t(
                  "Als oprichter van de Dutch Aligner Society en spreker op vele internationale symposia, combineert zij haar passie voor digitale orthodontie met de nieuwste inzichten uit longevity-wetenschap.",
                  "As founder of the Dutch Aligner Society and speaker at numerous international symposia, she combines her passion for digital orthodontics with the latest longevity science insights."
                )}
              </p>
              <p className="text-[11px] text-charcoal/35 mb-10 tracking-[0.15em]">
                BIG-{t("geregistreerd", "registered")}  ·  VTvO  ·  European Aligner Society
              </p>
              <Link
                href="/over-ons"
                className="text-teal text-[11px] tracking-[0.2em] uppercase hover:underline underline-offset-4 decoration-teal/30"
              >
                {t("Meer over ons team", "More about our team")} &rarr;
              </Link>
            </div>
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="/images/lotte-portrait.jpg"
                alt="Lotte Meereboer, MSc"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-32 lg:py-40 bg-offwhite">
        <div className="max-w-3xl mx-auto px-8 lg:px-12">
          <div className="text-center mb-20">
            <div className="section-divider mx-auto mb-8" />
            <p className="text-gold text-[11px] tracking-[0.4em] uppercase mb-5">FAQ</p>
            <h2 className="font-playfair text-4xl md:text-5xl">
              {t("Veelgestelde vragen", "Frequently asked questions")}
            </h2>
          </div>
          <div className="space-y-3">
            {([
              [
                t("Wat is oral longevity?", "What is oral longevity?"),
                t(
                  "Oral longevity is een benadering die mondgezondheid verbindt met gezond ouder worden. Wetenschappelijk onderzoek toont aan dat chronische ontstekingen in de mond geassocieerd zijn met een 20-40% verhoogd risico op hart- en vaatziekten, diabetes type 2 en neurodegeneratieve aandoeningen. Bij ORAVIVUM behandelen wij uw mond met het oog op uw algehele gezondheid.",
                  "Oral longevity is an approach that connects oral health with healthy ageing. Scientific research shows that chronic oral inflammation is associated with a 20-40% increased risk of cardiovascular disease, type 2 diabetes and neurodegenerative conditions. At ORAVIVUM we treat your mouth with your overall health in mind."
                ),
              ],
              [
                t("Wat doet ORAVIVUM anders dan een gewone tandarts?", "What makes ORAVIVUM different from a regular dentist?"),
                t(
                  "Wij combineren orthodontische expertise met longevity-wetenschap. Naast reguliere tandheelkunde bieden wij botox tegen bruxisme, gummy smile correctie en slaapapneu screening — allemaal vanuit het perspectief dat mondgezondheid de basis is voor een langer, gezonder leven.",
                  "We combine orthodontic expertise with longevity science. Beyond regular dentistry, we offer botox for bruxism, gummy smile correction and sleep apnea screening — all from the perspective that oral health is the foundation for a longer, healthier life."
                ),
              ],
              [
                t("Is botox tegen tandenknarsen veilig?", "Is botox for teeth grinding safe?"),
                t(
                  "Ja, botox tegen bruxisme is een veilige en veelgebruikte behandeling. De botox wordt in lage doses geïnjecteerd in de kaakspieren, waardoor de spieren ontspannen zonder dat normaal kauwen wordt belemmerd. De behandeling duurt 15 minuten en heeft minimale bijwerkingen.",
                  "Yes, botox for bruxism is a safe and widely used treatment. The botox is injected in low doses into the jaw muscles, relaxing them without affecting normal chewing. The treatment takes 15 minutes with minimal side effects."
                ),
              ],
              [
                t("Moet ik doorverwezen worden door mijn tandarts?", "Do I need a referral from my dentist?"),
                t(
                  "Nee, u kunt rechtstreeks een afspraak maken bij ORAVIVUM. Een verwijzing is niet nodig, maar wij werken graag samen met uw eigen tandarts voor een optimaal behandelresultaat.",
                  "No, you can book an appointment directly with ORAVIVUM. A referral is not required, but we are happy to collaborate with your own dentist for optimal results."
                ),
              ],
              [
                t("Waar is ORAVIVUM gevestigd?", "Where is ORAVIVUM located?"),
                t(
                  "ORAVIVUM is gevestigd aan de Teniersstraat 2 hs in Amsterdam, direct bij het Museumplein. De kliniek is uitstekend bereikbaar met openbaar vervoer (tram 3, 5, 12, 16) en per auto.",
                  "ORAVIVUM is located at Teniersstraat 2 hs in Amsterdam, next to the Museumplein. The clinic is easily accessible by public transport (tram 3, 5, 12, 16) and by car."
                ),
              ],
              [
                t("Wordt de behandeling vergoed?", "Is the treatment covered by insurance?"),
                t(
                  "Vergoeding is afhankelijk van uw zorgverzekering. Botox en gummy smile vallen doorgaans niet onder de basisverzekering. Slaapapneu behandeling met MRA wordt soms wel vergoed. Wij adviseren u graag over de mogelijkheden.",
                  "Coverage depends on your insurance plan. Botox and gummy smile treatments are typically not covered by basic insurance. Sleep apnea treatment with an MRA may be covered in some cases. We are happy to advise you."
                ),
              ],
            ] as [string, string][]).map(([q, a]) => (
              <details key={q} className="group border-b border-sand/25 pb-3">
                <summary className="cursor-pointer list-none flex justify-between items-center py-6">
                  <span className="font-playfair text-lg pr-8">{q}</span>
                  <span className="text-gold text-lg shrink-0 group-open:rotate-45 transition-transform duration-300">+</span>
                </summary>
                <p className="pb-6 text-charcoal/55 leading-[1.8] text-[15px] pr-12">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 lg:py-40 bg-teal text-offwhite text-center">
        <div className="max-w-2xl mx-auto px-8 lg:px-12">
          <div className="section-divider mx-auto mb-10 !bg-gold" />
          <h2 className="font-playfair text-4xl md:text-5xl mb-10 leading-[1.15]">
            {t("Klaar voor een andere kijk op mondgezondheid?", "Ready for a new perspective on oral health?")}
          </h2>
          <p className="text-offwhite/50 mb-14 leading-relaxed text-[15px]">
            {t(
              "Maak een afspraak en ontdek wat oral longevity voor u kan betekenen.",
              "Book an appointment and discover what oral longevity can do for you."
            )}
          </p>
          <Link
            href="/contact"
            className="inline-block bg-gold text-charcoal px-12 py-4 text-[11px] tracking-[0.25em] uppercase hover:bg-sand transition-colors duration-500"
          >
            {t("Plan een afspraak", "Book an appointment")}
          </Link>
        </div>
      </section>
    </>
  );
}
