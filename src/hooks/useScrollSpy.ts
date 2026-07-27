"use client";

import { useEffect, useState } from "react";

/**
 * Tracks which section owns the viewport. Uses IntersectionObserver rather than
 * a scroll listener so it stays cheap and stays correct with Lenis driving the
 * scroll position.
 *
 * @param ids Section ids in document order, without the leading `#`.
 */
export function useScrollSpy(ids: string[]): string | null {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null);

    if (elements.length === 0) return;

    const visible = new Map<string, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            visible.set(entry.target.id, entry.intersectionRatio);
          } else {
            visible.delete(entry.target.id);
          }
        }

        let best: string | null = null;
        let bestRatio = 0;
        for (const [id, ratio] of visible) {
          if (ratio >= bestRatio) {
            best = id;
            bestRatio = ratio;
          }
        }

        if (best) setActive(best);
      },
      {
        threshold: [0.15, 0.4, 0.75],
        rootMargin: "-15% 0px -35% 0px",
      }
    );

    for (const element of elements) observer.observe(element);
    return () => observer.disconnect();
  }, [ids]);

  return active;
}
