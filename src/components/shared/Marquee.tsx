import { cn } from "@/lib/utils";

type MarqueeProps = {
  words: string[];
  /** Seconds for one full pass. */
  durationSeconds?: number;
  className?: string;
};

/**
 * Decorative keyword strip. Two identical tracks slide in lockstep for a
 * seamless loop; the animation is pure CSS, so `prefers-reduced-motion` and the
 * hover pause both work without JavaScript.
 */
export function Marquee({
  words,
  durationSeconds = 32,
  className,
}: MarqueeProps) {
  const track = [...words, ...words];

  return (
    <div
      aria-hidden="true"
      className={cn(
        "group relative flex w-full overflow-hidden py-10 select-none",
        className
      )}
    >
      {[0, 1].map((copy) => (
        <div
          key={copy}
          className="flex shrink-0 items-center gap-8 pr-8 group-hover:[animation-play-state:paused] sm:gap-12 sm:pr-12"
          style={{
            animation: `marquee-x ${durationSeconds}s linear infinite`,
          }}
        >
          {track.map((word, index) => (
            <span key={`${word}-${index}`} className="flex items-center gap-8 sm:gap-12">
              <span
                className={cn(
                  "font-heading text-title font-bold uppercase whitespace-nowrap",
                  index % 2 === 0 ? "text-accent" : "text-outline"
                )}
              >
                {word}
              </span>
              <span className="text-subtitle text-line-bright">✦</span>
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}
