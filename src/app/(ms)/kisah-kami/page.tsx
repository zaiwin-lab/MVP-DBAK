import { pageMeta } from '@/lib/meta';
import { StoryPage } from '@/components/pages/StoryPage';

export const metadata = pageMeta(
  'story',
  'ms',
  'Kisah Kami',
  'DBAK, keluarganya, wasiat 1921, lapan jalur waris, dan erti wakaf Rumah Batu.'
);

export default function Page() {
  return <StoryPage lang="ms" />;
}
