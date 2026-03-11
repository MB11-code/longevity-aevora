"use client";

import Link from "next/link";
import { ScrollReveal } from "../scroll-reveal";
import { useLang } from "../lang-context";

export function SlaapapneuContent() {
  const { t } = useLang();

  return (
    <>
      <section className="py-28 bg-sand/10">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-gold text-xs tracking-[0.35em] uppercase mb-4">{t("Screening & Behandeling", "Screening & Treatment")}</p>
          <h1 className="font-playfair text-4xl md:text-6xl mb-8">{t("Slaapapneu screening", "Sleep apnea screening")}</h1>
          <p className="text-xl text-charcoal/60 max-w-2xl leading-relaxed">
            {t(
              "Naar schatting heeft 10-15% van de Nederlandse bevolking een vorm van obstructief slaapapneu. Bij veel mensen wordt dit niet gediagnosticeerd. Wij onderzoeken de relatie tussen uw kaakpositie en luchtwegobstructie.",
              "An estimated 10-15% of the Dutch population has a form of obstructive sleep apnea. Many cases go undiagnosed. We examine the relationship between your jaw position and airway obstruction."
            )}
          </p>
          <div className="mt-10 inline-block border border-gold/40 text-gold px-6 py-3 rounded-lg text-xs tracking-[0.2em] uppercase">
            {t("Binnenkort volledig beschikbaar", "Coming soon")}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-playfair text-3xl mb-10">{t("Wat is slaapapneu?", "What is sleep apnea?")}</h2>
          <div className="space-y-5 text-charcoal/60 leading-relaxed">
            <p>
              {t(
                "Obstructief slaapapneu syndroom (OSAS) is een aandoening waarbij de bovenste luchtweg tijdens de slaap herhaaldelijk gedeeltelijk of volledig wordt afgesloten. Dit veroorzaakt ademstops van 10 seconden of langer, soms tientallen keren per nacht.",
                "Obstructive sleep apnea syndrome (OSAS) is a condition where the upper airway is repeatedly partially or completely blocked during sleep. This causes breathing pauses of 10 seconds or more, sometimes dozens of times per night."
              )}
            </p>
            <p>{t("De gevolgen zijn verstrekkend:", "The consequences are far-reaching:")}</p>
            <ul className="space-y-2 list-none pl-0">
              {[
                t("Chronische vermoeidheid en concentratieproblemen", "Chronic fatigue and concentration problems"),
                t("Verhoogd risico op hart- en vaatziekten (2-3x hoger)", "Increased cardiovascular risk (2-3x higher)"),
                t("Verhoogd risico op diabetes type 2", "Increased risk of type 2 diabetes"),
                t("Depressie en stemmingsstoornissen", "Depression and mood disorders"),
                t("Verhoogd ongevalsrisico door slaperigheid overdag", "Increased accident risk from daytime drowsiness"),
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-1 h-1 rounded-full bg-teal mt-2.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p>
              {t(
                "Vanuit het longevity-perspectief is slaapapneu een van de belangrijkste behandelbare risicofactoren voor vroegtijdige veroudering.",
                "From a longevity perspective, sleep apnea is one of the most important treatable risk factors for premature ageing."
              )}
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-sand/10">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-playfair text-3xl mb-10">{t("De link met kaakpositie", "The link with jaw position")}</h2>
          <div className="space-y-5 text-charcoal/60 leading-relaxed">
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

      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-playfair text-3xl mb-14">{t("Onze screening", "Our screening")}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              [t("Kaakpositie", "Jaw Position"), t("Beoordeling van de kaakstand en de ruimte voor de luchtweg", "Assessment of jaw alignment and airway space")],
              [t("Risicofactoren", "Risk Factors"), t("Inventarisatie van symptomen, BMI, nekomvang en slaappatroon", "Assessment of symptoms, BMI, neck circumference and sleep patterns")],
              [t("Doorverwijzing", "Referral"), t("Bij indicatie verwijzen wij voor een slaaponderzoek (polysomnografie)", "When indicated, we refer for a sleep study (polysomnography)")],
            ].map(([title, desc]) => (
              <div key={title} className="p-8 border border-sand/20 bg-sand/5 rounded-lg">
                <div className="w-8 h-[1px] bg-gold mb-5" />
                <h3 className="font-playfair text-lg mb-3">{title}</h3>
                <p className="text-sm text-charcoal/60 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-sand/10">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-playfair text-3xl mb-10">{t("Het MRA-apparaat", "The MRA device")}</h2>
          <div className="space-y-5 text-charcoal/60 leading-relaxed">
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

      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-playfair text-3xl text-center mb-14">{t("Veelgestelde vragen", "Frequently asked questions")}</h2>
          <div className="space-y-4">
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
              <details key={q} className="group bg-sand/5 border border-sand/20 p-7 rounded-lg">
                <summary className="cursor-pointer list-none flex justify-between items-center">
                  <span className="font-playfair text-lg pr-6">{q}</span>
                  <span className="text-teal text-xl shrink-0 group-open:rotate-45 transition-transform duration-200">+</span>
                </summary>
                <p className="mt-5 text-charcoal/60 leading-relaxed text-sm">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-teal text-offwhite text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-playfair text-3xl md:text-4xl mb-8">
            {t("Benieuwd of u risico loopt op slaapapneu?", "Wondering if you're at risk for sleep apnea?")}
          </h2>
          <p className="text-offwhite/60 mb-10">{t("Maak een afspraak voor een screening.", "Book a screening appointment.")}</p>
          <Link href="/contact" className="inline-block bg-gold text-charcoal px-10 py-4 text-xs tracking-[0.25em] uppercase rounded-lg hover:bg-gold/90 transition-colors">
            {t("Plan een screening", "Book a screening")}
          </Link>
        </div>
      </section>
    </>
  );
}
