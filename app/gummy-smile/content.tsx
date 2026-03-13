"use client";

import Link from "next/link";
import Image from "next/image";
import { ScrollReveal } from "../scroll-reveal";
import { useLang } from "../lang-context";

export function GummySmileContent() {
  const { t } = useLang();

  return (
    <>
      <section className="relative min-h-[50vh] flex items-center overflow-hidden -mt-[72px] pt-[72px]">
        <Image
          src="/images/kliniek-interieur.jpg"
          alt="Interieur ORAVIVUM kliniek"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 via-charcoal/50 to-transparent" />
        <div className="relative max-w-4xl mx-auto px-6 py-28">
          <p className="text-gold text-xs tracking-[0.35em] uppercase mb-8">{t("Behandeling", "Treatment")}</p>
          <h1 className="font-playfair text-4xl md:text-6xl leading-[1.08] text-offwhite mb-10">{t("Gummy smile behandeling", "Gummy smile treatment")}</h1>
          <p className="text-lg md:text-xl text-offwhite/70 leading-relaxed max-w-2xl">
            {t(
              "Een gummy smile — wanneer bij het lachen opvallend veel tandvlees zichtbaar is — kan onzekerheid veroorzaken. Met een gerichte behandeling met botulinetoxine bereiken wij een natuurlijkere lachlijn.",
              "A gummy smile — when a significant amount of gum tissue shows while smiling — can cause self-consciousness. With targeted botulinum toxin we achieve a more natural smile line."
            )}
          </p>
        </div>
      </section>

      <section className="py-28 bg-sand/10">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="font-playfair text-3xl mb-10">{t("Wat is een gummy smile?", "What is a gummy smile?")}</h2>
            <div className="space-y-5 text-charcoal/60 leading-relaxed">
              <p>
                {t(
                  "Bij een gummy smile is meer dan 3-4 millimeter tandvlees zichtbaar boven de boventanden wanneer u lacht. Dit komt voor bij ongeveer 10-25% van de bevolking en wordt vaker gezien bij vrouwen.",
                  "A gummy smile shows more than 3-4 millimetres of gum tissue above the upper teeth when smiling. This occurs in approximately 10-25% of the population and is more common in women."
                )}
              </p>
              <p>{t("Oorzaken kunnen zijn:", "Causes may include:")}</p>
              <ul className="space-y-2 list-none pl-0">
                {[
                  t("Overactieve lipspieren die de bovenlip te ver optrekken", "Overactive lip muscles that pull the upper lip too far up"),
                  t("Overmatige tandvleesgroei (gingivale hyperplasie)", "Excessive gum growth (gingival hyperplasia)"),
                  t("Korte boventanden of vertraagd passief doorbreken", "Short upper teeth or delayed passive eruption"),
                  t("Overontwikkeling van de bovenkaak", "Overdevelopment of the upper jaw"),
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="w-1 h-1 rounded-full bg-teal mt-2.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p>
                {t(
                  "Een gummy smile is medisch niet schadelijk, maar kan wel invloed hebben op uw zelfvertrouwen.",
                  "A gummy smile is not medically harmful, but it can affect your self-confidence."
                )}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-28 bg-offwhite">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="font-playfair text-3xl mb-14">{t("De behandeling", "The treatment")}</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-10">
            {[
              [t("Duur", "Duration"), t("10-15 minuten", "10-15 minutes"), t("Vrijwel pijnloos", "Virtually painless")],
              [t("Resultaat", "Results"), t("Direct zichtbaar", "Immediately visible"), t("Optimaal na 1-2 weken", "Optimal after 1-2 weeks")],
              [t("Werkingsduur", "Duration of effect"), t("3-4 maanden", "3-4 months"), t("Herhaalbaar", "Repeatable")],
              [t("Prijs", "Price"), t("Op aanvraag", "On request"), t("Neem contact op voor een indicatie", "Contact us for an estimate")],
            ].map(([title, value, note], i) => (
              <ScrollReveal key={title} staggerIndex={i}>
                <div className="bg-white p-10 border border-sand/30 rounded-lg">
                  <div className="w-10 h-[1px] bg-gold mb-8" />
                  <h3 className="font-playfair text-lg mb-2">{title}</h3>
                  <p className="text-teal font-semibold text-lg">{value}</p>
                  <p className="text-sm text-charcoal/45 mt-2">{note}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 bg-sand/10">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="font-playfair text-3xl mb-10">{t("Hoe werkt de behandeling?", "How does the treatment work?")}</h2>
            <div className="space-y-5 text-charcoal/60 leading-relaxed">
              <p>
                {t(
                  "Botulinum toxine wordt geïnjecteerd in de spieren die de bovenlip optrekken (m. levator labii superioris). Door deze spieren subtiel te ontspannen, wordt de bovenlip minder ver opgetrokken bij het lachen.",
                  "Botulinum toxin is injected into the muscles that elevate the upper lip (m. levator labii superioris). By subtly relaxing these muscles, the upper lip is pulled up less when smiling."
                )}
              </p>
              <p>
                {t(
                  "Het resultaat is een natuurlijkere lachlijn waarbij minder tandvlees zichtbaar is. De behandeling is zeer precies: uw glimlach wordt niet 'bevroren' maar subtiel gecorrigeerd.",
                  "The result is a more natural smile line with less visible gum tissue. The treatment is very precise: your smile is not 'frozen' but subtly corrected."
                )}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-28 bg-sand/5">
        <div className="max-w-3xl mx-auto px-6">
          <ScrollReveal>
            <p className="text-gold text-xs tracking-[0.35em] uppercase mb-4 text-center">FAQ</p>
            <h2 className="font-playfair text-3xl md:text-4xl text-center mb-20">{t("Veelgestelde vragen", "Frequently asked questions")}</h2>
          </ScrollReveal>
          <div className="space-y-4">
            {([
              [
                t("Is de behandeling pijnlijk?", "Is the treatment painful?"),
                t("Vrijwel pijnloos. Er worden zeer dunne naalden gebruikt en de injectie duurt slechts enkele seconden.", "Virtually painless. Very thin needles are used and the injection takes only a few seconds."),
              ],
              [
                t("Kan ik na de behandeling normaal lachen?", "Can I smile normally after the treatment?"),
                t("Absoluut. De behandeling is subtiel afgestemd zodat u natuurlijk kunt lachen met minder tandvlees zichtbaar.", "Absolutely. The treatment is subtly calibrated so you can smile naturally with less visible gum tissue."),
              ],
              [
                t("Hoelang duurt het resultaat?", "How long do the results last?"),
                t("Gemiddeld 3 tot 4 maanden. Daarna kan de behandeling eenvoudig herhaald worden.", "On average 3 to 4 months. After that, the treatment can easily be repeated."),
              ],
              [
                t("Zijn er alternatieven voor botulinetoxine?", "Are there alternatives to botulinum toxin?"),
                t("Bij een ernstige gummy smile kan een chirurgische lip-repositioning worden overwogen. Botulinetoxine is de minst invasieve optie en een goed startpunt.", "For a severe gummy smile, surgical lip repositioning may be considered. Botulinum toxin is the least invasive option and a good starting point."),
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

      <section className="py-28 bg-teal text-offwhite text-center">
        <div className="max-w-2xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="font-playfair text-3xl md:text-4xl mb-8">
              {t("Wilt u meer weten over gummy smile correctie?", "Want to know more about gummy smile correction?")}
            </h2>
            <p className="text-offwhite/60 mb-12 leading-relaxed">{t("Maak een afspraak voor een vrijblijvend consult.", "Book a no-obligation consultation.")}</p>
            <Link href="/contact" className="inline-block bg-gold text-charcoal px-10 py-4 text-xs tracking-[0.25em] uppercase rounded-lg hover:bg-gold/90 transition-colors">
              {t("Plan een afspraak", "Book an appointment")}
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
