export type SkillGroup = {
  /** Mono index shown beside the group name. */
  index: string;
  title: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    index: "01",
    title: "Technical",
    items: [
      "Brand Positioning & Audience Segmentation",
      "Social Media Analytics, Metrics & Meta Ads",
      "Graphic Design, Content Scripting & Visual Storytelling",
    ],
  },
  {
    index: "02",
    title: "Leadership",
    items: [
      "Revenue Generation & Direct Corporate Sales",
      "Cross-Functional Team Management",
      "Crisis Management & Live-Event Problem Solving",
    ],
  },
  {
    index: "03",
    title: "Also",
    items: [
      "Content writing & editing",
      "Negotiation & relationship management",
      "Project management & cross-functional coordination",
      "Brand collaboration & partnerships",
    ],
  },
];

/**
 * Tool names are rendered as text chips only — never as third-party logos.
 * `icon` maps to a generic lucide glyph chosen in the Skills section.
 */
export type Tool = {
  name: string;
  icon: "design" | "video" | "clip" | "sheet" | "analytics" | "workspace";
};

export const tools: Tool[] = [
  { name: "Canva", icon: "design" },
  { name: "CapCut", icon: "clip" },
  { name: "VN Editor", icon: "video" },
  { name: "Microsoft Excel", icon: "sheet" },
  { name: "Google Analytics", icon: "analytics" },
  { name: "Google Workspace", icon: "workspace" },
];

export const languages = ["English", "Hindi"];
