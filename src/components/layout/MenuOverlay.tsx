"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useLenis } from "lenis/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef } from "react";

import { contact, navLinks, site, socials } from "@/content/site";
import { useCursorHover } from "@/hooks/useCursorHover";
import { useScrollToHash } from "@/hooks/useScrollToHash";
import { EASE_OUT_EXPO, lineMask, staggerChildren } from "@/lib/motion";
import { cn } from "@/lib/utils";

const FOCUSABLE = 'a[href], button:not([disabled])';

type MenuOverlayProps = {
  open: boolean;
  onClose: () => void;
  activeId: string | null;
};

export function MenuOverlay({ open, onClose, activeId }: MenuOverlayProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const restoreFocusTo = useRef<HTMLElement | null>(null);
  const pathname = usePathname();
  const scrollToHash = useScrollToHash();
  const lenis = useLenis();
  const isHome = pathname === "/";

  // Focus trap: park focus inside the overlay, cycle Tab, close on Escape and
  // hand focus back to whatever opened it.
  useEffect(() => {
    if (!open) return;
    const container = containerRef.current;
    if (!container) return;

    restoreFocusTo.current = document.activeElement as HTMLElement | null;
    const getFocusable = () =>
      Array.from(container.querySelectorAll<HTMLElement>(FOCUSABLE));

    const firstFocus = window.setTimeout(() => getFocusable()[0]?.focus(), 60);

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== "Tab") return;
      const items = getFocusable();
      if (items.length === 0) return;

      const first = items[0];
      const last = items[items.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      window.clearTimeout(firstFocus);
      document.removeEventListener("keydown", handleKeyDown);
      restoreFocusTo.current?.focus();
    };
  }, [onClose, open]);

  // Freeze the page behind the overlay, including the Lenis loop.
  useEffect(() => {
    if (!open) return;
    lenis?.stop();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
      lenis?.start();
    };
  }, [lenis, open]);

  const handleAnchor = useCallback(
    (event: React.MouseEvent, href: string) => {
      if (!isHome) return;
      event.preventDefault();
      onClose();
      window.setTimeout(() => scrollToHash(href), 220);
    },
    [isHome, onClose, scrollToHash]
  );

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          ref={containerRef}
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          className="fixed inset-0 z-90 flex flex-col bg-bg-deep"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: EASE_OUT_EXPO }}
        >
          <div className="grain pointer-events-none absolute inset-0" />

          <div className="relative flex flex-1 flex-col justify-center px-6 pt-28 pb-12 sm:px-10 lg:px-16">
            <motion.nav
              aria-label="Primary"
              variants={staggerChildren(0.07, 0.12)}
              initial="hidden"
              animate="visible"
            >
              <ul className="flex flex-col">
                {navLinks.map((link) => {
                  const id = link.href.replace("#", "");
                  const isActive = activeId === id;
                  const href = isHome ? link.href : `/${link.href}`;

                  return (
                    <li key={link.href} className="overflow-hidden">
                      <motion.div variants={lineMask}>
                        <MenuLink
                          href={href}
                          label={link.label}
                          index={link.index}
                          isActive={isActive}
                          onClick={(event) => handleAnchor(event, link.href)}
                        />
                      </motion.div>
                    </li>
                  );
                })}
              </ul>
            </motion.nav>
          </div>

          <motion.div
            className="relative flex flex-col gap-8 border-t border-line px-6 py-8 sm:px-10 lg:flex-row lg:items-end lg:justify-between lg:px-16"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35, ease: EASE_OUT_EXPO }}
          >
            <div className="flex flex-col gap-2">
              <span className="mono-label text-fg-dim">Get in touch</span>
              <a
                href={contact.mailto}
                className="font-heading text-subtitle text-fg transition-colors hover:text-accent"
              >
                {contact.email}
              </a>
              <a
                href={contact.tel}
                className="mono-label text-fg-dim transition-colors hover:text-accent-2"
              >
                {contact.phoneDisplay}
              </a>
            </div>

            <div className="flex flex-col gap-2 lg:items-end">
              <span className="mono-label text-fg-dim">{site.location}</span>
              <ul className="flex flex-wrap gap-5">
                {socials.map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mono-label text-fg transition-colors hover:text-accent-2"
                    >
                      {social.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

function MenuLink({
  href,
  label,
  index,
  isActive,
  onClick,
}: {
  href: string;
  label: string;
  index: string;
  isActive: boolean;
  onClick: (event: React.MouseEvent) => void;
}) {
  const cursor = useCursorHover(null);

  return (
    <Link
      href={href}
      onClick={onClick}
      aria-current={isActive ? "true" : undefined}
      className={cn(
        "group flex items-baseline gap-4 py-1 font-heading text-hero leading-[0.95] font-bold uppercase transition-colors duration-300 sm:gap-8",
        isActive ? "text-accent" : "text-fg hover:text-accent"
      )}
      {...cursor}
    >
      <span className="mono-label shrink-0 text-fg-dim group-hover:text-accent-2">
        ({index})
      </span>
      {label}
    </Link>
  );
}
