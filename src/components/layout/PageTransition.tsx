"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState, type ReactNode } from "react";

import { useReducedMotionSafe } from "@/hooks/useReducedMotionSafe";
import { EASE_IN_OUT } from "@/lib/motion";

const SWEEP_MS = 700;

/**
 * Black curtain wipe between routes, with a thin scarlet line riding its edge.
 *
 * The curtain is derived during render rather than in an effect: by the time
 * `usePathname` reports a new route the new page has already been committed, so
 * scheduling the cover in an effect would flash the new content first.
 */
export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const reduced = useReducedMotionSafe();
  const [trackedPath, setTrackedPath] = useState(pathname);
  const [sweepKey, setSweepKey] = useState<string | null>(null);

  if (pathname !== trackedPath) {
    setTrackedPath(pathname);
    setSweepKey(pathname);
  }

  useEffect(() => {
    if (!sweepKey) return;
    const timer = window.setTimeout(() => setSweepKey(null), SWEEP_MS);
    return () => window.clearTimeout(timer);
  }, [sweepKey]);

  return (
    <>
      {children}
      {!reduced && sweepKey ? (
        <motion.div
          key={sweepKey}
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-120 origin-top bg-bg-deep"
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          transition={{ duration: SWEEP_MS / 1000, ease: EASE_IN_OUT }}
        >
          <span className="absolute inset-x-0 bottom-0 h-px bg-accent" />
        </motion.div>
      ) : null}
    </>
  );
}
