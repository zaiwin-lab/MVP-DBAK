import { altHref, type Lang } from '@/lib/i18n';
import { Shell } from '@/components/Shell';
import { Pic } from '@/components/Pic';
import { Divider } from '@/components/Motif';
import { Timeline } from '@/components/Timeline';
import { SourceNote } from '@/components/SourceNote';
import { historicTimeline } from '@/content/timeline';
import { rememberedChildren } from '@/content/waris8';
import { JsonLd, personLd } from '@/components/JsonLd';

const copy = {
  title: { ms: 'Kisah Kami', en: 'Our Story' },
  lede: {
    ms: 'Kisah seorang Datu Bandar, sebuah rumah batu, sepucuk wasiat, dan lapan jalur keturunan yang mewarisi amanahnya.',
    en: 'The story of a Datu Bandar, a stone house, a will, and the eight family lines who inherited his amanah.',
  },
  dbakH: { ms: 'Datu Bandar Abang Haji Muhammad Kassim', en: 'Datu Bandar Abang Haji Muhammad Kassim' },
  dbak1: {
    ms: 'DBAK dilahirkan pada tahun 1841, putera kepada Datu Bandar Abang Haji Bolhassan bin Datu Patinggi Abang Ali dan Dayang Aisah binti Abang Wahid. Beliau mewarisi bukan sahaja gelaran Datu Bandar, malah tanggungjawab terhadap masyarakat Melayu Kuching pada zamannya.',
    en: 'DBAK was born in 1841, son of Datu Bandar Abang Haji Bolhassan bin Datu Patinggi Abang Ali and Dayang Aisah binti Abang Wahid. He inherited not only the title of Datu Bandar but a responsibility to the Malay community of Kuching in his time.',
  },
  dbak2: {
    ms: 'Bersama isterinya, Dayang Sahadah binti Datu Patinggi Abang Haji Ghapor (lahir 1845), beliau membesarkan tiga belas orang anak di Rumah Batu. Pada 18 Julai 1921, ketika menunaikan fardhu haji, DBAK kembali ke rahmatullah di Mekah pada usia 80 tahun. Dayang Sahadah menyusul dua hari kemudian, pada 20 Julai 1921. Kedua-duanya disemadikan di Tanah Suci.',
    en: 'With his wife, Dayang Sahadah binti Datu Patinggi Abang Haji Ghapor (born 1845), he raised thirteen children at Rumah Batu. On 18 July 1921, while performing the Hajj, DBAK passed away in Mecca at the age of 80. Dayang Sahadah followed two days later, on 20 July 1921. Both were laid to rest in the Holy Land.',
  },
  portraitAlt: {
    ms: 'Potret studio hitam putih Datu Bandar Abang Haji Muhammad Kassim dalam pakaian rasmi',
    en: 'Black-and-white studio portrait of Datu Bandar Abang Haji Muhammad Kassim in ceremonial dress',
  },
  portraitCap: {
    ms: '"The Late Datu Bandar Abg Haji Mohd Kassim" · Arkib keluarga W8-DBAK',
    en: '"The Late Datu Bandar Abg Haji Mohd Kassim" · W8-DBAK family archive',
  },
  willH: { ms: 'Wasiat 1921', en: 'The will of 1921' },
  will1: {
    ms: 'Pada 22 Rejab 1339 — bersamaan 31 Mac 1921 — DBAK menulis wasiatnya. Dalam bahasa yang ringkas dan penuh hikmah, beliau menetapkan bahawa harta akan berpindah kepada anak-anaknya dengan bahagian sama rata antara lelaki dan perempuan, dan bahagian anak yang telah tiada tanpa zuriat "dibuat wakaf pada rumah atau kebun dan mana-mana sahaja yang patut diwakafkan."',
    en: 'On 22 Rejab 1339 — 31 March 1921 — DBAK wrote his will. In plain, wise language he provided that his estate would pass to his children in equal shares between sons and daughters, and that the shares of children who had died without issue were to "be made wakaf upon the house or the gardens, and whatever else is fitting to be endowed."',
  },
  willQuote: {
    ms: '"Fasal bahagian sama banyak laki-laki dengan bahagian perempuan… mana-mana yang sudah mati tiada meninggal anak — bahagian mereka dibuat wakaf pada rumah atau kebun dan mana-mana sahaja yang patut diwakafkan — ini sahaja adanya."',
    en: '"The shares shall be equal, sons with daughters… and for any who have died leaving no child, their share shall be made wakaf upon the house or the gardens, and whatever else is fitting to be endowed. This, and only this."',
  },
  willQuoteCap: {
    ms: 'Petikan wasiat DBAK, 31 Mac 1921 (terjemahan penuh di halaman Sumber)',
    en: 'From the will of DBAK, 31 March 1921 (English rendering; full text on the Resources page)',
  },
  eightH: { ms: 'Tiga belas anak, lapan jalur', en: 'Thirteen children, eight lines' },
  eight1: {
    ms: 'Berdasarkan wasiat 1921, butiran kes mahkamah 1946 dan capaian Sarawak Gazette 1921, DBAK mempunyai tiga belas orang anak; lima meninggal dunia semasa hayat beliau. Lapan yang tinggal itulah asal "Waris 8" — lapan jalur keturunan yang kini menganggotai ribuan waris.',
    en: 'From the 1921 will, the 1946 court records and the 1921 Sarawak Gazette, DBAK had thirteen children; five died within his lifetime. The eight who remained are the origin of "Waris 8" — eight lines of descent that today number thousands of heirs.',
  },
  remembered: {
    ms: 'Dikenang bersama: lima adik-beradik yang pergi mendahului DBAK —',
    en: 'Remembered alongside them: the five siblings who went before DBAK —',
  },
  wakafH: { ms: 'Erti wakaf', en: 'The meaning of wakaf' },
  wakaf1: {
    ms: 'Wakaf ialah amanah: harta yang ditahan daripada jual beli supaya manfaatnya kekal untuk tujuan yang ditetapkan. Bagi Rumah Batu, deklarasi lapan beradik pada November 1922 menjadikannya wakaf ahli — wakaf keluarga — untuk kepentingan semua waris, bukan milik mana-mana individu.',
    en: 'Wakaf is a trust: property held back from sale so that its benefit endures for a stated purpose. For Rumah Batu, the declaration of the eight siblings in November 1922 made it a family wakaf, held for the benefit of all the heirs, the property of no single person.',
  },
  wakaf2: {
    ms: 'Prinsip itu diuji dan disahkan: Mahkamah Residen (22 Julai 1946), Mahkamah Agung (2 September 1946), dan sekali lagi oleh Mahkamah Syariah pada 2016. Rumah Batu tidak boleh dijual atau dilupuskan; kewajipan mentadbirnya dipikul bersama oleh semua waris. Sejarah perundangan penuh dibentangkan tanpa ringkasan berlebihan di halaman Sumber.',
    en: 'That principle has been tested and confirmed: by the Resident Court (22 July 1946), the Supreme Court (2 September 1946), and again by the Syariah Court in 2016. Rumah Batu cannot be sold or disposed of; the duty of caring for it rests with all the heirs together. The full legal history is set out without over-simplification on the Resources page.',
  },
  tlH: { ms: 'Garis masa sejarah', en: 'Historical timeline' },
};

