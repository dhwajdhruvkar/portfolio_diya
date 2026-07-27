import { site } from "@/content/site";
import type { HeadingLine } from "@/content/types";

export type Fact = { label: string; value: string };
export type Pillar = { index: string; title: string; description: string };
export type Stat = {
  /** Count-up target. */
  value: number;
  /** Zero-pad the rendered number to this many digits, e.g. 2 renders "06". */
  pad?: number;
  suffix?: string;
  label: string;
};
export type PressureCard = {
  title: string;
  challenge: string;
  solution: string;
  takeaway: string;
};
export type TimelineEntry = { title: string; role: string; note: string };
export type Credential = { primary: string; secondary: string };

export const hero: {
  eyebrow: string;
  headline: HeadingLine[];
  subline: string;
} = {
  eyebrow: site.roleLine,
  headline: [
    [{ text: "I build brands &" }],
    [{ text: "events", serif: true, accent: true }, { text: " from the" }],
    [{ text: "first idea to the" }],
    [{ text: "final applause." }],
  ],
  subline: "Bhopal, India — available for work",
};

export const about = {
  paragraphs: [
    "I'm Diya Jain — a marketing professional and event strategist who turns creative ideas into successful real-world campaigns. I specialize in social media management, brand growth, and live event production, blending data-driven strategy with strong visual storytelling.",
    "Across six major internships I've handled everything from digital marketing for tech startups to backstage production for large-scale festivals. That range lets me deliver fast — a two-month internship at Hoppity earned me a full Pre-Placement Offer (PPO).",
    "Whether I'm designing a social campaign or running a live event, the goal is the same: exceptional quality, teams that move smoothly, and brands that truly stand out.",
  ],
  facts: [
    { label: "Location", value: "Bhopal, India" },
    { label: "Focus", value: "Marketing · Events · Content" },
    { label: "Languages", value: "English · Hindi" },
  ] satisfies Fact[],
};

export const capabilities = {
  intro:
    "A proactive, detail-oriented operator with a track record in high-pressure live environments and fast-paced startup workflows.",
  pillars: [
    {
      index: "01",
      title: "Strategic Marketing & Analytics",
      description:
        "Brand positioning, audience segmentation and metrics-led social strategy — every next move traced back to what the numbers show.",
    },
    {
      index: "02",
      title: "End-to-End Event Production",
      description:
        "From first concept and venue floor-plan through vendor timelines to crisis management on the live floor.",
    },
    {
      index: "03",
      title: "Revenue Generation & Client Relations",
      description:
        "Direct corporate sales, negotiation and partnerships that turn attention into closed business.",
    },
  ] satisfies Pillar[],
  pullQuote: {
    lines: [
      [{ text: "“Quality is not an act," }],
      [{ text: "it is a " }, { text: "habit", serif: true, accent: true }, { text: ".”" }],
    ] satisfies HeadingLine[],
  },
};

export const stats: Stat[] = [
  {
    value: 4,
    suffix: "+",
    label: "Years of active content creation & digital management",
  },
  {
    value: 6,
    pad: 2,
    label:
      "Industries across startups, luxury weddings, concerts & corporate sales",
  },
  {
    value: 1,
    label: "Pre-Placement Offer earned at Hoppity (2-month internship)",
  },
];

export const pressureCards: PressureCard[] = [
  {
    title: "The Startup Reality",
    challenge:
      "A fast startup demands adaptability; “social media intern” never meant one role.",
    solution:
      "I embraced it, acting as strategist, video editor, salesperson, and occasional troubleshooter.",
    takeaway:
      "I thrive under pressure and pivot instantly to what the business needs.",
  },
  {
    title: "Delegating → Ground Reality",
    challenge:
      "College events ran on delegation; luxury weddings were unpredictable and labor-intensive.",
    solution:
      "During a sudden on-site labor shortage I physically installed the heavy event lighting and setup myself.",
    takeaway:
      "Real event leadership means doing whatever the floor needs; no room for ego in live production.",
  },
];

/** Context labels for the two pressure narratives, kept out of the card titles. */
export const pressureContexts = ["Hoppity", "Viaah"] as const;

export const journey = {
  /** Set as display type, so the copy carries its own line breaks and accents. */
  quotes: [
    [[{ text: "“I was once a volunteer on event day.”" }]],
    [
      [{ text: "“Today, I build the event" }],
      [{ text: "from the first idea to the" }],
      [
        { text: "final " },
        { text: "applause", serif: true, accent: true },
        { text: ".”" },
      ],
    ],
  ] satisfies HeadingLine[][],
  line: "My path from digital marketer at Abhisaran Fest to Marketing Strategist at Hoppity is a shift from executing tasks to architecting outcomes — prioritizing long-term brand equity over short-term engagement.",
  timeline: [
    {
      title: "Abhisaran Fest",
      role: "Digital Marketing + Cross-Functional HR",
      note: "Executing tasks.",
    },
    {
      title: "Hoppity",
      role: "Marketing Strategist",
      note: "Architecting outcomes.",
    },
  ] satisfies TimelineEntry[],
};

export const education: Credential[] = [
  {
    primary: "BBA in Entertainment & Events",
    secondary: "Jagran Lakecity University, Bhopal",
  },
  {
    primary: "Commerce with Maths (CBSE)",
    secondary: "Delhi Public School, Bhopal",
  },
];

export const positions: Credential[] = [
  { primary: "Co-Head, Production", secondary: "Media Fest, JWMIME" },
  { primary: "HOD & Event Coordinator", secondary: "TE MUN" },
];

export const contactHeading: HeadingLine[] = [
  [{ text: "Let's create" }],
  [{ text: "something" }],
  [{ text: "beautiful", serif: true, accent: true }],
  [{ text: "together." }],
];

export const marqueeWords = [
  "Marketing",
  "Live Events",
  "Content",
  "Brand Strategy",
  "Social",
  "Production",
];
