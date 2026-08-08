# Handoff: Eway Auto Repairs — Marketing Homepage

## Overview
Single-page marketing site for **Eway Auto Repairs**, a one-man mobile European auto repair
business serving South Jersey. The page's job is one thing: get a phone call. Every section
funnels toward the phone CTA, and on mobile a persistent orange tap-to-call bar is pinned to
the bottom of the viewport at all times.

Positioning: 30+ years experience, ASE Master Technician, mobile (comes to the customer's
driveway), dealer-level capability without dealer pricing.

**Naming rule:** the business name is exactly `Eway Auto Repairs` — one word "Eway", capital
E, no hyphen, never "E-Way". Tagline: `European Specialist`.

## About the Design Files
The files in this bundle are **design references created in HTML** — a prototype showing
intended look and behavior, not production code to copy directly. The task is to **recreate
this design in the target codebase's existing environment** (Next.js, Astro, React, WordPress,
etc.) using its established patterns, component library, and build tooling. If no environment
exists yet, pick the most appropriate framework for a small marketing site (a static-first
framework such as Astro or Next.js static export is a good fit — the page has no server
requirements beyond a contact form) and implement there.

`Eway Auto Repairs.dc.html` is authored in a streaming component format: the markup lives in
an `<x-dc>` template with inline styles, the behavior in a `class Component` block at the
bottom. Read both. Treat the inline styles as the spec, not as the recommended implementation
technique — in the target codebase use whatever the codebase uses (Tailwind, CSS Modules,
styled-components).

## Fidelity
**High fidelity.** Final colors, typography, spacing, copy, hover states, and scroll
animations are all specified below and present in the prototype. Recreate the UI closely.
The only deliberately unfinished pieces are listed under *Open items*.

---

## Design Tokens

### Color
| Token | Hex | Use |
|---|---|---|
| Base background | `#0A0A0A` | Page background, header, footer |
| Surface (subtle) | `#0C0C0C` / `#0D0D0D` | Alternating section backgrounds (services, about, trust bar) |
| Surface (tile) | `#0F0F0F` | Brand tiles, credential rows |
| Surface (card) | `#131313` | Service cards |
| Surface (card hover) | `#161616` | Service card hover |
| Border | `#1F1F1F` | Section dividers, tile grid gaps |
| Border (card) | `#222` → `#333` hover | Service card outline |
| Border (chip) | `#262626` | Town chips, step top rules |
| Border (button outline) | `#3A3A3A` | Secondary CTA |
| Accent — bright | `#FF6B00` | Wordmark, numerals, section eyebrows, card top border, hover states, text accents |
| Accent — hover/light | `#FF8A33` | Link hover, card top border hover |
| Accent — fill | `#EE6002` | Large filled surfaces: primary buttons, CTA band, mobile call bar |
| Accent — fill hover | `#FF8A33` | Primary button hover |
| Text — primary | `#F5F5F3` | Headings, body on dark |
| Text — strong secondary | `#E6E6E3` | Trust bar, credential labels |
| Text — secondary | `#C9C9C7` | Nav links, brand tiles |
| Text — body muted | `#B8B8B4` | Hero subhead, footer links, town chips |
| Text — muted | `#96968F` / `#8E8E8A` | Card body copy, section intros |
| Text — faint | `#7A7A7A` / `#6E6E6A` / `#5E5E5A` / `#4A4A48` | Tagline, disclaimer, copyright, card numerals |
| On-accent text | `#0A0A0A` | Text on any orange surface |

**Color rationale (keep this discipline):** orange is the single accent — no second accent
color anywhere. Bright `#FF6B00` on `#0A0A0A` is ~6.7:1 contrast (passes AAA). Large filled
orange areas use the slightly deeper `#EE6002` so they don't glare at scale while keeping
black text high-contrast. Never use orange for body text.

