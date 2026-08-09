# Photo shot list

Every image the site needs, in priority order. Right now all of them are dark
placeholder graphics, and they are the single biggest thing holding the site back
from looking like a real business.

**The rule that matters more than any technical note below:** no stock photography.
No smiling people in polo shirts, no generic engine bays pulled off the internet. A
slightly imperfect real photo of him working beats a perfect stock photo every time,
because customers can tell the difference and it is the whole reason they trust a
one-man operation over a chain.

**A phone is fine.** A recent iPhone or Android in good light will outperform a bad
DSLR photo. Shoot in landscape unless the shot is marked portrait. Wipe the lens
first, it is always dirtier than you think.

---

## Tier 1: blocking. The site cannot launch looking right without these.

### 1. Hero background
**Where:** behind the headline on the homepage, heavily darkened.
**Shot:** an open engine bay on a European car, or his scan tool plugged in with the
screen lit. Shot wide, landscape, from slightly above.
**Notes:** this sits under a heavy black gradient, so do not worry about it being a
beautiful photo. What matters is texture and darkness. A busy, detailed engine bay
works better than a clean simple one. Avoid anything with a visible manufacturer
badge front and center, for the trademark reasons in the brief.
**Needs:** 1 image, at least 2000px wide.

### 2. Him, working
**Where:** the About page and the credentials block on the homepage. Portrait orientation.
**Shot:** him beside or leaning into a customer's car, doing something real. Hands on
a tool, looking at the car rather than the camera.
**Notes:** this is the highest converting image on the entire site. For a mobile
mechanic coming to your house, people want to see who is showing up. Not a selfie,
not posed in front of a wall, and not wearing sunglasses. Have someone else take it
while he actually works. Late afternoon light outdoors is very forgiving.
**Needs:** 3 or 4 options so there is something to choose from. Portrait orientation.

### 3. The driveway shot
**Where:** the wide band across the middle of the homepage, with the quote about the
shop coming to your driveway.
**Shot:** wide landscape of him working on a car in an actual residential driveway,
tools laid out, van visible if possible.
**Notes:** this is the one image that proves the entire business model in a glance.
It needs to obviously be a house, not a shop. Leave empty space on the right side of
the frame, because text sits over the left third.
**Needs:** 1 image, at least 2000px wide.

### 4. The van
**Where:** the service area section, wide letterbox crop.
**Shot:** his service van or truck, ideally with the back open and the tools visible.
**Notes:** shoot it clean and shoot it somewhere neutral. If it gets lettered with
the business name later, reshoot it, because a lettered van is a serious trust signal.
**Needs:** 1 image, landscape.

---

## Tier 2: makes the site substantially better. Get these within the first month.

### 5. Scan tool screens
Close-ups of the diagnostic tool mid-job with real data on screen: fault codes, live
data graphs, module lists. These back up the whole "factory-level diagnostics" claim
and they are visually interesting in a way stock photos never are.
**Needs:** 5 or 6.

### 6. Failed parts
The single most persuasive category of photo an independent mechanic can have. A split
charge pipe. A shredded serpentine belt. A worn chain guide. A clogged oil trap. Oil
sitting in a spark plug well.
**Notes:** shoot them on a clean surface with the good part next to the bad one where
possible. These can eventually illustrate the individual brand pages, which would make
those pages very hard for a competitor to match.
**Needs:** as many as he can accumulate. Start photographing every failed part now,
even before there is a place to put them.

### 7. Before and after pairs
Same angle, same framing, two photos. Carbon-caked intake valves and the same valves
after walnut blasting is the ideal example.
**Needs:** 3 or 4 pairs.

### 8. Tools and setup
His diagnostic gear laid out, torque wrenches, the case the scan tool lives in. Quiet,
technical, no people. Useful filler that still says something.
**Needs:** 3 or 4.

---

## Tier 3: for later, once the basics are covered.

- **Work in progress:** hands doing a specific job, tight crop, shallow depth of field.
- **Seasonal or location shots:** the van at a recognizable South Jersey spot, which can
  eventually illustrate the individual town pages.
- **Customer cars, with permission:** a nicely presented finished car. Get permission in
  writing, and do not show license plates.

---

## Practical notes

**Light.** Outdoors in open shade, or an overcast day, beats direct midday sun. If he
is shooting inside a garage, open the door and shoot with the car facing out. Avoid
the phone flash entirely.

**Framing.** Shoot wider than you think you need. Cropping in later is easy, inventing
more image is not.

**Volume.** Take five of every shot. Phone photos are free and the difference between
a usable one and an unusable one is often a blink or a hand in the wrong place.

**Keep them big.** Send the originals rather than anything that has been through a
messaging app. Text and WhatsApp compress photos badly. AirDrop, email as "actual
size", or a shared Google Drive folder all preserve the full file.

**Ongoing habit.** Two or three photos a week, forever. They feed the Google Business
Profile as well as the site, and a profile with fresh photos ranks better than one
without. This is the cheapest marketing available and it costs about a minute a day.

---

## Where each one lands in the code

| Photo | File to replace |
|---|---|
| Hero background | `public/images/hero-placeholder.svg` |
| Him, working | `public/images/portrait-placeholder.svg` |
| Driveway shot | `public/images/workband-placeholder.svg` |
| The van | `public/images/van-placeholder.svg` |

Save the real files as `.webp` or `.jpg` and update the `src` attributes that point at
them. Also add a social sharing image at `public/images/og.jpg`, 1200x630, which is
what shows up when the site gets shared in a text message or on Facebook.
