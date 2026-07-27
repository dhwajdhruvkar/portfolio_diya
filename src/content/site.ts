export type NavLink = {
  label: string;
  href: string;
  /** Mono index shown beside the label in the overlay menu. */
  index: string;
};

export type SocialLink = {
  label: string;
  href: string;
  /**
   * Placeholder links point at a platform root rather than a real profile.
   * Swap in Diya's URLs and set this to false so the profile is also emitted
   * into the Person JSON-LD `sameAs` array.
   */
  isPlaceholder: boolean;
};

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://diyajain.vercel.app";

export const site = {
  url: siteUrl,
  name: "Diya Jain",
  monogram: "DJ",
  roles: ["Marketing Strategist", "Event Producer", "Content Creator"],
  roleLine: "Marketing Strategist · Event Producer · Content Creator",
  jobTitle: "Marketing Strategist & Event Producer",
  location: "Bhopal, India",
  locality: "Bhopal",
  region: "Madhya Pradesh",
  country: "IN",
  availability: "Available for work",
  studentId: "2023BBAEE008",
  year: "2026",
  title: "Diya Jain — Marketing Strategist & Event Producer",
  description:
    "Diya Jain is a marketing strategist, event producer and content creator based in Bhopal, India — building brands and live events from the first idea to the final applause.",
  keywords: [
    "Diya Jain",
    "marketing strategist",
    "event producer",
    "content creator",
    "social media management",
    "event production",
    "brand strategy",
    "Bhopal",
  ],
} as const;

export const contact = {
  email: "diyajain72796@gmail.com",
  phoneDisplay: "+91 94072 55490",
  phoneRaw: "+919407255490",
  get mailto() {
    return `mailto:${this.email}`;
  },
  get tel() {
    return `tel:${this.phoneRaw}`;
  },
  get whatsapp() {
    return `https://wa.me/${this.phoneRaw.replace("+", "")}`;
  },
} as const;

export const navLinks: NavLink[] = [
  { label: "About", href: "#about", index: "01" },
  { label: "Work", href: "#work", index: "04" },
  { label: "Skills", href: "#skills", index: "05" },
  { label: "Journey", href: "#journey", index: "07" },
  { label: "Contact", href: "#contact", index: "09" },
];

/** Replace each href with Diya's real profile, then flip isPlaceholder to false. */
export const socials: SocialLink[] = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/",
    isPlaceholder: true,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/",
    isPlaceholder: true,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/",
    isPlaceholder: true,
  },
];
