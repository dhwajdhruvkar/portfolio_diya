import { Reveal } from "@/components/shared/Reveal";
import { cn } from "@/lib/utils";

type SectionIndexProps = {
  /** Two-digit section number, e.g. "04". */
  index: string;
  label: string;
  id?: string;
  className?: string;
  /** Optional short note pinned to the right of the rule. */
  note?: string;
};

/**
 * Mono index label over a full-width hairline — the recurring section marker.
 * Doubles as the accessible name for its section via `id`.
 */
export function SectionIndex({
  index,
  label,
  id,
  className,
  note,
}: SectionIndexProps) {
  return (
    <Reveal className={cn("w-full", className)}>
      <div className="flex items-baseline justify-between gap-6 pb-4">
        <h2 id={id} className="mono-label text-fg-dim">
          <span className="text-accent-2">({index})</span>
          <span aria-hidden="true"> — </span>
          <span className="text-fg">{label}</span>
        </h2>
        {note ? (
          <span className="mono-label hidden text-fg-dim sm:block">{note}</span>
        ) : null}
      </div>
      <div className="h-px w-full bg-line" />
    </Reveal>
  );
}
