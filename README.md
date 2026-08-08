# Eway Auto Repairs — Website

Static marketing site for **Eway Auto Repairs**, a mobile European auto repair specialist
serving South Jersey. Built with [Astro](https://astro.build), deploy-ready for Cloudflare
Pages or Netlify.

> Naming rule: the business name is exactly `Eway Auto Repairs` — one word "Eway", no hyphen,
> never "E-Way". Keep it byte-identical everywhere (site, Google Business Profile, socials,
> invoices).

## Commands

```
npm install     # once
npm run dev     # local dev server at localhost:4321
npm run build   # production build to dist/
npm run preview # preview the production build
```

## Where things live

- `src/data/site.ts` — **single source of truth** for the phone number, socials, brands,
  services, steps, credentials, and town list. Edit business facts here, nowhere else.
- `src/pages/index.astro` — the homepage.
- `src/styles/global.css` — design tokens and all styling (see `design/handoff/README.md`
  for the design spec this implements).
- `BUILD-BRIEF.md` — the full build brief: positioning, copy, legal constraints, SEO plan.
- `design/handoff/` — the original design handoff bundle (prototype + spec).

## Placeholders that must be replaced before launch

1. **Phone number** — `PHONE` in `src/data/site.ts` is a placeholder (`(856) 555-0142`).
2. **Hero photo** — `public/images/hero-placeholder.svg` is a generated texture. Replace with
   a real dark engine-bay/diagnostic photo (landscape, ≥2000px wide, AVIF/WebP `<picture>`).
3. **Town list** — `TOWNS` in `src/data/site.ts` is a plausible guess; confirm coverage.
4. **Social handles** — `@ewayautorepairs` on Instagram/Facebook is assumed; confirm they exist.
5. **OG image** — add `public/images/og.jpg` and wire it in `src/layouts/Base.astro`.
6. **Web3Forms key** — `WEB3FORMS_KEY` in `src/data/site.ts`. Create a free key at
   web3forms.com pointed at the business email; the contact form won't send until set.
7. **PPI price** — `[$XXX]` on `/pre-purchase-inspection` (brief suggests $250–$300, not
   under $200) plus two `[ANSWER]` FAQ items (travel distance, scheduling turnaround).
8. **About page** — `[HIS STORY]` and `[BRANDS]` factory-training list on `/about`, plus a
   real photo of him.
9. **Brand failure-mode lists** — `src/data/brands.ts` is drafted from the brief's §5.3
   examples and well-documented platform issues. **Sit with him and confirm/extend every
   list** — his real observations are the moat; replace anything he wouldn't say.

## Hard constraints (from BUILD-BRIEF.md §3)

- **No street address anywhere** — site, schema, or map embeds. Service-area business.
- **No manufacturer logos or trade dress** — brand names as plain text only.
- The manufacturer-independence disclaimer stays in the footer of every page.
- Certification claims must be verified current before publishing.

## Motion system

Implemented from the `Eway Auto Repairs - Animated` design (Claude Design project
`d158ff83`). The prototype's `image-slot.js` and `support.js` are Design-runtime
scaffolding and are deliberately not shipped; every image slot is a real `<img>`.

Animation is driven by data attributes, wired up once in `src/layouts/Page.astro`:

| Attribute | Effect |
|---|---|
| `data-reveal` | Fade and rise into view, staggered 80ms by sibling index (capped 480ms) |
| `data-tile` | Same, faster 45ms stagger, for grids of brand tiles and town chips |
| `data-rule` | Orange accent rule wipes out from the left |
| `data-word` | Headline word rises out of a clipped mask, staggered 65ms |
| `data-kb` | Slow Ken Burns scale on an image, 24s alternating |
| `data-pip` | Credential marker breathes, offset per row |
| `data-parallax` | Layer translates against scroll (`data-parallax-rate`, default 0.12) |
| `data-scanline` | One orange sweep down the hero on load |
| `data-progress` | Read-progress bar in the header tracks scroll position |

Notes:
- Header state and the progress bar follow scroll position rather than animating on
  their own, so they stay active under `prefers-reduced-motion`. Parallax, Ken Burns,
  reveals, and the scan line all switch off.
- Revealed elements start at `opacity: 0`, so a `<noscript>` block in `Base.astro`
  forces everything visible when scripts do not run.
