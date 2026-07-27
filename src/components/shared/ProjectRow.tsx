"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useRef, useState } from "react";

import { Placeholder } from "@/components/shared/Placeholder";
import type { Project } from "@/content/projects";
import { useCursorHover } from "@/hooks/useCursorHover";
import { useReducedMotionSafe } from "@/hooks/useReducedMotionSafe";
import { EASE_OUT_EXPO, springSoft } from "@/lib/motion";
import { cn } from "@/lib/utils";

/** Floating thumbnail footprint, in px — used to centre it under the pointer. */
const THUMB_WIDTH = 340;
const THUMB_HEIGHT = 255;

export function ProjectRow({ project }: { project: Project }) {
  const rowRef = useRef<HTMLLIElement>(null);
  const [pointerActive, setPointerActive] = useState(false);
  const [focused, setFocused] = useState(false);
  const reduced = useReducedMotionSafe();
  const cursor = useCursorHover("View");

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, springSoft);
  const y = useSpring(rawY, springSoft);

  const thumbVisible = pointerActive || focused;
  const followPointer = pointerActive && !reduced;

  function handlePointerMove(event: React.PointerEvent) {
    if (event.pointerType === "touch" || !rowRef.current) return;
    const bounds = rowRef.current.getBoundingClientRect();
    rawX.set(event.clientX - bounds.left - THUMB_WIDTH / 2);
    rawY.set(event.clientY - bounds.top - THUMB_HEIGHT / 2);
  }

  function handlePointerEnter(event: React.PointerEvent) {
    if (event.pointerType === "touch") return;
    setPointerActive(true);
    cursor.onPointerEnter(event);
  }

  function handlePointerLeave() {
    setPointerActive(false);
    cursor.onPointerLeave();
  }

  return (
    <li
      ref={rowRef}
      className="group relative border-b border-line"
      style={{ zIndex: thumbVisible ? 30 : undefined }}
      onPointerMove={handlePointerMove}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
    >
      <Link
        href={`/work/${project.slug}`}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="flex flex-col gap-5 py-8 transition-transform duration-500 ease-out group-hover:-translate-y-0.5 sm:py-10 lg:flex-row lg:items-center lg:gap-8"
      >
        <span className="mono-label w-10 shrink-0 text-fg-dim">
          {project.index}
        </span>

        <h3 className="font-heading text-title font-bold uppercase text-fg transition-colors duration-300 group-hover:text-accent group-focus-within:text-accent lg:flex-1">
          {project.title}
        </h3>

        <span className="mono-label text-fg-dim lg:w-72 lg:shrink-0">
          {project.category}
        </span>

        {project.year ? (
          <span className="mono-label hidden shrink-0 text-fg-dim lg:block">
            {project.year}
          </span>
        ) : null}

        {/* Inline on touch and small screens, where there is no pointer to follow. */}
        <div className="w-full max-w-sm lg:hidden">
          <Placeholder
            slot={project.cover}
            sizes="(min-width: 640px) 24rem, 90vw"
          />
        </div>

        <ArrowUpRight
          className="size-6 shrink-0 text-fg-dim transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-accent group-focus-within:translate-x-1 group-focus-within:-translate-y-1 group-focus-within:text-accent"
          aria-hidden="true"
        />
      </Link>

      {/* Cursor-following preview on desktop pointers; pinned beside the row
          when the reveal was triggered by keyboard focus instead. */}
      <motion.div
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute z-30 hidden lg:block",
          followPointer
            ? "top-0 left-0"
            : "top-1/2 right-0 -translate-y-1/2"
        )}
        style={
          followPointer ? { width: THUMB_WIDTH, x, y } : { width: THUMB_WIDTH }
        }
        animate={{
          opacity: thumbVisible ? 1 : 0,
          scale: thumbVisible ? 1 : 0.92,
        }}
        transition={{ duration: 0.35, ease: EASE_OUT_EXPO }}
      >
        <Placeholder slot={project.cover} sizes="340px" />
      </motion.div>
    </li>
  );
}
