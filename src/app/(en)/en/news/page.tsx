import { pageMeta } from '@/lib/meta';
import { NewsPage } from '@/components/pages/NewsPage';

export const metadata = pageMeta(
  'news',
  'en',
  'News & Updates',
  'Verified developments from Rumah Batu and Waris DBAK.'
);

export default function Page() {
  return <NewsPage lang="en" />;
}
