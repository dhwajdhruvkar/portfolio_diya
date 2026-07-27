"use client";

import { ArrowUp } from "lucide-react";
import { useLenis } from "lenis/react";

import { Monogram } from "@/components/shared/Monogram";
import { site } from "@/content/site";
import { useCursorHover } from "@/hooks/useCursorHover";
import { useReducedMotionSafe } from "@/hooks/useReducedMotionSafe";

export function Footer() {
  const lenis = useLenis();
  const reduced = useReducedMotionSafe();
  const cursor = useCursorHover(null);

  function scrollToTop() {
    if (lenis) {
      lenis.scrollTo(0);
      return;
    }
    window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" });
  }

  return (
    <footer className="border-t border-line bg-bg-deep">
      <div className="mx-auto flex w-full max-w-[100rem] flex-col gap-6 px-6 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-10 lg:px-16">
        <div className="flex items-center gap-4 text-fg">
          <Monogram className="h-5 w-auto" />
          <span className="mono-label text-fg-dim">
            ©{site.year} {site.name}
          </span>
        </div>

        <p className="mono-label text-fg-dim">Designed &amp; built with care</p>

        <button
          type="button"
          onClick={scrollToTop}
          className="group mono-label flex items-center gap-2 self-start text-fg transition-colors hover:text-accent-2 sm:self-auto"
          {...cursor}
        >
          Back to top
          <ArrowUp
            className="size-4 transition-transform duration-300 group-hover:-translate-y-1"
            aria-hidden="true"
          />
        </button>
      </div>
    </footer>
  );
}