### Typography
- Family: **Archivo** (Google Fonts, weights 400/500/600/700/800), fallback `system-ui, sans-serif`.
- H1: `clamp(38px, 7vw, 74px)` / weight 800 / line-height 1.02 / letter-spacing -0.03em / `text-wrap: balance` / max-width 16ch
- H2 (section): `clamp(28px, 4.4vw, 44px)` / 700 / line-height 1.1 / letter-spacing -0.02em
- H2 (final CTA): `clamp(28px, 4.6vw, 48px)` / 800 / line-height 1.05 / letter-spacing -0.03em / max-width 18ch
- H3 (card title): 21px / 700 / letter-spacing -0.01em
- H3 (step title): 18px / 700
- Hero subhead: `clamp(16px, 2.1vw, 19px)` / 400 / line-height 1.6 / max-width 56ch
- Body / card copy: 15px / line-height 1.62
- Section intro copy: 16px / line-height 1.6–1.65
- Eyebrow label: 11px / 700 / letter-spacing 0.22em / uppercase / `#FF6B00`
- Wordmark: 17px / 800 / letter-spacing 0.06em (footer 16px)
- Tagline: 10–11px / 600 / letter-spacing 0.24em
- Nav link: 14px / 500
- Brand tile: 14px / 600 / letter-spacing 0.08em / uppercase
- Step numeral: 44px / 800 / letter-spacing -0.04em / `#FF6B00`
- Disclaimer: 12px / line-height 1.65 / max-width 92ch

### Spacing & geometry
- Content container: `max-width: 1200px`, `margin: 0 auto`, `padding: 0 20px`
- Section vertical rhythm: `clamp(64px, 9vw, 110px)` top/bottom; final CTA `clamp(56px, 8vw, 92px)`
- Hero padding: `120px 20px 76px`; hero min-height `min(86vh, 760px)`
- Border radius: **2px** on buttons only. Everything else is square — no rounded cards.
- Shadows: none, except header-on-scroll and the mobile call bar.
- Grid gaps: service cards 20px, steps 36px, town chips 10px, about columns 56px.
- Tile grids (brands, credentials) use a 1px gap over a `#1F1F1F` background to draw hairlines.

### Motion
- Scroll reveal: `opacity 0 → 1`, `translateY(20px) → 0`, `0.7s cubic-bezier(0.22,0.7,0.25,1)`,
  triggered by IntersectionObserver (`threshold: 0.12`, `rootMargin: 0px 0px -8% 0px`),
  staggered by sibling index at 70ms, capped at 420ms. Fires once per element.
- Header on scroll (`scrollY > 24`): background `rgba(10,10,10,0.72) → rgba(10,10,10,0.96)`,
  plus `box-shadow: 0 1px 0 rgba(255,107,0,0.35), 0 10px 30px rgba(0,0,0,0.55)`. 0.25s ease.
- Hover transitions: 0.18–0.22s ease. Service cards lift `translateY(-3px)`; buttons lift
  1–2px; brand tiles go `#C9C9C7 → #FF6B00` text with `#141414` background; town chips take an
  orange border and `#F5F5F3` text.
- **`prefers-reduced-motion: reduce` disables all of it** — reveals render at full opacity with
  no transform, and all transitions are turned off. This must be carried over.

---

## Screens / Views

One page, ten sections in order. Anchor ids in parentheses.

### 1. Sticky header
**Purpose:** persistent access to the phone number.
**Layout:** `position: sticky; top: 0; z-index: 50`, translucent `rgba(10,10,10,0.72)` with
`backdrop-filter: blur(10px)` and a `1px solid #1F1F1F` bottom border. Inner row is
flex, space-between, `padding: 14px 20px`, gap 24px.
- **Left:** wordmark `EWAY AUTO REPAIRS` in `#FF6B00`, with `EUROPEAN SPECIALIST` beneath it in
  `#7A7A7A` (hidden below 940px). Links to `#top`.
- **Center:** nav links — Services (`#services`), Pre-Purchase Inspection (`#ppi`), Brands
  (`#brands`), About (`#about`), Service Area (`#area`), Contact (`#contact`). Hidden below 940px.
- **Right:** solid `#EE6002` button, black text, `Call (XXX) XXX-XXXX`, `href="tel:..."`,
  2px radius. Hover: `#FF8A33` + `translateY(-1px)`.

**Note:** the prototype has no mobile hamburger menu — below 940px the nav simply hides and the
call button plus the bottom call bar carry the load. See *Open items*.

