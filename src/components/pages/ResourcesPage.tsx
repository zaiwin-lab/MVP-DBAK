import { altHref, type Lang } from '@/lib/i18n';
import { Shell } from '@/components/Shell';
import { Pic } from '@/components/Pic';
import { SourceNote } from '@/components/SourceNote';

const copy = {
  title: { ms: 'Sumber & Arkib', en: 'Resources & Archive' },
  lede: {
    ms: 'Dokumen awam, rujukan dan rakaman yang menjadi asas kandungan laman ini. Setiap dakwaan sejarah di laman ini dapat dijejak kepada kelas sumbernya.',
    en: 'Public documents, references and recordings that underpin this site. Every historical claim on this site can be traced to its source class.',
  },
  docsH: { ms: 'Dokumen awam', en: 'Public documents' },
  constitution: {
    ms: 'Perlembagaan W8-DBAK Bil. 1/2021 (semakan 01/2024) — dokumen penuh, PDF 2.1 MB.',
    en: 'W8-DBAK Constitution No. 1/2021 (rev. 01/2024) — full document, PDF 2.1 MB.',
  },
  constitutionCta: {
    ms: 'Muat turun Perlembagaan (PDF)',
    en: 'Download the Constitution (PDF)',
  },
  willH: { ms: 'Wasiat DBAK, 31 Mac 1921', en: 'The will of DBAK, 31 March 1921' },
  willText: {
    ms: 'Bismillahirahmanirrahim. Alhamdulillahi Rabbil alamin, Wasalamu ala Saidina Muhammadin wa ala wasahbihi ajmain. Kemudian maka inilah surat wasiat Datu Bandar Abang Muhammad Kassim laki isteri Dayang Saidah. Jika sakit angat petang malam salah satu di dalam keduanya mana-mana yang tinggal itulah yang kuasa memegang harta itu. Jika hilang keduanya baharulah harta berpindah kepada anak-anaknya. Jika ada lebih membayar hutang-hutang baharu pulang kepada anak-anaknya. Fasal bahagian sama banyak laki-laki dengan bahagian perempuan. Mana-mana yang hidup sampai yang sudah mati juga bahagian. Mana-mana yang ada meninggal anak pula kepada anak-anaknya dan mana-mana yang sudah mati tiada meninggal anak — bahagian mereka dibuat wakaf pada rumah atau kebun dan mana-mana sahaja yang patut diwakafkan — ini sahaja adanya. Tertulis kepada 22 haribulan Rejab 1339 (bersamaan 31 Mac 1921). Datu Bandar Abang Muhammad Kassim.',
    en: 'The will is preserved in its original Malay, as written on 22 Rejab 1339 (31 March 1921). It provides that the surviving spouse holds the estate; that on the passing of both, the estate passes to the children in equal shares between sons and daughters; and that the shares of children who died leaving no issue are to be made wakaf upon the house, the gardens, and whatever else is fitting to be endowed. Read the original Malay text on the Bahasa Melayu version of this page.',
  },
  legalH: { ms: 'Sejarah perundangan wakaf', en: 'The wakaf legal history' },
  legalItems: {
    ms: [
      'Wasiat DBAK bertarikh 31 Mac 1921.',
      'Deklarasi lapan anak DBAK, November 1922, menjadikan Rumah Batu harta wakaf. (Tarikh penuh dalam semakan dokumen: rekod menyebut 10 dan 22 November.)',
      'Mahkamah Residen: Abang Hadari bin Abang Adawi lawan Datu Patinggi Abang Haji Abdillah, Pentadbir Harta Pusaka DBAK, 22 Julai 1946.',
      'Mahkamah Agung: Abang Ali bin Abang Haji Anis lawan Datu Patinggi Abang Haji Abdillah, 2 September 1946 — Rumah Batu diputuskan sebagai harta wakaf untuk manfaat waris.',
      'Mahkamah Syariah, 2016 — status wakaf Rumah Batu dikekalkan berdasarkan keputusan 1946; Rumah Batu ialah wakaf ahli (keluarga), bukan wakaf awam.',
    ],
    en: [
      'The will of DBAK, dated 31 March 1921.',
      'The declaration of DBAK’s eight children, November 1922, making Rumah Batu wakaf property. (Exact date under document review: records cite both 10 and 22 November.)',
      'Resident Court: Abang Hadari bin Abang Adawi v Datu Patinggi Abang Haji Abdillah, administrator of the DBAK estate, 22 July 1946.',
      'Supreme Court: Abang Ali bin Abang Haji Anis v Datu Patinggi Abang Haji Abdillah, 2 September 1946 — Rumah Batu held to be wakaf property for the benefit of the heirs.',
      'Syariah Court, 2016 — the wakaf status of Rumah Batu upheld on the basis of the 1946 decisions; Rumah Batu is a family wakaf, not a public one.',
    ],
  },
  legalNote: {
    ms: 'Ringkasan di atas mengikut catatan laman keluarga terdahulu; teks penuh penghakiman sedang disemak sebelum petikan diterbitkan.',
    en: 'The summary above follows the family’s previous website; the full judgment texts are being reviewed before excerpts are published.',
  },
  refsH: { ms: 'Rujukan & rakaman', en: 'References & recordings' },
  refs: {
    ms: [
      {
        t: '"A Century of Rumah Batu 1863–1963"',
        b: 'Siri naratif YouTube oleh Abang Johan bin Abang Kassim, keturunan pembina Rumah Batu, berdasarkan bukunya mengenai sejarah rumah ini. Dicapai melalui saluran YouTube Waris DBAK.',
      },
      {
        t: 'Genealogical Directory Perabangan Malayu Sarawak',
        b: 'Karya Abang Tan Hj Ir Mohammed Ekhwan bin Tan Hj Zolkipli: analisa salasilah Perabangan dari zaman Sriwijaya dan Pagaruyung hingga keturunan terkini.',
      },
      {
        t: 'Temubual TVS Randau',
        b: 'Beberapa waris DBAK pernah dijemput membincangkan bidang masing-masing dalam program Randau di saluran TVS (Astro/myFreeview 122).',
      },
      {
        t: 'Rakaman Majlis 100 Tahun Wasiat DBAK (3 April 2021)',
        b: 'Pembentangan pengerusi dan majlis penuh kekal di saluran YouTube Waris DBAK.',
      },
    ],
    en: [
      {
        t: '"A Century of Rumah Batu 1863–1963"',
        b: 'A YouTube narration series by Abang Johan bin Abang Kassim, a descendant of the builder of Rumah Batu, based on his book on the house. Available through the Waris DBAK YouTube channel.',
      },
      {
        t: 'Genealogical Directory Perabangan Malayu Sarawak',
        b: 'By Abang Tan Hj Ir Mohammed Ekhwan bin Tan Hj Zolkipli: a genealogical analysis of the Perabangan from Sriwijaya and Pagaruyung to the present generations.',
      },
      {
        t: 'TVS Randau interviews',
        b: 'Several DBAK heirs have discussed their fields on the Randau programme on TVS (Astro/myFreeview channel 122).',
      },
      {
        t: 'Recording of the Will Centenary (3 April 2021)',
        b: 'The chairman’s presentation and the full ceremony remain on the Waris DBAK YouTube channel.',
      },
    ],
  },
  bookAlt: {
    ms: 'Kulit buku Genealogical Directory Perabangan Malayu Sarawak',
    en: 'Cover of the Genealogical Directory Perabangan Malayu Sarawak',
  },
  sourcesH: { ms: 'Konvensyen sumber laman ini', en: 'This site’s source convention' },
  sources1: {
    ms: 'Setiap catatan sejarah di laman ini membawa label kelas sumber supaya pembaca dapat membezakan riwayat lisan keluarga, dokumen arkib, rekod mahkamah, penerbitan, dan kemas kini jawatankuasa semasa:',
    en: 'Every historical note on this site carries a source-class label so a reader can tell family oral history from archival document, court record, publication, or current committee update:',
  },
};

