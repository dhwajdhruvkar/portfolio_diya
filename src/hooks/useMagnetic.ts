"use client";

import { useMotionValue, useSpring } from "framer-motion";
import { useCallback, useRef } from "react";

import { springSoft } from "@/lib/motion";

type MagneticOptions = {
  /** Fraction of the distance from centre the element travels. */
  strength?: number;
  disabled?: boolean;
};

/**
 * Subtle pointer attraction for primary CTAs. Returns the ref, spring-smoothed
 * offsets to bind to a motion element, and the pointer handlers.
 */
export function useMagnetic({
  strength = 0.28,
  disabled = false,
}: MagneticOptions = {}) {
  const ref = useRef<HTMLElement | null>(null);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, springSoft);
  const y = useSpring(rawY, springSoft);

  const onPointerMove = useCallback(
    (event: React.PointerEvent) => {
      if (disabled || event.pointerType === "touch" || !ref.current) return;
      const bounds = ref.current.getBoundingClientRect();
      rawX.set((event.clientX - (bounds.left + bounds.width / 2)) * strength);
      rawY.set((event.clientY - (bounds.top + bounds.height / 2)) * strength);
    },
    [disabled, rawX, rawY, strength]
  );

  const onPointerLeave = useCallback(() => {
    rawX.set(0);
    rawY.set(0);
  }, [rawX, rawY]);

  return { ref, x, y, onPointerMove, onPointerLeave };
}
