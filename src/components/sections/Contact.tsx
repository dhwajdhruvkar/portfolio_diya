import { ArrowUpRight, MessageCircle, Phone } from "lucide-react";

import { CopyEmailButton } from "@/components/shared/CopyEmailButton";
import { DisplayHeading } from "@/components/shared/DisplayHeading";
import { Reveal } from "@/components/shared/Reveal";
import { contactHeading } from "@/content/experience";
import { contact, site, socials } from "@/content/site";

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="grain relative flex min-h-svh w-full flex-col justify-between overflow-hidden bg-bg-deep pt-24 pb-16 sm:pt-32"
    >
      {/* Slow scarlet bloom behind the type. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_100%,rgba(228,56,31,0.16)_0%,rgba(228,56,31,0.04)_38%,transparent_72%)]"
      />

      <div className="relative mx-auto flex w-full max-w-[100rem] flex-1 flex-col justify-center gap-14 px-6 sm:px-10 lg:px-16">
        <Reveal>
          <p className="mono-label flex flex-wrap items-center gap-x-3 text-fg-dim">
            <span className="text-accent-2">(09)</span>
            <span>Contact</span>
          </p>
        </Reveal>

        <DisplayHeading
          id="contact-heading"
          lines={contactHeading}
          as="h2"
          size="hero"
          className="text-fg"
        />

        <Reveal delay={0.2} className="flex flex-col gap-8">
          {/* Fill-wipe on hover: the scarlet block slides up behind the text. */}
          <a
            href={contact.mailto}
            className="group relative inline-flex w-fit max-w-full items-center gap-4 overflow-hidden border-b border-line pb-3 transition-colors duration-300"
          >
            <span
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 h-0 bg-accent transition-[height] duration-400 ease-out group-hover:h-full"
            />
            {/* Inverts to near-black once the scarlet fill is behind it: 4.6:1
                against the accent, where off-white would only reach 3.6:1. */}
            <span className="relative font-heading text-subtitle font-bold break-all text-fg transition-colors duration-300 group-hover:text-bg">
              {contact.email}
            </span>
            <ArrowUpRight
              className="relative size-6 shrink-0 text-fg-dim transition-[transform,color] duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-bg"
              aria-hidden="true"
            />
          </a>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={contact.tel}
              className="mono-label inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-fg-dim transition-colors duration-300 hover:border-accent hover:text-fg"
            >
              <Phone className="size-3.5 shrink-0" aria-hidden="true" />
              {contact.phoneDisplay}
            </a>

            <a
              href={contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mono-label inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-fg-dim transition-colors duration-300 hover:border-accent hover:text-fg"
            >
              <MessageCircle className="size-3.5 shrink-0" aria-hidden="true" />
              WhatsApp
            </a>

            <CopyEmailButton />
          </div>
        </Reveal>
      </div>

      <Reveal
        delay={0.3}
        className="relative mx-auto w-full max-w-[100rem] px-6 sm:px-10 lg:px-16"
      >
        <div className="flex flex-col gap-6 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="mono-label text-fg-dim">
            {site.location} · {site.availability}
          </p>

          <ul className="flex flex-wrap gap-5">
            {socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mono-label text-fg transition-colors duration-300 hover:text-accent-2"
                >
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}
