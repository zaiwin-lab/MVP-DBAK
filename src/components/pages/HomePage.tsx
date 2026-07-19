import Link from 'next/link';
import { href, altHref, type Lang } from '@/lib/i18n';
import { Shell } from '@/components/Shell';
import { Pic } from '@/components/Pic';
import { Divider, EightStar } from '@/components/Motif';
import { Timeline } from '@/components/Timeline';
import { PhaseTracker } from '@/components/PhaseTracker';
import { Waris8Diagram } from '@/components/Waris8Diagram';
import { ThenNow } from '@/components/ThenNow';
import { historicTimeline, renewalTimeline } from '@/content/timeline';
import { updates } from '@/content/updates';
import { JsonLd, organizationLd, placeLd } from '@/components/JsonLd';

const copy = {
  heroKicker: {
    ms: 'Rumah Batu · Kuching, Sarawak · sejak 1863',
    en: 'Rumah Batu · Kuching, Sarawak · since 1863',
  },
  heroTitle: {
    ms: 'Lapan jalur keluarga. Satu warisan bersama.',
    en: 'Eight family lines. One shared heritage.',
  },
  heroSub: {
    ms: 'Legasi Datu Bandar Abang Haji Muhammad Kassim yang hidup, dibawa bersama oleh setiap generasi.',
    en: 'The living legacy of Datu Bandar Abang Haji Muhammad Kassim, carried forward together by every generation.',
  },
  ctaStory: { ms: 'Terokai kisahnya', en: 'Explore the story' },
  ctaRestoration: { ms: 'Ikuti pemulihan', en: 'Follow the restoration' },
  heroCaption: {
    ms: 'Majlis Ramah Tamah Bersama Premier Sarawak, 19 April 2025 · Arkib keluarga W8-DBAK',
    en: 'Ramah Tamah with the Premier of Sarawak, 19 April 2025 · W8-DBAK family archive',
  },

  whyTitle: { ms: 'Mengapa ia penting', en: 'Why it matters' },
  pillars: {
    ms: [
      {
        t: 'Warisan',
        b: 'Sebuah rumah batu yang didirikan pada 1863, antara kediaman bangsawan Melayu terawal di Sarawak yang dibina daripada konkrit dan batu bata, menurut riwayat keluarga.',
      },
      {
        t: 'Keluarga',
        b: 'Tiga belas anak, lapan yang meneruskan zuriat, dan kini ribuan waris merentas tujuh generasi di seluruh dunia.',
      },
      {
        t: 'Wakaf',
        b: 'Amanah yang termeterai dalam wasiat 1921 dan deklarasi 1922, disahkan mahkamah pada 1946 dan dikekalkan pada 2016: rumah ini untuk semua waris.',
      },
      {
        t: 'Masa Depan',
        b: 'Pemulihan yang sabar dan terancang, supaya generasi akan datang dapat berdiri di beranda yang sama.',
      },
    ],
    en: [
      {
        t: 'Heritage',
        b: 'A stone house raised in 1863, by family account among the earliest Sarawak Malay noble homes built of concrete and brick.',
      },
      {
        t: 'Family',
        b: 'Thirteen children, eight who carried the line, and now thousands of heirs across seven generations worldwide.',
      },
      {
        t: 'Wakaf',
        b: 'A trust sealed in the 1921 will and the 1922 declaration, confirmed by the courts in 1946 and upheld in 2016: this house belongs to all the heirs.',
      },
      {
        t: 'Future',
        b: 'Patient, documented restoration, so the generations to come can stand on the same verandah.',
      },
    ],
  },

  arcTitle: { ms: 'Garis masa yang hidup', en: 'A living timeline' },
  arcLede: {
    ms: 'Dari tangan pengasasnya pada 1863 hingga perhimpunan semula lapan jalur hari ini.',
    en: 'From its founder’s hands in 1863 to the regathering of the eight lines today.',
  },
  arcMore: { ms: 'Baca sejarah penuh', en: 'Read the full history' },

  thenNowTitle: { ms: 'Dahulu dan kini', en: 'Then and now' },
  thenNowLede: {
    ms: 'Rumah yang sama, seratus tahun bezanya. Kemegahannya menanti untuk dikembalikan.',
    en: 'The same house, a hundred years apart. Its dignity waits to be returned.',
  },

  journeyTitle: { ms: 'Perjalanan pemulihan', en: 'The restoration journey' },
  journeyLede: {
    ms: 'Pemuliharaan warisan yang bertanggungjawab berjalan berperingkat. Status setiap peringkat dinyatakan dengan jujur, tanpa peratusan rekaan.',
    en: 'Responsible heritage work happens in stages. Each stage’s status is stated honestly, with no invented percentages.',
  },
  journeyMore: {
    ms: 'Fahami setiap peringkat',
    en: 'Understand every stage',
  },

  warisTitle: { ms: 'Waris 8', en: 'The eight lines' },
  warisLede: {
    ms: 'Lapan anak DBAK, lapan jalur keturunan, satu amanah. Kenali jalur anda dan ambil tempat anda dalam kisah ini.',
    en: 'Eight children of DBAK, eight lines of descent, one amanah. Find your line and take your place in this story.',
  },
  warisMore: { ms: 'Kenali lapan jalur', en: 'Meet the eight lines' },

  achievedTitle: {
    ms: 'Apa yang telah kita capai bersama',
    en: 'What we have achieved together',
  },
  achievedLede: {
    ms: 'Sejak 2020: perhimpunan semula, perlembagaan, majlis seratus tahun wasiat, projek pangkalan data, dan dokumentasi rumah.',
    en: 'Since 2020: a regathering, a constitution, the will’s centenary, a family database project, and documentation of the house.',
  },

  featuredTitle: {
    ms: 'Detik 2025: Ramah Tamah Bersama Premier Sarawak',
    en: 'The 2025 moment: Ramah Tamah with the Premier of Sarawak',
  },
  featuredBody: {
    ms: 'Pada 19 April 2025, dewan yang penuh dengan wajah kelapan-lapan jalur menjadi bukti bahawa warisan ini hidup. Dari generasi yang mengenali rumah itu sendiri hingga cucu-cicit yang baru mengenal namanya, semuanya dalam satu gambar.',
    en: 'On 19 April 2025, a hall filled with faces from all eight lines was proof that this heritage lives. From the generation who knew the house itself to great-grandchildren just learning its name, all in one photograph.',
  },
  featuredMore: { ms: 'Baca kisahnya', en: 'Read the story' },

  updatesTitle: { ms: 'Kemas kini terbaru', en: 'Latest updates' },
  updatesMore: { ms: 'Semua berita', en: 'All updates' },

  closeTitle: {
    ms: 'Warisan ini menanti tangan anda',
    en: 'This heritage is waiting for your hands',
  },
  closeBody: {
    ms: 'Sumbangkan kenangan, kenal pasti wajah dalam gambar lama, tawarkan kepakaran, atau sekadar hadir di majlis akan datang. Setiap waris ada tempat dalam kisah ini.',
    en: 'Contribute a memory, identify a face in an old photograph, volunteer your expertise, or simply be present at the next gathering. Every heir has a place in this story.',
  },
  closeCta: { ms: 'Lihat cara turut serta', en: 'See how to take part' },
};