export function ResourcesPage({ lang }: { lang: Lang }) {
  const t = <T,>(b: { ms: T; en: T }): T => b[lang];
  return (
    <Shell lang={lang} altUrl={altHref('resources', lang)}>
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <header className="max-w-3xl">
          <h1 className="font-display [font-size:var(--text-fluid-hero)]">
            {t(copy.title)}
          </h1>
          <p className="mt-4 text-xl text-ink-soft">{t(copy.lede)}</p>
        </header>

        <div className="mt-12 grid gap-12 lg:grid-cols-3">
          <div className="prose-flow lg:col-span-2">
            <h2>{t(copy.docsH)}</h2>
            <p>{t(copy.constitution)}</p>
            <p>
              <a
                href="/docs/perlembagaan_w8dbak_012024.pdf"
                className="inline-block rounded-md bg-green-700 px-5 py-2.5 font-medium text-ivory no-underline hover:bg-green-900"
              >
                {t(copy.constitutionCta)}
              </a>
            </p>

            <h2>{t(copy.willH)}</h2>
            <p className="font-display italic leading-relaxed">
              {t(copy.willText)}
            </p>
            <SourceNote source="document" lang={lang} />

            <h2>{t(copy.legalH)}</h2>
            <ul className="list-disc space-y-2 pl-5">
              {t(copy.legalItems).map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <p className="text-sm text-ink-soft">{t(copy.legalNote)}</p>
            <SourceNote source="court" lang={lang} />

            <h2>{t(copy.refsH)}</h2>
            {t(copy.refs).map((r) => (
              <div key={r.t} className="mt-4">
                <h3 className="font-display text-lg">{r.t}</h3>
                <p className="mt-1">{r.b}</p>
              </div>
            ))}
          </div>

          <aside>
            <figure className="lg:sticky lg:top-6">
              <Pic
                name="buku-perabangan"
                alt={t(copy.bookAlt)}
                sizes="(min-width: 1024px) 25vw, 60vw"
                imgClassName="mx-auto w-full max-w-[260px] rounded-lg"
              />
            </figure>
          </aside>
        </div>
      </div>
    </Shell>
  );
}
