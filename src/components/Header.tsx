import Link from 'next/link';
import { href, routes, type Lang, type RouteKey } from '@/lib/i18n';

const NAV: RouteKey[] = [
  'story',
  'house',
  'restoration',
  'waris8',
  'activities',
  'gallery',
  'news',
  'resources',
  'participate',
  'contact',
];

export function Header({
  lang,
  altUrl,
}: {
  lang: Lang;
  altUrl: string;
}) {
  const skip = lang === 'ms' ? 'Terus ke kandungan' : 'Skip to content';
  return (
    <header className="border-b border-ink/10 bg-bg">
      <a
        href="#kandungan"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-green-700 focus:px-4 focus:py-2 focus:text-ivory"
      >
        {skip}
      </a>
      <div className="relative mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-6 gap-y-3 px-4 py-4 sm:px-6">
        <Link
          href={href('home', lang)}
          className="flex items-center gap-3 no-underline"
        >
          <img
            src="/images/logo-wakaf-dbak-192.png"
            alt={
              lang === 'ms'
                ? 'Logo rasmi Wakaf DBAK'
                : 'Official Wakaf DBAK seal'
            }
            width={44}
            height={44}
            className="h-11 w-11"
          />
          <span className="leading-tight">
            <strong className="block font-display text-lg tracking-tight text-green-900">
              Rumah Batu
            </strong>
            <span className="block text-sm text-ink-soft">
              Waris DBAK · Kuching, Sarawak
            </span>
          </span>
        </Link>

        <div className="flex items-center gap-4">
          <a
            href={altUrl}
            hrefLang={lang === 'ms' ? 'en' : 'ms'}
            lang={lang === 'ms' ? 'en' : 'ms'}
            className="rounded border border-green-700 px-2.5 py-1 text-sm font-medium text-green-700 hover:bg-green-700 hover:text-ivory"
          >
            {lang === 'ms' ? 'English' : 'Bahasa Melayu'}
          </a>

          {/* No-JS mobile menu */}
          <details className="nav-details md:hidden">
            <summary
              className="rounded border border-ink/20 px-3 py-1.5 text-sm font-medium"
              aria-label={lang === 'ms' ? 'Menu utama' : 'Main menu'}
            >
              Menu
            </summary>
            <nav
              aria-label={lang === 'ms' ? 'Navigasi utama' : 'Main navigation'}
              className="absolute right-4 z-40 mt-2 w-64 max-w-[calc(100vw-2rem)] rounded-lg border border-ink/10 bg-bg p-2 shadow-lg sm:right-6"
            >
              <ul>
                {NAV.map((key) => (
                  <li key={key}>
                    <Link
                      href={href(key, lang)}
                      className="block rounded px-3 py-2 hover:bg-surface"
                    >
                      {routes[key].label[lang]}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </details>
        </div>

        <nav
          aria-label={lang === 'ms' ? 'Navigasi utama' : 'Main navigation'}
          className="hidden w-full md:block"
        >
          <ul className="flex flex-wrap gap-x-5 gap-y-1 text-[0.95rem]">
            {NAV.map((key) => (
              <li key={key}>
                <Link
                  href={href(key, lang)}
                  className="text-ink-soft underline-offset-4 hover:text-green-700 hover:underline"
                >
                  {routes[key].label[lang]}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
