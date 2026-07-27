import type { Metadata } from "next";

import { contact, site, socials } from "@/content/site";

export const defaultMetadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  keywords: [...site.keywords],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: site.name,
    title: site.title,
    description: site.description,
    url: site.url,
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  category: "portfolio",
};

/**
 * Person schema for the home page. Placeholder social links are filtered out of
 * `sameAs` so search engines are never pointed at a platform homepage.
 */
export function personJsonLd() {
  const verifiedProfiles = socials
    .filter((social) => !social.isPlaceholder)
    .map((social) => social.href);

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: site.jobTitle,
    description: site.description,
    email: `mailto:${contact.email}`,
    telephone: contact.phoneDisplay,
    url: site.url,
    knowsLanguage: ["English", "Hindi"],
    address: {
      "@type": "PostalAddress",
      addressLocality: site.locality,
      addressRegion: site.region,
      addressCountry: site.country,
    },
    ...(verifiedProfiles.length > 0 ? { sameAs: verifiedProfiles } : {}),
  };
}

export function projectJsonLd({
  title,
  description,
  slug,
}: {
  title: string;
  description: string;
  slug: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: title,
    description,
    url: `${site.url}/work/${slug}`,
    author: { "@type": "Person", name: site.name },
  };
}
