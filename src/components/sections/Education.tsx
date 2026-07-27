import { RevealGroup, RevealItem } from "@/components/shared/Reveal";
import { Section } from "@/components/shared/Section";
import { SectionIndex } from "@/components/shared/SectionIndex";
import { education, positions } from "@/content/experience";
import type { Credential } from "@/content/experience";

const COLUMNS: { title: string; entries: Credential[] }[] = [
  { title: "Education", entries: education },
  { title: "Positions of Responsibility", entries: positions },
];

export function Education() {
  return (
    <Section id="education" tone="deep" labelledBy="education-heading">
      <SectionIndex
        id="education-heading"
        index="08"
        label="Education & Leadership"
      />

      <RevealGroup
        className="mt-14 grid grid-cols-1 border-t border-line lg:mt-20 lg:grid-cols-2"
        stagger={0.12}
      >
        {COLUMNS.map((column) => (
          <RevealItem
            key={column.title}
            className="flex flex-col gap-8 border-b border-line py-10 lg:border-b-0 lg:px-10 lg:py-14 lg:not-first:border-l lg:first:pl-0 lg:last:pr-0"
          >
            <h3 className="mono-label text-fg-dim">{column.title}</h3>

            <ul className="flex flex-col gap-8">
              {column.entries.map((entry) => (
                <li key={entry.primary} className="flex flex-col gap-2">
                  <p className="font-heading text-subtitle font-bold uppercase text-fg">
                    {entry.primary}
                  </p>
                  <p className="text-base text-fg-dim">{entry.secondary}</p>
                </li>
              ))}
            </ul>
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
