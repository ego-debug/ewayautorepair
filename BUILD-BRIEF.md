# E-Way Auto Repairs — Build Brief & Content Pack
### Hand this to Claude Code. Everything needed to build the site is in here.
*South Jersey · European specialist · mobile service-area business*

---

## 0. How to use this document

Sections 1–7 are the **build spec** — paste them into Claude Code and it can build the site without asking you a hundred questions. Section 8 is the **Google Business Profile fill-in sheet** — that's copy/paste into Google, not code. Section 9 is what you still need to collect from your uncle.

**Fill in every `[BRACKETED]` placeholder before building.** They're listed in Section 9.

---

## 1. Brand facts (single source of truth)

| Field | Value |
|---|---|
| **Business name** | E-Way Auto Repairs |
| **Tagline** | European Specialist |
| **Full lockup** | E-Way Auto Repairs — European Specialist |
| **Domain** | ewayautorepairs.com |
| **Instagram** | @ewayautorepairs |
| **Facebook** | /ewayautorepairs |
| **Phone** | `[PHONE]` |
| **Email** | `[EMAIL]` — use `service@ewayautorepairs.com`, not a personal Gmail |
| **Business type** | Service-area business (mobile). **No public address.** |
| **Service area** | `[TOWN LIST]` — South Jersey |
| **Experience** | 30+ years |
| **Credentials** | ASE Master Technician · ASE L1 Advanced Engine Performance · Factory-trained (`[BRANDS]`) · NJ Certified Emission Repair Technician |
| **Brands served** | BMW · Mercedes-Benz · Audi · Volkswagen · Porsche · Land Rover · Jaguar · Mini · Volvo · Saab · Alfa Romeo · Fiat |

**NAP consistency rule — this matters more than it sounds.** The business name, phone number, and formatting must be **byte-identical** everywhere: website, Google Business Profile, Facebook, Yelp, Apple Maps, invoices. Not "E-Way Auto Repair" in one place and "E-Way Auto Repairs LLC" in another. Google matches these strings to confirm the business is real. Pick the exact string now and never deviate.

> **Canonical name string:** `E-Way Auto Repairs`
> **Canonical phone format:** `(XXX) XXX-XXXX`

---

## 2. Positioning & voice

**The one-sentence positioning:**
> 30+ years of factory-level European experience, brought to your driveway — dealer capability without dealer pricing.

**The three claims the whole site rests on:**

1. **Specialist, not generalist.** He doesn't "also work on European." It's all he does.
2. **Dealer-level diagnostics.** ASE Master + L1 + factory training. He isn't guessing and throwing parts.
3. **He comes to you.** Mobile is the convenience hook, and it's genuinely rare at this skill level.

**Voice:** Plain, confident, technical where it earns trust. Write like a 30-year master tech talks — direct, specific, zero marketing fluff. **Name actual failure modes and part numbers where relevant.** A sentence like *"most X5 misfires I see are a leaking valve cover gasket dumping oil into the plug wells, not the coils you were quoted"* does more selling than any adjective.

**Banned words:** *passionate, dedicated, one-stop shop, we go the extra mile, your satisfaction is our priority, state-of-the-art, cutting-edge, quality workmanship.* If a sentence could appear on any shop's website, delete it.

---

## 3. ⚠️ Legal constraints the build must respect

These are not optional and they're easy to get wrong.

**3.1 — Brand names: nominative fair use only.**
He may state that he *services* BMW, Mercedes-Benz, Porsche, etc. He may **not**:
- Use any manufacturer logo, wordmark, roundel, star, or four rings — anywhere, including favicons and social avatars
- Use manufacturer brand fonts or trade dress
- Imply authorization, affiliation, or dealer status
- Use brand names in the domain or business name

**Required disclaimer, in the footer of every page:**
> E-Way Auto Repairs is an independent repair facility. We are not affiliated with, authorized by, or endorsed by BMW, Mercedes-Benz, Audi, Volkswagen, Porsche, Land Rover, Jaguar, Mini, Volvo, Saab, Alfa Romeo, Fiat, or any vehicle manufacturer. All manufacturer names and model designations are trademarks of their respective owners and are used for identification purposes only.

