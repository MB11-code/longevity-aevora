"use client";

import Link from "next/link";
import Image from "next/image";
import { useLang } from "./lang-context";
import { ScrollReveal } from "./scroll-reveal";

export function HomeContent() {
  const { t } = useLang();

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden -mt-[72px] pt-[72px]">
        <Image
          src="/images/kliniek-hero.jpg"
          alt="Orthodontie Museumplein kliniek Amsterdam"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 via-charcoal/50 to-transparent" />
        <div className="relative max-w-6xl mx-auto px-6 py-32">
          <div className="max-w-2xl">
            <p className="text-gold text-xs tracking-[0.35em] uppercase mb-8">Oral Longevity Clinic Amsterdam</p>
            <h1 className="font-playfair text-5xl md:text-7xl leading-[1.08] text-offwhite mb-10">
              {t("Uw gezondheid begint in de mond", "Your health begins in the mouth")}
            </h1>
            <p className="text-lg md:text-xl text-offwhite/70 leading-relaxed mb-12 max-w-lg">
              {t(
                "ORAVIVUM verbindt orthodontische expertise met longevity-wetenschap. Wij kijken verder dan uw gebit — naar uw algehele gezondheid en vitaliteit.",
                "ORAVIVUM connects orthodontic expertise with longevity science. We look beyond your teeth — at your overall health and vitality."
              )}
            </p>
            <Link
              href="/contact"
              className="inline-block bg-teal text-offwhite px-10 py-4 text-xs tracking-[0.25em] uppercase rounded-lg hover:bg-teal/90 transition-colors"
            >
              {t("Plan een afspraak", "Book an appointment")}
            </Link>
          </div>
        </div>
      </section>

      {/* Diensten */}
      <section className="py-28 bg-offwhite">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <p className="text-gold text-xs tracking-[0.35em] uppercase mb-4 text-center">
              {t("Onze behandelingen", "Our treatments")}
            </p>
            <h2 className="font-playfair text-3xl md:text-5xl text-center mb-20">
              {t("Drie pijlers van oral longevity", "Three pillars of oral longevity")}
            </h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-10">
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
            ].map((d, i) => (
              <ScrollReveal key={d.title} staggerIndex={i}>
                <Link
                  href={d.href}
                  className="group block p-10 border border-sand/30 hover:border-teal/30 transition-all duration-300 bg-white rounded-lg"
                >
                  <div className="w-10 h-[1px] bg-gold mb-8" />
                  <h3 className="font-playfair text-xl mb-5 group-hover:text-teal transition-colors">{d.title}</h3>
                  <p className="text-charcoal/60 text-sm leading-relaxed mb-6">{d.desc}</p>
                  <span className="text-teal text-xs tracking-[0.2em] uppercase">{t("Meer informatie", "Learn more")} &rarr;</span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Wetenschap */}
      <section className="py-28 bg-sand/10">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <p className="text-gold text-xs tracking-[0.35em] uppercase mb-4 text-center">
              {t("Wetenschap", "Science")}
            </p>
            <h2 className="font-playfair text-3xl md:text-5xl text-center mb-6">
              {t("De mond als spiegel van uw gezondheid", "The mouth as a mirror of your health")}
            </h2>
            <p className="text-center text-charcoal/60 max-w-2xl mx-auto mb-20 leading-relaxed">
              {t(
                "Wetenschappelijk onderzoek laat steeds duidelijker zien dat mondgezondheid direct verbonden is met uw algehele gezondheid en levensverwachting.",
                "Scientific research increasingly shows that oral health is directly linked to your overall health and life expectancy."
              )}
            </p>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-10">
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
            ].map((s, i) => (
              <ScrollReveal key={s.stat} staggerIndex={i}>
                <div className="text-center p-10 bg-white border border-sand/20 rounded-lg">
                  <p className="font-playfair text-4xl md:text-5xl text-teal mb-5">{s.stat}</p>
                  <p className="text-charcoal/60 text-sm leading-relaxed mb-3">{s.label}</p>
                  <p className="text-xs text-charcoal/35 italic">{s.source}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team intro */}
      <section className="py-28 bg-offwhite">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <ScrollReveal>
              <div>
                <p className="text-gold text-xs tracking-[0.35em] uppercase mb-4">
                  {t("Over het team", "About the team")}
                </p>
                <h2 className="font-playfair text-3xl md:text-4xl mb-8">Lotte Meereboer, MSc</h2>
                <p className="text-charcoal/60 leading-relaxed mb-5">
                  {t(
                    "Tandarts voor orthodontie met meer dan 18 jaar ervaring. Studeerde Tandheelkunde aan de Vrije Universiteit en behaalde haar Master of Science Orthodontics aan de Universiteit van Murcia.",
                    "Orthodontist with over 18 years of experience. Studied Dentistry at Vrije Universiteit Amsterdam and obtained her Master of Science in Orthodontics from the University of Murcia."
                  )}
                </p>
                <p className="text-charcoal/60 leading-relaxed mb-8">
                  {t(
                    "Als oprichter van de Dutch Aligner Society en spreker op vele internationale symposia, combineert zij haar passie voor digitale orthodontie met de nieuwste inzichten uit longevity-wetenschap.",
                    "As founder of the Dutch Aligner Society and speaker at numerous international symposia, she combines her passion for digital orthodontics with the latest longevity science insights."
                  )}
                </p>
                <p className="text-xs text-charcoal/40 mb-8 tracking-wide">
                  BIG-{t("geregistreerd", "registered")} · VTvO · European Aligner Society
                </p>
                <Link href="/over-ons" className="text-teal text-xs tracking-[0.2em] uppercase hover:underline underline-offset-4">
                  {t("Meer over ons team", "More about our team")} &rarr;
                </Link>
              </div>
            </ScrollReveal>
            <ScrollReveal staggerIndex={1}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-sand/30">
                <Image
                  src="/images/lotte-meereboer.jpg"
                  alt="Lotte Meereboer - Tandarts voor Orthodontie"
                  fill
                  className="object-cover"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-28 bg-sand/5">
        <div className="max-w-3xl mx-auto px-6">
          <ScrollReveal>
            <p className="text-gold text-xs tracking-[0.35em] uppercase mb-4 text-center">FAQ</p>
            <h2 className="font-playfair text-3xl md:text-4xl text-center mb-20">
              {t("Veelgestelde vragen", "Frequently asked questions")}
            </h2>
          </ScrollReveal>
          <div className="space-y-4">
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
            ] as [string, string][]).map(([q, a], i) => (
              <ScrollReveal key={q} staggerIndex={i}>
                <details className="group bg-white border border-sand/20 p-7 rounded-lg">
                  <summary className="cursor-pointer list-none flex justify-between items-center">
                    <span className="font-playfair text-lg pr-6">{q}</span>
                    <span className="text-teal text-xl shrink-0 group-open:rotate-45 transition-transform duration-200">+</span>
                  </summary>
                  <p className="mt-5 text-charcoal/60 leading-relaxed text-sm">{a}</p>
                </details>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 bg-teal text-offwhite text-center">
        <div className="max-w-2xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="font-playfair text-3xl md:text-5xl mb-8 leading-tight">
              {t("Klaar voor een andere kijk op mondgezondheid?", "Ready for a new perspective on oral health?")}
            </h2>
            <p className="text-offwhite/60 mb-12 leading-relaxed">
              {t(
                "Maak een afspraak en ontdek wat oral longevity voor u kan betekenen.",
                "Book an appointment and discover what oral longevity can do for you."
              )}
            </p>
            <Link
              href="/contact"
              className="inline-block bg-gold text-charcoal px-10 py-4 text-xs tracking-[0.25em] uppercase rounded-lg hover:bg-gold/90 transition-colors"
            >
              {t("Plan een afspraak", "Book an appointment")}
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
