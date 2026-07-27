import { clsx, type ClassValue } from "clsx"
import { extendTailwindMerge } from "tailwind-merge"

/**
 * tailwind-merge cannot know about the custom `--text-*` tokens in
 * `globals.css`, so it files `text-hero` under text *colour* and lets a later
 * `text-fg` delete it — silently stripping the display type scale wherever a
 * size and a colour are merged together. Registering the sizes fixes that.
 */
const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [
        { text: ["hero", "display", "title", "subtitle", "lead", "meta"] },
      ],
    },
  },
})

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
