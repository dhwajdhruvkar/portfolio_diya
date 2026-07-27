"use client";

import { useMotionValueEvent, useScroll } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

import { MenuOverlay } from "@/components/layout/MenuOverlay";
import { Monogram } from "@/components/shared/Monogram";
import { navLinks, site } from "@/content/site";
import { useCursorHover } from "@/hooks/useCursorHover";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { cn } from "@/lib/utils";

/** Module-level so the observer in useScrollSpy is not rebuilt every render. */
const SECTION_IDS = navLinks.map((link) => link.href.replace("#", ""));

export function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  const activeId = useScrollSpy(SECTION_IDS);
  const menuCursor = useCursorHover(null);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 48);
  });

  const activeLabel =
    navLinks.find((link) => link.href === `#${activeId}`)?.label ?? null;

  return (
    <>
      <header
        className={cn(
          "fixed top-0 right-0 left-0 z-100 transition-[background-color,border-color,backdrop-filter] duration-500",
          scrolled && !menuOpen
            ? "border-b border-line bg-bg/70 backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
        )}
      >
        <div className="mx-auto flex w-full max-w-[100rem] items-center justify-between gap-4 px-6 py-4 sm:px-10 lg:px-16">
          <Link
            href="/"
            aria-label={`${site.name} — home`}
            className="flex items-center gap-3 text-fg transition-colors hover:text-accent"
          >
            <Monogram className="h-6 w-auto sm:h-7" />
            <span className="sr-only">{site.name}</span>
          </Link>

          <div className="flex items-center gap-4 sm:gap-8">
            <p className="mono-label hidden items-center gap-2 text-fg-dim sm:flex">
              <span
                aria-hidden="true"
                className="inline-block size-1.5 rounded-full bg-accent"
                style={{ animation: "pulse-dot 2.4s ease-in-out infinite" }}
              />
              {site.availability}
            </p>

            {activeLabel ? (
              <p className="mono-label hidden text-fg-dim lg:block">
                <span className="text-accent-2">/</span> {activeLabel}
              </p>
            ) : null}

            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              className="group relative z-100 flex items-center gap-3 rounded-full border border-line px-4 py-2 transition-colors duration-300 hover:border-accent"
              {...menuCursor}
            >
              <span className="mono-label text-fg transition-colors group-hover:text-accent-2">
                {menuOpen ? "Close" : "Menu"}
              </span>
              <span
                aria-hidden="true"
                className="relative flex h-3 w-4 flex-col justify-between"
              >
                <span
                  className={cn(
                    "block h-px w-full bg-fg transition-transform duration-300 group-hover:bg-accent",
                    menuOpen && "translate-y-[5px] rotate-45"
                  )}
                />
                <span
                  className={cn(
                    "block h-px w-full bg-fg transition-all duration-300 group-hover:bg-accent",
                    menuOpen && "opacity-0"
                  )}
                />
                <span
                  className={cn(
                    "block h-px w-full bg-fg transition-transform duration-300 group-hover:bg-accent",
                    menuOpen && "-translate-y-[5px] -rotate-45"
                  )}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      <MenuOverlay
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        activeId={activeId}
      />
    </>
  );
}
