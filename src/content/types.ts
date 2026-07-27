export type AspectRatio = "3/4" | "4/3" | "4/5" | "9/16" | "16/9" | "1/1";

export type ImageSlot = {
  /** Expected filename inside `public/images/` — see public/images/IMAGES.md. */
  file: string;
  ratio: AspectRatio;
  /** Short description, used as the placeholder label and the image alt text. */
  label: string;
  /** Set to `/images/<file>` once a real image is dropped in to swap in next/image. */
  src?: string;
};

/**
 * A run of words inside a display heading. `serif` switches the run to the
 * italic-serif accent face; `accent` colours it scarlet.
 */
export type HeadingToken = {
  text: string;
  serif?: boolean;
  accent?: boolean;
};

/** One visual line of a display heading, revealed as a single mask-up unit. */
export type HeadingLine = HeadingToken[];
