import { About } from "@/components/sections/About";
import { Capabilities } from "@/components/sections/Capabilities";
import { Contact } from "@/components/sections/Contact";
import { Education } from "@/components/sections/Education";
import { Hero } from "@/components/sections/Hero";
import { Journey } from "@/components/sections/Journey";
import { MarqueeBreak } from "@/components/sections/MarqueeBreak";
import { Pressure } from "@/components/sections/Pressure";
import { Skills } from "@/components/sections/Skills";
import { Stats } from "@/components/sections/Stats";
import { Work } from "@/components/sections/Work";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Capabilities />
      <Stats />
      <Work />
      <MarqueeBreak />
      <Skills />
      <Pressure />
      <Journey />
      <Education />
      <Contact />
    </>
  );
}
