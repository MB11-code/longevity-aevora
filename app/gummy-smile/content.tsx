"use client";

import Image from "next/image";
import Link from "next/link";
import { useLang } from "../lang-context";

export function GummySmileContent() {
  const { t } = useLang();

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-end overflow-hidden">
        <Image
          src="/images/de-kliniek.jpg"
          alt={t("ORAVIVUM Kliniek", "ORAVIVUM Clinic")}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/30 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-8 lg:px-12 pb-20 pt-40 w-full">
          <div className="max-w-2xl">
            <div className="section-divider mb-8 !bg-gold" />
            <p className="text-gold/90 text-[11px] tracking-[0.4em] uppercase mb-5">{t("Behandeling", "Treatment")}</p>
            <h1 className="font-playfair text-4xl md:text-6xl text-offwhite leading-[1.1] mb-6">
              {t("Gummy smile behandeling", "Gummy smile treatment")}
            </h1>
            <p className="text-lg text-offwhite/70 max-w-xl leading-relaxed">
              {t(
                "Een gummy smile — wanneer bij het lachen opvallend veel tandvlees zichtbaar is — kan onzekerheid veroorzaken. Met een gerichte botoxbehandeling bereiken wij een natuurlijkere lachlijn.",
                "A gummy smile — when a significant amount of gum tissue shows while smiling — can cause self-consciousness. With targeted botox we achieve a more natural smile line."
              )}
            </p>
          </div>
        </div>
      </section>

      <section className="py-28 lg:py-32">
        <div className="max-w-4xl mx-auto px-8 lg:px-12">
          <h2 className="font-playfair text-3xl md:text-4xl mb-10">{t("Wat is een gummy smile?", "What is a gummy smile?")}</h2>
          <div className="space-y-5 text-charcoal/55 text-[15px] leading-[1.85]">
            <p>
              {t(
                "Bij een gummy smile is meer dan 3-4 millimeter tandvlees zichtbaar boven de boventanden wanneer u lacht. Dit komt voor bij ongeveer 10-25% van de bevolking en wordt vaker gezien bij vrouwen.",
                "A gummy smile shows more than 3-4 millimetres of gum tissue above the upper teeth when smiling. This occurs in approximately 10-25% of the population and is more common in women."
              )}
            </p>
            <p>{t("Oorzaken kunnen zijn:", "Causes may include:")}</p>
            <ul className="space-y-3 list-none pl-0">
              {[
                t("Overactieve lipspieren die de bovenlip te ver optrekken", "Overactive lip muscles that pull the upper lip too far up"),
                t("Overmatige tandvleesgroei (gingivale hyperplasie)", "Excessive gum growth (gingival hyperplasia)"),
                t("Korte boventanden of vertraagd passief doorbreken", "Short upper teeth or delayed passive eruption"),
                t("Overontwikkeling van de bovenkaak", "Overdevelopment of the upper jaw"),
              ].map((item) => (
                <li key={item} className="flex items-start gap-4">
                  <span className="w-1 h-1 rounded-full bg-gold mt-2.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="pt-2 border-l-2 border-gold/30 pl-6 italic text-charcoal/45">
              {t(
                "Een gummy smile is medisch niet schadelijk, maar kan wel invloed hebben op uw zelfvertrouwen.",
                "A gummy smile is not medically harmful, but it can affect your self-confidence."
              )}
            </p>
          </div>
        </div>
      </section>

      <section className="py-28 lg:py-32 bg-sand/8">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="section-divider mb-8" />
          <h2 className="font-playfair text-3xl md:text-4xl mb-16">{t("De behandeling", "The treatment")}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              [t("Duur", "Duration"), t("10-15 minuten", "10-15 minutes"), t("Vrijwel pijnloos", "Virtually painless")],
              [t("Resultaat", "Results"), t("Direct zichtbaar", "Immediately visible"), t("Optimaal na 1-2 weken", "Optimal after 1-2 weeks")],
              [t("Werkingsduur", "Duration of effect"), t("3-4 maanden", "3-4 months"), t("Herhaalbaar", "Repeatable")],
              [t("Prijs", "Price"), t("Op aanvraag", "On request"), t("Neem contact op voor een indicatie", "Contact us for an estimate")],
            ].map(([title, value, note]) => (
              <div key={title} className="bg-white p-8 lg:p-10 border border-sand/20 hover:shadow-md transition-shadow duration-500">
                <div className="w-8 h-[1px] bg-gold mb-6" />
                <h3 className="font-playfair text-lg mb-3">{title}</h3>
                <p className="text-teal font-semibold text-xl">{value}</p>
                <p className="text-[13px] text-charcoal/40 mt-3 leading-relaxed">{note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 lg:py-32">
        <div className="max-w-4xl mx-auto px-8 lg:px-12">
          <h2 className="font-playfair text-3xl md:text-4xl mb-10">{t("Hoe werkt de behandeling?", "How does the treatment work?")}</h2>
          <div className="space-y-5 text-charcoal/55 text-[15px] leading-[1.85]">
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
        </div>
      </section>

      <section className="py-28 lg:py-32 bg-offwhite">
        <div className="max-w-3xl mx-auto px-8 lg:px-12">
          <div className="text-center mb-16">
            <div className="section-divider mx-auto mb-8" />
            <h2 className="font-playfair text-3xl md:text-4xl">{t("Veelgestelde vragen", "Frequently asked questions")}</h2>
          </div>
          <div className="space-y-3">
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
                t("Zijn er alternatieven voor botox?", "Are there alternatives to botox?"),
                t("Bij een ernstige gummy smile kan een chirurgische lip-repositioning worden overwogen. Botox is de minst invasieve optie en een goed startpunt.", "For a severe gummy smile, surgical lip repositioning may be considered. Botox is the least invasive option and a good starting point."),
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

      <section className="py-28 lg:py-32 bg-teal text-offwhite text-center">
        <div className="max-w-2xl mx-auto px-8 lg:px-12">
          <div className="section-divider mx-auto mb-10 !bg-gold" />
          <h2 className="font-playfair text-3xl md:text-5xl mb-10 leading-[1.15]">
            {t("Wilt u meer weten over gummy smile correctie?", "Want to know more about gummy smile correction?")}
          </h2>
          <p className="text-offwhite/50 mb-12 text-[15px]">{t("Maak een afspraak voor een vrijblijvend consult.", "Book a no-obligation consultation.")}</p>
          <Link href="/contact" className="inline-block bg-gold text-charcoal px-12 py-4 text-[11px] tracking-[0.25em] uppercase hover:bg-sand transition-colors duration-500">
            {t("Plan een afspraak", "Book an appointment")}
          </Link>
        </div>
      </section>
    </>
  );
}
