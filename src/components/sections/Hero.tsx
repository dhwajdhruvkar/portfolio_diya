import { ArrowDown } from "lucide-react";

import { DisplayHeading } from "@/components/shared/DisplayHeading";
import { MagneticButton } from "@/components/shared/MagneticButton";
import { Placeholder } from "@/components/shared/Placeholder";
import { Reveal } from "@/components/shared/Reveal";
import { hero } from "@/content/experience";
import { heroPortrait } from "@/content/images";
import { site } from "@/content/site";

export function Hero() {
  return (
    <section
      id="hero"
      aria-label="Introduction"
      className="relative flex min-h-svh w-full flex-col justify-between bg-bg pt-32 pb-10 sm:pt-40"
    >
      <div className="mx-auto flex w-full max-w-[100rem] flex-1 flex-col justify-center gap-12 px-6 sm:px-10 lg:px-16">
        <Reveal>
          <p className="mono-label flex flex-wrap items-center gap-x-3 gap-y-1 text-fg-dim">
            <span className="text-accent-2">(00)</span>
            <span>{hero.eyebrow}</span>
          </p>
        </Reveal>

        <DisplayHeading
          lines={hero.headline}
          as="h1"
          size="hero"
          animateOnMount
          delay={0.15}
          className="max-w-[22ch] text-fg"
        />

        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <Reveal delay={0.3} className="flex flex-col gap-8">
            <p className="mono-label text-fg-dim">{hero.subline}</p>

            <div className="flex flex-wrap gap-4">
              <MagneticButton href="#work" cursorLabel="Scroll">
                Selected work
              </MagneticButton>
              <MagneticButton
                href="#contact"
                cursorLabel="Scroll"
                className="border-accent text-accent-2 hover:border-accent-2"
              >
                Get in touch
              </MagneticButton>
            </div>
          </Reveal>

          {/* Optional portrait slot — the hero stays type-first without it. */}
          <Reveal delay={0.45} className="hidden lg:block">
            <Placeholder
              slot={heroPortrait}
              className="w-44 xl:w-56"
              sizes="14rem"
              priority
            />
          </Reveal>
        </div>
      </div>

      <div className="mx-auto flex w-full max-w-[100rem] items-center justify-between gap-4 px-6 sm:px-10 lg:px-16">
        <Reveal delay={0.6}>
          <p className="mono-label flex items-center gap-3 text-fg-dim">
            <ArrowDown className="size-4 shrink-0" aria-hidden="true" />
            Scroll
          </p>
        </Reveal>
        <Reveal delay={0.6}>
          <p className="mono-label text-fg-dim">portfolio · {site.year}</p>
        </Reveal>
      </div>
    </section>
  );
}
