# Who owns what

## The rule

**He owns the identity. You own the plumbing.**

Anything that *is* the business gets created in his name, on his email, on his card,
even if you are the one typing. Anything that merely *serves* the business can live
wherever is convenient, because it can be swapped out without him losing anything.

The reason this matters is not paranoia about family. It is that in two years one of
three things will be true: you are still doing this and it does not matter, you have
gotten busy and he needs someone else to pick it up, or something has gone sideways.
In two of those three cases, he needs to be able to hand this to another person
without asking you for anything. Setting it up that way now costs nothing. Fixing it
later means moving a domain, rebuilding a Google listing, and losing rankings.

---

## His, non-negotiable

Create these while sitting next to him. You drive the keyboard, he supplies the
email and the card, and the password goes somewhere he can find it again.

| Thing | Why it has to be his | Cost |
|---|---|---|
| **The domain** | This is the business address. If it lapses or sits in someone else's account, every ranking, link and business card points at nothing. | ~$12/year |
| **Google Business Profile** | Verified against the actual business, and for a local trade it drives more calls than the website does. Cannot be cleanly moved later. | Free |
| **Business email** | It is his mail. Customers will reply to it for years. | Free to $7/mo |
| **Instagram and Facebook** | His brand and his customer relationships. | Free |

On the Google Business Profile specifically: **start it first**, before anything else
is finished. Verification can take days or weeks, and nothing else can proceed past
it. It runs in the background while the rest gets built.

## Yours, and he never needs to hear about it

| Thing | What it does | Cost |
|---|---|---|
| **Vercel** | Runs the site | Free tier, see note below |
| **Resend** | Sends the enquiry emails | Free up to 3,000/month |
| **GitHub** | Stores the code | Free |

He does not need to know what Resend is. He does not need a Vercel login. If he ever
needs to move off you, a new developer points a new host at his domain and everything
else follows. That is the whole point of the split.

---

## The one sitting

Block out about 45 minutes with him, his phone, his email and his card. Do it in this
order, because each step needs the one before it.

**1. Decide the phone number.** Everything downstream uses it. Either a number he will
answer for business, or a second number. Do not skip ahead with a placeholder, because
it ends up in the Google listing and on the site and then has to be changed everywhere.

**2. Register the domain**, in his account, with his card. `ewayautorepairs.com` is
still unregistered as of now. Turn on auto-renew and turn on WHOIS privacy. Send me
the login and I will point it at the site.

**3. Grab the social handles.** `@ewayautorepairs` is free on both Instagram and
Facebook right now. Takes four minutes and stops someone else taking the name.

**4. Start the Google Business Profile.** His Google account. Name is exactly
`Eway Auto Repairs`, nothing appended. Enter the address then hide it, and set the
service area instead, because he is mobile. Then start verification and walk away
from it. The exact fields to paste are in BUILD-BRIEF.md section 8.

**5. Set up the business email** on the new domain.

That is everything he has to be present for. The rest is yours.

---

## What you do afterwards, alone

1. Sign up for Resend, verify the domain, add the DNS records at the registrar.
2. Put the three keys into Vercel. Steps are in COMMS-SETUP.md.
3. Send me the real phone number, the confirmed town list, the pre-purchase
   inspection price, and his answers on travel distance and scheduling.
4. Sit him down for thirty minutes with a voice recorder and get the real failure
   modes per marque. That is still the most valuable thing left, and it is the one
   part nobody else can produce.

---

## Two things worth knowing

**Vercel's free tier is for personal, non-commercial projects.** A business website
technically belongs on their paid plan at $20/month. Plenty of small sites run on the
free tier anyway and nothing happens, but it is a rule that exists and you should know
it exists rather than find out later. Cloudflare Pages is free with no such
restriction and the site would move there in about twenty minutes if you would rather
not think about it. The original brief actually suggested Cloudflare for this reason.

**Write the passwords down.** A 30-year mechanic is not going to remember which email
he used for the Google listing eighteen months from now, and that is exactly the
moment it matters. Either set him up in a password manager, or write the accounts and
logins on a sheet of paper and let him keep it somewhere safe. Unglamorous, and it is
the difference between him owning this and him only appearing to own it.
