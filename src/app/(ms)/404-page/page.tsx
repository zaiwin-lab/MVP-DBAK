import type { Metadata } from 'next';
import NotFound from '../not-found';

/**
 * Static 404 route: the postbuild step copies this page's HTML to out/404.html
 * so static hosts serve the custom bilingual 404 (route groups cannot export a
 * global not-found page directly).
 */
export const metadata: Metadata = {
  title: 'Halaman tidak ditemui · Page not found',
  robots: { index: false, follow: false },
};

export default function Page() {
  return <NotFound />;
}
