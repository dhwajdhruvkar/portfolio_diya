"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

import {
  fadeUp,
  fadeUpDelayed,
  staggerChildren,
  viewportOnce,
} from "@/lib/motion";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  variants?: Variants;
};

/** Single element fading up as it enters the viewport. */
export function Reveal({ children, className, delay = 0, variants }: RevealProps) {
  return (
    <motion.div
      data-reveal
      className={className}
      variants={variants ?? fadeUpDelayed(delay)}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      {children}
    </motion.div>
  );
}

type RevealGroupProps = {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
};

/** Parent that staggers any `RevealItem` descendants. */
export function RevealGroup({
  children,
  className,
  stagger = 0.08,
  delay = 0,
}: RevealGroupProps) {
  return (
    <motion.div
      data-reveal
      className={className}
      variants={staggerChildren(stagger, delay)}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      {children}
    </motion.div>
  );
}

/** `RevealGroup` that renders a `ul`, for use with `RevealListItem`. */
export function RevealList({
  children,
  className,
  stagger = 0.08,
  delay = 0,
}: RevealGroupProps) {
  return (
    <motion.ul
      data-reveal
      className={className}
      variants={staggerChildren(stagger, delay)}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      {children}
    </motion.ul>
  );
}

export function RevealItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div data-reveal className={cn(className)} variants={fadeUp}>
      {children}
    </motion.div>
  );
}

/** `RevealItem` for use directly inside a `ul` or `ol`. */
export function RevealListItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.li data-reveal className={cn(className)} variants={fadeUp}>
      {children}
    </motion.li>
  );
}
