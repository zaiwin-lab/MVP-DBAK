import type { Metadata } from 'next';
import { literata, alegreya } from '@/lib/fonts';
import { SITE_URL } from '@/lib/i18n';
import '../globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Rumah Batu — Waris DBAK',
    template: '%s · Rumah Batu — Waris DBAK',
  },
  description:
    'Lapan jalur keluarga. Satu warisan bersama. Laman rasmi warisan Rumah Batu dan Waris Datu Bandar Abang Haji Muhammad Kassim (W8-DBAK), Kuching, Sarawak.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ms" className={`${literata.variable} ${alegreya.variable}`}>
      <body>{children}</body>
    </html>
  );
}