**3.2 — NJ automotive repair rules (N.J.A.C. 13:45A-26C).** The site should not advertise a price the shop won't honor, and should reflect the actual process. Add a short "How it works" block stating: written estimate before work, written authorization with odometer, itemized invoice separating parts and labor. **This is a selling point, not fine print** — it's exactly what makes an independent feel safer than a stranger with a wrench.

**3.3 — Certification claims must be current.** ASE certifications expire every 5 years. Verify his are active before publishing. Do not use the ASE Blue Seal logo unless the business is actually enrolled in the Blue Seal program — that's a separate paid designation with employee requirements.

**3.4 — Don't publish a street address.** He's mobile. Publishing his home address on the site or in schema causes Google verification problems and is a genuine safety/privacy issue.

---

## 4. Site architecture

**Phase 1 — build now (9 pages):**

```
/                          Home
/services                  Services overview
/pre-purchase-inspection   PPI landing page  ← highest-intent page on the site
/brands                    Brands hub
  /brands/bmw
  /brands/mercedes-benz
  /brands/audi-volkswagen
  /brands/porsche
  /brands/land-rover-jaguar
/about                     About / credentials
/service-area              Towns covered
/contact                   Contact + form
```

**Phase 2 — after launch, once there's traffic:**
- `/brands/volvo`, `/brands/mini`, `/brands/alfa-romeo-fiat`
- Town pages: `/european-auto-repair/cherry-hill-nj`, `/marlton-nj`, etc. — one per top 6 towns
- `/reviews`

**Why separate brand pages:** this is the single biggest SEO lever available. People search *"BMW mechanic near me,"* not *"European mechanic."* One page per brand, each genuinely different (real failure modes for that marque, not swapped nouns), targets ten searches instead of one. **Do not generate these by find-and-replace** — Google detects doorway pages and thin duplicate content, and it will hurt.

---

## 5. Page-by-page copy

Copy below is production-ready. Adjust facts flagged `[LIKE THIS]`.

### 5.1 — Home (`/`)

**Title tag:** `European Auto Repair in South Jersey | E-Way Auto Repairs`
**Meta description:** `Mobile European car specialist serving South Jersey. 30+ years, ASE Master certified. BMW, Mercedes, Audi, Porsche, Land Rover and more. We come to you. Call (XXX) XXX-XXXX.`

**H1:** European Auto Repair That Comes to You

**Subhead:** 30+ years of factory-level European experience, serving South Jersey. ASE Master Technician. Dealer capability without dealer pricing.

**Primary CTA (sticky on mobile):** `📞 Call (XXX) XXX-XXXX` → `tel:` link
**Secondary CTA:** `Request a Quote`

**Trust bar (immediately under hero, 4 items):**
`30+ Years Experience` · `ASE Master Certified` · `Mobile — We Come to You` · `Written Estimates, Always`

**Section — Brands (logo-free; styled text tiles only):**
> **We only work on European cars.**
> That's not a preference — it's the whole business. Thirty years on the same platforms means we've seen your car's problem before, probably many times.
>
> BMW · Mercedes-Benz · Audi · Volkswagen · Porsche · Land Rover · Jaguar · Mini · Volvo · Saab · Alfa Romeo · Fiat

**Section — Why an independent specialist:**
> **You're paying the dealer for their building.**
>
> Dealer labor in New Jersey averages around $170/hour against roughly $130 for an independent. That gap isn't buying you a better technician — it's buying the showroom, the service advisor, and the coffee machine.
>
> What actually matters is whether the person diagnosing your car has the right software, the right training, and has seen the failure before. We have factory-level diagnostic capability and three decades on these platforms. You also talk directly to the person working on your car, not a service writer relaying messages.

**Section — What we do (6 cards, each linking to its service):**

