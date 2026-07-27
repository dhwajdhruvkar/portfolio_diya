import type { ImageSlot } from "@/content/types";

/**
 * Image slots outside the case studies. Set `src: "/images/<file>"` on a slot to
 * swap its placeholder for the real photograph — see public/images/IMAGES.md.
 */

export const heroPortrait: ImageSlot = {
  file: "hero-portrait.jpg",
  ratio: "3/4",
  label: "Portrait of Diya Jain",
};

export const contactPortrait: ImageSlot = {
  file: "contact-portrait.jpg",
  ratio: "3/4",
  label: "Portrait of Diya Jain",
};
