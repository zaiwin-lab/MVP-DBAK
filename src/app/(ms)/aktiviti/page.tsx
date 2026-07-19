import { pageMeta } from '@/lib/meta';
import { ActivitiesPage } from '@/components/pages/ActivitiesPage';

export const metadata = pageMeta(
  'activities',
  'ms',
  'Aktiviti & Pencapaian',
  'Dari perhimpunan 2020 dan majlis 100 tahun wasiat hingga Ramah Tamah Bersama Premier Sarawak 2025.'
);

export default function Page() {
  return <ActivitiesPage lang="ms" />;
}
