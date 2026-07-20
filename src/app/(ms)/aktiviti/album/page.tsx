import { pageMeta } from '@/lib/meta';
import { AlbumsPage } from '@/components/pages/AlbumsPage';

export const metadata = pageMeta(
  'albums',
  'ms',
  'Album Majlis',
  'Album foto majlis keluarga Waris DBAK: galeri majlis, program dan jemputan rasmi, serta majlis Khatam Al-Quran tahunan.'
);

export default function Page() {
  return <AlbumsPage lang="ms" />;
}
