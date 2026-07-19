import { pageMeta } from '@/lib/meta';
import { HousePage } from '@/components/pages/HousePage';

export const metadata = pageMeta(
  'house',
  'ms',
  'Rumah Batu',
  'Seni bina, peranan sosial, tapak dan status Rumah Batu di Jalan Datuk Ajibah Abol, Kuching — dahulu dan kini.'
);

export default function Page() {
  return <HousePage lang="ms" />;
}
