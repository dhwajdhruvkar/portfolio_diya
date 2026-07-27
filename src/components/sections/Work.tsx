import { ProjectRow } from "@/components/shared/ProjectRow";
import { Section } from "@/components/shared/Section";
import { SectionIndex } from "@/components/shared/SectionIndex";
import { projects } from "@/content/projects";

export function Work() {
  return (
    <Section id="work" labelledBy="work-heading">
      <SectionIndex
        id="work-heading"
        index="04"
        label="Selected Work"
        note={`${projects.length} projects`}
      />

      <ul className="mt-14 border-t border-line lg:mt-20">
        {projects.map((project) => (
          <ProjectRow key={project.slug} project={project} />
        ))}
      </ul>
    </Section>
  );
}
