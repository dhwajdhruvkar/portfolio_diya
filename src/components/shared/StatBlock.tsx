import { Counter } from "@/components/shared/Counter";
import { RevealList, RevealListItem } from "@/components/shared/Reveal";
import type { Stat } from "@/content/experience";

/** Three-up credibility row, hairline-divided, counting up as it scrolls in. */
export function StatBlock({ stats }: { stats: Stat[] }) {
  return (
    <RevealList
      className="grid grid-cols-1 border-t border-line sm:grid-cols-3"
      stagger={0.12}
    >
      {stats.map((stat) => (
        <RevealListItem
          key={stat.label}
          className="flex flex-col gap-4 border-b border-line px-0 py-10 sm:border-b-0 sm:px-8 sm:py-12 sm:not-first:border-l sm:first:pl-0 sm:last:pr-0"
        >
          <Counter
            value={stat.value}
            pad={stat.pad}
            suffix={stat.suffix}
            className="font-heading text-display leading-none font-bold text-fg"
          />
          <span className="mono-label max-w-[22ch] text-fg-dim">
            {stat.label}
          </span>
        </RevealListItem>
      ))}
    </RevealList>
  );
}
