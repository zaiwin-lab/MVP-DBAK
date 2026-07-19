import { pageMeta } from '@/lib/meta';
import { Waris8Page } from '@/components/pages/Waris8Page';

export const metadata = pageMeta(
  'waris8',
  'en',
  'Waris 8 — the eight lines',
  'The eight lines of DBAK, two representatives per line, and privacy-first shared stewardship.'
);

export default function Page() {
  return <Waris8Page lang="en" />;
}
