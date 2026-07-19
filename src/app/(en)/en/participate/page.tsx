import { pageMeta } from '@/lib/meta';
import { ParticipatePage } from '@/components/pages/ParticipatePage';

export const metadata = pageMeta(
  'participate',
  'en',
  'Participate',
  'Contribute a memory, identify a photograph, volunteer expertise, or register heir interest.'
);

export default function Page() {
  return <ParticipatePage lang="en" />;
}
