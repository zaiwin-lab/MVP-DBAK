import { pageMeta } from '@/lib/meta';
import { GalleryPage } from '@/components/pages/GalleryPage';

export const metadata = pageMeta(
  'gallery',
  'ms',
  'Galeri',
  'Album terpilih arkib keluarga Waris DBAK: sejarah, keluarga, aktiviti, Rumah Batu dan pemulihan.'
);

export default function Page() {
  return <GalleryPage lang="ms" />;
}
