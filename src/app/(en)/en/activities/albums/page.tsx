import { pageMeta } from '@/lib/meta';
import { AlbumsPage } from '@/components/pages/AlbumsPage';

export const metadata = pageMeta(
  'albums',
  'en',
  'Event Albums',
  'Photo albums from Waris DBAK family events: the event gallery, official programmes and invitations, and the annual Khatam Al-Quran ceremonies.'
);

export default function Page() {
  return <AlbumsPage lang="en" />;
}
