import { Marquee } from "@/components/shared/Marquee";
import { marqueeWords } from "@/content/experience";

/** Full-bleed rhythm break between the work list and the skills grid. */
export function MarqueeBreak() {
  return (
    <div className="relative w-full border-y border-line bg-bg-deep">
      <Marquee words={marqueeWords} />
    </div>
  );
}
