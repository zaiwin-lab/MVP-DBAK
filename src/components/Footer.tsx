import Link from 'next/link';
import { href, routes, type Lang } from '@/lib/i18n';
import { EightStar } from './Motif';

export function Footer({ lang }: { lang: Lang }) {
  const t = {
    tagline: {
      ms: 'Lapan jalur keluarga. Satu warisan bersama. Legasi yang hidup, dibawa bersama.',
      en: 'Eight family lines. One shared heritage. A living legacy carried forward together.',
    },
    address: { ms: 'Alamat urusan', en: 'Office address' },
    write: { ms: 'E-mel', en: 'Email' },
    privacy: {
      ms: 'Privasi: laman ini tidak menerbitkan data peribadi waris. Maklumat peribadi yang dikongsi melalui e-mel diurus mengikut Notis Perlindungan Data Peribadi W8-DBAK (Akta PDP 2010).',
      en: 'Privacy: this site publishes no personal data of heirs. Personal information shared by email is handled under the W8-DBAK Personal Data Protection Notice (PDPA 2010).',
    },
    rights: {
      ms: 'Jawatankuasa Pengurusan Wakaf Rumah Batu DBAK (W8-DBAK)',
      en: 'Rumah Batu DBAK Wakaf Management Committee (W8-DBAK)',
    },
  };
  return (
    <footer className="on-dark mt-20 bg-green-950 text-ivory">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex items-start gap-4">
          <span className="mt-1 text-gold">
            <EightStar size={30} />
          </span>
          <p className="max-w-xl font-display text-xl leading-snug">
            {t.tagline[lang]}
          </p>
        </div>

        <div className="mt-10 grid gap-8 sm:grid-cols-3">
          <nav aria-label={lang === 'ms' ? 'Pautan laman' : 'Site links'}>
            <ul className="space-y-1.5 text-green-300">
              {(
                [
                  'story',
                  'house',
                  'restoration',
                  'waris8',
                  'activities',
                ] as const
              ).map((key) => (
                <li key={key}>
                  <Link
                    href={href(key, lang)}
                    className="hover:text-ivory hover:underline"
                  >
                    {routes[key].label[lang]}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-label={lang === 'ms' ? 'Lagi pautan' : 'More links'}>
            <ul className="space-y-1.5 text-green-300">
              {(
                [
                  'gallery',
                  'news',
                  'resources',
                  'participate',
                  'contact',
                ] as const
              ).map((key) => (
                <li key={key}>
                  <Link
                    href={href(key, lang)}
                    className="hover:text-ivory hover:underline"
                  >
                    {routes[key].label[lang]}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="text-sm text-green-300">
            <p className="font-medium text-ivory">{t.address[lang]}</p>
            <p>
              Ground Floor, No. 98, Lot 14537,
              <br />
              Pusat Komersil SWAN, Jalan Matang,
              <br />
              93050 Kuching, Sarawak
            </p>
            <p className="mt-3">
              <span className="font-medium text-ivory">{t.write[lang]}: </span>
              <a href="mailto:maklum@w8dbak.com" className="underline">
                maklum@w8dbak.com
              </a>
            </p>
          </div>
        </div>

        <p className="mt-10 max-w-3xl text-sm leading-relaxed text-green-300">
          {t.privacy[lang]}
        </p>
        <p className="mt-4 text-sm text-green-300">
          © {new Date().getFullYear()} {t.rights[lang]}
        </p>
      </div>
    </footer>
  );
}
