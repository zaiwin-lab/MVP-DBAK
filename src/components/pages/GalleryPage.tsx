import { altHref, type Lang } from '@/lib/i18n';
import { Shell } from '@/components/Shell';
import { GalleryGrid } from '@/components/GalleryGrid';

const copy = {
  title: { ms: 'Galeri', en: 'Gallery' },
  lede: {
    ms: 'Album terpilih daripada arkib keluarga: setiap gambar dengan tarikh, keterangan dan kredit. Koleksi ini akan berkembang setelah semakan arkib dan kelulusan keluarga.',
    en: 'Curated albums from the family archive: every photograph with its date, caption and credit. The collection will grow as archive review and family approvals continue.',
  },
  note: {
    ms: 'Semua imej di sini pernah diterbitkan oleh keluarga di saluran awamnya. Gambar yang mengandungi maklumat peribadi atau belum mendapat persetujuan tidak dipaparkan.',
    en: 'Every image here was previously published by the family on its own public channels. Photographs containing personal information or awaiting consent are not shown.',
  },
};

export function GalleryPage({ lang }: { lang: Lang }) {
  const t = <T,>(b: { ms: T; en: T }): T => b[lang];
  return (
    <Shell lang={lang} altUrl={altHref('gallery', lang)}>
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <header className="max-w-3xl">
          <h1 className="font-display [font-size:var(--text-fluid-hero)]">
            {t(copy.title)}
          </h1>
          <p className="mt-4 text-xl text-ink-soft">{t(copy.lede)}</p>
          <p className="mt-3 text-sm text-ink-soft">{t(copy.note)}</p>
        </header>
        <div className="mt-10">
          <GalleryGrid lang={lang} />
        </div>
      </div>
    </Shell>
  );
}
