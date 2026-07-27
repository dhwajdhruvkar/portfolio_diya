"use client";

import { useLenis } from "lenis/react";
import { useCallback } from "react";

import { useReducedMotionSafe } from "@/hooks/useReducedMotionSafe";

/**
 * Anchor navigation has to go through Lenis, otherwise the browser's own jump
 * fights the smooth-scroll loop. Falls back to `scrollIntoView` when Lenis is
 * not mounted (which is the case under reduced motion).
 */
export function useScrollToHash() {
  const lenis = useLenis();
  const reduced = useReducedMotionSafe();

  return useCallback(
    (hash: string) => {
      const target = document.querySelector<HTMLElement>(hash);
      if (!target) return;

      if (lenis) {
        lenis.scrollTo(target, { offset: -8 });
        return;
      }

      target.scrollIntoView({
        behavior: reduced ? "auto" : "smooth",
        block: "start",
      });
    },
    [lenis, reduced]
  );
}
