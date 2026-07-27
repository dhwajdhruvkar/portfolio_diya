import {
  ChartNoAxesColumn,
  LayoutGrid,
  PenTool,
  Scissors,
  Table,
  Video,
  type LucideIcon,
} from "lucide-react";

import { BrandChip } from "@/components/shared/BrandChip";
import { Reveal, RevealGroup, RevealItem } from "@/components/shared/Reveal";
import { Section } from "@/components/shared/Section";
import { SectionIndex } from "@/components/shared/SectionIndex";
import { languages, skillGroups, tools, type Tool } from "@/content/skills";

/** Generic glyphs standing in for tools — never a third-party logo. */
const toolIcons: Record<Tool["icon"], LucideIcon> = {
  design: PenTool,
  clip: Scissors,
  video: Video,
  sheet: Table,
  analytics: ChartNoAxesColumn,
  workspace: LayoutGrid,
};

export function Skills() {
  return (
    <Section id="skills" labelledBy="skills-heading">
      <SectionIndex
        id="skills-heading"
        index="05"
        label="Skills & Tools"
        note="Capabilities"
      />

      <RevealGroup
        className="mt-14 grid grid-cols-1 border-t border-line md:grid-cols-3 lg:mt-20"
        stagger={0.1}
      >
        {skillGroups.map((group) => (
          <RevealItem
            key={group.title}
            className="flex flex-col gap-6 border-b border-line py-10 md:border-b-0 md:px-8 md:py-12 md:not-first:border-l md:first:pl-0 md:last:pr-0"
          >
            <h3 className="mono-label text-fg-dim">
              <span className="text-accent-2">{group.index}</span> — {group.title}
            </h3>
            <ul className="flex flex-col gap-4">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="max-w-[34ch] text-base text-fg sm:text-lg"
                >
                  {item}
                </li>
              ))}
            </ul>
          </RevealItem>
        ))}
      </RevealGroup>

      <div className="mt-16 grid grid-cols-1 gap-12 border-t border-line pt-10 lg:mt-24 lg:grid-cols-12">
        <Reveal className="lg:col-span-8">
          <h3 className="mono-label text-fg-dim">Tools</h3>
          <ul className="mt-6 flex flex-wrap gap-3">
            {tools.map((tool) => (
              <li key={tool.name}>
                <BrandChip label={tool.name} icon={toolIcons[tool.icon]} />
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.15} className="lg:col-span-4">
          <h3 className="mono-label text-fg-dim">Languages</h3>
          <ul className="mt-6 flex flex-wrap gap-3">
            {languages.map((language) => (
              <li key={language}>
                <BrandChip label={language} />
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
