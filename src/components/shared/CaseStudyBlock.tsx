import { Reveal } from "@/components/shared/Reveal";
import { cn } from "@/lib/utils";

type CaseStudyBlockProps = {
  /** Mono sub-label, e.g. "Problem". */
  label: string;
  /** A paragraph, or a list of points. */
  body: string | string[];
  className?: string;
};

/** One labelled slab of a case study, hairline-separated from its neighbours. */
export function CaseStudyBlock({
  label,
  body,
  className,
}: CaseStudyBlockProps) {
  return (
    <Reveal
      className={cn(
        "grid grid-cols-1 gap-5 border-t border-line py-10 lg:grid-cols-12 lg:gap-12 lg:py-14",
        className
      )}
    >
      <h2 className="mono-label text-fg-dim lg:col-span-3">{label}</h2>

      <div className="lg:col-span-9">
        {Array.isArray(body) ? (
          <ul className="flex flex-col gap-4">
            {body.map((item) => (
              <li
                key={item}
                className="flex max-w-[62ch] gap-4 text-base text-fg sm:text-lg"
              >
                <span
                  aria-hidden="true"
                  className="mt-[0.7em] h-px w-5 shrink-0 bg-accent"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="max-w-[62ch] text-base text-fg sm:text-lg">{body}</p>
        )}
      </div>
    </Reveal>
  );
}
