import { Section } from "@/components/shared/Section";
import { SectionIndex } from "@/components/shared/SectionIndex";
import { StatBlock } from "@/components/shared/StatBlock";
import { stats } from "@/content/experience";

export function Stats() {
  return (
    <Section id="numbers" labelledBy="numbers-heading">
      <SectionIndex
        id="numbers-heading"
        index="03"
        label="By the Numbers"
      />

      <div className="mt-14 lg:mt-20">
        <StatBlock stats={stats} />
      </div>
    </Section>
  );
}
