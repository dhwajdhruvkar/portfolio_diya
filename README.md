# Diya Jain — Portfolio

A dark, minimal, typography-led portfolio for **Diya Jain**, a marketing
strategist, event producer and content creator based in Bhopal, India.

The site is a single-page narrative in ten sections — hero, about, capabilities,
numbers, selected work, a keyword marquee, skills, pressure, journey, education
and a full-viewport contact CTA — plus eight case-study pages at `/work/[slug]`.
Pure-black canvas, off-white type, one scarlet accent, and a lot of negative
space.

## Tech stack

| Layer          | Choice                                                        |
| -------------- | ------------------------------------------------------------- |
| Framework      | Next.js 16 (App Router, TypeScript, `src/`)                   |
| UI             | React 19                                                      |
| Styling        | Tailwind CSS v4 (CSS-first `@theme`, no `tailwind.config.ts`)  |
| Components     | shadcn/ui (`base-nova` style, Base UI primitives)             |
| Motion         | Framer Motion 12                                              |
| Smooth scroll  | Lenis (`lenis/react`)                                         |
| Type           | `next/font` — Archivo, Instrument Serif, Hanken Grotesk, Space Mono |
| Icons          | lucide-react                                                  |

## Getting started

Requires **Node 18+** (developed on Node 22) and **pnpm**. If you don't have pnpm,
install it with `npm install -g pnpm` or `corepack enable pnpm`.

```bash
git clone https://github.com/dhwajdhruvkar/portfolio_diya.git
cd portfolio_diya
pnpm install
pnpm dev
```