| Card | Copy |
|---|---|
| **Diagnostics** | Check engine lights, intermittent faults, electrical gremlins, and the problems another shop gave up on. Factory-level scan capability, not a generic code reader. |
| **Pre-Purchase Inspections** | Buying a used European car? We inspect it before you commit — at the seller's location. The cheapest money you'll ever spend. |
| **Scheduled Maintenance** | Oil, filters, brake fluid, coolant, spark plugs, transmission service — done to manufacturer spec with the correct fluids and approvals. |
| **Brakes & Suspension** | Pads, rotors, sensors, control arms, bushings. Correct parts, correct torque, correct procedure. |
| **Coding & Programming** | Module coding, retrofits, adaptations, and service resets that most independents can't touch. |
| **Second Opinions** | Got a dealer quote that doesn't feel right? We'll look at it. Most of the time the repair is smaller than what was quoted. |

**Section — How it works (4 steps):**
1. **Call or send us the details.** Year, make, model, and what it's doing.
2. **We come to you.** Home or work, anywhere in our service area.
3. **You get a written estimate before any work starts.** Itemized parts and labor. Nothing happens without your approval.
4. **We fix it, and you get an itemized invoice.** Including whether parts are new, rebuilt, or used.

**Section — Credentials:**
> **ASE Master Technician** — Certified across all eight core automotive areas.
> **ASE L1 Advanced Engine Performance** — The advanced diagnostic certification. Fewer than one in ten technicians hold it.
> **Factory-Trained** — `[BRANDS]`
> **NJ Certified Emission Repair Technician** — Licensed to repair vehicles that failed New Jersey emissions inspection.
> **30+ Years** — On European platforms, exclusively.

**Section — Service area** → town list + link to `/service-area`

**Final CTA:**
> **Have a European car with a problem?**
> Call `(XXX) XXX-XXXX` or send the details and we'll tell you what we think it is.

---

### 5.2 — Pre-Purchase Inspection (`/pre-purchase-inspection`)

> **Build this page carefully. It is the highest-converting page on the site.** Search intent is enormous, competition is thin, and every PPI customer becomes a service customer for years.

**Title tag:** `Pre-Purchase Inspection for European Cars | South Jersey Mobile PPI`
**Meta description:** `Mobile pre-purchase inspection for BMW, Mercedes, Audi, Porsche, Land Rover and more. 30+ years, ASE Master certified. We inspect at the seller's location. South Jersey.`

**H1:** Pre-Purchase Inspection — Before You Buy That European Car

**Opening:**
> A used European car can be the best value on the road or the most expensive mistake you'll ever make, and the difference is usually invisible on a test drive.
>
> We inspect the car **at the seller's location**, before you hand over money. You get a full report with photos, a scan of every module, and an honest answer to the only question that matters: *should you buy this car, and what will it cost you in the next year?*

**What's included:**
- Full scan of every control module — current and stored faults, plus **freeze-frame data most sellers don't know is there**
- Service history and maintenance interval review
- Engine, transmission, and drivetrain inspection
- Cooling system, leaks, and fluid condition
- Suspension, steering, brakes, and tire assessment
- Undercarriage, rust, and prior accident/repair evidence
- Known failure points specific to that model and year
- Electrical systems and options function check
- Photo documentation throughout
- **A written report and a direct conversation about what we found**

**Pricing block:** `[$XXX]` flat. Add: *Most inspections take 60–90 minutes.*

**Closing:**
> **We're not connected to the seller and we don't care whether you buy the car.** We work for you. If it's a good car, we'll say so. If it needs $6,000 in deferred maintenance, you'll know before you sign — and that's leverage on the price or a reason to walk.

**FAQ (mark up with FAQPage schema):**
- *Can you inspect a car at a dealership?* — Most dealers allow it. We'll coordinate.
- *How far will you travel?* — `[ANSWER]`
- *How soon can you get out there?* — `[ANSWER]`
- *What if the seller won't allow an inspection?* — That's your answer about the car.
- *Do you inspect private-party sales?* — Yes, and that's where a PPI matters most.

---

### 5.3 — Brand page template

Build **five genuinely distinct pages.** Each needs real, model-specific content — this is where a 30-year tech's knowledge becomes an unfair SEO advantage nobody can copy.

**Title tag:** `[BRAND] Repair & Service in South Jersey | E-Way Auto Repairs`
**H1:** `[BRAND] Repair and Service — South Jersey`

