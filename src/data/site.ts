// Single source of truth for business facts.
// NAP rule: the name and phone strings must be byte-identical everywhere —
// site, Google Business Profile, Facebook, invoices. Never "E-Way".

// PLACEHOLDER — replace with the real business number before launch.
export const PHONE = '(856) 555-0142';
export const TEL_HREF = 'tel:' + PHONE.replace(/[^0-9+]/g, '');

// PLACEHOLDER — create a free access key at web3forms.com pointed at the
// business email, then paste it here. The contact form will not send until set.
export const WEB3FORMS_KEY = '[WEB3FORMS_ACCESS_KEY]';

export const NAME = 'Eway Auto Repairs';
export const TAGLINE = 'European Specialist';
export const DOMAIN = 'https://ewayautorepairs.com';
export const EMAIL = 'service@ewayautorepairs.com';
export const INSTAGRAM = 'https://instagram.com/ewayautorepairs';
export const FACEBOOK = 'https://facebook.com/ewayautorepairs';

export const BRANDS = [
  'BMW',
  'Mercedes-Benz',
  'Audi',
  'Volkswagen',
  'Porsche',
  'Land Rover',
  'Jaguar',
  'Mini',
  'Volvo',
  'Saab',
  'Alfa Romeo',
  'Fiat',
];

export const SERVICES = [
  {
    num: '01',
    anchor: 'svc-diagnostics',
    title: 'Diagnostics',
    body: 'Factory-level scan tools and a systematic process. Fault codes are a starting point, not an answer.',
  },
  {
    num: '02',
    anchor: 'ppi',
    title: 'Pre-Purchase Inspections',
    body: 'Before you buy: compression, leaks, service history, module health, and a written report of what it will cost you.',
  },
  {
    num: '03',
    anchor: 'svc-maintenance',
    title: 'Scheduled Maintenance',
    body: "Oil and filters, fluids, plugs, belts, and inspections on the manufacturer's interval with correct-spec parts.",
  },
  {
    num: '04',
    anchor: 'svc-brakes',
    title: 'Brakes & Suspension',
    body: 'Pads, rotors, sensors, control arms, bushings, and struts. Electronic parking brakes retracted and reset properly.',
  },
  {
    num: '05',
    anchor: 'svc-coding',
    title: 'Coding & Programming',
    body: 'Module coding, adaptations, retrofits, and battery registration for cars that need it after a repair.',
  },
  {
    num: '06',
    anchor: 'svc-second',
    title: 'Second Opinions',
    body: "Bring me the shop's estimate. I'll tell you what the car actually needs and what can wait.",
  },
];

export const STEPS = [
  {
    n: '01',
    title: 'Call with the details',
    body: 'Year, model, mileage, and what the car is doing. Most problems narrow down on the phone.',
  },
  {
    n: '02',
    title: 'I come to you',
    body: 'Home or work, driveway or lot. Diagnostics and most repairs happen on site.',
  },
  {
    n: '03',
    title: 'Written estimate first',
    body: 'Parts, labor, and time in writing before anything is taken apart. No work without your approval.',
  },
  {
    n: '04',
    title: 'Itemized invoice',
    body: 'Every part and every hour listed. Old parts stay with the car if you want them.',
  },
];

export const CREDENTIALS = [
  'ASE Master Technician',
  'ASE L1 Advanced Engine Performance',
  'Factory-Trained',
  'NJ Certified Emission Repair Technician',
  '30+ Years Experience',
];

// PLACEHOLDER list — confirm actual coverage with the client before launch.
export const TOWNS = [
  'Cherry Hill',
  'Voorhees',
  'Marlton',
  'Moorestown',
  'Haddonfield',
  'Medford',
  'Mount Laurel',
  'Collingswood',
  'Sewell',
  'Washington Township',
  'Mullica Hill',
  'Woodbury',
  'Deptford',
  'Maple Shade',
  'Haddon Heights',
  'Berlin',
];
