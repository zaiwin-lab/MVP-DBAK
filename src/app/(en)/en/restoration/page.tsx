import { pageMeta } from '@/lib/meta';
import { RestorationPage } from '@/components/pages/RestorationPage';

export const metadata = pageMeta(
  'restoration',
  'en',
  'Restoration Journey',
  'How responsible heritage restoration works: the stages, honest statuses, and frequently asked questions.'
);

export default function Page() {
  return <RestorationPage lang="en" />;
}
