import { pageMeta } from '@/lib/meta';
import { ContactPage } from '@/components/pages/ContactPage';

export const metadata = pageMeta(
  'contact',
  'en',
  'Contact',
  'Official email, office address, the location of Rumah Batu and Waris DBAK family channels.'
);

export default function Page() {
  return <ContactPage lang="en" />;
}
