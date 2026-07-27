import { PullQuote } from "@/components/shared/PullQuote";
import { Reveal, RevealList, RevealListItem } from "@/components/shared/Reveal";
import { Section } from "@/components/shared/Section";
import { SectionIndex } from "@/components/shared/SectionIndex";
import { capabilities } from "@/content/experience";

export function Capabilities() {
  return (
    <Section
      id="capabilities"
      tone="deep"
      labelledBy="capabilities-heading"
    >
      <SectionIndex
        id="capabilities-heading"
        index="02"
        label="What I Do"
        note="Three pillars"
      />

      <Reveal className="mt-14 lg:mt-20">
        <p className="max-w-[46ch] text-lead text-fg-dim">
          {capabilities.intro}
        </p>
      </Reveal>

      <RevealList className="mt-16 border-t border-line lg:mt-24" stagger={0.1}>
        {capabilities.pillars.map((pillar) => (
          <RevealListItem
            key={pillar.index}
            className="group border-b border-line"
          >
            <div className="flex flex-col gap-4 py-10 transition-colors duration-500 lg:flex-row lg:items-baseline lg:gap-12 lg:py-14">
              <span className="mono-label w-10 shrink-0 text-fg-dim transition-colors duration-300 group-hover:text-accent-2">
                {pillar.index}
              </span>
              <h3 className="font-heading text-subtitle font-bold uppercase text-fg transition-colors duration-300 group-hover:text-accent lg:flex-1">
                {pillar.title}
              </h3>
              <p className="max-w-[46ch] text-base text-fg-dim lg:w-[38%] lg:shrink-0">
                {pillar.description}
              </p>
            </div>
          </RevealListItem>
        ))}
      </RevealList>

      <PullQuote lines={capabilities.pullQuote.lines} className="mt-24 lg:mt-36" />
    </Section>
  );
}
