/**
 * Case-study content. Every string here is rendered verbatim, so this file is
 * the only place copy needs to be edited.
 */

import type { ImageSlot } from "@/content/types";

export type { AspectRatio, ImageSlot } from "@/content/types";

export type Project = {
  slug: string;
  /** Display index in the work list, e.g. "01". */
  index: string;
  title: string;
  /** Canonical role, as stated in the case study. */
  role: string;
  /** Shorter descriptor used in the work list. */
  category: string;
  /** Optional — no dates are on record yet; rows omit the year until one is set. */
  year?: string;
  overview: string;
  problem: string;
  myRole: string;
  process: string[];
  designDecisions: string[];
  outcome: string;
  tools: string[];
  impact: string;
  keyLearnings: string;
  cover: ImageSlot;
  gallery: ImageSlot[];
};

export const projects: Project[] = [
  {
    slug: "hoppity",
    index: "01",
    title: "Hoppity",
    role: "Social Media Strategist",
    category: "Social Media Strategist",
    overview:
      "Owned the end-to-end social presence for Hoppity, an offbeat-travel discovery brand, during a high-impact 2-month internship.",
    problem:
      "A young travel brand needed consistent, high-reach content and a repeatable system to grow audience and visibility fast.",
    myRole:
      "Social Media Strategist — full lifecycle ownership of digital content and performance.",
    process: [
      "Ran the complete content lifecycle — posts, reels, stories and threads — across Instagram and LinkedIn.",
      "Conducted trend analysis and viral-content research.",
      "Tracked performance metrics to guide the next content cycle.",
      "Collaborated with the marketing team on creatives.",
    ],
    designDecisions: [
      "Aligned every asset to the brand voice.",
      "Prioritized short-form, trend-led formats for reach.",
      "Built a review loop that fed analytics back into content.",
    ],
    outcome:
      "A steady, brand-aligned content engine and improved platform visibility.",
    tools: ["Canva", "CapCut", "VN Editor", "Google Analytics", "Excel"],
    impact:
      "Performance and consistency earned a full Pre-Placement Offer (PPO) after just two months.",
    keyLearnings:
      "In a startup, a “single role” is never single — adaptability and a metrics-first mindset compound quickly.",
    cover: {
      file: "project-hoppity-cover.jpg",
      ratio: "4/3",
      label: "Hoppity social content cover",
    },
    gallery: [
      {
        file: "project-hoppity-gallery-1.jpg",
        ratio: "9/16",
        label: "Reel cover from the Hoppity content cycle",
      },
      {
        file: "project-hoppity-gallery-2.jpg",
        ratio: "4/5",
        label: "Instagram carousel post",
      },
      {
        file: "project-hoppity-gallery-3.jpg",
        ratio: "16/9",
        label: "Performance analytics snapshot",
      },
    ],
  },
  {
    slug: "hoppity-creators-summit",
    index: "02",
    title: "Hoppity Creators Summit",
    role: "Experiential Event Lead",
    category: "Experiential Event Lead",
    overview:
      "Conceived and produced an exclusive creators' summit connecting top influencers in an intimate, immersive setting.",
    problem:
      "Amplify Hoppity's brand through authentic creator relationships and organic content — not paid ads.",
    myRole:
      "End-to-end event lead — concept, venue, logistics and on-site creator relations.",
    process: [
      "Handpicked an offbeat venue — Jungle Aashiyana, a hidden eco-homestay in Madhai.",
      "Coordinated complex travel and hospitality logistics.",
      "Managed creators on-site throughout the summit.",
    ],
    designDecisions: [
      "Chose an immersive “undiscovered India” environment so the experience itself became the content engine.",
    ],
    outcome:
      "A flawless experiential-marketing event that generated a wave of organic content.",
    tools: [
      "Logistics coordination",
      "Hospitality coordination",
      "Google Workspace",
      "On-site production",
    ],
    impact:
      "Amplified Hoppity's brand presence and produced high-volume organic reach.",
    keyLearnings:
      "The right environment does the marketing for you; great logistics are invisible when done well.",
    cover: {
      file: "project-hoppity-creators-summit-cover.jpg",
      ratio: "4/3",
      label: "Hoppity Creators Summit venue",
    },
    gallery: [
      {
        file: "project-hoppity-creators-summit-gallery-1.jpg",
        ratio: "16/9",
        label: "Eco-homestay summit venue",
      },
      {
        file: "project-hoppity-creators-summit-gallery-2.jpg",
        ratio: "4/5",
        label: "Creators at the summit",
      },
      {
        file: "project-hoppity-creators-summit-gallery-3.jpg",
        ratio: "4/3",
        label: "Behind the scenes of the production",
      },
    ],
  },
  {
    slug: "viaah-wedding-planner",
    index: "03",
    title: "Viaah Wedding Planner",
    role: "On-Ground Event Coordinator",
    category: "Luxury Wedding Production",
    overview: "My first foundational entry into luxury wedding production.",
    problem:
      "Deliver a flawless high-end wedding at Maghdam Resort under unpredictable, labor-intensive live conditions.",
    myRole: "On-ground event coordinator.",
    process: [
      "Learned ground-up wedding execution — detailed venue floor-planning, vendor timelines and rapid crisis management.",
      "Stepped in physically during an on-site labor shortage to install heavy lighting and setup.",
    ],
    designDecisions: [
      "Prioritized floor logistics and vendor sequencing to hold schedule.",
    ],
    outcome: "Executed the wedding smoothly despite live pressure.",
    tools: ["Floor-planning", "Vendor coordination", "On-site production"],
    impact:
      "Built the operational foundation that now underpins my live-event leadership.",
    keyLearnings:
      "No room for ego on the floor — leadership is doing whatever the event needs.",
    cover: {
      file: "project-viaah-wedding-planner-cover.jpg",
      ratio: "4/3",
      label: "Luxury wedding production setup",
    },
    gallery: [
      {
        file: "project-viaah-wedding-planner-gallery-1.jpg",
        ratio: "16/9",
        label: "Event setup at the resort",
      },
      {
        file: "project-viaah-wedding-planner-gallery-2.jpg",
        ratio: "4/5",
        label: "Production detail",
      },
    ],
  },
  {
    slug: "real-estate-launch",
    index: "04",
    title: "Corporate Real-Estate Launch",
    role: "Sales & Promotions",
    category: "Sales & Promotions",
    overview:
      "A high-profile launch event for a new housing colony with properties open for market purchase.",
    problem: "Convert event footfall into real, high-value property sales.",
    myRole: "Embedded in the core Sales & Promotions team.",
    process: [
      "Pitched property benefits to attendees.",
      "Engaged prospective buyers and worked the floor.",
    ],
    designDecisions: [
      "Messaging focused on tangible buyer benefits to drive on-the-spot decisions.",
    ],
    outcome:
      "Personally closed a high-value real-estate sale during the event.",
    tools: ["Direct sales", "Promotions", "Client relations"],
    impact:
      "Demonstrated commercial, revenue-generating capability beyond marketing.",
    keyLearnings:
      "Marketing and sales are one loop — I can build the story and close the deal.",
    cover: {
      file: "project-real-estate-launch-cover.jpg",
      ratio: "4/3",
      label: "Real-estate launch event",
    },
    gallery: [
      {
        file: "project-real-estate-launch-gallery-1.jpg",
        ratio: "16/9",
        label: "Launch event floor",
      },
      {
        file: "project-real-estate-launch-gallery-2.jpg",
        ratio: "4/3",
        label: "Sales and promotions stand",
      },
    ],
  },
  {
    slug: "zaeden-concert",
    index: "05",
    title: "Zaeden Concert",
    role: "Media & Communications Executive",
    category: "Media & Communications Executive",
    overview:
      "Ran the digital footprint and promotional framework for a high-profile, large-crowd music concert.",
    problem: "Drive ticket sales and fan engagement for a large live show.",
    myRole: "Media & Communications Executive.",
    process: [
      "Managed regular website updates.",
      "Kept digital brand alignment tight across channels.",
      "Ran strategic localized social-media loops.",
    ],
    designDecisions: [
      "Localized promotional loops to accelerate ticket conversion near the event.",
    ],
    outcome: "Sustained fan engagement and ticket-sales momentum.",
    tools: ["Web content management", "Social platforms", "Analytics"],
    impact: "Accelerated ticket sales and maximized fan engagement.",
    keyLearnings:
      "Timing and locality make or break live-event promotion.",
    cover: {
      file: "project-zaeden-concert-cover.jpg",
      ratio: "4/3",
      label: "Concert crowd",
    },
    gallery: [
      {
        file: "project-zaeden-concert-gallery-1.jpg",
        ratio: "16/9",
        label: "Concert stage",
      },
      {
        file: "project-zaeden-concert-gallery-2.jpg",
        ratio: "4/5",
        label: "Promotional creative",
      },
    ],
  },
  {
    slug: "abhisaran-fest",
    index: "06",
    title: "Abhisaran Fest",
    role: "Digital Marketing + Cross-Functional HR",
    category: "Digital Marketing + Cross-Functional HR",
    overview:
      "Dual-track role across a large college festival: front-end digital promotion and back-end team resourcing.",
    problem:
      "Grow the festival's online reach while keeping internal teams equipped and coordinated.",
    myRole: "Digital marketer and cross-functional HR support.",
    process: [
      "Managed social media, wrote brand-aligned content and executed targeted marketing.",
      "Supported HR operations in parallel by coordinating and equipping internal teams with logistics and materials.",
    ],
    designDecisions: [
      "Balanced audience-facing storytelling with operational reliability behind the scenes.",
    ],
    outcome:
      "Improved the festival's online reach, engagement and visibility.",
    tools: ["Canva", "Social platforms", "Coordination tools"],
    impact:
      "Built a rare dual skillset — front-end digital promotion and back-end resource management.",
    keyLearnings:
      "The best marketers understand the operation behind the campaign.",
    cover: {
      file: "project-abhisaran-fest-cover.jpg",
      ratio: "4/3",
      label: "College festival promotion",
    },
    gallery: [
      {
        file: "project-abhisaran-fest-gallery-1.jpg",
        ratio: "4/5",
        label: "Festival promotional post",
      },
      {
        file: "project-abhisaran-fest-gallery-2.jpg",
        ratio: "16/9",
        label: "Behind the scenes with the team",
      },
    ],
  },
  {
    slug: "freelance-digital-management",
    index: "07",
    title: "Freelance Digital Management",
    role: "Social Media Manager / Content Strategist",
    category: "Kanishka Tomar & Diya Kandhari (MUA)",
    overview: "Managed digital presence for two independent clients.",
    problem:
      "Grow personal-brand reach and inbound inquiries for a creator and a makeup artist.",
    myRole:
      "Content strategist for Kanishka Tomar and social media manager for Diya Kandhari (MUA).",
    process: [
      "For Kanishka Tomar — formulated high-retention video structures, pacing and hooks for personal influencer branding across Instagram and YouTube.",
      "For Diya Kandhari (MUA) — curated a clean, premium visual identity and pushed trend-driven reels.",
    ],
    designDecisions: [
      "Matched each client's visual identity rather than imposing one template.",
      "Engineered hooks and pacing for retention.",
    ],
    outcome:
      "Cohesive branding and a measurable lift in audience inquiries for the MUA client.",
    tools: ["CapCut", "VN Editor", "Canva", "Instagram", "YouTube"],
    impact:
      "Significantly increased audience inquiries and strengthened personal brands.",
    keyLearnings:
      "Retention is designed, not lucky — structure and hooks are the craft.",
    cover: {
      file: "project-freelance-digital-management-cover.jpg",
      ratio: "4/3",
      label: "Freelance client content",
    },
    gallery: [
      {
        file: "project-freelance-digital-management-gallery-1.jpg",
        ratio: "9/16",
        label: "Reel cover for the creator client",
      },
      {
        file: "project-freelance-digital-management-gallery-2.jpg",
        ratio: "4/5",
        label: "Visual identity before and after",
      },
    ],
  },
  {
    slug: "becoolz-ice-creams",
    index: "08",
    title: "Becool'Z Ice Creams",
    role: "Marketing Strategist",
    category: "Marketing Strategist",
    overview:
      "Owned brand positioning and go-to-market for a consumer ice-cream brand.",
    problem:
      "Build repeatable brand frameworks and drive in-store revenue.",
    myRole: "Marketing Strategist.",
    process: [
      "Developed and institutionalized brand-positioning frameworks and seasonal go-to-market strategies.",
      "Spearheaded end-to-end product and flavor launches.",
      "Partnered cross-functionally with Sales and Creative.",
    ],
    designDecisions: [
      "Data-driven, high-impact in-store activations tied to seasonal launches.",
    ],
    outcome:
      "Activations that accelerated revenue and strengthened market share.",
    tools: ["Brand strategy", "Analytics", "Cross-functional coordination"],
    impact: "Accelerated revenue growth and strengthened market share.",
    keyLearnings:
      "Positioning frameworks turn one-off wins into a repeatable system.",
    cover: {
      file: "project-becoolz-ice-creams-cover.jpg",
      ratio: "4/3",
      label: "Ice-cream brand activation",
    },
    gallery: [
      {
        file: "project-becoolz-ice-creams-gallery-1.jpg",
        ratio: "4/5",
        label: "Seasonal launch creative",
      },
      {
        file: "project-becoolz-ice-creams-gallery-2.jpg",
        ratio: "16/9",
        label: "In-store activation",
      },
    ],
  },
];

export const projectSlugs = projects.map((project) => project.slug);

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

/** Wraps around so the last case study links back to the first. */
export function getAdjacentProjects(slug: string) {
  const current = projects.findIndex((project) => project.slug === slug);
  if (current === -1) return { previous: undefined, next: undefined };

  return {
    previous: projects[(current - 1 + projects.length) % projects.length],
    next: projects[(current + 1) % projects.length],
  };
}
