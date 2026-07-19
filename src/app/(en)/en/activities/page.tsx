import { pageMeta } from '@/lib/meta';
import { ActivitiesPage } from '@/components/pages/ActivitiesPage';

export const metadata = pageMeta(
  'activities',
  'en',
  'Activities & Milestones',
  'From the 2020 regathering and the will’s centenary to the 2025 Ramah Tamah with the Premier of Sarawak.'
);

export default function Page() {
  return <ActivitiesPage lang="en" />;
}
