import { pageMeta } from '@/lib/meta';
import { ContactPage } from '@/components/pages/ContactPage';

export const metadata = pageMeta(
  'contact',
  'ms',
  'Hubungi Kami',
  'E-mel rasmi, alamat urusan, lokasi Rumah Batu dan saluran keluarga Waris DBAK.'
);

export default function Page() {
  return <ContactPage lang="ms" />;
}
