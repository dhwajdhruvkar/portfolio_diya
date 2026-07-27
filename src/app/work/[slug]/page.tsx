import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { BrandChip } from "@/components/shared/BrandChip";
import { CaseStudyBlock } from "@/components/shared/CaseStudyBlock";
import { MagneticButton } from "@/components/shared/MagneticButton";
import { Placeholder } from "@/components/shared/Placeholder";
import { Reveal, RevealGroup, RevealItem } from "@/components/shared/Reveal";
import { getAdjacentProjects, getProject, projects } from "@/content/projects";
import { contact, site } from "@/content/site";
import { projectJsonLd } from "@/lib/seo";
import { cn } from "@/lib/utils";

type PageProps = {
  /** Next 16 hands route params over as a promise. */
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) return { title: "Project not found" };

  const title = `${project.title} — ${project.role}`;

  return {
    title,
    description: project.overview,
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: {
      type: "article",
      title: `${title} — ${site.name}`,
      description: project.overview,
      url: `${site.url}/work/${project.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} — ${site.name}`,
      description: project.overview,
    },
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  const { previous, next } = getAdjacentProjects(project.slug);

  return (
    <article className="w-full bg-bg">
      {/* Hero: the overview doubles as the lede, so the copy is never repeated. */}
      <header className="mx-auto w-full max-w-[100rem] px-6 pt-32 pb-16 sm:px-10 sm:pt-40 lg:px-16 lg:pb-24">
        <Reveal>
          <Link
            href="/#work"
            className="mono-label group inline-flex items-center gap-2 text-fg-dim transition-colors hover:text-accent-2"
          >
            <ArrowLeft
              className="size-4 transition-transform duration-300 group-hover:-translate-x-1"
              aria-hidden="true"
            />
            All work
          </Link>
        </Reveal>

        <Reveal delay={0.1} className="mt-10 lg:mt-14">
          <p className="mono-label text-fg-dim">
            <span className="text-accent-2">({project.index})</span>{" "}
            {project.category}
            {project.year ? ` · ${project.year}` : ""}
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <h1 className="mt-6 max-w-[24ch] font-heading text-hero font-bold uppercase text-fg">
            {project.title}
          </h1>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-10 lg:mt-16 lg:grid-cols-12 lg:gap-12">
          <Reveal delay={0.2} className="lg:col-span-7">
            <h2 className="mono-label text-fg-dim">Overview</h2>
            <p className="mt-5 max-w-[46ch] text-lead text-fg">
              {project.overview}
            </p>
          </Reveal>

          <Reveal delay={0.25} className="lg:col-span-5">
            <dl className="flex flex-col gap-6 border-t border-line pt-6">
              <div className="flex flex-col gap-1">
                <dt className="mono-label text-fg-dim">Role</dt>
                <dd className="text-base text-fg">{project.role}</dd>
              </div>
              <div className="flex flex-col gap-1">
                <dt className="mono-label text-fg-dim">Tools</dt>
                <dd className="text-base text-fg">{project.tools.join(" · ")}</dd>
              </div>
            </dl>
          </Reveal>
        </div>

        <Reveal delay={0.3} className="mt-14 lg:mt-20">
          <Placeholder
            slot={project.cover}
            className="w-full"
            sizes="(min-width: 1024px) 90vw, 100vw"
            priority
          />
        </Reveal>
      </header>

      <div className="mx-auto w-full max-w-[100rem] px-6 pb-24 sm:px-10 lg:px-16 lg:pb-32">
        <CaseStudyBlock label="Problem" body={project.problem} />
        <CaseStudyBlock label="My Role" body={project.myRole} />
        <CaseStudyBlock label="Process" body={project.process} />
        <CaseStudyBlock
          label="Design Decisions"
          body={project.designDecisions}
        />
        <CaseStudyBlock label="Outcome" body={project.outcome} />

        <Reveal className="grid grid-cols-1 gap-5 border-t border-line py-10 lg:grid-cols-12 lg:gap-12 lg:py-14">
          <h2 className="mono-label text-fg-dim lg:col-span-3">Tools</h2>
          <ul className="flex flex-wrap gap-3 lg:col-span-9">
            {project.tools.map((tool) => (
              <li key={tool}>
                <BrandChip label={tool} />
              </li>
            ))}
          </ul>
        </Reveal>

        <CaseStudyBlock label="Impact" body={project.impact} />

        <Reveal className="grid grid-cols-1 gap-5 border-t border-line py-10 lg:grid-cols-12 lg:gap-12 lg:py-14">
          <h2 className="mono-label text-fg-dim lg:col-span-3">Gallery</h2>
          <RevealGroup
            className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:col-span-9 lg:gap-6"
            stagger={0.1}
          >
            {project.gallery.map((slot) => (
              <RevealItem key={slot.file}>
                <Placeholder
                  slot={slot}
                  sizes="(min-width: 1024px) 34vw, (min-width: 640px) 45vw, 90vw"
                />
              </RevealItem>
            ))}
          </RevealGroup>
        </Reveal>

        <CaseStudyBlock label="Key Learnings" body={project.keyLearnings} />

        <Reveal className="mt-16 flex flex-col gap-6 border-t border-line pt-12 sm:flex-row sm:items-center sm:justify-between lg:mt-24">
          <p className="max-w-[34ch] font-heading text-subtitle font-bold uppercase text-fg">
            Want something like this?
          </p>
          <MagneticButton href={contact.mailto} cursorLabel="Email">
            Start a conversation
            <ArrowUpRight className="size-4 shrink-0" aria-hidden="true" />
          </MagneticButton>
        </Reveal>
      </div>

      {previous && next ? (
        <nav
          aria-label="More projects"
          className="border-t border-line bg-bg-deep"
        >
          <div className="mx-auto grid w-full max-w-[100rem] grid-cols-1 sm:grid-cols-2">
            <ProjectNavLink
              href={`/work/${previous.slug}`}
              direction="previous"
              title={previous.title}
              category={previous.category}
            />
            <ProjectNavLink
              href={`/work/${next.slug}`}
              direction="next"
              title={next.title}
              category={next.category}
            />
          </div>
        </nav>
      ) : null}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            projectJsonLd({
              title: project.title,
              description: project.overview,
              slug: project.slug,
            })
          ),
        }}
      />
    </article>
  );
}

function ProjectNavLink({
  href,
  direction,
  title,
  category,
}: {
  href: string;
  direction: "previous" | "next";
  title: string;
  category: string;
}) {
  const isNext = direction === "next";

  return (
    <Link
      href={href}
      className={cn(
        "group flex flex-col gap-4 border-t border-line px-6 py-12 transition-colors duration-500 hover:bg-bg-2 sm:border-t-0 sm:px-10 lg:px-16 lg:py-16",
        isNext && "sm:items-end sm:border-l sm:text-right"
      )}
    >
      <span className="mono-label flex items-center gap-2 text-fg-dim">
        {!isNext ? (
          <ArrowLeft
            className="size-4 transition-transform duration-300 group-hover:-translate-x-1"
            aria-hidden="true"
          />
        ) : null}
        {isNext ? "Next project" : "Previous project"}
        {isNext ? (
          <ArrowRight
            className="size-4 transition-transform duration-300 group-hover:translate-x-1"
            aria-hidden="true"
          />
        ) : null}
      </span>

      <span className="font-heading text-title font-bold uppercase text-fg transition-colors duration-300 group-hover:text-accent">
        {title}
      </span>

      <span className="mono-label text-fg-dim">{category}</span>
    </Link>
  );
}
