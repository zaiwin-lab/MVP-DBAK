import { altHref, type Lang } from '@/lib/i18n';
import { Shell } from '@/components/Shell';
import { Pic } from '@/components/Pic';
import { SourceNote } from '@/components/SourceNote';
import { ThenNow } from '@/components/ThenNow';

const copy = {
  title: { ms: 'Rumah Batu', en: 'Rumah Batu' },
  lede: {
    ms: 'Sebuah rumah konkrit dan batu bata di tengah Kuching, didirikan ketika hampir semua rumah lain dibina daripada kayu. Daripada namanya sahaja, ia luar biasa.',
    en: 'A house of concrete and brick in the heart of Kuching, raised when nearly every other home was timber. Its very name, "the Stone House", says how unusual it was.',
  },
  histAlt: {
    ms: 'Foto lama hitam putih Rumah Batu dengan beranda dan tiang-tiangnya',
    en: 'Old black-and-white photograph of Rumah Batu with its verandahs and columns',
  },
  histCap: {
    ms: 'Rumah Batu pada awal abad ke-20 · Arkib keluarga W8-DBAK',
    en: 'Rumah Batu in the early 20th century · W8-DBAK family archive',
  },
  archH: { ms: 'Seni bina dan keistimewaan', en: 'Architecture and character' },
  arch1: {
    ms: 'Dua tingkat, bertiang, dengan beranda panjang mengelilingi tingkat atas dan bumbung curam yang menaungi ruang-ruang besar. Mengikut riwayat keluarga, ia rumah pertama dan terbesar bangsawan Melayu Sarawak yang dibina daripada konkrit dan batu bata pada zamannya — dan berdasarkan sejarah yang diceritakan, bangunan kedua terbesar di Kuching selepas Astana. Dakwaan perbandingan ini adalah riwayat keluarga dan sejarah lisan, dinyatakan seadanya sementara semakan bebas dijalankan.',
    en: 'Two storeys, colonnaded, with long verandahs wrapping the upper floor and steep roofs shading generous rooms. By family account it was the first and largest Sarawak Malay noble house built of concrete and brick in its day — and, as the story is told, the second-largest building in Kuching after the Astana. These comparative claims are family and oral history, stated as such while independent verification continues.',
  },
  arch2: {
    ms: 'Di dalamnya masih kelihatan jubin lantai bercorak asal, pagar besi beranda berwarna hijau, dan susunan bilik yang menyimpan ingatan beberapa generasi.',
    en: 'Inside, the original patterned floor tiles, the green iron verandah balustrades, and the arrangement of rooms still hold the memory of several generations.',
  },
  socialH: { ms: 'Rumah keluarga, pusat komuniti', en: 'A family home, a community centre' },
  social1: {
    ms: 'Rumah Batu bukan sekadar kediaman keluarga DBAK. Ia berperanan sebagai pusat komuniti: tempat aktiviti ilmu, kesihatan, kebajikan, keagamaan dan sosial bagi masyarakat sekelilingnya.',
    en: 'Rumah Batu was never only the DBAK family residence. It served as a community centre: a place of learning, health, welfare, religious and social life for the community around it.',
  },
  siteH: { ms: 'Tapak dan status', en: 'The site and its status' },
  site1: {
    ms: 'Rumah ini berdiri di atas tanah seluas 6,313 meter persegi (1.56 ekar) di Lot 8, Seksyen 13, Kuching Town Land District — dahulunya Datu’s Road, kini Jalan Datuk Ajibah Abol. Hakmilik selama 859 tahun dikeluarkan pada 1937. Tapak ini turut merangkumi Tanah Perkuburan Wakaf DBAK bersebelahan Masjid Bahagian Kuching, dikhaskan untuk persemadian ahli keluarga dan waris; setakat Mac 2021 terdapat 282 tapak kubur atau lebih. Kami menghormati kesucian kawasan ini dan tidak menerbitkan data persemadian peribadi.',
    en: 'The house stands on 6,313 square metres (1.56 acres) at Lot 8, Section 13, Kuching Town Land District — formerly Datu’s Road, now Jalan Datuk Ajibah Abol. An 859-year title was issued in 1937. The site includes the DBAK Wakaf Burial Ground beside Masjid Bahagian Kuching, reserved for family and heirs; as of March 2021 it held 282 or more graves. We honour the sanctity of this ground and publish no personal burial data.',
  },
  site2: {
    ms: 'Sebagai harta wakaf keluarga yang disahkan mahkamah, Rumah Batu tidak boleh dijual atau dilupuskan. Pembangunannya boleh dijalankan selagi prinsip wakaf dipatuhi dan kepentingan waris terjaga.',
    en: 'As court-confirmed family wakaf property, Rumah Batu cannot be sold or disposed of. Development may proceed only in keeping with wakaf principles and the interests of the heirs.',
  },
  thenNowH: { ms: 'Dahulu dan kini', en: 'Then and now' },
  condH: { ms: 'Keadaan yang direkodkan', en: 'The recorded condition' },
  cond1: {
    ms: 'Lawatan dokumentasi 2020–2022 merekodkan keadaan rumah dengan jujur: struktur utama masih kukuh, tetapi perabot dan struktur dalaman telah musnah atau hilang, lantai kayu terhakis, dan keseluruhannya menuntut pemuliharaan yang teliti. Rekod ini menjadi asas perancangan pemulihan.',
    en: 'The 2020–2022 documentation visits recorded the house honestly: the main structure stands sound, but furniture and internal structures are destroyed or lost, timber floors are worn, and the whole calls for careful conservation. These records are the foundation of the restoration plan.',
  },
  condImgs: [
    {
      name: 'keadaan-verandah',
      alt: {
        ms: 'Koleksi foto beranda atas Rumah Batu dengan lantai kayu terhakis dan pagar besi hijau',
        en: 'Photo collage of the upper verandah of Rumah Batu with worn timber floors and green iron balustrades',
      },
      cap: { ms: 'Beranda tingkat atas', en: 'The upper verandah' },
    },
    {
      name: 'keadaan-tingkat-atas',
      alt: {
        ms: 'Koleksi foto dalaman tingkat atas Rumah Batu: bilik kosong dan jubin bercorak',
        en: 'Photo collage of the upper-floor interior of Rumah Batu: empty rooms and patterned tiles',
      },
      cap: { ms: 'Dalaman tingkat atas', en: 'Upper-floor interior' },
    },
    {
      name: 'keadaan-tingkat-bawah',
      alt: {
        ms: 'Koleksi foto tingkat bawah Rumah Batu: ruang terbuka bertiang tanpa dinding dalaman',
        en: 'Photo collage of the ground floor of Rumah Batu: open colonnaded space without internal walls',
      },
      cap: { ms: 'Tingkat bawah', en: 'The ground floor' },
    },
  ],
  condCredit: {
    ms: 'Dokumentasi AJK W8-DBAK, 2020–2022',
    en: 'W8-DBAK committee documentation, 2020–2022',
  },
};

