import type { Lang } from '@/lib/i18n';
import { Pic } from './Pic';

/**
 * Then-and-now: honest side-by-side pairing, fully usable without JavaScript.
 */
export function ThenNow({ lang }: { lang: Lang }) {
  const t = {
    then: { ms: 'Dahulu — awal abad ke-20', en: 'Then — early 20th century' },
    now: { ms: 'Kini — 2020', en: 'Now — 2020' },
    thenAlt: {
      ms: 'Rumah Batu pada awal abad ke-20: rumah dua tingkat bertiang dengan beranda panjang',
      en: 'Rumah Batu in the early 20th century: a two-storey colonnaded house with long verandahs',
    },
    nowAlt: {
      ms: 'Rumah Batu pada tahun 2020, dinding putih dan beranda hijau dikelilingi tumbuhan',
      en: 'Rumah Batu in 2020, white walls and green verandahs surrounded by greenery',
    },
    credit: {
      ms: 'Foto: arkib keluarga W8-DBAK',
      en: 'Photos: W8-DBAK family archive',
    },
  };
  return (
    <figure>
      <div className="grid gap-4 sm:grid-cols-2">
      <div>
        <Pic
          name="rumah-batu-historic"
          alt={t.thenAlt[lang]}
          sizes="(min-width: 640px) 50vw, 100vw"
          imgClassName="w-full rounded-lg duotone"
        />
        <p className="mt-2 text-sm font-medium text-ink-soft">{t.then[lang]}</p>
      </div>
      <div>
        <Pic
          name="rumah-batu-2020"
          alt={t.nowAlt[lang]}
          sizes="(min-width: 640px) 50vw, 100vw"
          imgClassName="w-full rounded-lg"
        />
        <p className="mt-2 text-sm font-medium text-ink-soft">{t.now[lang]}</p>
      </div>
      </div>
      <figcaption className="mt-2 text-sm text-ink-soft">
        {t.credit[lang]}
      </figcaption>
    </figure>
  );
}
