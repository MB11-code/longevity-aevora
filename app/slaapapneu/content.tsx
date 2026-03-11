"use client";

import Image from "next/image";
import Link from "next/link";
import { useLang } from "../lang-context";

export function SlaapapneuContent() {
  const { t } = useLang();

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-end overflow-hidden">
        <Image
          src="/images/clinic-interior.jpg"
          alt={t("ORAVIVUM Kliniek", "ORAVIVUM Clinic")}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/30 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-8 lg:px-12 pb-20 pt-40 w-full">
          <div className="max-w-2xl">
            <div className="section-divider mb-8 !bg-gold" />
            <p className="text-gold/90 text-[11px] tracking-[0.4em] uppercase mb-5">{t("Screening & Behandeling", "Screening & Treatment")}</p>
            <h1 className="font-playfair text-4xl md:text-6xl text-offwhite leading-[1.1] mb-6">
              {t("Slaapapneu screening", "Sleep apnea screening")}
            </h1>
            <p className="text-lg text-offwhite/70 max-w-xl leading-relaxed">
              {t(
                "Naar schatting heeft 10-15% van de Nederlandse bevolking een vorm van obstructief slaapapneu. Bij veel mensen wordt dit niet gediagnosticeerd.",
                "An estimated 10-15% of the Dutch population has a form of obstructive sleep apnea. Many cases go undiagnosed."
              )}
            </p>
            <div className="mt-10 inline-block border border-gold/50 text-gold px-6 py-3 text-[11px] tracking-[0.2em] uppercase">
              {t("Binnenkort volledig beschikbaar", "Coming soon")}
            </div>
          </div>
        </div>
      </section>

      <section className="py-28 lg:py-32">
        <div className="max-w-4xl mx-auto px-8 lg:px-12">
          <h2 className="font-playfair text-3xl md:text-4xl mb-10">{t("Wat is slaapapneu?", "What is sleep apnea?")}</h2>
          <div className="space-y-5 text-charcoal/55 text-[15px] leading-[1.85]">
            <p>
              {t(
                "Obstructief slaapapneu syndroom (OSAS) is een aandoening waarbij de bovenste luchtweg tijdens de slaap herhaaldelijk gedeeltelijk of volledig wordt afgesloten. Dit veroorzaakt ademstops van 10 seconden of langer, soms tientallen keren per nacht.",
                "Obstructive sleep apnea syndrome (OSAS) is a condition where the upper airway is repeatedly partially or completely blocked during sleep. This causes breathing pauses of 10 seconds or more, sometimes dozens of times per night."
              )}
            </p>
            <p>{t("De gevolgen zijn verstrekkend:", "The consequences are far-reaching:")}</p>
            <ul className="space-y-3 list-none pl-0">
              {[
                t("Chronische vermoeidheid en concentratieproblemen", "Chronic fatigue and concentration problems"),
                t("Verhoogd risico op hart- en vaatziekten (2-3x hoger)", "Increased cardiovascular risk (2-3x higher)"),
                t("Verhoogd risico op diabetes type 2", "Increased risk of type 2 diabetes"),
                t("Depressie en stemmingsstoornissen", "Depression and mood disorders"),
                t("Verhoogd ongevalsrisico door slaperigheid overdag", "Increased accident risk from daytime drowsiness"),
              ].map((item) => (
                <li key={item} className="flex items-start gap-4">
                  <span className="w-1 h-1 rounded-full bg-gold mt-2.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="pt-2 border-l-2 border-gold/30 pl-6 italic text-charcoal/45">
              {t(
                "Vanuit het longevity-perspectief is slaapapneu een van de belangrijkste behandelbare risicofactoren voor vroegtijdige veroudering.",
                "From a longevity perspective, sleep apnea is one of the most important treatable risk factors for premature ageing."
              )}
            </p>
          </div>
        </div>
      </section>

      <section className="py-28 lg:py-32 bg-sand/8">
        <div className="max-w-4xl mx-auto px-8 lg:px-12">
          <h2 className="font-playfair text-3xl md:text-4xl mb-10">{t("De link met kaakpositie", "The link with jaw position")}</h2>
          <div className="space-y-5 text-charcoal/55 text-[15px] leading-[1.85]">
            <p>
              {t(
                "De positie en grootte van uw kaak hebben direct invloed op de ruimte voor de luchtweg achter de tong. Een terugliggende of te kleine onderkaak (retrognathie) kan de luchtweg significant vernauwen.",
                "The position and size of your jaw directly affect the space for the airway behind the tongue. A receding or undersized lower jaw (retrognathia) can significantly narrow the airway."
              )}
            </p>
            <p>
              {t(
                "Als orthodontist kan Lotte Meereboer deze relatie beoordelen en behandelen. Dit maakt de tandarts een belangrijke schakel in de diagnose en behandeling van slaapapneu.",
                "As an orthodontist, Lotte Meereboer can assess and treat this relationship. This makes the dentist a crucial link in the diagnosis and treatment of sleep apnea."
              )}
            </p>
          </div>
        </div>
      </section>

      <section className="py-28 lg:py-32">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="section-divider mb-8" />
          <h2 className="font-playfair text-3xl md:text-4xl mb-16">{t("Onze screening", "Our screening")}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              [t("Kaakpositie", "Jaw Position"), t("Beoordeling van de kaakstand en de ruimte voor de luchtweg", "Assessment of jaw alignment and airway space")],
              [t("Risicofactoren", "Risk Factors"), t("Inventarisatie van symptomen, BMI, nekomvang en slaappatroon", "Assessment of symptoms, BMI, neck circumference and sleep patterns")],
              [t("Doorverwijzing", "Referral"), t("Bij indicatie verwijzen wij voor een slaaponderzoek (polysomnografie)", "When indicated, we refer for a sleep study (polysomnography)")],
            ].map(([title, desc]) => (
              <div key={title} className="p-10 border border-sand/20 bg-sand/5 hover:shadow-md transition-shadow duration-500">
                <div className="w-8 h-[1px] bg-gold mb-6" />
                <h3 className="font-playfair text-xl mb-4">{title}</h3>
                <p className="text-[15px] text-charcoal/55 leading-[1.8]">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 lg:py-32 bg-sand/8">
        <div className="max-w-4xl mx-auto px-8 lg:px-12">
          <h2 className="font-playfair text-3xl md:text-4xl mb-10">{t("Het MRA-apparaat", "The MRA device")}</h2>
          <div className="space-y-5 text-charcoal/55 text-[15px] leading-[1.85]">
            <p>
              {t(
                "Een MRA (Mandibulaire Repositie Apparaat) is een op maat gemaakt mondstuk dat u 's nachts draagt. Het brengt de onderkaak licht naar voren, waardoor de luchtweg wordt geopend en ademstops worden voorkomen.",
                "An MRA (Mandibular Repositioning Appliance) is a custom-made mouthpiece worn at night. It moves the lower jaw slightly forward, opening the airway and preventing breathing pauses."
              )}
            </p>
            <p>
              {t(
                "Het MRA is een effectief en comfortabel alternatief voor CPAP bij licht tot matig ernstig slaapapneu. Onderzoek toont aan dat 60-80% van de patiënten met een MRA significant minder ademstops heeft.",
                "The MRA is an effective and comfortable alternative to CPAP for mild to moderate sleep apnea. Research shows that 60-80% of patients with an MRA have significantly fewer breathing pauses."
              )}
            </p>
          </div>
        </div>
      </section>

      <section className="py-28 lg:py-32">
        <div className="max-w-3xl mx-auto px-8 lg:px-12">
          <div className="text-center mb-16">
            <div className="section-divider mx-auto mb-8" />
            <h2 className="font-playfair text-3xl md:text-4xl">{t("Veelgestelde vragen", "Frequently asked questions")}</h2>
          </div>
          <div className="space-y-3">
            {([
              [
                t("Hoe weet ik of ik slaapapneu heb?", "How do I know if I have sleep apnea?"),
                t("Veelvoorkomende symptomen zijn snurken, ademstops tijdens de slaap, overmatige slaperigheid overdag, ochtendhoofpijn en concentratieproblemen. Een screening bij ORAVIVUM kan uitwijzen of nader onderzoek nodig is.", "Common symptoms include snoring, breathing pauses during sleep, excessive daytime sleepiness, morning headaches and concentration problems. A screening at ORAVIVUM can determine whether further investigation is needed."),
              ],
              [
                t("Wat is het verschil tussen een MRA en CPAP?", "What is the difference between an MRA and CPAP?"),
                t("CPAP blaast lucht via een masker in de luchtweg. Een MRA is een mondstuk dat de kaak naar voren brengt. Het MRA is stiller, draagbaarder en geschikt voor licht tot matig slaapapneu.", "CPAP blows air into the airway through a mask. An MRA is a mouthpiece that moves the jaw forward. The MRA is quieter, more portable and suitable for mild to moderate sleep apnea."),
              ],
              [
                t("Wordt slaapapneu behandeling vergoed?", "Is sleep apnea treatment covered by insurance?"),
                t("Bij een bewezen diagnose wordt het MRA vaak vergoed door de basisverzekering. Neem contact op voor meer informatie.", "With a confirmed diagnosis, the MRA is often covered by basic insurance. Contact us for more information."),
              ],
              [
                t("Is slaapapneu gevaarlijk?", "Is sleep apnea dangerous?"),
                t("Onbehandeld slaapapneu verhoogt het risico op hart- en vaatziekten, beroerte, diabetes type 2 en verkeersongevallen significant.", "Untreated sleep apnea significantly increases the risk of cardiovascular disease, stroke, type 2 diabetes and traffic accidents."),
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
            {t("Benieuwd of u risico loopt op slaapapneu?", "Wondering if you're at risk for sleep apnea?")}
          </h2>
          <p className="text-offwhite/50 mb-12 text-[15px]">{t("Maak een afspraak voor een screening.", "Book a screening appointment.")}</p>
          <Link href="/contact" className="inline-block bg-gold text-charcoal px-12 py-4 text-[11px] tracking-[0.25em] uppercase hover:bg-sand transition-colors duration-500">
            {t("Plan een screening", "Book a screening")}
          </Link>
        </div>
      </section>
    </>
  );
}
