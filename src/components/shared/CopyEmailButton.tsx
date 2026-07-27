"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Check, Copy } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { contact } from "@/content/site";
import { useCursorHover } from "@/hooks/useCursorHover";
import { EASE_OUT_EXPO } from "@/lib/motion";

export function CopyEmailButton() {
  const [copied, setCopied] = useState(false);
  const [failed, setFailed] = useState(false);
  const timer = useRef<number | undefined>(undefined);
  const cursor = useCursorHover("Copy");

  useEffect(() => () => window.clearTimeout(timer.current), []);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(contact.email);
      setCopied(true);
      setFailed(false);
    } catch {
      setFailed(true);
      setCopied(false);
    }

    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => {
      setCopied(false);
      setFailed(false);
    }, 2400);
  }

  return (
    <div className="relative inline-flex">
      <button
        type="button"
        onClick={handleCopy}
        className="mono-label group inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-fg-dim transition-colors duration-300 hover:border-accent hover:text-fg"
        {...cursor}
      >
        {copied ? (
          <Check className="size-3.5 shrink-0 text-accent-2" aria-hidden="true" />
        ) : (
          <Copy className="size-3.5 shrink-0" aria-hidden="true" />
        )}
        Copy email
      </button>

      {/* Announced politely so the outcome reaches screen readers too. */}
      <span aria-live="polite" className="sr-only">
        {copied ? "Email address copied to clipboard" : ""}
        {failed ? "Could not copy — please select the address manually" : ""}
      </span>

      <AnimatePresence>
        {copied || failed ? (
          <motion.span
            aria-hidden="true"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.28, ease: EASE_OUT_EXPO }}
            className="mono-label pointer-events-none absolute -top-11 left-0 rounded-full border border-line bg-bg-2 px-4 py-2 whitespace-nowrap text-fg"
          >
            {copied ? "Copied" : "Copy failed"}
          </motion.span>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