**Required sections per page:**
1. Opening — his specific history with the marque
2. **Common problems we see on `[BRAND]`** — 5–8 *real* failure modes with model/engine codes. *Ask him for these; do not invent them.* Examples of the right specificity level:
   - BMW: N54/N55 charge pipe failure, valve cover gasket oil into plug wells, VANOS solenoids, N20 timing chain guides, water pump on N52/N54
   - Mercedes: M272/M273 balance shaft, air suspension compressors on Airmatic, transmission conductor plate, rear main seals
   - Audi/VW: 2.0T timing chain tensioner, carbon buildup on direct injection, PCV/oil separator, water pump housing, Haldex service
   - Porsche: IMS bearing on M96/M97, bore scoring, coolant pipes on 996/997 Turbo, PDK service intervals, air-oil separator
   - Land Rover/Jaguar: air suspension, timing chain on 5.0 V8 and 3.0 SC, coolant crossover pipes, EGR and DPF on diesels
3. Services offered for that brand
4. Maintenance schedule notes — where the manufacturer's "lifetime" fluid claims are wrong
5. Why an independent specialist beats the dealer for that marque
6. CTA

**Internal linking:** every brand page links to `/pre-purchase-inspection`, `/services`, `/contact`, and the `/brands` hub. Hub links to all children.

---

### 5.4 — About (`/about`)

**H1:** 30+ Years on European Cars

Get his real story from him — where he trained, what he's worked on, that he owned his own shop, why European specifically. **Include a real photo of him.** A face converts several times better than a stock engine bay, and for a mobile mechanic coming to your house, the customer wants to see who's showing up.

Include a short, honest note on where he's headed:
> Right now E-Way runs mobile — we come to you, which for most diagnostics, inspections, and maintenance is genuinely better than dropping your car off for three days. We're working toward a dedicated European-only facility in South Jersey. The customers we take care of now are the ones we'll be taking care of there.

---

### 5.5 — Contact (`/contact`)

