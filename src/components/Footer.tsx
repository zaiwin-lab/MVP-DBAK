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

      </div>
      <div className="bg-[oklch(0.14_0.008_160)] py-4">
        <p className="mx-auto max-w-6xl px-4 text-center text-xs font-light tracking-[0.14em] text-ivory/55 sm:px-6">
          A Digital Legacy by Zaiwin &amp;{' '}
          <a
            href="https://www.kobisberhad.com"
            target="_blank"
            rel="noopener"
            className="text-gold/85 transition-all duration-300 hover:text-gold hover:tracking-[0.2em] hover:[text-shadow:0_0_16px_rgba(222,184,85,0.6)]"
          >
            KOBIS
          </a>{' '}
          team
        </p>
      </div>
    </footer>
  );
}
