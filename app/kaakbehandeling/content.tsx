"use client";

import Link from "next/link";
import Image from "next/image";
import { useLang } from "../lang-context";
import { ScrollReveal } from "../scroll-reveal";

export function KaakbehandelingContent() {
  const { t } = useLang();

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden -mt-[72px] pt-[72px]">
        <Image
          src="/images/behandelkamer.jpg"
          alt={t("Behandelkamer ORAVIVUM Amsterdam", "Treatment room ORAVIVUM Amsterdam")}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 via-charcoal/50 to-transparent" />
        <div className="relative max-w-4xl mx-auto px-6 py-28">
          <p className="text-gold text-xs tracking-[0.35em] uppercase mb-8">{t("Behandeling", "Treatment")}</p>
          <h1 className="font-playfair text-4xl md:text-6xl leading-[1.08] text-offwhite mb-10">
            {t("Behandeling bij tandenknarsen en kaakklachten", "Treatment for teeth grinding and jaw problems")}
          </h1>
          <p className="text-lg md:text-xl text-offwhite/70 leading-relaxed max-w-2xl">
            {t(
              "Tandenknarsen (bruxisme) treft tot 70% van de volwassenen en veroorzaakt kaakpijn, hoofdpijn en gebitsslijtage. Met een gerichte spierontspannende injectiebehandeling ontspannen wij de kaakspieren in slechts 15 minuten.",
              "Teeth grinding (bruxism) affects up to 70% of adults, causing jaw pain, headaches and dental wear. With a targeted muscle relaxant injection we relax the jaw muscles in just 15 minutes."
            )}
          </p>
          <div className="flex flex-wrap gap-4 mt-10">
            <Link href="/contact" className="inline-block bg-gold text-charcoal px-10 py-4 text-xs tracking-[0.25em] uppercase rounded-lg hover:bg-gold/90 transition-colors">
              {t("Plan een afspraak", "Book an appointment")}
            </Link>
            <a href="tel:0207235222" className="inline-flex items-center gap-2 text-offwhite/80 hover:text-offwhite px-6 py-4 text-sm transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              020 72 35 222
            </a>
          </div>
        </div>
      </section>

      {/* Wat is bruxisme */}
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
                    alt={t("Behandelkamer ORAVIVUM", "Treatment room ORAVIVUM")}
                    fill
                    className="object-cover"
                  />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* De behandeling */}
      <section className="py-28 bg-offwhite">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="font-playfair text-3xl mb-14">{t("De behandeling", "The treatment")}</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-10">
            {[
              [t("Duur", "Duration"), t("15 minuten", "15 minutes"), t("Geen verdoving nodig", "No anaesthesia needed")],
              [t("Resultaat", "Results"), t("Binnen 1 week", "Within 1 week"), t("Geleidelijke ontspanning van de kaakspieren", "Gradual relaxation of the jaw muscles")],
              [t("Werkingsduur", "Duration of effect"), t("6-12 maanden", "6-12 months"), t("Bij herhaling vaak langer effect", "Repeated treatments often last longer")],
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

      {/* Hoe het werkt */}
      <section className="py-28 bg-sand/10">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="font-playfair text-3xl mb-10">{t("Hoe werkt de kaakspierbehandeling?", "How does the jaw muscle treatment work?")}</h2>
            <div className="space-y-5 text-charcoal/60 leading-relaxed">
              <p>
                {t(
                  "Een spierontspannend middel wordt in kleine doses geïnjecteerd in de musculus masseter — de grote kaakspier die verantwoordelijk is voor het klemmen en knarsen. De injectie blokkeert tijdelijk de zenuwimpulsen naar de spier, waardoor deze ontspant zonder uw normale kauwfunctie aan te tasten.",
                  "A muscle relaxant is injected in small doses into the masseter muscle — the large jaw muscle responsible for clenching and grinding. The injection temporarily blocks nerve impulses to the muscle, causing it to relax without affecting your normal chewing function."
                )}
              </p>
              <p>
                {t(
                  "Het resultaat: minder knarsen, minder kaakpijn, minder hoofdpijn en bescherming van uw gebit. De behandeling is snel, vrijwel pijnloos en u kunt direct daarna uw dagelijkse activiteiten hervatten.",
                  "The result: less grinding, less jaw pain, fewer headaches and protection of your teeth. The treatment is quick, virtually painless and you can resume your daily activities immediately afterwards."
                )}
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal staggerIndex={1}>
            <div className="grid md:grid-cols-3 gap-8 mt-14">
              {[
                [t("Stap 1", "Step 1"), t("Intake & diagnose", "Intake & diagnosis"), t("De tandarts beoordeelt uw kaakspieren en bespreekt uw klachten.", "The dentist assesses your jaw muscles and discusses your symptoms.")],
                [t("Stap 2", "Step 2"), t("Gerichte injectie", "Targeted injection"), t("Het spierontspannende middel wordt nauwkeurig in de kauwspieren geïnjecteerd.", "The muscle relaxant is precisely injected into the chewing muscles.")],
                [t("Stap 3", "Step 3"), t("Resultaat", "Result"), t("Binnen een week merkt u vermindering van knarsen, kaakpijn en hoofdpijn.", "Within a week you will notice a reduction in grinding, jaw pain and headaches.")],
              ].map(([step, title, desc], i) => (
                <div key={step} className="bg-white p-8 border border-sand/30 rounded-lg">
                  <p className="text-gold text-xs tracking-[0.25em] uppercase mb-4">{step}</p>
                  <h3 className="font-playfair text-lg mb-3">{title}</h3>
                  <p className="text-sm text-charcoal/55 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Voor wie */}
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
                    t("U last heeft van een vierkante kaak door gespannen kaakspieren", "You suffer from a square jaw due to tense jaw muscles"),
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
                    t("Allergie voor het spierontspannende middel", "Allergy to the muscle relaxant"),
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

      {/* Vertrouwenselementen */}
      <section className="py-28 bg-sand/10">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <p className="text-gold text-xs tracking-[0.35em] uppercase mb-4 text-center">{t("Waarom ORAVIVUM", "Why ORAVIVUM")}</p>
            <h2 className="font-playfair text-3xl md:text-4xl text-center mb-16">
              {t("Uw behandeling in vertrouwde handen", "Your treatment in trusted hands")}
            </h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              [t("BIG-geregistreerd", "BIG-registered"), t("Uw behandelaar is een BIG-geregistreerd tandarts met jarenlange ervaring in kaakspierbehandelingen.", "Your practitioner is a BIG-registered dentist with years of experience in jaw muscle treatments.")],
              [t("Locatie Museumplein", "Museumplein location"), t("Onze praktijk aan de Teniersstraat ligt op loopafstand van het Museumplein, in het hart van Amsterdam-Zuid.", "Our practice on Teniersstraat is within walking distance of Museumplein, in the heart of Amsterdam South.")],
              [t("Persoonlijke aanpak", "Personal approach"), t("Elk behandelplan wordt op maat gemaakt na een uitgebreide intake en diagnose van uw specifieke klachten.", "Every treatment plan is tailored after a comprehensive intake and diagnosis of your specific symptoms.")],
            ].map(([title, desc], i) => (
              <ScrollReveal key={title} staggerIndex={i}>
                <div className="bg-white p-10 border border-sand/30 rounded-lg text-center">
                  <div className="w-10 h-[1px] bg-gold mb-8 mx-auto" />
                  <h3 className="font-playfair text-lg mb-4">{title}</h3>
                  <p className="text-sm text-charcoal/55 leading-relaxed">{desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-28 bg-offwhite">
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
                t("Hoe lang houdt het effect van de behandeling aan?", "How long does the treatment effect last?"),
                t("Gemiddeld 6 tot 12 maanden. Bij herhaalde behandelingen merken veel patiënten dat het effect langer aanhoudt doordat de kaakspier kleiner en zwakker wordt.", "On average 6 to 12 months. With repeated treatments, many patients notice the effect lasts longer as the jaw muscle becomes smaller and weaker."),
              ],
              [
                t("Doet de behandeling pijn?", "Is the treatment painful?"),
                t("Minimaal. Er worden zeer dunne naalden gebruikt. De meeste patiënten omschrijven het als een licht prikje. Verdoving is niet nodig.", "Minimal. Very thin needles are used. Most patients describe it as a light prick. No anaesthesia is needed."),
              ],
              [
                t("Kan ik na de behandeling normaal eten?", "Can I eat normally after the treatment?"),
                t("Ja, direct. Wij adviseren de eerste 4 uur niet te liggen en het behandelde gebied niet te masseren.", "Yes, immediately. We advise not to lie down for 4 hours and not to massage the treated area."),
              ],
              [
                t("Wat wordt er precies geïnjecteerd?", "What is injected exactly?"),
                t("Er wordt een spierontspannend middel geïnjecteerd dat de overactieve kaakspieren tijdelijk tot rust brengt. Het is een bewezen veilige en veelgebruikte medische behandeling die al tientallen jaren wordt toegepast.", "A muscle relaxant is injected that temporarily calms the overactive jaw muscles. It is a proven safe and widely used medical treatment that has been applied for decades."),
              ],
              [
                t("Hoe vaak moet ik terugkomen?", "How often do I need to return?"),
                t("In het begin gemiddeld 1-2 keer per jaar. Na verloop van tijd kan de frequentie afnemen doordat de kaakspier structureel ontspant en minder kracht genereert.", "Initially on average 1-2 times per year. Over time the frequency may decrease as the jaw muscle structurally relaxes and generates less force."),
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
            <h2 className="font-playfair text-3xl md:text-4xl mb-8">
              {t("Last van tandenknarsen of kaakklachten?", "Suffering from teeth grinding or jaw problems?")}
            </h2>
            <p className="text-offwhite/60 mb-12 leading-relaxed">
              {t(
                "Maak een afspraak voor een vrijblijvend consult. Onze ervaren tandarts bespreekt uw klachten en de mogelijkheden.",
                "Book a no-obligation consultation. Our experienced dentist will discuss your symptoms and treatment options."
              )}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="inline-block bg-gold text-charcoal px-10 py-4 text-xs tracking-[0.25em] uppercase rounded-lg hover:bg-gold/90 transition-colors">
                {t("Plan een afspraak", "Book an appointment")}
              </Link>
              <a href="tel:0207235222" className="inline-flex items-center gap-2 bg-offwhite/10 text-offwhite px-8 py-4 text-xs tracking-[0.25em] uppercase rounded-lg hover:bg-offwhite/20 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                020 72 35 222
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
