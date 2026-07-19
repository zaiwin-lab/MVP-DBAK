import { pageMeta } from '@/lib/meta';
import { ResourcesPage } from '@/components/pages/ResourcesPage';

export const metadata = pageMeta(
  'resources',
  'en',
  'Resources & Archive',
  'The W8-DBAK constitution, the 1921 will, the wakaf legal history, and family references.'
);

export default function Page() {
  return <ResourcesPage lang="en" />;
}
