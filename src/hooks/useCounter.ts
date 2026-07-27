"use client";

import { animate, useInView, useMotionValue } from "framer-motion";
import { useCallback, useEffect, useRef } from "react";

import { useReducedMotionSafe } from "@/hooks/useReducedMotionSafe";

type CounterOptions = {
  target: number;
  /** Zero-pad the output to this many digits, e.g. 2 renders "06". */
  pad?: number;
  durationMs?: number;
};

/**
 * Counts up once the number scrolls into view.
 *
 * The value lives in a MotionValue and the digits are written straight to the
 * text node, so the tree does not re-render every frame and React's rendered
 * output never changes — which is what keeps hydration clean. Server-rendered
 * markup carries the real final number, so it is also correct without JS.
 */
export function useCounter({ target, pad, durationMs = 1600 }: CounterOptions) {
  const containerRef = useRef<HTMLSpanElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(containerRef, { once: true, amount: 0.6 });
  const reduced = useReducedMotionSafe();
  const count = useMotionValue(target);

  const format = useCallback(
    (latest: number) => {
      const rounded = String(Math.round(latest));
      return pad ? rounded.padStart(pad, "0") : rounded;
    },
    [pad]
  );

  // Registered before the rewind below so the very first value change lands.
  useEffect(() => {
    return count.on("change", (latest) => {
      if (textRef.current) textRef.current.textContent = format(latest);
    });
  }, [count, format]);

  useEffect(() => {
    if (reduced) return;
    count.set(0);
  }, [count, reduced]);

  useEffect(() => {
    if (!inView) return;

    if (reduced) {
      count.set(target);
      return;
    }

    const controls = animate(count, target, {
      duration: durationMs / 1000,
      ease: [0.16, 1, 0.3, 1],
    });

    return () => controls.stop();
  }, [count, durationMs, inView, reduced, target]);

  return { containerRef, textRef };
}
