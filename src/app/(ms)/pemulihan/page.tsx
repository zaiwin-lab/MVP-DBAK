import { pageMeta } from '@/lib/meta';
import { RestorationPage } from '@/components/pages/RestorationPage';

export const metadata = pageMeta(
  'restoration',
  'ms',
  'Perjalanan Pemulihan',
  'Bagaimana pemuliharaan warisan yang bertanggungjawab berjalan: peringkat, status jujur, dan soalan lazim.'
);

export default function Page() {
  return <RestorationPage lang="ms" />;
}
