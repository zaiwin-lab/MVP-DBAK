import { pageMeta } from '@/lib/meta';
import { HousePage } from '@/components/pages/HousePage';

export const metadata = pageMeta(
  'house',
  'en',
  'Rumah Batu — the house',
  'The architecture, social role, site and status of Rumah Batu on Jalan Datuk Ajibah Abol, Kuching — then and now.'
);

export default function Page() {
  return <HousePage lang="en" />;
}