export function StoryPage({ lang }: { lang: Lang }) {
  const t = <T,>(b: { ms: T; en: T }): T => b[lang];
  return (
    <Shell lang={lang} altUrl={altHref('story', lang)}>
      <JsonLd data={personLd} />
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <header className="max-w-3xl">
          <h1 className="font-display [font-size:var(--text-fluid-hero)]">
            {t(copy.title)}
          </h1>
          <p className="mt-4 text-xl text-ink-soft">{t(copy.lede)}</p>
        </header>

        <div className="mt-12 grid gap-10 lg:grid-cols-3">
          <article className="prose-flow lg:col-span-2">
            <h2>{t(copy.dbakH)}</h2>
            <p>{t(copy.dbak1)}</p>
            <p>{t(copy.dbak2)}</p>
            <SourceNote source="family" lang={lang} />

            <h2>{t(copy.willH)}</h2>
            <p>{t(copy.will1)}</p>
            <blockquote className="border-l-0 bg-surface p-6 rounded-xl">
              <p className="font-display text-lg italic leading-relaxed">
                {t(copy.willQuote)}
              </p>
              <footer className="mt-3 text-sm text-ink-soft">
                {t(copy.willQuoteCap)}
              </footer>
            </blockquote>
            <SourceNote source="document" lang={lang} />

            <h2>{t(copy.eightH)}</h2>
            <p>{t(copy.eight1)}</p>
            <p className="text-ink-soft">
              {t(copy.remembered)} {rememberedChildren.join(' · ')}.
            </p>
            <SourceNote source="court" lang={lang} />

            <h2>{t(copy.wakafH)}</h2>
            <p>{t(copy.wakaf1)}</p>
            <p>{t(copy.wakaf2)}</p>
          </article>

          <aside>
            <figure className="lg:sticky lg:top-6">
              <Pic
                name="dbak-portrait"
                alt={t(copy.portraitAlt)}
                sizes="(min-width: 1024px) 30vw, 60vw"
                imgClassName="mx-auto w-full max-w-xs rounded-lg duotone lg:max-w-none"
              />
              <figcaption className="mt-2 text-sm text-ink-soft">
                {t(copy.portraitCap)}
              </figcaption>
            </figure>
          </aside>
        </div>

        <Divider className="my-14" />

        <section>
          <h2 className="font-display [font-size:var(--text-fluid-h2)]">
            {t(copy.tlH)}
          </h2>
          <div className="mt-8">
            <Timeline entries={historicTimeline} lang={lang} />
          </div>
        </section>
      </div>
    </Shell>
  );
}
