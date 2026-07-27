"use client";

import { useEffect, useMemo } from "react";

import { resetCursorState, setCursorState } from "@/lib/cursor-store";

/**
 * Spread the returned props onto an interactive element to grow the custom
 * cursor and give it a label. Pointer-only by design: keyboard users get the
 * focus ring instead, and the store is reset on unmount so a cursor can't get
 * stuck expanded after a route change.
 */
export function useCursorHover(label: string | null = null) {
  useEffect(() => resetCursorState, []);

  return useMemo(
    () => ({
      onPointerEnter: (event: React.PointerEvent) => {
        if (event.pointerType === "touch") return;
        setCursorState({ active: true, label });
      },
      onPointerLeave: () => resetCursorState(),
    }),
    [label]
  );
}
