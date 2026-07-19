import { pageMeta } from '@/lib/meta';
import { ParticipatePage } from '@/components/pages/ParticipatePage';

export const metadata = pageMeta(
  'participate',
  'ms',
  'Turut Serta',
  'Sumbangkan kenangan, kenal pasti gambar, tawarkan kepakaran, atau daftar minat waris.'
);

export default function Page() {
  return <ParticipatePage lang="ms" />;
}
