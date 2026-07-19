import type { Metadata } from 'next';
import { routes, SITE_URL, type Lang, type RouteKey } from './i18n';

export function pageMeta(
  key: RouteKey,
  lang: Lang,
  title: string,
  description: string
): Metadata {
  const path = routes[key][lang];
  return {
    title,
    description,
    alternates: {
      canonical: `${SITE_URL}${path}`,
      languages: {
        ms: `${SITE_URL}${routes[key].ms}`,
        en: `${SITE_URL}${routes[key].en}`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}${path}`,
      siteName: 'Rumah Batu — Waris DBAK',
      locale: lang === 'ms' ? 'ms_MY' : 'en_MY',
      type: 'website',
      images: [
        {
          url: `${SITE_URL}/images/ramah-tamah-2025-960.jpg`,
          width: 960,
          height: 720,
          alt: 'Waris DBAK — Ramah Tamah 2025',
        },
      ],
    },
  };
}
