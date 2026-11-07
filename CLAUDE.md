# Bajica Smederevo: website

Next.js 14 (App Router), TypeScript. Site for a family construction firm from Smederevo: heritage
restoration (facades, fortress, churches), terrazzo, marble and epoxy floors, industrial repairs.
Copy is in Serbian (Latin script).

## Design system (keep it)

- **Plain Next.js + Tailwind 3** (user's call, 2026-11-07). No copied kit, no `public/*.js`, no
  `<link>`/`<script>` tags: behaviour is React state, styling is Tailwind classes. The old
  design-taste-frontend kit (`public/kit`) was removed; its one-section-per-screen rule is dropped
  (the user found it left too much empty space): sections are content height (`.section`, 64/80/96px).
- **Client rules:** no rounded corners (`borderRadius` only `none`), no shadows, no backdrop blur,
  no Tailwind palette colours, no AI-looking defaults. Navbar: sharp, solid warm white; it slides away on
  scroll down and comes back on scroll up, a green reading-progress line under it; under 1024 a charcoal
  sheet unrolls (clip-path) with numbered items coming in one by one.
- **Colours:** every colour is a token in `tailwind.config.ts` (the theme replaces Tailwind's palette).
  Never write a hex value in a component. From the logo (`app/Bajica_logo_07.pdf`): green `#8FBA2E`,
  charcoal `#292B2C`, grey `#444648`.
  - `green-500` primary buttons (charcoal label), marks, nav lines; `green-550` button hover;
    `green-700` links on light; `green-900` the one deep-green band (#o-nama).
  - Ground `stone-50` warm white; surface `stone-100`; footer `charcoal`.
  - Split: about 65–70% warm white, 20–25% charcoal, 10% green. No green gradients, neon or green shadows.
- **CSS:** `app/globals.css` holds the layout variables (`--nav`, `--gut`, `--gutter`, type sizes) and a
  few `@layer components` classes (`.wrap`, `.grid-12`, `.section`, `.section-head`, `.label`, `.btn`,
  `.btn-primary`, `.btn-text`, `.link`). Everything else is utilities in the components.
- **Type:** Schibsted Grotesk (next/font, `--font-schibsted`), headlines weight 400, tight tracking.
- **Logo:** `public/assets/logo.svg` (stacked), `logo-horizontal.svg` / `logo-horizontal-light.svg`
  (nav and footer), `app/icon.svg` (the mark). All converted from the PDF; transparent, no white background.
- **Layout:** one `.wrap` (1280px, 80/48/24px gutters). Hero: the photograph edge to edge under the bar,
  white headline lower left over a charcoal fade (Skanska-like). Splits: text on 5 columns, photo on
  columns 7-12. On phones photos keep fixed ratios (4:3), never stretched.
- **Photos:** all WebP in `public/gallery` (converted from the JPGs in git history; long edge ≤ 3200px).
  Paths have spaces and Serbian letters: `Photo`/`encodeSrc` percent-encode them, or next/image 400s.
  Big frames use `quality={85}` and the 3000px+ originals; `sharp` is a dependency for next/image.
- **Copy:** plain, category first, buttons are verb + object. Main action everywhere: "Zatražite ponudu" → `#upit`.
  Real contacts from the client: 069/164-2093, 063/24-34-62, info@bajica.rs, Smederevo.

## Structure

- `constants/index.ts`: home copy, photo assignments, contacts (`phones`: 069/164-2093 main, 063/24-34-62;
  info@bajica.rs), `siteUrl` (https://www.bajica.rs, assumed from the old site).
- `constants/services.ts`: the four service pages: copy, meta title/description, scope, FAQ, photographs,
  and the gallery folders whose photographs each page shows.
- `app/page.tsx`: Navbar, Hero, Heritage, Floors, Industry, CtaBand, Projects, Steps, About (green band), Kontakt, Footer.
- `app/usluge/page.tsx` (hub) and `app/usluge/[slug]/page.tsx` (static, one per service): hero, O usluzi,
  Šta obuhvata, Naši radovi (WorkGallery), CtaBand, Česta pitanja, Ostale usluge, Kontakt. JSON-LD:
  Service, BreadcrumbList, FAQPage. Every page sets its own title, description and canonical.
- `app/layout.tsx`: title template, Open Graph, GeneralContractor JSON-LD, the floating CallButton.
  `app/sitemap.ts`, `app/robots.ts`.
- `app/galerija/page.tsx` + `components/Galerija.tsx`: archive read from `public/gallery/<kind>/<project>/`
  (`lib/gallery.ts`); the viewer is `components/Viewer.tsx`, shared with WorkGallery.
- `app/not-found.tsx`: the 404 ("Ovde još nismo gradili").
- No contact form (the user removed it): Kontakt is two phone rows and the e-mail.
- Motion: Framer Motion. `components/Reveal.tsx`: `RevealText` (a heading's words rise from a mask, on load in the
  heroes, on first view elsewhere) and `Reveal` (a block fades up). `AnimatePresence` mounts the phone menu sheet,
  the call button's card and the photo viewer. `MotionRoot` (MotionConfig reducedMotion="user") wraps the site.
- SEO: descriptions ≤ ~135 characters (Seobility's 1000px), `<html lang="sr">`, `app/apple-icon.png`, share links
  in the footer (`components/Share.tsx`), card links are the heading only (`.card-link` covers the card),
  `social` in constants holds Bajica's Instagram (no Facebook page yet).
- Icons: Phosphor only (`@phosphor-icons/react/dist/ssr`), never hand-drawn SVG. `components/Arrow.tsx` wraps ArrowRight.

## Status (2026-11-07)

Done: kit removed, Tailwind, WebP photos, Skanska-like hero with the client's slogan, content-height sections,
navbar (hide on scroll, progress line, phone sheet), 404, four SEO service pages + hub, sitemap/robots,
JSON-LD, floating call button, Phosphor icons, contact form removed. `npm run build` passes.
Checked by eye at 1440 and 390 (`shots/`); the phone sheet, scroll hide/show and call button driven in headless
Edge. Chrome is not installed: `consistency.mjs` cannot start Edge; `check.mjs`/`shoot.mjs` work with
`CHROME_PATH` set to Edge.

Open: confirm the domain (www.bajica.rs vs bajica.rs), the three steps' wording, the clients list, the hero
facts "1980-ih / 100+ / Cela Srbija" (old site), and the FAQ answers. Nothing is committed yet.
