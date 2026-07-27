import { cn } from "@/lib/utils";

/** Original "DJ" mark — plain geometry, no third-party artwork. */
export function Monogram({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 32"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.4}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={cn("h-7 w-auto", className)}
    >
      <path d="M4 5.5H10A10.5 10.5 0 0 1 10 26.5H4Z" />
      <path d="M36 5.5V19A7.5 7.5 0 0 1 28.5 26.5H27" />
    </svg>
  );
}
