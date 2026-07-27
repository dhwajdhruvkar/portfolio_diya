import type { Metadata } from "next";

import { DisplayHeading } from "@/components/shared/DisplayHeading";
import { MagneticButton } from "@/components/shared/MagneticButton";
import { Reveal } from "@/components/shared/Reveal";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="grain relative flex min-h-svh w-full flex-col justify-center bg-bg-deep px-6 py-32 sm:px-10 lg:px-16">
      <div className="relative mx-auto w-full max-w-[100rem]">
        <Reveal>
          <p className="mono-label text-fg-dim">
            <span className="text-accent-2">(404)</span> — Not found
          </p>
        </Reveal>

        <DisplayHeading
          lines={[
            [{ text: "This page went" }],
            [{ text: "missing", serif: true, accent: true }, { text: "." }],
          ]}
          as="h1"
          size="hero"
          animateOnMount
          delay={0.1}
          className="mt-10 text-fg"
        />

        <Reveal delay={0.25} className="mt-10 flex flex-col gap-8">
          <p className="max-w-[46ch] text-base text-fg-dim sm:text-lg">
            The link may be out of date. Head back to the homepage, or jump
            straight to the selected work.
          </p>

          <div className="flex flex-wrap gap-4">
            <MagneticButton href="/" cursorLabel="Home">
              Back to home
            </MagneticButton>
            <MagneticButton
              href="/#work"
              cursorLabel="View"
              className="border-accent text-accent-2 hover:border-accent-2"
            >
              Selected work
            </MagneticButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
