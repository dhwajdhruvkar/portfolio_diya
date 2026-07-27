"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useSyncExternalStore } from "react";

import { usePointerFine } from "@/hooks/usePointerFine";
import { useReducedMotionSafe } from "@/hooks/useReducedMotionSafe";
import {
  getCursorServerState,
  getCursorState,
  subscribeCursor,
} from "@/lib/cursor-store";

/**
 * Dot cursor that grows and picks up a label over interactive elements. Only
 * mounts for fine pointers with motion enabled, so touch and keyboard users
 * keep the native cursor and the focus ring.
 */
export function CustomCursor() {
  const reduced = useReducedMotionSafe();
  const pointerFine = usePointerFine();
  const enabled = pointerFine && !reduced;
  const { active, label } = useSyncExternalStore(
    subscribeCursor,
    getCursorState,
    getCursorServerState
  );

  const rawX = useMotionValue(-200);
  const rawY = useMotionValue(-200);
  const x = useSpring(rawX, { stiffness: 750, damping: 42, mass: 0.28 });
  const y = useSpring(rawY, { stiffness: 750, damping: 42, mass: 0.28 });

  useEffect(() => {
    if (!enabled) return;

    document.body.classList.add("hide-native-cursor");

    const handleMove = (event: PointerEvent) => {
      rawX.set(event.clientX);
      rawY.set(event.clientY);
    };

    window.addEventListener("pointermove", handleMove, { passive: true });

    return () => {
      window.removeEventListener("pointermove", handleMove);
      document.body.classList.remove("hide-native-cursor");
    };
  }, [enabled, rawX, rawY]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-200 hidden lg:block"
      style={{ x, y }}
    >
      <motion.div
        className="flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full"
        animate={{
          width: active ? 72 : 10,
          height: active ? 72 : 10,
          backgroundColor: active ? "rgba(228, 56, 31, 0.14)" : "#edeae0",
          borderColor: active ? "#e4381f" : "rgba(237, 234, 224, 0)",
        }}
        style={{ borderWidth: 1, borderStyle: "solid" }}
        transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
      >
        {active && label ? (
          <motion.span
            className="mono-label text-fg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2, delay: 0.06 }}
          >
            {label}
          </motion.span>
        ) : null}
      </motion.div>
    </motion.div>
  );
}
