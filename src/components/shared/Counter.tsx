"use client";

import { useCounter } from "@/hooks/useCounter";
import { cn } from "@/lib/utils";

type CounterProps = {
  value: number;
  pad?: number;
  suffix?: string;
  className?: string;
};

/**
 * The animating digits are hidden from assistive tech and paired with a static
 * copy of the final value, so the real number is always announced.
 */
export function Counter({ value, pad, suffix, className }: CounterProps) {
  const { containerRef, textRef } = useCounter({ target: value, pad });
  const finalValue = pad ? String(value).padStart(pad, "0") : String(value);

  return (
    <span ref={containerRef} className={cn("tabular-nums", className)}>
      <span aria-hidden="true">
        <span ref={textRef}>{finalValue}</span>
        {suffix}
      </span>
      <span className="sr-only">
        {finalValue}
        {suffix}
      </span>
    </span>
  );
}
