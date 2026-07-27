"use client";

import { motion } from "framer-motion";

import type { HeadingLine } from "@/content/types";
import { lineMask, staggerChildren, viewportOnce } from "@/lib/motion";
import { cn } from "@/lib/utils";

/** Resolved once at module scope — building these inside render would remount. */
const motionTags = {
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
  p: motion.p,
  div: motion.div,
} as const;

type DisplayHeadingProps = {
  lines: HeadingLine[];
  as?: keyof typeof motionTags;
  id?: string;
  className?: string;
  size?: "hero" | "display" | "title" | "subtitle";
  /** Skip the scroll trigger and reveal immediately — used above the fold. */
  animateOnMount?: boolean;
  delay?: number;
  align?: "left" | "center";
};

const sizeClasses = {
  hero: "text-hero",
  display: "text-display",
  title: "text-title",
  subtitle: "text-subtitle",
} as const;

/**
 * Grotesque display type with an italic-serif accent run, revealed line by
 * line. Each line sits in its own clipping box so the mask-up reads cleanly.
 */
export function DisplayHeading({
  lines,
  as = "h2",
  id,
  className,
  size = "display",
  animateOnMount = false,
  delay = 0,
  align = "left",
}: DisplayHeadingProps) {
  const MotionTag = motionTags[as] as typeof motion.h2;
  const revealProps = animateOnMount
    ? { animate: "visible" as const }
    : { whileInView: "visible" as const, viewport: viewportOnce };

  return (
    <MotionTag
      id={id}
      className={cn(
        "font-heading font-bold uppercase",
        sizeClasses[size],
        align === "center" && "text-center",
        className
      )}
      variants={staggerChildren(0.1, delay)}
      initial="hidden"
      {...revealProps}
    >
      {lines.map((line, lineIndex) => (
        <span
          key={lineIndex}
          className="block overflow-hidden pb-[0.12em] -mb-[0.12em]"
        >
          <motion.span data-reveal className="block" variants={lineMask}>
            {line.map((token, tokenIndex) => (
              <span
                key={tokenIndex}
                className={cn(
                  token.serif && "serif-accent normal-case",
                  token.accent && "text-accent"
                )}
              >
                {token.text}
              </span>
            ))}
          </motion.span>
        </span>
      ))}
    </MotionTag>
  );
}
