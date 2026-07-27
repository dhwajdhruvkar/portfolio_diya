import { Fragment } from "react";

/**
 * Sets the given phrases in the italic-serif accent face without duplicating
 * the copy in the content files. Emphasis stays off-white rather than scarlet:
 * the accent clears AA only just on this canvas, so it is reserved for display
 * type and never used for long-form reading.
 */
export function Emphasize({
  text,
  phrases,
}: {
  text: string;
  phrases: string[];
}) {
  if (phrases.length === 0) return <>{text}</>;

  const escaped = phrases.map((phrase) =>
    phrase.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
  );
  const pattern = new RegExp(`(${escaped.join("|")})`, "g");

  return (
    <>
      {text.split(pattern).map((part, index) =>
        phrases.includes(part) ? (
          <em key={index} className="serif-accent text-fg">
            {part}
          </em>
        ) : (
          <Fragment key={index}>{part}</Fragment>
        )
      )}
    </>
  );
}
