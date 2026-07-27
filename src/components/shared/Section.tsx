import type { ElementType, ReactNode } from "react";

import { cn } from "@/lib/utils";

type SectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  /** Nudge to pure black for extra depth between sections. */
  tone?: "base" | "deep" | "raised";
  as?: ElementType;
  /** Drop the horizontal gutter for full-bleed content like the marquee. */
  bleed?: boolean;
  labelledBy?: string;
};

const toneClasses = {
  base: "bg-bg",
  deep: "bg-bg-deep",
  raised: "bg-bg-2",
} as const;

export function Section({
  id,
  children,
  className,
  tone = "base",
  as: Tag = "section",
  bleed = false,
  labelledBy,
}: SectionProps) {
  return (
    <Tag
      id={id}
      aria-labelledby={labelledBy}
      className={cn(
        "relative w-full py-24 sm:py-32 lg:py-44",
        toneClasses[tone],
        className
      )}
    >
      <div
        className={cn(
          !bleed && "mx-auto w-full max-w-[100rem] px-6 sm:px-10 lg:px-16"
        )}
      >
        {children}
      </div>
    </Tag>
  );
}
