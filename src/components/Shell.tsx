import type { ReactNode } from 'react';
import type { Lang } from '@/lib/i18n';
import { Header } from './Header';
import { Footer } from './Footer';

export function Shell({
  lang,
  altUrl,
  children,
}: {
  lang: Lang;
  altUrl: string;
  children: ReactNode;
}) {
  return (
    <>
      <Header lang={lang} altUrl={altUrl} />
      <main id="kandungan">{children}</main>
      <Footer lang={lang} />
    </>
  );
}
