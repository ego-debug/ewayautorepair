import { NAME, DOMAIN, PHONE, EMAIL, INSTAGRAM, FACEBOOK } from './site';

// AutoRepair schema for a service-area business.
// Deliberately no `address`: publishing one is wrong for a mobile business.
export const businessSchema = {
  '@context': 'https://schema.org',
  '@type': 'AutoRepair',
  '@id': `${DOMAIN}/#business`,
  name: NAME,
  description:
    'European auto repair specialist serving South Jersey. Mobile service for BMW, Mercedes-Benz, Audi, Volkswagen, Porsche, Land Rover, Jaguar, Mini, Volvo, Saab, Alfa Romeo and Fiat. ASE Master Technician with 30+ years of experience.',
  url: DOMAIN,
  telephone: PHONE,
  email: EMAIL,
  priceRange: '$$',
  areaServed: [
    { '@type': 'City', name: 'Cherry Hill', address: { '@type': 'PostalAddress', addressRegion: 'NJ' } },
    { '@type': 'City', name: 'Mount Laurel', address: { '@type': 'PostalAddress', addressRegion: 'NJ' } },
    { '@type': 'City', name: 'Marlton', address: { '@type': 'PostalAddress', addressRegion: 'NJ' } },
    { '@type': 'City', name: 'Moorestown', address: { '@type': 'PostalAddress', addressRegion: 'NJ' } },
    { '@type': 'City', name: 'Voorhees', address: { '@type': 'PostalAddress', addressRegion: 'NJ' } },
    { '@type': 'City', name: 'Medford', address: { '@type': 'PostalAddress', addressRegion: 'NJ' } },
  ],
  knowsAbout: [
    'BMW repair', 'Mercedes-Benz repair', 'Audi repair', 'Volkswagen repair',
    'Porsche repair', 'Land Rover repair', 'Jaguar repair', 'Mini repair',
    'Volvo repair', 'Saab repair', 'Alfa Romeo repair', 'Fiat repair',
    'Pre-purchase inspection', 'European auto diagnostics', 'Module coding',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'European Auto Repair Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'European Auto Diagnostics' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Pre-Purchase Inspection' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Scheduled Maintenance' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Brake and Suspension Repair' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Module Coding and Programming' } },
    ],
  },
  sameAs: [INSTAGRAM, FACEBOOK],
};

export function serviceSchema(name: string, description: string, path: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url: `${DOMAIN}${path}`,
    serviceType: name,
    provider: { '@id': `${DOMAIN}/#business` },
    areaServed: { '@type': 'State', name: 'New Jersey' },
  };
}

export function breadcrumbSchema(crumbs: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: `${DOMAIN}${c.path}`,
    })),
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}
