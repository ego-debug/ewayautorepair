import type { APIRoute } from 'astro';
import { Resend } from 'resend';
import {
  subjectFor,
  notificationHtml,
  notificationText,
  autoReplyHtml,
  type QuoteRequest,
} from '../../lib/quote-email';
import { PHONE } from '../../data/site';

// The only route on the site that is not prerendered.
export const prerender = false;

const env = (key: string) =>
  (import.meta.env[key] as string | undefined) ?? process.env[key] ?? '';

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json' },
  });

/** Bots fill forms instantly. A human cannot complete this one in under 3 seconds. */
const MIN_FILL_MS = 3000;

export const POST: APIRoute = async ({ request }) => {
  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return json({ ok: false, error: 'Could not read that submission.' }, 400);
  }

  const field = (name: string) => String(form.get(name) ?? '').trim();

  // Honeypot. Real users never see this input, so anything in it is a bot.
  // Return a success shape so the bot does not learn it was caught.
  if (field('company')) return json({ ok: true });

  const startedAt = Number(form.get('started_at') ?? 0);
  if (startedAt && Date.now() - startedAt < MIN_FILL_MS) return json({ ok: true });

  const quote: QuoteRequest = {
    name: field('name'),
    phone: field('phone'),
    email: field('email'),
    vehicle: field('vehicle'),
    mileage: field('mileage'),
    town: field('town'),
    urgency: field('urgency') || 'soon',
    contactPref: field('contact_pref'),
    symptoms: field('symptoms'),
    heardFrom: field('heard_from'),
    submittedAt: new Intl.DateTimeFormat('en-US', {
      dateStyle: 'medium',
      timeStyle: 'short',
      timeZone: 'America/New_York',
    }).format(new Date()),
  };

  const missing = (['name', 'phone', 'vehicle', 'town', 'symptoms'] as const).filter(
    (k) => !quote[k]
  );
  if (missing.length) {
    return json({ ok: false, error: `Missing: ${missing.join(', ')}` }, 400);
  }
  if (quote.email && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(quote.email)) {
    return json({ ok: false, error: 'That email address does not look right.' }, 400);
  }

  const apiKey = env('RESEND_API_KEY');
  const to = env('QUOTE_TO_EMAIL');
  const from = env('QUOTE_FROM_EMAIL');

  if (!apiKey || !to || !from) {
    console.error('Quote form is not configured. Need RESEND_API_KEY, QUOTE_TO_EMAIL, QUOTE_FROM_EMAIL.');
    return json(
      { ok: false, error: 'The form is not connected yet. Please call instead.' },
      503
    );
  }

  const resend = new Resend(apiKey);

  try {
    const sent = await resend.emails.send({
      from,
      to,
      subject: subjectFor(quote),
      html: notificationHtml(quote),
      text: notificationText(quote),
      // Hitting reply goes to the customer, not back to the site.
      replyTo: quote.email || undefined,
    });

    if (sent.error) {
      console.error('Resend rejected the notification:', sent.error);
      return json({ ok: false, error: 'Could not send that. Please call instead.' }, 502);
    }
  } catch (err) {
    console.error('Notification send threw:', err);
    return json({ ok: false, error: 'Could not send that. Please call instead.' }, 502);
  }

  // The customer confirmation is a nice-to-have. If it fails, the request still
  // reached him, so never fail the submission over it.
  if (quote.email) {
    try {
      await resend.emails.send({
        from,
        to: quote.email,
        subject: 'Got your request, Eway Auto Repairs',
        html: autoReplyHtml(quote, PHONE),
        replyTo: to,
      });
    } catch (err) {
      console.error('Auto-reply failed, notification already sent:', err);
    }
  }

  return json({ ok: true });
};
