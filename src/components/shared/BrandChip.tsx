import type { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

type BrandChipProps = {
  label: string;
  /** Generic glyph only — third-party logos are deliberately never used. */
  icon?: LucideIcon;
  className?: string;
};

export function BrandChip({ label, icon: Icon, className }: BrandChipProps) {
  return (
    <span
      className={cn(
        "mono-label inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-fg-dim transition-colors duration-300 hover:border-accent hover:text-fg",
        className
      )}
    >
      {Icon ? <Icon className="size-3.5 shrink-0" aria-hidden="true" /> : null}
      {label}
    </span>
  );
}
