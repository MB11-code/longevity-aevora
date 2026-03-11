"use client";

import Image from "next/image";
import Link from "next/link";
import { useLang } from "../lang-context";

export function BotoxContent() {
  const { t } = useLang();

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-end overflow-hidden">
        <Image
          src="/images/header-clinic.jpg"
          alt={t("Behandelkamer", "Treatment room")}
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
              {t("Botox tegen bruxisme", "Botox for bruxism")}
            </h1>
            <p className="text-lg text-offwhite/70 max-w-xl leading-relaxed">
              {t(
                "Tandenknarsen (bruxisme) treft tot 70% van de volwassenen en veroorzaakt kaakpijn, hoofdpijn en gebitsslijtage. Met een gerichte botoxbehandeling ontspannen wij de kaakspieren in slechts 15 minuten.",
                "Teeth grinding (bruxism) affects up to 70% of adults, causing jaw pain, headaches and dental wear. With targeted botox we relax the jaw muscles in just 15 minutes."
              )}
            </p>
          </div>
        </div>
      </section>

      <section className="py-28 lg:py-32">
        <div className="max-w-4xl mx-auto px-8 lg:px-12">
          <h2 className="font-playfair text-3xl md:text-4xl mb-10">{t("Wat is bruxisme?", "What is bruxism?")}</h2>
          <div className="text-charcoal/55 space-y-5 text-[15px] leading-[1.85]">
            <p>
              {t(
                "Bruxisme is het onbewust knarsen of klemmen van de tanden, meestal 's nachts. Het wordt vaak veroorzaakt door stress, een afwijkende kaakstand of slaapstoornissen. Op lange termijn kan bruxisme leiden tot:",
                "Bruxism is the unconscious grinding or clenching of teeth, usually at night. It is often caused by stress, jaw misalignment or sleep disorders. Long-term, bruxism can lead to:"
              )}
            </p>
            <ul className="space-y-3 list-none pl-0">
              {[
                t("Slijtage en beschadiging van het glazuur", "Enamel wear and damage"),
                t("Chronische kaakpijn (TMD/CMD)", "Chronic jaw pain (TMD/CMD)"),
                t("Spanningshoofdpijn en migraine", "Tension headaches and migraines"),
                t("Oorpijn en tinnitus", "Ear pain and tinnitus"),
                t("Gestoorde slaapkwaliteit", "Disrupted sleep quality"),
              ].map((item) => (
                <li key={item} className="flex items-start gap-4">
                  <span className="w-1 h-1 rounded-full bg-gold mt-2.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="pt-2 border-l-2 border-gold/30 pl-6 italic text-charcoal/45">
              {t(
                "Vanuit het longevity-perspectief is bruxisme meer dan een tandheelkundig probleem: het is een signaal van chronische stress dat uw algehele gezondheid beinvloedt.",
                "From a longevity perspective, bruxism is more than a dental problem: it is a signal of chronic stress affecting your overall health."
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
              [t("Duur", "Duration"), t("15 minuten", "15 minutes"), t("Geen verdoving nodig", "No anaesthesia needed")],
              [t("Resultaat", "Results"), t("Na 1-2 weken", "After 1-2 weeks"), t("Geleidelijke ontspanning van de kaakspieren", "Gradual relaxation of the jaw muscles")],
              [t("Werkingsduur", "Duration of effect"), t("3-6 maanden", "3-6 months"), t("Bij herhaling vaak langer effect", "Repeated treatments often last longer")],
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
          <h2 className="font-playfair text-3xl md:text-4xl mb-10">{t("Hoe werkt botox tegen tandenknarsen?", "How does botox work against teeth grinding?")}</h2>
          <div className="space-y-5 text-charcoal/55 text-[15px] leading-[1.85]">
            <p>
              {t(
                "Botulinum toxine type A (botox) wordt in kleine doses geïnjecteerd in de musculus masseter — de grote kaakspier die verantwoordelijk is voor het klemmen en knarsen. De botox blokkeert tijdelijk de zenuwimpulsen naar de spier, waardoor deze ontspant.",
                "Botulinum toxin type A (botox) is injected in small doses into the masseter muscle — the large jaw muscle responsible for clenching and grinding. The botox temporarily blocks nerve impulses to the muscle, causing it to relax."
              )}
            </p>
            <p>
              {t(
                "Het resultaat: minder knarsen, minder kaakpijn, minder hoofdpijn en bescherming van uw gebit. De behandeling tast uw normale kauwfunctie niet aan.",
                "The result: less grinding, less jaw pain, fewer headaches and protection of your teeth. The treatment does not affect your normal chewing function."
              )}
            </p>
          </div>
        </div>
      </section>

      <section className="py-28 lg:py-32 bg-sand/8">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <h2 className="font-playfair text-3xl md:text-4xl mb-12">{t("Voor wie is deze behandeling?", "Who is this treatment for?")}</h2>
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h3 className="font-semibold mb-6 text-teal text-[11px] tracking-[0.2em] uppercase">{t("Geschikt voor u als", "Suitable for you if")}</h3>
              <ul className="space-y-4 text-charcoal/55 text-[15px]">
                {[
                  t("U 's nachts knarst of perst op de tanden", "You grind or clench your teeth at night"),
                  t("U last heeft van kaakpijn of CMD", "You suffer from jaw pain or TMD"),
                  t("Spanningshoofdpijn een terugkerend probleem is", "Tension headaches are a recurring issue"),
                  t("Een bitesplint onvoldoende verlichting biedt", "A bite splint provides insufficient relief"),
                  t("U gebitsslijtage wilt voorkomen", "You want to prevent dental wear"),
                ].map((item) => (
                  <li key={item} className="flex items-start gap-4">
                    <span className="w-1 h-1 rounded-full bg-gold mt-2.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-6 text-charcoal/35 text-[11px] tracking-[0.2em] uppercase">{t("Niet geschikt bij", "Not suitable for")}</h3>
              <ul className="space-y-4 text-charcoal/40 text-[15px]">
                {[
                  t("Zwangerschap of borstvoeding", "Pregnancy or breastfeeding"),
                  t("Neuromusculaire aandoeningen", "Neuromuscular disorders"),
                  t("Allergie voor botulinum toxine", "Allergy to botulinum toxin"),
                  t("Gebruik van bloedverdunners (overleg)", "Use of blood thinners (consult required)"),
                ].map((item) => (
                  <li key={item} className="flex items-start gap-4">
                    <span className="w-1 h-1 rounded-full bg-charcoal/20 mt-2.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-28 lg:py-32">
        <div className="max-w-3xl mx-auto px-8 lg:px-12">
          <div className="text-center mb-16">
            <div className="section-divider mx-auto mb-8" />
            <h2 className="font-playfair text-3xl md:text-4xl">
              {t("Veelgestelde vragen", "Frequently asked questions")}
            </h2>
          </div>
          <div className="space-y-3">
            {([
              [
                t("Hoelang werkt botox tegen tandenknarsen?", "How long does botox for teeth grinding last?"),
                t("Gemiddeld 3 tot 6 maanden. Bij herhaalde behandelingen merken veel patiënten dat het effect langer aanhoudt doordat de spier kleiner wordt.", "On average 3 to 6 months. With repeated treatments, many patients notice the effect lasts longer as the muscle becomes smaller."),
              ],
              [
                t("Doet de behandeling pijn?", "Is the treatment painful?"),
                t("Minimaal. Er worden zeer dunne naalden gebruikt. De meeste patiënten omschrijven het als een licht prikje. Verdoving is niet nodig.", "Minimal. Very thin needles are used. Most patients describe it as a light prick. No anaesthesia is needed."),
              ],
              [
                t("Kan ik na de behandeling normaal eten?", "Can I eat normally after the treatment?"),
                t("Ja, direct. Wij adviseren de eerste 4 uur niet te liggen en het gebied niet te masseren.", "Yes, immediately. We advise not to lie down for 4 hours and not to massage the treated area."),
              ],
              [
                t("Zijn er bijwerkingen?", "Are there side effects?"),
                t("Bijwerkingen zijn zeldzaam: mogelijk een kleine blauwe plek of lichte zwelling die binnen dagen verdwijnt. De kauwfunctie blijft intact.", "Side effects are rare: possibly a small bruise or slight swelling that disappears within days. Chewing function remains intact."),
              ],
              [
                t("Hoe vaak moet ik terugkomen?", "How often do I need to return?"),
                t("Gemiddeld 2-3 keer per jaar. Na verloop van tijd kan de frequentie afnemen doordat de spier structureel ontspant.", "On average 2-3 times per year. Over time the frequency may decrease as the muscle structurally relaxes."),
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
            {t("Last van tandenknarsen?", "Suffering from teeth grinding?")}
          </h2>
          <p className="text-offwhite/50 mb-12 text-[15px]">
            {t("Maak een afspraak voor een vrijblijvend consult.", "Book a no-obligation consultation.")}
          </p>
          <Link href="/contact" className="inline-block bg-gold text-charcoal px-12 py-4 text-[11px] tracking-[0.25em] uppercase hover:bg-sand transition-colors duration-500">
            {t("Plan een afspraak", "Book an appointment")}
          </Link>
        </div>
      </section>
    </>
  );
}
