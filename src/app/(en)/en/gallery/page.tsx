import { pageMeta } from '@/lib/meta';
import { GalleryPage } from '@/components/pages/GalleryPage';

export const metadata = pageMeta(
  'gallery',
  'en',
  'Gallery',
  'Curated albums from the Waris DBAK family archive: history, family, activities, Rumah Batu and restoration.'
);

export default function Page() {
  return <GalleryPage lang="en" />;
}
