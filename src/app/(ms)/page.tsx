import { pageMeta } from '@/lib/meta';
import { HomePage } from '@/components/pages/HomePage';

export const metadata = pageMeta(
  'home',
  'ms',
  'Rumah Batu — Waris DBAK · Lapan jalur, satu warisan',
  'Laman warisan rasmi Rumah Batu (1863) dan Waris Datu Bandar Abang Haji Muhammad Kassim, Kuching, Sarawak. Sejarah, lapan jalur keluarga, dan perjalanan pemulihan.'
);

export default function Page() {
  return <HomePage lang="ms" />;
}