**Form fields:**
`Name*` · `Phone*` · `Email` · `Year / Make / Model*` · `Mileage` · `Town*` · `What's it doing?*` (textarea) · `Photo or dash light upload` (optional) · `How'd you hear about us?` (**keep this — it's the attribution data that tells you what marketing is working**)

**Form notes for the build:**
- Serverless form handling — Web3Forms, Formspree, or Netlify Forms. **No backend, no database.**
- Honeypot field + rate limiting for spam. Skip CAPTCHA; it kills conversions.
- Success state stays on-page.
- **Also forward submissions to SMS if possible** — he's under a car all day and will not check email.

Above the form: `The fastest way to reach us is a phone call: (XXX) XXX-XXXX`

---

## 6. Technical build spec

**Stack:** Static site. **Astro** preferred; plain HTML/CSS is fully acceptable. **No React SPA** — this is a brochure site and needs to be fast and crawlable.

**Hosting:** Cloudflare Pages or Netlify. Free tier is plenty. Domain via Cloudflare or Namecheap.

**Non-negotiables:**
- **Mobile-first.** 70%+ of "mechanic near me" traffic is a phone, often a stressed driver on a shoulder. Sticky tap-to-call button on mobile at all times.
- **Fast.** Lighthouse 95+. No web fonts over 100KB, no jQuery, no carousels, WebP images with width/height set to prevent layout shift.
- **Accessible.** Semantic HTML, real heading hierarchy, alt text everywhere, 4.5:1 contrast minimum, keyboard-navigable form.
- **HTTPS + `www` → apex redirect + trailing-slash consistency.**
- `sitemap.xml` and `robots.txt`.
- Every phone number is a `tel:` link.
- **No cookie banners, no chat widgets, no popups.** They tank conversion and add nothing here.

**Design direction:** Dark, technical, precise — German-workshop feel. Charcoal/near-black base, one accent (deep red or amber), lots of white space, tight sans-serif (Inter, Söhne, or system stack). **Photography does the work** — real engine bays, real diagnostic screens, his actual hands. Zero stock photos of smiling people in polo shirts. No manufacturer logos anywhere (see §3.1).

**Analytics:** Google Analytics 4 + Google Search Console from day one. **Set up call tracking as a GA4 conversion event on `tel:` clicks** — otherwise you're blind to what's actually driving business.

---

## 7. Structured data (JSON-LD)

Put this in the `<head>` of the homepage. **Note the deliberate absence of `address`** — correct for a service-area business, and including a home address here would be a mistake.

```json
{
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  "@id": "https://ewayautorepairs.com/#business",
  "name": "E-Way Auto Repairs",
  "description": "European auto repair specialist serving South Jersey. Mobile service for BMW, Mercedes-Benz, Audi, Volkswagen, Porsche, Land Rover, Jaguar, Mini, Volvo, Saab, Alfa Romeo and Fiat. ASE Master Technician with 30+ years of experience.",
  "url": "https://ewayautorepairs.com",
  "telephone": "[PHONE]",
  "email": "[EMAIL]",
  "priceRange": "$$",
  "image": "https://ewayautorepairs.com/images/og.jpg",
  "logo": "https://ewayautorepairs.com/images/logo.png",
  "areaServed": [
    { "@type": "City", "name": "Cherry Hill", "address": { "@type": "PostalAddress", "addressRegion": "NJ" } },
    { "@type": "City", "name": "Mount Laurel", "address": { "@type": "PostalAddress", "addressRegion": "NJ" } },
    { "@type": "City", "name": "Marlton", "address": { "@type": "PostalAddress", "addressRegion": "NJ" } },
    { "@type": "City", "name": "Moorestown", "address": { "@type": "PostalAddress", "addressRegion": "NJ" } },
    { "@type": "City", "name": "Voorhees", "address": { "@type": "PostalAddress", "addressRegion": "NJ" } },
    { "@type": "City", "name": "Medford", "address": { "@type": "PostalAddress", "addressRegion": "NJ" } }
  ],
  "knowsAbout": [
    "BMW repair", "Mercedes-Benz repair", "Audi repair", "Volkswagen repair",
    "Porsche repair", "Land Rover repair", "Jaguar repair", "Mini repair",
    "Volvo repair", "Saab repair", "Alfa Romeo repair", "Fiat repair",
    "Pre-purchase inspection", "European auto diagnostics", "Module coding"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "European Auto Repair Services",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "European Auto Diagnostics" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Pre-Purchase Inspection" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Scheduled Maintenance" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Brake and Suspension Repair" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Module Coding and Programming" } }
    ]
  },
  "sameAs": [
    "https://www.instagram.com/ewayautorepairs",
    "https://www.facebook.com/ewayautorepairs"
  ]
}
```

Add `FAQPage` schema on the PPI page and `Service` schema on each brand page. Once reviews exist, **do not** hand-write `AggregateRating` — Google penalizes self-serving review markup. Let the Google profile carry the stars.

---

## 8. Google Business Profile — copy/paste sheet

Not code. Do this at `google.com/business` **in his own Google account.**

**Name:** `E-Way Auto Repairs`
*(Exactly this. No "European Specialist" appended — Google suspends profiles for keyword stuffing in the name field.)*

**Primary category:** `Auto Repair Shop`

**Secondary categories:**
`Car repair and maintenance service` · `Mechanic` · `Auto Tune Up Service` · `Brake Shop` · `Auto Electrical Service` · `Diagnostic Center`

**Address:** Enter it, then **turn off "Show business address to customers"** (Edit profile → Location). Set service area to the town list.

**Description (paste as-is, 750 char limit):**
> E-Way Auto Repairs is a European auto specialist serving South Jersey. With 30+ years of hands-on experience and ASE Master Technician certification, we service BMW, Mercedes-Benz, Audi, Volkswagen, Porsche, Land Rover, Jaguar, Mini, Volvo, Saab, Alfa Romeo and Fiat exclusively.
>
> We're mobile — we come to your home or workplace for diagnostics, pre-purchase inspections, scheduled maintenance and repair. Factory-level diagnostic capability without dealer pricing, and you deal directly with the technician working on your car.
>
> Written estimates before every job. Call for an appointment.

**Services to add (each as a separate entry — this is how you show up for brand searches):**

```
BMW Repair · Mercedes-Benz Repair · Audi Repair · Volkswagen Repair
Porsche Service · Land Rover Repair · Jaguar Repair · Mini Cooper Repair
Volvo Repair · Saab Repair · Alfa Romeo Repair · Fiat Repair
Pre-Purchase Inspection · Mobile Diagnostics · Check Engine Light Diagnosis
Oil Change · Brake Repair · Suspension Repair · Cooling System Repair
Module Coding and Programming · Emission Repair · Second Opinion Inspection
```

**Attributes to enable:** `Online estimates` · `Onsite services` · `Appointment required` · `LGBTQ+ friendly` (if true) · `Small business`

**Photos — upload 20+ at launch, then 2–3 weekly.** Cover photo: his best engine-bay or diagnostic shot. Logo: text-based E-Way mark, **no manufacturer logos.** Then: him working, the scan tool mid-diagnosis, failed parts, his tool setup, his van, a clean finished job.

**First Google Post (do it at launch):**
> Now serving South Jersey with mobile European auto repair. 30+ years, ASE Master certified. BMW, Mercedes, Audi, Porsche, Land Rover and more — we come to you. Call for a written estimate.

**Also claim these free listings (1 hour total, real SEO value):**
Bing Places · Apple Business Connect · Yelp · Facebook Page · Nextdoor Business · RepairPal · BBB (optional)

---

## 9. What you still need from him before building

Blocking items — the build can't finish without these:

1. **Phone number** he'll answer for business
2. **Photo of him** — decent lighting, working on a car, not a selfie
3. **10–20 job photos** — engine bays, scan tool screens, failed parts, before/afters
4. **PPI price** — I'd suggest $250–$300 given 30 years and ASE Master. Don't go under $200; it signals the wrong thing.
5. **Exact town list** — the towns he'll actually drive to
6. **Which brands the factory training is in** — needed for the credentials block
7. **The common-failures list per brand** — sit with him for 30 minutes, record it on your phone, get 5–8 real failure modes per marque. **This is the most valuable content on the entire site** and no competitor can copy it.
8. **Confirm ASE certs are current** (they lapse every 5 years)
9. **His origin story** — 3–4 sentences for the About page

Nice to have:
10. Diagnostic equipment he owns — "we run the same software the dealer runs" is a closing line
11. Any old customer contacts from the shop he sold
12. Whether he'll do video — face-on-camera is 3–5x more effective

---

## 10. Launch order

1. Buy `ewayautorepairs.com`, grab @ewayautorepairs on IG + FB **today** — before anything else, so nobody takes them
2. Form the LLC, get the EIN → gives him the business email and a bank account
3. **Create the Google Business Profile and start verification immediately** — verification can take days to weeks, so it should be running in the background while the site gets built
4. Build the site
5. Google Search Console + GA4, submit the sitemap
6. Point the GBP website field at the live site
7. Text past customers for the first 10 reviews
8. Claim the secondary listings
9. Start the daily photo habit

---

## 11. One prompt to start Claude Code

```
Build a static marketing site for E-Way Auto Repairs, a mobile European auto
repair specialist in South Jersey. Use Astro, deploy-ready for Cloudflare Pages.

Read BUILD-BRIEF.md in full before writing any code. It contains the complete
site architecture, production-ready copy, technical requirements, legal
constraints, and JSON-LD schema.

Critical constraints:
- Service-area business: no street address anywhere, including schema
- No manufacturer logos or trade dress anywhere (trademark) — see §3.1
- Required manufacturer disclaimer in the footer of every page — see §3.1
- Mobile-first, Lighthouse 95+, sticky tap-to-call on mobile
- Forms via Web3Forms/Netlify Forms — no backend
- Dark, technical, precise design. No stock photography.

Build Phase 1 (9 pages) only. Leave [BRACKETED] placeholders visible and give
me a list of every one at the end so I can fill them in.
```

---

**One last thing.** The brand pages with real failure modes are the part that matters most and the part most likely to get skipped because it requires sitting down with your uncle for half an hour. Don't skip it. A page that says *"we repair BMWs, contact us today"* ranks nowhere and converts no one. A page that says *"if your N54 is throwing a lean code, it's the charge pipe about 60% of the time, and the dealer will quote you a turbo"* ranks, converts, and cannot be faked by anyone without 30 years of doing it.

That knowledge is the entire business. The website is just the place to put it.
