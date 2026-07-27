import type { Transition, Variants } from "framer-motion";

export const EASE_OUT_EXPO: [number, number, number, number] = [
  0.16, 1, 0.3, 1,
];

export const EASE_IN_OUT: [number, number, number, number] = [
  0.65, 0.05, 0.36, 1,
];

/**
 * Shared viewport config so every reveal fires at the same point on screen.
 *
 * Deliberately margin-based rather than `amount`-based: a fractional `amount`
 * can never be satisfied by an element taller than the viewport (a 3x-tall
 * column on a short landscape phone would sit at opacity 0 forever), whereas a
 * negative bottom margin triggers as soon as the element crosses that line.
 */
export const viewportOnce = { once: true, margin: "0px 0px -12% 0px" } as const;

export const springSoft: Transition = {
  type: "spring",
  stiffness: 260,
  damping: 30,
  mass: 0.6,
};

/** Mask-up: the parent clips, the child slides in from below its own box. */
export const lineMask: Variants = {
  hidden: { y: "110%" },
  visible: {
    y: "0%",
    transition: { duration: 0.85, ease: EASE_OUT_EXPO },
  },
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE_OUT_EXPO },
  },
};

/**
 * A transition declared inside a variant wins over the `transition` prop, so a
 * delay has to be baked into the variant itself to have any effect.
 */
export const fadeUpDelayed = (delay = 0): Variants => ({
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE_OUT_EXPO, delay },
  },
});

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease: EASE_OUT_EXPO } },
};

export const staggerChildren = (stagger = 0.08, delay = 0): Variants => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: stagger, delayChildren: delay },
  },
});

/** Full-bleed curtain used for route transitions. */
export const curtain: Variants = {
  hidden: { scaleY: 0, transformOrigin: "bottom" },
  visible: {
    scaleY: 1,
    transformOrigin: "bottom",
    transition: { duration: 0.55, ease: EASE_IN_OUT },
  },
  exit: {
    scaleY: 0,
    transformOrigin: "top",
    transition: { duration: 0.55, ease: EASE_IN_OUT },
  },
};