### 2. Hero (`#top`)
**Purpose:** state the offer and drive a call.
**Layout:** `position: relative`, `min-height: min(86vh, 760px)`, content bottom-aligned,
`overflow: hidden`, bottom border `#1F1F1F`.
- **Background:** full-bleed dark engine-bay / diagnostic-tool photograph, `object-fit: cover`.
  In the prototype this is a drag-and-drop placeholder component (`image-slot.js`) — in
  production, replace with a real `<img>` or `<picture>` (see *Assets*).
- **Scrim:** absolutely positioned overlay, `pointer-events: none`,
  `linear-gradient(180deg, rgba(10,10,10,0.72) 0%, rgba(10,10,10,0.82) 45%, rgba(10,10,10,0.97) 100%)`.
  The photo must read as texture, not subject — heavy darkening is intentional.
- **Eyebrow badge:** `MOBILE SERVICE · SOUTH JERSEY`, 11px/700/0.22em, `#FF6B00`, 1px border
  `rgba(255,107,0,0.4)`, padding `6px 10px`, 26px bottom margin.
- **H1:** `European Auto Repair That Comes to You` — "Comes to You" wrapped in a span colored
  `#FF6B00`.
- **Subhead:** `30+ years of factory-level European experience, serving South Jersey. ASE Master Technician. Dealer capability without dealer pricing.`
- **CTAs (flex, wrap, 12px gap, 34px top margin):**
  - Primary: `#EE6002` fill, black text, 16px/700, padding `16px 26px`, label `Call (XXX) XXX-XXXX`.
  - Secondary: transparent, `1px solid #3A3A3A`, `#F5F5F3` text, 16px/600, label
    `Request a Quote`, links to `#contact`. Hover: border and text go `#FF6B00`.

### 3. Trust bar
Background `#0D0D0D`, bottom border `#1F1F1F`. Grid `repeat(auto-fit, minmax(220px, 1fr))`,
each cell `padding: 26px 24px 26px 0`, 14px/600, `#E6E6E3`. Four items, verbatim:
`30+ Years Experience` · `ASE Master Certified` · `Mobile — We Come to You` · `Written Estimates, Always`
(em dash in the third item).

### 4. Brands (`#brands`)
- H2: `We only work on European cars.`
- Intro: `One set of platforms, one set of tools, one set of failure patterns. That focus is why the diagnosis is right the first time.` (max-width 52ch, `#8E8E8A`)
- Grid: `repeat(auto-fill, minmax(150px, 1fr))`, 1px gap on a `#1F1F1F` background with a
  `1px solid #1F1F1F` outer border, so tiles are separated by hairlines. Each tile `#0F0F0F`,
  `padding: 26px 16px`, centered, uppercase, letter-spacing 0.08em.
- Tiles, in order: BMW, Mercedes-Benz, Audi, Volkswagen, Porsche, Land Rover, Jaguar, Mini,
  Volvo, Saab, Alfa Romeo, Fiat.
- **Hard constraint: text only.** No manufacturer logos, roundels, stars, rings, or wordmark
  imagery anywhere on the site — legal and brand requirement. Manufacturer names appear only as
  plain styled text.

### 5. Services (`#services`)
Background `#0C0C0C`, top border `#1F1F1F`. Eyebrow `SERVICES`, H2 `What I do in your driveway.`
Grid `repeat(auto-fit, minmax(280px, 1fr))`, gap 20px. Each card: `#131313`, `1px solid #222`,
**`border-top: 2px solid #FF6B00`**, `padding: 30px 26px 34px`. Card contains a two-digit
numeral (12px/700/0.16em, `#4A4A48`), an H3, and body copy.

| # | Anchor id | Title | Body |
|---|---|---|---|
| 01 | `svc-diagnostics` | Diagnostics | Factory-level scan tools and a systematic process. Fault codes are a starting point, not an answer. |
| 02 | `ppi` | Pre-Purchase Inspections | Before you buy: compression, leaks, service history, module health, and a written report of what it will cost you. |
| 03 | `svc-maintenance` | Scheduled Maintenance | Oil and filters, fluids, plugs, belts, and inspections on the manufacturer's interval with correct-spec parts. |
| 04 | `svc-brakes` | Brakes & Suspension | Pads, rotors, sensors, control arms, bushings, and struts. Electronic parking brakes retracted and reset properly. |
| 05 | `svc-coding` | Coding & Programming | Module coding, adaptations, retrofits, and battery registration for cars that need it after a repair. |
| 06 | `svc-second` | Second Opinions | Bring me the shop's estimate. I'll tell you what the car actually needs and what can wait. |

