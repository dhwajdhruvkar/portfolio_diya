import Image from "next/image";

import type { AspectRatio, ImageSlot } from "@/content/types";
import { cn } from "@/lib/utils";

type PlaceholderProps = {
  /** Pass a content slot, or the individual props below. */
  slot?: ImageSlot;
  label?: string;
  ratio?: AspectRatio;
  src?: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
};

/**
 * Every image slot in the site renders through here. Without a `src` it draws a
 * dark grain-and-gradient block annotated with the expected filename and aspect
 * ratio; set `src` on the content slot and the same box becomes a `next/image`.
 */
export function Placeholder({
  slot,
  label,
  ratio,
  src,
  className,
  sizes = "(min-width: 1024px) 40vw, 90vw",
  priority = false,
}: PlaceholderProps) {
  const resolvedRatio = slot?.ratio ?? ratio ?? "4/3";
  const resolvedLabel = slot?.label ?? label ?? "Image";
  const resolvedSrc = slot?.src ?? src;
  const file = slot?.file;

  return (
    <div
      className={cn(
        "relative isolate overflow-hidden border border-line bg-bg-2",
        !resolvedSrc && "grain",
        className
      )}
      style={{ aspectRatio: resolvedRatio.replace("/", " / ") }}
      {...(resolvedSrc ? {} : { role: "img", "aria-label": resolvedLabel })}
    >
      {resolvedSrc ? (
        <Image
          src={resolvedSrc}
          alt={resolvedLabel}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
        />
      ) : (
        <>
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(120%_110%_at_18%_0%,#191820_0%,#0d0c11_55%,#08070a_100%)]"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 flex items-end justify-between gap-4 p-3 sm:p-4"
          >
            <span className="mono-label text-fg-dim/70">
              {file ?? resolvedLabel}
            </span>
            <span className="mono-label shrink-0 text-fg-dim/50">
              {resolvedRatio}
            </span>
          </div>
        </>
      )}
    </div>
  );
}
