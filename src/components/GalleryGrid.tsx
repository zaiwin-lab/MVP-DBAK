'use client';

import { useState } from 'react';
import type { Lang } from '@/lib/i18n';
import { gallery, tagLabel, type GalleryTag } from '@/content/gallery';
import { Pic } from './Pic';

const TAGS: GalleryTag[] = [
  'sejarah',
  'keluarga',
  'aktiviti',
  'rumah-batu',
  'pemulihan',
  'komuniti',
];

/**
 * Filterable album grid. All photos are rendered server-side and remain
 * visible without JavaScript; the filter only hides non-matching items.
 */
export function GalleryGrid({ lang }: { lang: Lang }) {
  const [active, setActive] = useState<GalleryTag | null>(null);
  const all = lang === 'ms' ? 'Semua' : 'All';
  return (
    <div>
      <div
        role="group"
        aria-label={lang === 'ms' ? 'Tapis galeri' : 'Filter gallery'}
        className="flex flex-wrap gap-2"
      >
        <button
          type="button"
          onClick={() => setActive(null)}
          aria-pressed={active === null}
          className={`rounded-full border px-3.5 py-1 text-sm font-medium ${
            active === null
              ? 'border-green-700 bg-green-700 text-ivory'
              : 'border-ink/25 text-ink-soft hover:border-green-700 hover:text-green-700'
          }`}
        >
          {all}
        </button>
        {TAGS.map((tag) => (
          <button
            key={tag}
            type="button"
            onClick={() => setActive(tag)}
            aria-pressed={active === tag}
            className={`rounded-full border px-3.5 py-1 text-sm font-medium ${
              active === tag
                ? 'border-green-700 bg-green-700 text-ivory'
                : 'border-ink/25 text-ink-soft hover:border-green-700 hover:text-green-700'
            }`}
          >
            {tagLabel[tag][lang]}
          </button>
        ))}
      </div>

      <ul className="mt-8 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {gallery.map((item) => {
          const hidden = active !== null && !item.tags.includes(active);
          return (
            <li key={item.img} hidden={hidden}>
              <figure>
                <Pic
                  name={item.img}
                  alt={item.alt[lang]}
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  imgClassName={`w-full rounded-lg ${item.duotone ? 'duotone' : ''}`}
                />
                <figcaption className="mt-2.5">
                  <p className="leading-snug">{item.caption[lang]}</p>
                  <p className="mt-1 text-sm text-ink-soft">
                    {item.date[lang]} · {item.credit[lang]}
                  </p>
                </figcaption>
              </figure>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