The `ppi` anchor on card 02 is the target of the header's "Pre-Purchase Inspection" nav link.

### 6. How it works
Top border `#1F1F1F`. Eyebrow `HOW IT WORKS`, H2 `Four steps, no surprises.`
Grid `repeat(auto-fit, minmax(240px, 1fr))`, gap 36px. Each step: `border-top: 1px solid #262626`,
`padding-top: 22px`, then a large orange numeral, H3, body.

| n | Title | Body |
|---|---|---|
| 01 | Call with the details | Year, model, mileage, and what the car is doing. Most problems narrow down on the phone. |
| 02 | I come to you | Home or work, driveway or lot. Diagnostics and most repairs happen on site. |
| 03 | Written estimate first | Parts, labor, and time in writing before anything is taken apart. No work without your approval. |
| 04 | Itemized invoice | Every part and every hour listed. Old parts stay with the car if you want them. |

### 7. About / credentials (`#about`)
Background `#0C0C0C`, top border `#1F1F1F`. Two columns,
`repeat(auto-fit, minmax(300px, 1fr))`, gap 56px, `align-items: start`.
- **Left:** eyebrow `CREDENTIALS`, H2 `One technician. Every job.`, body (max-width 46ch):
  `The person who answers the phone is the person who diagnoses the car and does the work. Nothing is handed to an apprentice, and nothing gets billed that wasn't on the estimate.`
- **Right:** hairline-separated list (same 1px-gap-on-`#1F1F1F` technique). Each row `#0F0F0F`,
  `padding: 20px 22px`, flex, gap 14px, leading 6×6px `#FF6B00` square, label 15px/600 `#E6E6E3`:
  ASE Master Technician · ASE L1 Advanced Engine Performance · Factory-Trained ·
  NJ Certified Emission Repair Technician · 30+ Years Experience.

### 8. Service area (`#area`)
Top border `#1F1F1F`. Eyebrow `SERVICE AREA`, H2 `South Jersey, driveway to driveway.`
Intro: `Camden, Burlington, and Gloucester counties. If your town isn't listed, call and ask.`
Then wrapping flex row, gap 10px, of chips: `1px solid #262626`, `padding: 9px 15px`, 14px/500,
`#B8B8B4`. Towns (placeholder list — confirm with the client): Cherry Hill, Voorhees, Marlton,
Moorestown, Haddonfield, Medford, Mount Laurel, Collingswood, Sewell, Washington Township,
Mullica Hill, Woodbury, Deptford, Maple Shade, Haddon Heights, Berlin.

### 9. Final CTA band (`#contact`)
**Contrast flip:** background `#EE6002`, text `#0A0A0A`. Flex row, wrap, space-between, gap 32px.
- H2: `Have a European car with a problem?`
- Sub: `Call with the year, model, and symptoms. You'll get a written estimate before any work starts.` at `rgba(10,10,10,0.72)`, 17px/600.
- Button: black `#0A0A0A` fill, `#FF6B00` text, `clamp(18px, 2.4vw, 24px)`/800, `padding: 20px 32px`,
  `white-space: nowrap`, label `Call (XXX) XXX-XXXX`. Hover `#141414` + `translateY(-2px)`.

### 10. Footer
Background `#0A0A0A`, top border `#1F1F1F`. Grid `repeat(auto-fit, minmax(240px, 1fr))`, gap 40px,
`padding: 56px 20px 40px`.
- Column 1: orange wordmark + `EUROPEAN SPECIALIST` tagline.
- Column 2: Services, Pre-Purchase Inspection, Brands, Service Area.
- Column 3: phone link, `Instagram @ewayautorepairs`, `Facebook @ewayautorepairs`.
- Below, in `#5E5E5A` 12px: **manufacturer-independence disclaimer**, verbatim —
  `Eway Auto Repairs is an independent repair facility and is not affiliated with, sponsored by, or endorsed by any vehicle manufacturer. All manufacturer names are used for identification purposes only.`
