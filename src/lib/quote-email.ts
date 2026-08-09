/**
 * Email bodies for an incoming quote request.
 *
 * These are written for someone reading on a phone, one-handed, with dirty
 * gloves, standing next to a car. That means: the important facts live in the
 * subject line so he can triage from the notification without opening anything,
 * the customer's number is a tap-to-call link at the top, and nothing below the
 * fold is required to decide what to do.
 */

export interface QuoteRequest {
  name: string;
  phone: string;
  email?: string;
  vehicle: string;
  mileage?: string;
  town: string;
  urgency: string;
  contactPref?: string;
  symptoms: string;
  heardFrom?: string;
  submittedAt: string;
}

const URGENCY_LABEL: Record<string, string> = {
  undriveable: 'NOT DRIVEABLE',
  soon: 'Driveable, needs looking at',
  planning: 'Planning ahead',
};

const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const digits = (s: string) => s.replace(/[^0-9+]/g, '');

/**
 * Short, scannable, and carries the decision in the notification preview so he
 * can triage from a lock screen without opening anything.
 */
export function subjectFor(q: QuoteRequest) {
  const flag = q.urgency === 'undriveable' ? 'NOT DRIVEABLE: ' : '';
  const clean = q.symptoms.replace(/\s+/g, ' ').trim();
  const short = clean.length > 48 ? `${clean.slice(0, 48).trimEnd()}...` : clean;
  return `${flag}${q.vehicle}, ${q.town}. ${short}`;
}

export function notificationHtml(q: QuoteRequest) {
  const tel = digits(q.phone);
  const urgent = q.urgency === 'undriveable';
  const row = (label: string, value: string) =>
    value
      ? `<tr>
           <td style="padding:6px 14px 6px 0;color:#8a8a86;font-size:13px;white-space:nowrap;vertical-align:top">${esc(label)}</td>
           <td style="padding:6px 0;color:#111;font-size:15px;font-weight:600">${esc(value)}</td>
         </tr>`
      : '';

  return `<!doctype html>
<html><body style="margin:0;padding:0;background:#f4f4f2;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif">
  <div style="max-width:560px;margin:0 auto;padding:20px">

    <div style="background:#0a0a0a;padding:18px 20px;border-radius:3px 3px 0 0">
      <div style="color:#ff6b00;font-size:15px;font-weight:800;letter-spacing:.06em">EWAY AUTO REPAIRS</div>
      <div style="color:#7a7a7a;font-size:11px;letter-spacing:.2em;margin-top:3px">NEW QUOTE REQUEST</div>
    </div>

    ${
      urgent
        ? `<div style="background:#ee6002;color:#0a0a0a;padding:12px 20px;font-weight:800;font-size:15px">
             Customer says the car is not driveable
           </div>`
        : ''
    }

    <div style="background:#fff;padding:22px 20px;border:1px solid #e2e2de;border-top:0;border-radius:0 0 3px 3px">

      <a href="tel:${esc(tel)}"
         style="display:block;background:#ee6002;color:#0a0a0a;text-decoration:none;text-align:center;
                padding:16px;border-radius:3px;font-size:18px;font-weight:800;margin-bottom:10px">
        Call ${esc(q.name)} &nbsp;·&nbsp; ${esc(q.phone)}
      </a>
      <a href="sms:${esc(tel)}"
         style="display:block;border:1px solid #cfcfca;color:#111;text-decoration:none;text-align:center;
                padding:13px;border-radius:3px;font-size:15px;font-weight:700;margin-bottom:22px">
        Text instead
      </a>

      <table style="width:100%;border-collapse:collapse">
        ${row('Vehicle', q.vehicle)}
        ${row('Mileage', q.mileage ?? '')}
        ${row('Town', q.town)}
        ${row('Urgency', URGENCY_LABEL[q.urgency] ?? q.urgency)}
        ${row('Prefers', q.contactPref ?? '')}
        ${row('Email', q.email ?? '')}
        ${row('Found you via', q.heardFrom ?? '')}
      </table>

      <div style="margin-top:20px;padding-top:18px;border-top:1px solid #ececE8">
        <div style="color:#8a8a86;font-size:13px;margin-bottom:8px">What it is doing</div>
        <div style="color:#111;font-size:15px;line-height:1.6;white-space:pre-wrap">${esc(q.symptoms)}</div>
      </div>

      <div style="margin-top:22px;color:#a0a09c;font-size:12px">
        Sent ${esc(q.submittedAt)} from ewayautorepairs.com.
        Replying to this email goes straight to the customer.
      </div>
    </div>
  </div>
</body></html>`;
}

/** Plain text fallback, and what shows in the notification preview line. */
export function notificationText(q: QuoteRequest) {
  return [
    q.urgency === 'undriveable' ? '*** NOT DRIVEABLE ***' : '',
    `${q.name}  ${q.phone}`,
    '',
    `Vehicle: ${q.vehicle}`,
    q.mileage ? `Mileage: ${q.mileage}` : '',
    `Town: ${q.town}`,
    `Urgency: ${URGENCY_LABEL[q.urgency] ?? q.urgency}`,
    q.contactPref ? `Prefers: ${q.contactPref}` : '',
    q.email ? `Email: ${q.email}` : '',
    q.heardFrom ? `Found you via: ${q.heardFrom}` : '',
    '',
    'What it is doing:',
    q.symptoms,
    '',
    `Sent ${q.submittedAt} from ewayautorepairs.com`,
  ]
    .filter(Boolean)
    .join('\n');
}

/** Auto-reply so the customer knows it landed and stops wondering. */
export function autoReplyHtml(q: QuoteRequest, phone: string) {
  return `<!doctype html>
<html><body style="margin:0;padding:0;background:#f4f4f2;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif">
  <div style="max-width:560px;margin:0 auto;padding:20px">
    <div style="background:#0a0a0a;padding:18px 20px;border-radius:3px 3px 0 0">
      <div style="color:#ff6b00;font-size:15px;font-weight:800;letter-spacing:.06em">EWAY AUTO REPAIRS</div>
      <div style="color:#7a7a7a;font-size:11px;letter-spacing:.2em;margin-top:3px">EUROPEAN SPECIALIST</div>
    </div>
    <div style="background:#fff;padding:24px 20px;border:1px solid #e2e2de;border-top:0;border-radius:0 0 3px 3px;color:#111;font-size:15px;line-height:1.65">
      <p style="margin:0 0 16px">Thanks ${esc(q.name.split(' ')[0])}, I have your request.</p>
      <p style="margin:0 0 16px">
        I am usually under a car during the day, so I answer these between jobs and in the
        evening. You will hear back from me, normally the same day.
      </p>
      <p style="margin:0 0 16px">Here is what you sent me:</p>
      <div style="background:#f7f7f5;border-left:2px solid #ff6b00;padding:14px 16px;margin-bottom:18px">
        <div style="font-weight:700;margin-bottom:6px">${esc(q.vehicle)}${q.town ? ` · ${esc(q.town)}` : ''}</div>
        <div style="color:#444;white-space:pre-wrap">${esc(q.symptoms)}</div>
      </div>
      <p style="margin:0 0 16px">
        If the car is not driveable or it turns into something urgent, call me directly on
        <a href="tel:${digits(phone)}" style="color:#c25000;font-weight:700">${esc(phone)}</a>
        rather than waiting on this.
      </p>
      <p style="margin:0;color:#6a6a66;font-size:13px">
        You will get a written estimate before any work starts. Nothing happens without your
        approval.
      </p>
    </div>
  </div>
</body></html>`;
}
