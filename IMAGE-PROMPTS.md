# Image generation prompts

For mocking up the site with real-looking images so he can see it rather than
imagine it. Every prompt is built around two hard constraints:

1. **No faces and no people identifiable in any way.** Hands are fine, a torso from
   behind is fine, anything with a face is not.
2. **No manufacturer badges, logos, emblems, or text.** This is not a style
   preference, it is the legal constraint in the build brief. The site is not
   allowed to display a BMW roundel, a Mercedes star, four rings, or any wordmark,
   and image generators put them on cars constantly unless told not to.

---

## Use this style block on every prompt

Paste this at the end of each prompt below. It is what makes the set look like one
photo shoot instead of five unrelated stock images.

> Photorealistic automotive photography. Very dark, moody, near-black background with
> deep shadows and heavy falloff. Lit by a single warm orange work lamp around 2700K
> creating a narrow pool of light, everything outside it dropping to black. High
> contrast, desaturated palette apart from the warm light. Shot on a full-frame
> camera, 50mm lens, f/2.8, shallow depth of field, fine natural grain. Not glossy,
> not HDR, not over-processed. No people's faces, no heads, nobody identifiable. No
> brand names, badges, logos, emblems, lettering or text anywhere in the image. No
> watermark.

---

## 1. Hero background

**Slot:** behind the headline on the homepage. **Replaces:** `hero-placeholder.svg`
**Ask for:** landscape, 1536x1024, then crop to roughly 5:3.

> An open engine bay of a European performance car, shot from above at a slight
> three-quarter angle and filling the frame. Aluminum intake piping, braided lines,
> hex head bolts, a black plastic engine cover with a completely blank unmarked
> surface where a badge would normally be. The coiled cable of a diagnostic scan tool
> enters from the right edge and disappears into the bay. The left third of the frame
> falls away into near-total darkness.

**Note:** this sits under a heavy black gradient on the page, so about 80% of the
detail gets swallowed. Texture and darkness matter far more than sharpness. The left
side must be dark because the headline sits on top of it.

---

## 2. The driveway band

**Slot:** the wide band across the middle of the homepage carrying the line about the
shop coming to your driveway. **Replaces:** `workband-placeholder.svg`
**Ask for:** landscape, 1536x1024, then crop hard to about 21:9.

> A residential asphalt driveway at blue hour. A dark European sedan sits with its
> hood open, shot from a low wide angle from the front quarter. Beside it, a rolling
> tool chest with a drawer open and a socket set laid out on a rubber mat. A single
> orange work lamp on a tripod throws light up into the engine bay. In the soft
> out-of-focus background, the warm lit windows of a suburban house. The left third of
> the frame is darker and uncluttered.

**Note:** the pull quote sits over the left third, so that area needs to stay empty.
This is the single most important image on the site now, because it is the one that
proves the whole business model at a glance.

---

## 3. The vertical slot

**Slot:** the tall 4:5 frame beside the credentials, on the homepage and the About
page. **Replaces:** `portrait-placeholder.svg`
**Ask for:** portrait, 1024x1536.

This slot was designed for a photo of him. Since that is off the table, it becomes a
craft shot. Any of these three work, pick whichever looks best:

**Option A, hands and a tool**
> A close-up vertical composition of a technician's gloved hands using a torque wrench
> on an engine component. Black nitrile gloves, a dark long-sleeve work shirt, cropped
> at the forearms so no head, face or upper body is visible. Orange work light raking
> in from the upper left, the background falling to black.

**Option B, the scan tool**
> A vertical close-up of a professional automotive diagnostic tablet held in gloved
> hands, its screen glowing with rows of live sensor data and fault codes in small
> generic text. Cropped at the forearms, no person visible. Reflections of the screen
> on the glove. Engine bay soft and dark behind.

**Option C, the tool wall**
> A vertical shot of an organized professional tool chest with a drawer pulled open,
> showing sockets and wrenches laid out precisely in foam. Warm orange light from one
> side, deep shadow elsewhere. No people at all.

---

## 4. The van

**Slot:** the wide letterbox frame in the service area section.
**Replaces:** `van-placeholder.svg` **Ask for:** landscape, 1536x1024, crop to 8:3.

> A plain dark cargo van parked in a residential driveway at dusk, photographed from
> the rear three-quarter angle with both rear doors open. Inside, organized shelving
> with stacked tool cases, a compressor and coiled hoses, lit warm from within. The
> van's exterior panels are completely plain with no lettering, graphics or badges of
> any kind. Suburban trees soft and dark in the background.

**Note:** keep the van panels blank on purpose. Once his real van is lettered with the
Eway wordmark, a real photo of it becomes a serious trust signal and should replace
this immediately.

---

## 5. Social share image

**Slot:** what shows up when the site gets texted or posted to Facebook.
**Create as:** `public/images/og.jpg`, exactly 1200x630.

> A dark automotive still life shot from directly overhead on black: a diagnostic scan
> tool, a torque wrench, and a set of sockets arranged with deliberate spacing on a
> dark rubber mat. Lit by one warm orange lamp from the upper left. Large areas of
> empty black around the objects.

**Note:** leave the empty black space. The business name gets added over it in a
graphics tool afterward, which keeps the text crisp instead of generated.

---

## Worth generating for later

These do not have slots on the site yet, but they are the strongest content he can
build up over time and they would let us illustrate the individual brand pages.

**Failed parts**
> A cracked black plastic automotive charge pipe lying on a clean dark workbench next
> to its polished aluminum replacement, shot from directly above. Warm side lighting,
> deep shadows, black background. No branding or part numbers visible.

**Carbon buildup, before and after**
> Two automotive intake valves photographed side by side from the same angle on a dark
> background, one heavily coated in dry black carbon deposits and one clean bare metal.
> Warm directional light, macro detail, black background.

---

## The honest caveat

Use these to show him the layout. **Do not launch on them.**

Generated engine bays tend to have mechanical detail that is subtly wrong: lines
routed nowhere, fasteners that do not exist, a manifold that is not a real manifold.
Most visitors will never notice. A person shopping for a European specialist,
who is exactly the customer this site is for, will notice immediately, and the entire
promise of the site is that this guy knows these cars better than the dealer does.

The good news is that the no-face decision costs him nothing on the photo side. Every
shot described above can be taken on a phone, on a real car, without him ever being in
frame. Hands, tools, screens, failed parts and the van are the whole list. He can
start collecting them on jobs this week, and each real one should replace its
generated stand-in as it arrives.