Then open **http://localhost:3000**. Nothing else is required to run locally —
there are no environment variables, API keys or external services, and all
content is committed to the repo. (For production there is one optional variable,
`NEXT_PUBLIC_SITE_URL`; see [Deploying](#deploying).)

### All scripts

```bash
pnpm dev              # dev server with hot reload, http://localhost:3000
pnpm build            # production build
pnpm start            # serve the production build (run pnpm build first)
pnpm lint             # ESLint
pnpm check:contrast   # WCAG AA audit of the palette
```

## Editing content

All copy lives in `src/content/` and is fully typed, so text can be changed
without touching a component:

- **`site.ts`** — name, roles, location, availability, SEO defaults, and the
  single source of truth for **contact details** (`email`, `phoneDisplay`,
  `phoneRaw`). The `mailto:`, `tel:` and WhatsApp links all derive from these, so
  changing a number in one place updates the whole site. Also holds `navLinks`
  and `socials`.
- **`projects.ts`** — the eight case studies. Each `Project` carries `overview`,
  `problem`, `myRole`, `process`, `designDecisions`, `outcome`, `tools`,
  `impact`, `keyLearnings`, a `cover` and a `gallery`. Adding an object to the
  array creates a new case-study page, sitemap entry and work-list row
  automatically. `year` is optional and currently unset — fill it in and the work
  rows and case-study headers will start showing it.
- **`experience.ts`** — hero headline, about paragraphs, capability pillars,
  stats, pressure cards, journey timeline, education, positions, the contact
  heading and the marquee words.
- **`skills.ts`** — skill groups, tools and languages.
- **`images.ts`** — the portrait image slots.

### Display headings

Headings are structured data rather than plain strings so each line can mask up
independently and one word can switch to the italic-serif accent:

```ts
headline: [
  [{ text: "I build brands &" }],
  [{ text: "events", serif: true, accent: true }, { text: " from the" }],
];
```

`serif: true` switches that run to italic Instrument Serif; `accent: true`
colours it scarlet. One accent word per heading is the intended rhythm.

## Swapping in real images

Every image is a dark placeholder block right now — **no photographs ship with
this repo**. See [`public/images/IMAGES.md`](public/images/IMAGES.md) for the full
filename and aspect-ratio table. In short: drop a file into `public/images/`, add
`src: "/images/<file>"` to the matching slot in `src/content/`, and the
`Placeholder` component swaps itself for `next/image` with the same ratio, `sizes`
and lazy loading.

## Changing the palette and fonts

Both live in [`src/styles/globals.css`](src/styles/globals.css). Tailwind v4 is
CSS-first, so the `@theme` block *is* the theme — there is no JS config file.

```css
@theme {
  --color-bg: #08070a;
  --color-fg: #edeae0;
  --color-accent: #e4381f; /* the only accent */
  --color-accent-2: #ff5a3c; /* lighter red for small text */
}
```

Editing `--color-accent` and `--color-accent-2` re-themes the entire site: links,
hovers, the marquee, the timeline nodes, the cursor and the OG image gradient all
derive from them. Two things to keep in mind:

- **Check contrast when you change the accent.** Run `pnpm check:contrast`, which
  audits every foreground/background pair in the palette against WCAG AA.
  `#E4381F` measures about 4.6:1 on this canvas — AA for normal text, but with
  little headroom. That is why `--color-accent` is used for large display type,
  borders and decoration, while small text uses `--color-accent-2` at roughly
  6.4:1.
- The hard-coded hexes in `src/app/opengraph-image.tsx`, `icon.tsx`,
  `apple-icon.tsx` and `public/favicon.svg` are not part of the CSS cascade
  (`ImageResponse` and standalone SVGs cannot read CSS variables), so update those
  four files to match.

Fonts are loaded in [`src/lib/fonts.ts`](src/lib/fonts.ts) and exposed as the
`--font-heading`, `--font-serif-accent`, `--font-body` and `--font-mono` tokens.
To change a family, swap the `next/font/google` import and keep the CSS variable
name.

If you add a new `--text-*` size token, also add its name to the `font-size`
class group in [`src/lib/utils.ts`](src/lib/utils.ts). `tailwind-merge` cannot
infer custom sizes, so it otherwise mistakes `text-yournewsize` for a text colour
and silently drops it whenever `cn()` merges it with something like `text-fg`.

> Two naming notes for future edits. The font tokens sit in a plain `@theme`
> block, **not** `@theme inline`, because `@theme inline` resolves values at parse
> time and would flatten the `next/font` variables before the browser sees them.
> And the display token is `--font-heading` rather than `--font-display`, because
> Tailwind v4 does not emit a `font-display` utility — the name collides inside
> the `font-*` namespace.

## Accessibility

- Single `h1` per page and a logical heading order throughout.
- Skip-to-content link, visible scarlet focus rings on every interactive element.
- The overlay menu is a focus-trapped `aria-modal` dialog that closes on `Escape`
  and returns focus to the button that opened it.
- Project rows reveal their thumbnail on keyboard focus as well as pointer hover.
- Counters expose the final number to screen readers regardless of animation
  state, and the marquee is `aria-hidden` decoration.
- Every animation respects `prefers-reduced-motion`, enforced in three places: a
  global `MotionConfig reducedMotion="user"`, a `prefers-reduced-motion` block in
  `globals.css` that neuters CSS animation and transition, and the
  `useReducedMotionSafe` hook for behavioural choices. Under reduced motion Lenis
  is not mounted at all, the intro loader is skipped and the custom cursor never
  appears.
- The custom cursor only mounts for fine pointers, so touch and keyboard users
  keep the native cursor.

## Performance

Sections are server components with small client leaves for interactivity. All
imagery goes through `next/image` with explicit `sizes`, and the count-up writes
digits straight to the DOM from a MotionValue rather than re-rendering React each
frame. Fonts are self-hosted by `next/font`, so there is no layout shift and no
external font CDN.

## Deploying

**Vercel** (recommended): push to GitHub, import the repository, and deploy — no
configuration needed. Set `NEXT_PUBLIC_SITE_URL` to the production domain so
canonical URLs, the sitemap and Open Graph tags resolve correctly; it falls back
to `https://diyajain.vercel.app`.

Any other Node host: `pnpm build && pnpm start`.

## Before launch

- [ ] Replace every placeholder in `public/images/` (see `IMAGES.md`).
- [ ] Put real profile URLs in `socials` in `src/content/site.ts` and set
      `isPlaceholder: false` — placeholder links are deliberately excluded from
      the Person JSON-LD `sameAs` array.
- [ ] Set `NEXT_PUBLIC_SITE_URL` on the host.
- [ ] Optionally add `year` values to the projects in `projects.ts`.

## License and asset notice

The code is Diya Jain's to use. All imagery is placeholder-only and must be
replaced with assets she owns or is licensed to use. No third-party logos,
photography, event posters or trademarked artwork appears anywhere in this
project — tools and brands are represented as text chips with generic icons, and
the "DJ" monogram, favicon and Open Graph card are original vector work.
