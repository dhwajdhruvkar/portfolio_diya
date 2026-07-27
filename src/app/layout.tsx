import type { Metadata, Viewport } from "next";

import { CustomCursor } from "@/components/layout/CustomCursor";
import { Footer } from "@/components/layout/Footer";
import { IntroLoader } from "@/components/layout/IntroLoader";
import { MotionProvider } from "@/components/layout/MotionProvider";
import { Nav } from "@/components/layout/Nav";
import { PageTransition } from "@/components/layout/PageTransition";
import { SmoothScrollProvider } from "@/components/layout/SmoothScrollProvider";
import { fontVariables } from "@/lib/fonts";
import { defaultMetadata, personJsonLd } from "@/lib/seo";
import "@/styles/globals.css";

export const metadata: Metadata = defaultMetadata;

export const viewport: Viewport = {
  themeColor: "#08070a",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${fontVariables} dark antialiased`}>
      <body>
        {/* Framer serialises each reveal's hidden state as an inline style, so
            without JS the content would never fade in. Un-hide it instead. */}
        <noscript>
          <style>{`[data-reveal]{opacity:1!important;transform:none!important}`}</style>
        </noscript>

        <MotionProvider>
          <SmoothScrollProvider>
            <a
              href="#main"
              className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-200 focus:rounded-full focus:border focus:border-accent focus:bg-bg-deep focus:px-5 focus:py-3 focus:text-fg"
            >
              Skip to content
            </a>

            <IntroLoader />
            <CustomCursor />
            <Nav />

            <PageTransition>
              <main id="main" className="relative">
                {children}
              </main>
            </PageTransition>

            <Footer />
          </SmoothScrollProvider>
        </MotionProvider>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd()) }}
        />
      </body>
    </html>
  );
}
