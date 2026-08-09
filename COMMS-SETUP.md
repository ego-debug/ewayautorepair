# How enquiries reach him

## The problem this solves

He is under a car most of the day and cannot answer the phone reliably. A missed
call currently just disappears, and the customer calls the next shop. So the goal
is not to stop people calling, it is to make sure nothing is lost when he cannot
pick up.

Worth being clear about one thing: **the phone number stays prominent on the site.**
Somebody whose car will not start is going to call regardless, and local trade
businesses that push everyone to a form lose work. What changed is that the form is
now genuinely good, and it reaches him somewhere he will actually see it.

---

## What is built

A customer submits the form at `/contact`. A serverless function validates it and
sends two emails through Resend:

**To him, a notification built for a phone screen.** The subject line carries the
decision so he can triage from the lock screen without opening it:

> `NOT DRIVEABLE: 2016 BMW 340i, Cherry Hill. Threw P0171 and P0174 on the...`

Inside, the first thing is a big tap-to-call button with the customer's number,
then a tap-to-text button, then the vehicle, mileage, town, urgency, and what the
car is doing. Hitting reply goes to the customer rather than back to the website.

**To the customer, a confirmation.** Tells them it landed, that he answers between
jobs, and that if the car is undriveable they should call instead of waiting.

The form asks how urgent it is up front. That single field is what makes the
notification triageable, and it is why the urgent ones stand out.

### Spam handling

Three layers, none of which make a real customer do anything:

- A honeypot field a human never sees. Anything that fills it gets a fake success.
- A timing check. The form is stamped on load and anything submitted in under three
  seconds is treated as a bot.
- Server-side validation of every required field.

No CAPTCHA on purpose. They kill conversion on exactly the stressed-driver traffic
this site is for.

---

## Setting it up

### 1. Verify the domain in Resend

Sign up at resend.com, add `ewayautorepairs.com`, and add the DNS records it gives
you at the registrar. This is not optional. Sending from an unverified domain lands
in spam, and an enquiry in his spam folder is the same as a lost call.

### 2. Set three environment variables in Vercel

Project settings, Environment Variables, add all three to Production and Preview:

| Variable | Value | Notes |
|---|---|---|
| `RESEND_API_KEY` | `re_...` | From the Resend dashboard. Never commit this. |
| `QUOTE_TO_EMAIL` | his business inbox | Where enquiries land. Any address. |
| `QUOTE_FROM_EMAIL` | `Eway Auto Repairs <site@ewayautorepairs.com>` | Must be on the verified domain. |

Redeploy after adding them. Until all three are set the form tells the customer it
is not connected yet and points them at the phone, rather than failing silently.

### 3. Test it

Submit a real request through the live form and confirm both emails arrive. Check
the notification on his actual phone, not a desktop, because that is where he will
read it.

---

## The bigger win: missed call text-back

The email form handles people who are willing to fill in a form. It does nothing
for the person who calls, gets no answer, and hangs up. That is still the largest
leak, and it is worth fixing next.

The fix is a number that automatically texts back the moment a call is missed:

> Sorry I missed you, I am under a car. Reply here with the year, model and what it
> is doing and I will get back to you as soon as I am out.

This converts a hung-up call into a text conversation he can answer between jobs.
For a one-man operation it is the single highest-value thing on this list, and it is
cheap. Options are a business number with the feature built in, such as OpenPhone or
Google Voice with an auto-reply, or Twilio if we want full control and the
messages routed into the same inbox as everything else.

It also means he stops feeling obligated to answer the phone with dirty hands, which
was the original complaint.

---

## On the AI phone assistant

It is genuinely possible now. A voice agent answers, takes the year, model, town and
symptoms, says someone will be in touch, and drops a summary into his inbox in the
same shape as the form.

Two honest caveats before spending money on it:

**It is the expensive answer to a cheap problem.** Missed call text-back gets most of
the same value for a fraction of the setup and a fraction of the monthly cost. I
would do that first, run it for a month, and see how much is actually still leaking.

**Voice agents are risky for a trust-based trade business.** The whole pitch of this
site is that you talk to the technician and not a service writer. A customer who
figures out they are talking to a robot may take that badly, and that is exactly the
customer who was choosing him over a dealership. If we do it, it should say plainly
that it is taking a message rather than pretending to be him.

Sensible order: get the form live, add missed call text-back, and revisit the voice
agent once there is enough volume that he is genuinely losing work he cannot get to.