- Copyright line: `© 2026 Eway Auto Repairs. Mobile service, South Jersey.`
- **No street address anywhere on the site** — it is a mobile business. Do not add one, and do
  not add a map embed with a pin.

### 11. Mobile sticky call bar
`position: fixed; left/right/bottom: 0; z-index: 60`, height 64px, `#EE6002` fill, black text,
17px/800, centered, label `Tap to Call (XXX) XXX-XXXX`, `box-shadow: 0 -8px 24px rgba(0,0,0,0.5)`.
Visible **at all times** at ≤940px, hidden above. The page body carries `padding-bottom: 72px`
so the bar never covers the footer.

---

## Interactions & Behavior
- **Every phone CTA** is an `<a href="tel:...">` with non-digits stripped from the display number.
- **Nav and footer links** are same-page anchors. Add `scroll-behavior: smooth` plus
  `scroll-margin-top` (~80px) on section targets so the sticky header doesn't cover headings.
- **Reveal-on-scroll**, **header scroll state**, and **hover states** as specified under *Motion*.
- **"Request a Quote"** currently scrolls to the final CTA band. There is no form in the
  prototype — see *Open items*.
- No carousels, no modals, no accordions, no autoplaying video. Deliberate.

## Responsive behavior
Mobile-first. Two breakpoints only, both at **940px**:
- `≤940px`: desktop nav hidden, header tagline hidden, mobile call bar shown.
- `>940px`: mobile call bar hidden.

Everything else is intrinsically responsive via `clamp()` on type and `auto-fit`/`auto-fill`
grids — no other media queries exist, and none should be needed.

## State Management
Effectively none. The page is static. The prototype exposes two configurable props:
- `phone` (string, default `(856) 555-0142`) — rendered in the header button, hero CTA, final
  CTA, footer link, and mobile bar; also drives the `tel:` href.
- `showCallBar` (boolean, default `true`) — toggles the mobile sticky bar.

In production, `phone` should be a single constant/CMS field used in all five places. Only
client-side state needed is the IntersectionObserver reveal and the scroll listener; both
should be cleaned up on unmount.

## Voice & copy rules
Plain, confident, technical. First person singular — it is one technician, and the copy says so
("What I do in your driveway", "I come to you"). Do not add marketing language. Specifically
banned: "passionate", "one-stop shop", "state-of-the-art", "we go the extra mile". Do not
rewrite the copy above; it is final unless the client changes it.

## Assets
- **Fonts:** Archivo from Google Fonts (`400;500;600;700;800`). Self-host in production for
  performance and privacy.
- **Hero image:** not supplied. Needs one dark, moody engine-bay or diagnostic-tool photograph,
  landscape, high resolution (≥2000px wide). It sits behind a heavy scrim, so contrast and
  subject clarity matter less than texture and darkness. `image-slot.js` in this bundle is only
  the prototype's drag-and-drop placeholder — **do not ship it**; replace with a responsive
  `<picture>` (AVIF/WebP + fallback), `loading="eager"`, `fetchpriority="high"`.
- **Icons:** none used. The design deliberately uses numerals and rules instead of icons.
- **Logo:** text-based wordmark only — no image file needed.

## Open items (need client input before build)
1. **Real phone number** — every CTA currently shows the placeholder `(856) 555-0142`.
2. **Hero photograph.**
3. **"Request a Quote"** — decide between a real form (name, phone, year/model, symptoms) and
   simply pointing it at the phone/SMS. If a form: it needs an endpoint, validation, success and
   error states, and spam protection, none of which are designed yet.
4. **Town list** — currently a plausible South Jersey guess; confirm coverage.
5. **Social URLs** — `instagram.com/ewayautorepairs` and `facebook.com/ewayautorepairs` are
   assumed; confirm the handles exist.
6. **SEO/local:** add `LocalBusiness`/`AutoRepair` JSON-LD (with `areaServed`, no `streetAddress`),
   page title, meta description, and Open Graph image. Not in the prototype.

## Files
- `Eway Auto Repairs.dc.html` — the full homepage design (markup + inline styles + behavior).
- `image-slot.js` — prototype-only image placeholder component. Reference, not production code.
