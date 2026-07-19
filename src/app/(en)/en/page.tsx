import { pageMeta } from '@/lib/meta';
import { HomePage } from '@/components/pages/HomePage';

export const metadata = pageMeta(
  'home',
  'en',
  'Rumah Batu — Waris DBAK · Eight lines, one heritage',
  'The heritage home of Rumah Batu (1863) and the heirs of Datu Bandar Abang Haji Muhammad Kassim, Kuching, Sarawak. History, the eight family lines, and the restoration journey.'
);

export default function Page() {
  return <HomePage lang="en" />;
}
