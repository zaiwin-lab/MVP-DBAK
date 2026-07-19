import { pageMeta } from '@/lib/meta';
import { ResourcesPage } from '@/components/pages/ResourcesPage';

export const metadata = pageMeta(
  'resources',
  'ms',
  'Sumber & Arkib',
  'Perlembagaan W8-DBAK, teks wasiat 1921, sejarah perundangan wakaf, dan rujukan keluarga.'
);

export default function Page() {
  return <ResourcesPage lang="ms" />;
}
