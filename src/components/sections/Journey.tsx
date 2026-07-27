import { DisplayHeading } from "@/components/shared/DisplayHeading";
import { Reveal, RevealList, RevealListItem } from "@/components/shared/Reveal";
import { Section } from "@/components/shared/Section";
import { SectionIndex } from "@/components/shared/SectionIndex";
import { journey } from "@/content/experience";

export function Journey() {
  return (
    <Section id="journey" labelledBy="journey-heading">
      <SectionIndex
        id="journey-heading"
        index="07"
        label="Journey"
        note="Volunteer → Strategist"
      />

      <div className="mt-16 flex flex-col gap-10 lg:mt-24">
        {journey.quotes.map((quote, index) => (
          <DisplayHeading
            key={index}
            lines={quote}
            as="p"
            size={index === 0 ? "title" : "display"}
            className={
              index === 0
                ? "max-w-[26ch] normal-case text-fg-dim"
                : "max-w-[24ch] normal-case text-fg"
            }
          />
        ))}
      </div>

      <Reveal className="mt-16 lg:mt-24">
        <p className="max-w-[66ch] text-base text-fg-dim sm:text-lg">
          {journey.line}
        </p>
      </Reveal>

      <RevealList className="mt-16 lg:mt-24" stagger={0.16}>
        {journey.timeline.map((entry, index) => (
          <RevealListItem key={entry.title} className="relative flex gap-6 sm:gap-10">
            {/* Hairline spine, stopping at the last node. */}
            <div className="relative flex w-3 shrink-0 justify-center">
              <span
                aria-hidden="true"
                className="mt-2 size-3 shrink-0 rounded-full border border-accent bg-bg"
              />
              {index < journey.timeline.length - 1 ? (
                <span
                  aria-hidden="true"
                  className="absolute top-5 bottom-0 w-px bg-line"
                />
              ) : null}
            </div>

            <div className="flex flex-col gap-2 pb-14">
              <h3 className="font-heading text-subtitle font-bold uppercase text-fg">
                {entry.title}
              </h3>
              <p className="mono-label text-fg-dim">{entry.role}</p>
              <p className="text-base text-fg-dim">{entry.note}</p>
            </div>
          </RevealListItem>
        ))}
      </RevealList>
    </Section>
  );
}
