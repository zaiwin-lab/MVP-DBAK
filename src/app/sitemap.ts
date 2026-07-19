import type { MetadataRoute } from 'next';
import { routes, SITE_URL } from '@/lib/i18n';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return Object.values(routes).flatMap((r) => [
    {
      url: `${SITE_URL}${r.ms}`,
      lastModified: now,
      alternates: {
        languages: { ms: `${SITE_URL}${r.ms}`, en: `${SITE_URL}${r.en}` },
      },
    },
    {
      url: `${SITE_URL}${r.en}`,
      lastModified: now,
      alternates: {
        languages: { ms: `${SITE_URL}${r.ms}`, en: `${SITE_URL}${r.en}` },
      },
    },
  ]);
}
