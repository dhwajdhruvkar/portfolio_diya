import { Emphasize } from "@/components/shared/Emphasize";
import { Reveal, RevealGroup, RevealItem } from "@/components/shared/Reveal";
import { Section } from "@/components/shared/Section";
import { SectionIndex } from "@/components/shared/SectionIndex";
import { about } from "@/content/experience";

/** Phrases lifted into the italic-serif accent face. */
const EMPHASIS = [
  "Diya Jain",
  "social media management, brand growth, and live event production",
  "six major internships",
  "Pre-Placement Offer (PPO)",
  "brands that truly stand out",
];

export function About() {
  return (
    <Section id="about" labelledBy="about-heading">
      <SectionIndex
        id="about-heading"
        index="01"
        label="About"
        note="Bhopal, India"
      />

      <div className="mt-16 grid grid-cols-1 gap-12 lg:mt-24 lg:grid-cols-12 lg:gap-16">
        <RevealGroup className="flex flex-col gap-8 lg:col-span-8" stagger={0.12}>
          {about.paragraphs.map((paragraph, index) => (
            <RevealItem key={index}>
              <p
                className={
                  index === 0
                    ? "max-w-[42ch] text-lead text-fg"
                    : "max-w-[62ch] text-base text-fg-dim sm:text-lg"
                }
              >
                <Emphasize text={paragraph} phrases={EMPHASIS} />
              </p>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal delay={0.2} className="lg:col-span-4">
          <dl className="flex flex-col gap-6 border-t border-line pt-6">
            {about.facts.map((fact) => (
              <div key={fact.label} className="flex flex-col gap-1">
                <dt className="mono-label text-fg-dim">{fact.label}</dt>
                <dd className="text-base text-fg">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </Section>
  );
}