export function HousePage({ lang }: { lang: Lang }) {
  const t = <T,>(b: { ms: T; en: T }): T => b[lang];
  return (
    <Shell lang={lang} altUrl={altHref('house', lang)}>
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <header className="max-w-3xl">
          <h1 className="font-display [font-size:var(--text-fluid-hero)]">
            {t(copy.title)}
          </h1>
          <p className="mt-4 text-xl text-ink-soft">{t(copy.lede)}</p>
        </header>

        <figure className="mt-10">
          <Pic
            name="rumah-batu-historic"
            alt={t(copy.histAlt)}
            sizes="(min-width: 1024px) 60rem, 100vw"
            imgClassName="w-full rounded-xl duotone"
          />
          <figcaption className="mt-2 text-sm text-ink-soft">
            {t(copy.histCap)}
          </figcaption>
        </figure>

        <div className="prose-flow mt-12">
          <h2>{t(copy.archH)}</h2>
          <p>{t(copy.arch1)}</p>
          <p>{t(copy.arch2)}</p>
          <SourceNote source="family" lang={lang} />

          <h2>{t(copy.socialH)}</h2>
          <p>{t(copy.social1)}</p>
          <SourceNote source="family" lang={lang} />

          <h2>{t(copy.siteH)}</h2>
          <p>{t(copy.site1)}</p>
          <p>{t(copy.site2)}</p>
          <SourceNote source="document" lang={lang} />
        </div>

        <section className="mt-14">
          <h2 className="font-display [font-size:var(--text-fluid-h2)]">
            {t(copy.thenNowH)}
          </h2>
          <div className="mt-6">
            <ThenNow lang={lang} />
          </div>
        </section>

        <section className="mt-14">
          <h2 className="font-display [font-size:var(--text-fluid-h2)]">
            {t(copy.condH)}
          </h2>
          <p className="prose-flow mt-3">{t(copy.cond1)}</p>
          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            {copy.condImgs.map((img) => (
              <figure key={img.name}>
                <Pic
                  name={img.name}
                  alt={t(img.alt)}
                  sizes="(min-width: 640px) 33vw, 100vw"
                  imgClassName="w-full rounded-lg"
                />
                <figcaption className="mt-2 text-sm text-ink-soft">
                  {t(img.cap)} · {t(copy.condCredit)}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      </div>
    </Shell>
  );
}
