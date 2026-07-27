"use client";

import { ReactLenis } from "lenis/react";
import type { ReactNode } from "react";

import { useReducedMotionSafe } from "@/hooks/useReducedMotionSafe";

/**
 * Site-wide smooth scrolling. Lenis is skipped entirely when the visitor asks
 * for reduced motion, handing scrolling back to the browser.
 */
export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  const reduced = useReducedMotionSafe();

  if (reduced) return <>{children}</>;

  return (
    <ReactLenis
      root
      options={{
        duration: 1.1,
        lerp: 0.1,
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 1.6,
      }}
    >
      {children}
    </ReactLenis>
  );
}
