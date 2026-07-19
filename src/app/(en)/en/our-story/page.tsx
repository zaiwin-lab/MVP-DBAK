import { pageMeta } from '@/lib/meta';
import { StoryPage } from '@/components/pages/StoryPage';

export const metadata = pageMeta(
  'story',
  'en',
  'Our Story',
  'DBAK, his family, the 1921 will, the eight family lines, and the meaning of the Rumah Batu wakaf.'
);

export default function Page() {
  return <StoryPage lang="en" />;
}
