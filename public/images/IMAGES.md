# Image manifest

Every image on the site currently renders as a **dark placeholder block** — no
photographs ship with this repository. Drop real files into this folder using the
filenames below, then point the matching content slot at them.

## How to swap a placeholder for a real image

1. Save your file in `public/images/` using the exact filename from the tables
   below (any format works — `.jpg`, `.png`, `.webp`; just keep the name in sync).
2. Open the content file that owns the slot and add a `src` property:

   ```ts
   cover: {
     file: "project-hoppity-cover.jpg",
     ratio: "4/3",
     label: "Hoppity social content cover",
     src: "/images/project-hoppity-cover.jpg", // <- add this line
   },
   ```

3. That is the whole change. The `Placeholder` component switches from the grain
   block to `next/image` automatically, keeping the same aspect ratio, `sizes`
   and lazy-loading behaviour.

The `label` doubles as the image `alt` text, so update it to describe the real
photograph. Cropping to the listed ratio avoids layout shift.

## Portraits — `src/content/images.ts`

| File                   | Ratio | Where it appears                     |
| ---------------------- | ----- | ------------------------------------ |
| `hero-portrait.jpg`    | 3:4   | Hero, tucked bottom-right (desktop)  |
| `contact-portrait.jpg` | 3:4   | Reserved for the contact section     |

## Project covers — `src/content/projects.ts`

Covers appear twice: inline in the work list on mobile, and as the
cursor-following thumbnail on desktop. All are 4:3.

| File                                              | Project                     |
| ------------------------------------------------- | --------------------------- |
| `project-hoppity-cover.jpg`                       | Hoppity                     |
| `project-hoppity-creators-summit-cover.jpg`       | Hoppity Creators Summit     |
| `project-viaah-wedding-planner-cover.jpg`         | Viaah Wedding Planner       |
| `project-real-estate-launch-cover.jpg`            | Corporate Real-Estate Launch|
| `project-zaeden-concert-cover.jpg`                | Zaeden Concert              |
| `project-abhisaran-fest-cover.jpg`                | Abhisaran Fest              |
| `project-freelance-digital-management-cover.jpg`  | Freelance Digital Management|
| `project-becoolz-ice-creams-cover.jpg`            | Becool'Z Ice Creams         |

## Project galleries — `src/content/projects.ts`

| File                                                   | Ratio | Suggested subject                  |
| ------------------------------------------------------ | ----- | ---------------------------------- |
| `project-hoppity-gallery-1.jpg`                        | 9:16  | Reel cover                         |
| `project-hoppity-gallery-2.jpg`                        | 4:5   | Instagram carousel post            |
| `project-hoppity-gallery-3.jpg`                        | 16:9  | Analytics snapshot                 |
| `project-hoppity-creators-summit-gallery-1.jpg`        | 16:9  | Eco-homestay venue                 |
| `project-hoppity-creators-summit-gallery-2.jpg`        | 4:5   | Creators at the summit             |
| `project-hoppity-creators-summit-gallery-3.jpg`        | 4:3   | Behind the scenes                  |
| `project-viaah-wedding-planner-gallery-1.jpg`          | 16:9  | Event setup at the resort          |
| `project-viaah-wedding-planner-gallery-2.jpg`          | 4:5   | Production detail                  |
| `project-real-estate-launch-gallery-1.jpg`             | 16:9  | Launch event floor                 |
| `project-real-estate-launch-gallery-2.jpg`             | 4:3   | Sales and promotions stand         |
| `project-zaeden-concert-gallery-1.jpg`                 | 16:9  | Concert stage                      |
| `project-zaeden-concert-gallery-2.jpg`                 | 4:5   | Promotional creative               |
| `project-abhisaran-fest-gallery-1.jpg`                 | 4:5   | Festival promotional post          |
| `project-abhisaran-fest-gallery-2.jpg`                 | 16:9  | Behind the scenes with the team    |
| `project-freelance-digital-management-gallery-1.jpg`    | 9:16  | Reel cover for the creator client  |
| `project-freelance-digital-management-gallery-2.jpg`    | 4:5   | Visual identity before and after   |
| `project-becoolz-ice-creams-gallery-1.jpg`             | 4:5   | Seasonal launch creative           |
| `project-becoolz-ice-creams-gallery-2.jpg`             | 16:9  | In-store activation                |

## Generated assets — do not replace by hand

These are produced at build time from code and need no files here:

- `favicon.svg` in `public/` plus `src/app/icon.tsx` and `src/app/apple-icon.tsx`
  (the original "DJ" monogram).
- `src/app/opengraph-image.tsx` — the social share card, drawn in the site's own
  dark and scarlet palette.

## Licensing

No third-party photography, brand logos, event posters or trademarked artwork is
included anywhere in this repository. Every placeholder must be replaced with
imagery Diya owns or is licensed to use. Tools are represented as text chips with
generic icons, never as official logos.