export function HomePage({ lang }: { lang: Lang }) {
  const t = <T,>(b: { ms: T; en: T }): T => b[lang];
  return (
    <Shell lang={lang} altUrl={altHref('home', lang)}>
      <JsonLd data={organizationLd} />
      <JsonLd data={placeLd} />
      {/* 1 · Hero */}
      <section className="on-dark relative isolate min-h-[82svh] overflow-hidden bg-green-950">
        <Pic
          name="ramah-tamah-2025"
          alt={t(copy.heroCaption)}
          sizes="100vw"
          priority
          imgClassName="absolute inset-0 h-full w-full object-cover opacity-60"
          className="absolute inset-0 -z-10"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-gradient-to-t from-green-950 via-green-950/60 to-green-950/20"
        />
        <div className="mx-auto flex min-h-[82svh] max-w-6xl flex-col justify-end px-4 pb-14 pt-24 sm:px-6">
          <p className="hero-rise text-[0.95rem] font-medium tracking-wide text-green-300">
            {t(copy.heroKicker)}
          </p>
          <h1 className="hero-rise mt-3 max-w-3xl font-display text-ivory [font-size:var(--text-fluid-hero)]">
            {t(copy.heroTitle)}
          </h1>
          <p className="hero-rise-late mt-4 max-w-2xl text-lg text-ivory/90">
            {t(copy.heroSub)}
          </p>
          <div className="hero-rise-late mt-8 flex flex-wrap gap-3">
            <Link
              href={href('story', lang)}
              className="rounded-md bg-gold px-5 py-2.5 font-medium text-green-950 hover:bg-ivory"
            >
              {t(copy.ctaStory)}
            </Link>
            <Link
              href={href('restoration', lang)}
              className="rounded-md border border-ivory/70 px-5 py-2.5 font-medium text-ivory hover:bg-ivory hover:text-green-950"
            >
              {t(copy.ctaRestoration)}
            </Link>
          </div>
          <p className="hero-rise-late mt-6 text-sm text-ivory/70">
            {t(copy.heroCaption)}
          </p>
        </div>
      </section>

      {/* 2 · Why it matters */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <h2 className="font-display [font-size:var(--text-fluid-h2)]">
          {t(copy.whyTitle)}
        </h2>
        <div className="mt-8 grid gap-x-10 gap-y-8 sm:grid-cols-2">
          {t(copy.pillars).map((p) => (
            <div key={p.t} className="border-t border-gold/50 pt-4">
              <h3 className="font-display text-xl text-green-900">{p.t}</h3>
              <p className="mt-2 max-w-prose">{p.b}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3 · Living timeline */}
      <section className="bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <h2 className="font-display [font-size:var(--text-fluid-h2)]">
            {t(copy.arcTitle)}
          </h2>
          <p className="mt-2 max-w-prose text-lg">{t(copy.arcLede)}</p>
          <div className="mt-10 grid gap-12 lg:grid-cols-2">
            <Timeline entries={historicTimeline.slice(1, 5)} lang={lang} />
            <Timeline
              entries={[
                renewalTimeline[0],
                renewalTimeline[2],
                renewalTimeline[6],
              ]}
              lang={lang}
            />
          </div>
          <p className="mt-8">
            <Link
              href={href('story', lang)}
              className="font-medium text-green-700 underline underline-offset-4 hover:text-green-900"
            >
              {t(copy.arcMore)} →
            </Link>
          </p>
        </div>
      </section>

      {/* 4 · Then and now */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <h2 className="font-display [font-size:var(--text-fluid-h2)]">
          {t(copy.thenNowTitle)}
        </h2>
        <p className="mt-2 max-w-prose text-lg">{t(copy.thenNowLede)}</p>
        <div className="mt-8">
          <ThenNow lang={lang} />
        </div>
      </section>

      {/* 5 · Restoration journey */}
      <section className="bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <h2 className="font-display [font-size:var(--text-fluid-h2)]">
            {t(copy.journeyTitle)}
          </h2>
          <p className="mt-2 max-w-prose text-lg">{t(copy.journeyLede)}</p>
          <div className="mt-8">
            <PhaseTracker lang={lang} />
          </div>
          <p className="mt-8">
            <Link
              href={href('restoration', lang)}
              className="font-medium text-green-700 underline underline-offset-4 hover:text-green-900"
            >
              {t(copy.journeyMore)} →
            </Link>
          </p>
        </div>
      </section>

      {/* 6 · Waris 8 */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <Divider />
          <h2 className="mt-6 font-display [font-size:var(--text-fluid-h2)]">
            {t(copy.warisTitle)}
          </h2>
          <p className="mt-2 text-lg">{t(copy.warisLede)}</p>
        </div>
        <div className="mt-10">
          <Waris8Diagram lang={lang} />
        </div>
        <p className="mt-8 text-center">
          <Link
            href={href('waris8', lang)}
            className="font-medium text-green-700 underline underline-offset-4 hover:text-green-900"
          >
            {t(copy.warisMore)} →
          </Link>
        </p>
      </section>

      {/* 7 · Achieved together + 8 · Featured 2025 */}
      <section className="on-dark bg-green-950 text-ivory">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <h2 className="font-display [font-size:var(--text-fluid-h2)]">
            {t(copy.achievedTitle)}
          </h2>
          <p className="mt-2 max-w-prose text-lg text-green-300">
            {t(copy.achievedLede)}
          </p>
          <div className="mt-10 grid items-start gap-8 lg:grid-cols-5">
            <figure className="lg:col-span-3">
              <Pic
                name="ramah-tamah-2025"
                alt={t(copy.heroCaption)}
                sizes="(min-width: 1024px) 60vw, 100vw"
                imgClassName="w-full rounded-lg"
              />
              <figcaption className="mt-2 text-sm text-green-300">
                {t(copy.heroCaption)}
              </figcaption>
            </figure>
            <div className="lg:col-span-2">
              <h3 className="font-display text-2xl leading-snug">
                {t(copy.featuredTitle)}
              </h3>
              <p className="mt-3 text-ivory/90">{t(copy.featuredBody)}</p>
              <p className="mt-5">
                <Link
                  href={`${href('news', lang)}#ramah-tamah-premier-2025`}
                  className="font-medium text-gold underline underline-offset-4 hover:text-ivory"
                >
                  {t(copy.featuredMore)} →
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 9 · Latest updates */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <h2 className="font-display [font-size:var(--text-fluid-h2)]">
          {t(copy.updatesTitle)}
        </h2>
        <ul className="mt-8 grid gap-6 md:grid-cols-3">
          {updates.slice(0, 3).map((u) => (
            <li key={u.slug} className="border-t border-gold/50 pt-4">
              <p className="text-sm text-ink-soft">{u.dateLabel[lang]}</p>
              <h3 className="mt-1 font-display text-xl leading-snug">
                <Link
                  href={`${href('news', lang)}#${u.slug}`}
                  className="hover:text-green-700 hover:underline"
                >
                  {u.title[lang]}
                </Link>
              </h3>
              <p className="mt-2 text-[0.98rem]">{u.summary[lang]}</p>
            </li>
          ))}
        </ul>
        <p className="mt-8">
          <Link
            href={href('news', lang)}
            className="font-medium text-green-700 underline underline-offset-4 hover:text-green-900"
          >
            {t(copy.updatesMore)} →
          </Link>
        </p>
      </section>

      {/* 10 · Closing invitation */}
      <section className="mx-auto max-w-6xl px-4 pb-4 sm:px-6">
        <div className="rounded-2xl bg-green-900 px-6 py-12 text-center sm:px-12 on-dark">
          <span className="inline-block text-gold">
            <EightStar size={34} />
          </span>
          <h2 className="mt-4 font-display text-ivory [font-size:var(--text-fluid-h2)]">
            {t(copy.closeTitle)}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-lg text-ivory/90">
            {t(copy.closeBody)}
          </p>
          <p className="mt-7">
            <Link
              href={href('participate', lang)}
              className="inline-block rounded-md bg-gold px-6 py-3 font-medium text-green-950 hover:bg-ivory"
            >
              {t(copy.closeCta)}
            </Link>
          </p>
        </div>
      </section>
    </Shell>
  );
}
