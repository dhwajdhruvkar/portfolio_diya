import { RevealGroup, RevealItem } from "@/components/shared/Reveal";
import { Section } from "@/components/shared/Section";
import { SectionIndex } from "@/components/shared/SectionIndex";
import { pressureCards, pressureContexts } from "@/content/experience";

const STEP_LABELS = ["Challenge", "Solution", "Takeaway"] as const;

export function Pressure() {
  return (
    <Section id="pressure" tone="deep" labelledBy="pressure-heading">
      <SectionIndex
        id="pressure-heading"
        index="06"
        label="How I Handle Pressure"
        note="Two situations"
      />

      <RevealGroup
        className="mt-14 grid grid-cols-1 gap-6 lg:mt-20 lg:grid-cols-2 lg:gap-8"
        stagger={0.14}
      >
        {pressureCards.map((card, index) => {
          const steps = [card.challenge, card.solution, card.takeaway];

          return (
            <RevealItem key={card.title}>
              <article className="grain relative flex h-full flex-col gap-8 overflow-hidden border border-line bg-bg-2 p-8 transition-colors duration-500 hover:border-line-bright sm:p-10">
                <header className="relative flex flex-col gap-3">
                  <span className="mono-label text-accent-2">
                    {pressureContexts[index]}
                  </span>
                  <h3 className="font-heading text-subtitle font-bold uppercase text-fg">
                    {card.title}
                  </h3>
                </header>

                <dl className="relative flex flex-col gap-6">
                  {steps.map((step, stepIndex) => (
                    <div
                      key={STEP_LABELS[stepIndex]}
                      className="flex flex-col gap-2 border-t border-line pt-5"
                    >
                      <dt className="mono-label text-fg-dim">
                        {STEP_LABELS[stepIndex]}
                      </dt>
                      <dd className="max-w-[46ch] text-base text-fg">{step}</dd>
                    </div>
                  ))}
                </dl>
              </article>
            </RevealItem>
          );
        })}
      </RevealGroup>
    </Section>
  );
}
