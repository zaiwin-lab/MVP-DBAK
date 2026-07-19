import { SITE_URL } from '@/lib/i18n';

/** Renders a JSON-LD script tag. Only used where the data is accurate. */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export const organizationLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Jawatankuasa Pengurusan Wakaf Rumah Batu DBAK (W8-DBAK)',
  alternateName: 'Waris DBAK',
  url: SITE_URL,
  email: 'maklum@w8dbak.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress:
      'Ground Floor, No. 98, Lot 14537, Pusat Komersil SWAN, Jalan Matang',
    addressLocality: 'Kuching',
    postalCode: '93050',
    addressRegion: 'Sarawak',
    addressCountry: 'MY',
  },
};

export const placeLd = {
  '@context': 'https://schema.org',
  '@type': 'Place',
  name: 'Rumah Batu',
  description:
    'Family heritage house built in 1863 (family account), wakaf property of the heirs of Datu Bandar Abang Haji Muhammad Kassim.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Lot 8, Section 13, Jalan Datuk Ajibah Abol',
    addressLocality: 'Kuching',
    addressRegion: 'Sarawak',
    addressCountry: 'MY',
  },
};

export const personLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Datu Bandar Abang Haji Muhammad Kassim bin Datu Bandar Abang Haji Bolhassan',
  birthDate: '1841',
  deathDate: '1921-07-18',
  deathPlace: { '@type': 'Place', name: 'Mecca' },
  spouse: {
    '@type': 'Person',
    name: 'Dayang Sahadah binti Datu Patinggi Abang Haji Ghapor',
  },
};

export const eventLd = {
  '@context': 'https://schema.org',
  '@type': 'Event',
  name: 'Ramah Tamah Bersama Premier Sarawak',
  startDate: '2025-04-19',
  eventStatus: 'https://schema.org/EventScheduled',
  location: { '@type': 'Place', name: 'Kuching, Sarawak, Malaysia' },
  organizer: {
    '@type': 'Organization',
    name: 'Jawatankuasa Pengurusan Wakaf Rumah Batu DBAK (W8-DBAK)',
  },
};
