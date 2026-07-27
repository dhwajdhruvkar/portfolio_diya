"use client";

import { useReducedMotion } from "framer-motion";

/**
 * Framer's hook returns `null` until the media query resolves. Defaulting to
 * `false` keeps the first paint flicker-free; the actual guarantee comes from
 * two belts elsewhere — the global `MotionConfig reducedMotion="user"` in the
 * layout, and the `prefers-reduced-motion` block in `globals.css` that neuters
 * CSS animations and transitions.
 *
 * Use this for behavioural decisions (skip the loader, freeze a marquee, snap a
 * counter to its final value), not as the only line of defence.
 */
export function useReducedMotionSafe(): boolean {
  return useReducedMotion() ?? false;
}
