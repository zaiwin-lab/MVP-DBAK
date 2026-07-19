import { pageMeta } from '@/lib/meta';
import { NewsPage } from '@/components/pages/NewsPage';

export const metadata = pageMeta(
  'news',
  'ms',
  'Berita & Kemas Kini',
  'Perkembangan Rumah Batu dan Waris DBAK yang disahkan.'
);

export default function Page() {
  return <NewsPage lang="ms" />;
}
