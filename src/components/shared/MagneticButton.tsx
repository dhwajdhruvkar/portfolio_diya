"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { ReactNode, Ref } from "react";

import { useCursorHover } from "@/hooks/useCursorHover";
import { useMagnetic } from "@/hooks/useMagnetic";
import { useReducedMotionSafe } from "@/hooks/useReducedMotionSafe";
import { useScrollToHash } from "@/hooks/useScrollToHash";
import { cn } from "@/lib/utils";

const MotionLink = motion.create(Link);

type MagneticButtonProps = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  cursorLabel?: string | null;
  ariaLabel?: string;
  strength?: number;
  type?: "button" | "submit";
};

const baseClasses =
  "group/magnetic relative inline-flex items-center justify-center gap-3 rounded-full border border-line px-7 py-4 font-body text-sm text-fg transition-colors duration-300 hover:border-accent hover:text-accent-2";

/**
 * Primary CTA with a subtle pointer attraction. Renders a plain anchor for
 * absolute URLs and `mailto:`/`tel:` schemes, a `Link` for internal routes and
 * hashes, and a `button` when there is no href.
 */
export function MagneticButton({
  children,
  href,
  onClick,
  className,
  cursorLabel = null,
  ariaLabel,
  strength = 0.24,
  type = "button",
}: MagneticButtonProps) {
  const reduced = useReducedMotionSafe();
  const { ref, x, y, onPointerMove, onPointerLeave } = useMagnetic({
    strength,
    disabled: reduced,
  });
  const cursor = useCursorHover(cursorLabel);
  const scrollToHash = useScrollToHash();

  const shared = {
    style: { x, y },
    onPointerMove,
    onPointerEnter: cursor.onPointerEnter,
    onPointerLeave: () => {
      onPointerLeave();
      cursor.onPointerLeave();
    },
    className: cn(baseClasses, className),
    "aria-label": ariaLabel,
  };

  // In-page anchors have to be handed to Lenis, or the native jump fights it.
  if (href?.startsWith("#")) {
    return (
      <motion.a
        {...shared}
        ref={ref as Ref<HTMLAnchorElement>}
        href={href}
        onClick={(event) => {
          event.preventDefault();
          scrollToHash(href);
        }}
      >
        {children}
      </motion.a>
    );
  }

  if (href && /^https?:/.test(href)) {
    return (
      <motion.a
        {...shared}
        ref={ref as Ref<HTMLAnchorElement>}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </motion.a>
    );
  }

  if (href && /^(mailto|tel):/.test(href)) {
    return (
      <motion.a {...shared} ref={ref as Ref<HTMLAnchorElement>} href={href}>
        {children}
      </motion.a>
    );
  }

  if (href) {
    return (
      <MotionLink
        {...shared}
        ref={ref as Ref<HTMLAnchorElement>}
        href={href}
      >
        {children}
      </MotionLink>
    );
  }

  return (
    <motion.button
      {...shared}
      ref={ref as Ref<HTMLButtonElement>}
      type={type}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
}
