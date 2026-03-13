"use client";

import Link from "next/link";
import Image from "next/image";
import { useLang } from "../lang-context";
import { ScrollReveal } from "../scroll-reveal";

export function BruxismeContent() {
  const { t } = useLang();

  return (
    <>
      <section className="relative min-h-[50vh] flex items-center overflow-hidden -mt-[72px] pt-[72px]">
        <Image
          src="/images/behandelkamer.jpg"
          alt="Behandelkamer ORAVIVUM"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 via-charcoal/50 to-transparent" />
        <div className="relative max-w-4xl mx-auto px-6 py-28">
          <p className="text-gold text-xs tracking-[0.35em] uppercase mb-8">{t("Behandeling", "Treatment")}</p>
          <h1 className="font-playfair text-4xl md:text-6xl leading-[1.08] text-offwhite mb-10">{t("Botulinetoxine tegen bruxisme", "Botulinum toxin for bruxism")}</h1>
          <p className="text-lg md:text-xl text-offwhite/70 leading-relaxed max-w-2xl">
            {t(
              "Tandenknarsen (bruxisme) treft tot 70% van de volwassenen en veroorzaakt kaakpijn, hoofdpijn en gebitsslijtage. Met een gerichte behandeling met botulinetoxine ontspannen wij de kaakspieren in slechts 15 minuten.",
              "Teeth grinding (bruxism) affects up to 70% of adults, causing jaw pain, headaches and dental wear. With targeted botulinum toxin we relax the jaw muscles in just 15 minutes."
            )}
          </p>
        </div>
      </section>

      <section className="py-28 bg-sand/10">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-5 gap-12 items-start">
            <div className="md:col-span-3">
              <ScrollReveal>
                <h2 className="font-playfair text-3xl mb-10">{t("Wat is bruxisme?", "What is bruxism?")}</h2>
                <div className="text-charcoal/60 space-y-5 leading-relaxed">
                  <p>
                    {t(
                      "Bruxisme is het onbewust knarsen of klemmen van de tanden, meestal 's nachts. Het wordt vaak veroorzaakt door stress, een afwijkende kaakstand of slaapstoornissen. Op lange termijn kan bruxisme leiden tot:",
                      "Bruxism is the unconscious grinding or clenching of teeth, usually at night. It is often caused by stress, jaw misalignment or sleep disorders. Long-term, bruxism can lead to:"
                    )}
                  </p>
                  <ul className="space-y-2 list-none pl-0">
                    {[
                      t("Slijtage en beschadiging van het glazuur", "Enamel wear and damage"),
                      t("Chronische kaakpijn (TMD/CMD)", "Chronic jaw pain (TMD/CMD)"),
                      t("Spanningshoofdpijn en migraine", "Tension headaches and migraines"),
                      t("Oorpijn en tinnitus", "Ear pain and tinnitus"),
                      t("Gestoorde slaapkwaliteit", "Disrupted sleep quality"),
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="w-1 h-1 rounded-full bg-teal mt-2.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p>
                    {t(
                      "Vanuit het longevity-perspectief is bruxisme meer dan een tandheelkundig probleem: het is een signaal van chronische stress dat uw algehele gezondheid beïnvloedt.",
                      "From a longevity perspective, bruxism is more than a dental problem: it is a signal of chronic stress affecting your overall health."
                    )}
                  </p>
                </div>
              </ScrollReveal>
            </div>
            <div className="md:col-span-2">
              <ScrollReveal staggerIndex={1}>
                <div className="relative aspect-[3/4] overflow-hidden rounded-lg border border-sand/30">
                  <Image
                    src="/images/behandelkamer.jpg"
                    alt="Behandelkamer ORAVIVUM"
                    fill
                    className="object-cover"
                  />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <section className="py-28 bg-offwhite">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="font-playfair text-3xl mb-14">{t("De behandeling", "The treatment")}</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-10">
            {[
              [t("Duur", "Duration"), t("15 minuten", "15 minutes"), t("Geen verdoving nodig", "No anaesthesia needed")],
              [t("Resultaat", "Results"), t("Na 1-2 weken", "After 1-2 weeks"), t("Geleidelijke ontspanning van de kaakspieren", "Gradual relaxation of the jaw muscles")],
              [t("Werkingsduur", "Duration of effect"), t("3-6 maanden", "3-6 months"), t("Bij herhaling vaak langer effect", "Repeated treatments often last longer")],
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
            <h2 className="font-playfair text-3xl mb-10">{t("Hoe werkt botulinetoxine tegen tandenknarsen?", "How does botulinum toxin work against teeth grinding?")}</h2>
            <div className="space-y-5 text-charcoal/60 leading-relaxed">
              <p>
                {t(
                  "Botulinum toxine type A (botulinetoxine) wordt in kleine doses geïnjecteerd in de musculus masseter — de grote kaakspier die verantwoordelijk is voor het klemmen en knarsen. Het middel blokkeert tijdelijk de zenuwimpulsen naar de spier, waardoor deze ontspant.",
                  "Botulinum toxin type A (botulinum toxin) is injected in small doses into the masseter muscle — the large jaw muscle responsible for clenching and grinding. The substance temporarily blocks nerve impulses to the muscle, causing it to relax."
                )}
              </p>
              <p>
                {t(
                  "Het resultaat: minder knarsen, minder kaakpijn, minder hoofdpijn en bescherming van uw gebit. De behandeling tast uw normale kauwfunctie niet aan.",
                  "The result: less grinding, less jaw pain, fewer headaches and protection of your teeth. The treatment does not affect your normal chewing function."
                )}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-28 bg-offwhite">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="font-playfair text-3xl mb-10">{t("Voor wie is deze behandeling?", "Who is this treatment for?")}</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-12">
            <ScrollReveal>
              <div>
                <h3 className="font-semibold mb-5 text-teal text-sm tracking-[0.15em] uppercase">{t("Geschikt voor u als", "Suitable for you if")}</h3>
                <ul className="space-y-3 text-charcoal/60">
                  {[
                    t("U 's nachts knarst of perst op de tanden", "You grind or clench your teeth at night"),
                    t("U last heeft van kaakpijn of CMD", "You suffer from jaw pain or TMD"),
                    t("Spanningshoofdpijn een terugkerend probleem is", "Tension headaches are a recurring issue"),
                    t("Een bitesplint onvoldoende verlichting biedt", "A bite splint provides insufficient relief"),
                    t("U gebitsslijtage wilt voorkomen", "You want to prevent dental wear"),
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="w-1 h-1 rounded-full bg-teal mt-2.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
            <ScrollReveal staggerIndex={1}>
              <div>
                <h3 className="font-semibold mb-5 text-charcoal/40 text-sm tracking-[0.15em] uppercase">{t("Niet geschikt bij", "Not suitable for")}</h3>
                <ul className="space-y-3 text-charcoal/45">
                  {[
                    t("Zwangerschap of borstvoeding", "Pregnancy or breastfeeding"),
                    t("Neuromusculaire aandoeningen", "Neuromuscular disorders"),
                    t("Allergie voor botulinum toxine", "Allergy to botulinum toxin"),
                    t("Gebruik van bloedverdunners (overleg)", "Use of blood thinners (consult required)"),
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="w-1 h-1 rounded-full bg-charcoal/30 mt-2.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

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
                t("Hoelang werkt botulinetoxine tegen tandenknarsen?", "How long does botulinum toxin for teeth grinding last?"),
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
              {t("Last van tandenknarsen?", "Suffering from teeth grinding?")}
            </h2>
            <p className="text-offwhite/60 mb-12 leading-relaxed">
              {t("Maak een afspraak voor een vrijblijvend consult.", "Book a no-obligation consultation.")}
            </p>
            <Link href="/contact" className="inline-block bg-gold text-charcoal px-10 py-4 text-xs tracking-[0.25em] uppercase rounded-lg hover:bg-gold/90 transition-colors">
              {t("Plan een afspraak", "Book an appointment")}
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
