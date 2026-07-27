"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useLenis } from "lenis/react";
import { useEffect, useState } from "react";

import { site } from "@/content/site";
import { useReducedMotionSafe } from "@/hooks/useReducedMotionSafe";
import { EASE_IN_OUT, EASE_OUT_EXPO } from "@/lib/motion";

const STORAGE_KEY = "dj-intro-played";
const COUNT_DURATION_MS = 1500;

/**
 * Black screen counting 00 to 100, then lifting to reveal the hero. Skipped
 * entirely under reduced motion, and only plays once per session so repeat
 * navigation is not slowed down.
 */
export function IntroLoader() {
  const reduced = useReducedMotionSafe();
  const lenis = useLenis();
  const [visible, setVisible] = useState(true);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const alreadyPlayed =
      window.sessionStorage.getItem(STORAGE_KEY) === "1";

    // Dismissing inside a frame callback rather than the effect body keeps the
    // server and client markup identical while still skipping instantly.
    if (reduced || alreadyPlayed) {
      const skip = requestAnimationFrame(() => setVisible(false));
      return () => cancelAnimationFrame(skip);
    }

    window.sessionStorage.setItem(STORAGE_KEY, "1");

    let frame = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / COUNT_DURATION_MS, 1);
      const eased = 1 - Math.pow(1 - progress, 2);
      setCount(Math.round(eased * 100));
      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      } else {
        window.setTimeout(() => setVisible(false), 260);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [reduced]);

  // Hold the page still until the curtain lifts.
  useEffect(() => {
    if (!visible) {
      lenis?.start();
      return;
    }
    lenis?.stop();
  }, [lenis, visible]);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          aria-hidden="true"
          className="fixed inset-0 z-150 flex items-end justify-between bg-bg-deep px-6 pb-8 sm:px-10 sm:pb-10 lg:px-16"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.9, ease: EASE_IN_OUT }}
        >
          <motion.span
            className="font-heading text-display font-bold uppercase text-fg"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE_OUT_EXPO }}
          >
            {site.name}
          </motion.span>
          <span className="mono-label tabular-nums text-fg-dim">
            {String(count).padStart(2, "0")}
          </span>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
