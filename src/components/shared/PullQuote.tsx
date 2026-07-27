import { DisplayHeading } from "@/components/shared/DisplayHeading";
import type { HeadingLine } from "@/content/types";
import { cn } from "@/lib/utils";

type PullQuoteProps = {
  lines: HeadingLine[];
  className?: string;
  cite?: string;
};

/** Oversized centred statement with an italic-serif accent word. */
export function PullQuote({ lines, className, cite }: PullQuoteProps) {
  return (
    <figure className={cn("mx-auto max-w-5xl text-center", className)}>
      <DisplayHeading
        lines={lines}
        as="p"
        size="display"
        align="center"
        className="normal-case text-fg"
      />
      {cite ? (
        <figcaption className="mono-label mt-8 text-fg-dim">{cite}</figcaption>
      ) : null}
    </figure>
  );
}
