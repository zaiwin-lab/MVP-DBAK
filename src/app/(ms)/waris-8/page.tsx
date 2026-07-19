import { pageMeta } from '@/lib/meta';
import { Waris8Page } from '@/components/pages/Waris8Page';

export const metadata = pageMeta(
  'waris8',
  'ms',
  'Waris 8',
  'Lapan jalur keturunan DBAK, perwakilan dua wakil sejalur, dan penjagaan bersama yang mengutamakan privasi.'
);

export default function Page() {
  return <Waris8Page lang="ms" />;
}
