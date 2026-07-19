import { altHref, type Lang } from '@/lib/i18n';
import { Shell } from '@/components/Shell';
import { PhaseTracker } from '@/components/PhaseTracker';
import { Divider } from '@/components/Motif';

const copy = {
  title: { ms: 'Perjalanan Pemulihan', en: 'Restoration Journey' },
  lede: {
    ms: 'Pemuliharaan warisan yang bertanggungjawab tidak berlaku sekelip mata. Ia berjalan berperingkat, didokumentasikan, dan jujur tentang kedudukannya. Di sinilah anda boleh mengikutinya.',
    en: 'Responsible heritage conservation does not happen overnight. It moves in stages, is documented, and is honest about where it stands. This is where you can follow it.',
  },
  processH: { ms: 'Bagaimana pemuliharaan berjalan', en: 'How restoration works' },
  processSteps: {
    ms: [
      'Mengumpul sejarah lisan, lukisan, gambar, hakmilik, rekod undang-undang dan laporan terdahulu',
      'Merekod keadaan sedia ada dan ciri-ciri penting rumah',
      'Penilaian profesional: struktur, seni bina, bahan dan perkhidmatan',
      'Mengenal pasti keutamaan penstabilan segera dan perlindungan cuaca',
      'Menyepakati prinsip pemuliharaan dan kegunaan masa depan yang berdaya maju',
      'Menyediakan reka bentuk, anggaran, kelulusan, pembiayaan dan perolehan',
      'Melaksanakan kerja pemuliharaan dengan rekod fotografi dan teknikal',
      'Mentafsir warisan untuk pelawat dan generasi akan datang',
      'Menetapkan penyelenggaraan, tadbir urus, pengisian dan jagaan jangka panjang',
    ],
    en: [
      'Collect oral histories, drawings, photographs, titles, legal records and prior reports',
      'Document the existing condition and significant features',
      'Professional assessments: structural, architectural, materials and services',
      'Identify urgent stabilisation and weatherproofing priorities',
      'Agree conservation principles and a viable future use',
      'Prepare designs, estimates, approvals, funding and procurement',
      'Carry out conservation works with photographic and technical records',
      'Interpret the heritage for visitors and future generations',
      'Establish maintenance, governance, programming and long-term care',
    ],
  },
  trackerH: { ms: 'Kedudukan semasa', en: 'Where things stand' },
  trackerNote: {
    ms: 'Status ditetapkan hanya daripada bukti yang disahkan. Tiada penunjuk peratusan rekaan; apabila butiran masih dikumpulkan, kami menyatakan "dokumentasi sedang berjalan" dan menamakan bukti yang diperlukan.',
    en: 'Statuses are assigned only from verified evidence. There are no invented percentage bars; where details are still being assembled we say "documentation in progress" and name the evidence required.',
  },
  faqH: { ms: 'Soalan lazim', en: 'Frequently asked questions' },
  faqs: {
    ms: [
      {
        q: 'Mengapa pemulihan mengambil masa?',
        a: 'Kerana urutan yang betul ialah memahami dahulu, membaiki kemudian. Kerja tergesa-gesa boleh memusnahkan ciri asal yang tidak dapat diganti. Setiap peringkat memerlukan bukti, kepakaran dan kesepakatan waris.',
      },
      {
        q: 'Siapa yang membuat keputusan?',
        a: 'Segala keputusan mengenai Rumah Batu memerlukan kemuafakatan waris melalui wakil lapan jalur, berpandukan Perlembagaan W8-DBAK dan prinsip wakaf.',
      },
      {
        q: 'Bolehkah saya melawat Rumah Batu?',
        a: 'Lawatan teratur akan diumumkan melalui halaman Berita dan saluran rasmi keluarga. Buat masa ini, rumah ini bukan tapak lawatan terbuka.',
      },
      {
        q: 'Bagaimana saya boleh membantu?',
        a: 'Kongsikan kenangan, gambar dan dokumen; tawarkan kepakaran (pemuliharaan, seni bina, undang-undang, media); atau daftarkan minat anda di halaman Turut Serta.',
      },
    ],
    en: [
      {
        q: 'Why does restoration take time?',
        a: 'Because the right order is to understand first and repair second. Hasty work can destroy original features that cannot be replaced. Every stage needs evidence, expertise, and the agreement of the heirs.',
      },
      {
        q: 'Who decides?',
        a: 'Every decision about Rumah Batu requires the consensus of the heirs through the representatives of the eight lines, guided by the W8-DBAK constitution and wakaf principles.',
      },
      {
        q: 'Can I visit Rumah Batu?',
        a: 'Organised visits will be announced on the Updates page and through the family’s official channels. For now the house is not an open visitor site.',
      },
      {
        q: 'How can I help?',
        a: 'Share memories, photographs and documents; offer expertise (conservation, architecture, law, media); or register your interest on the Participate page.',
      },
    ],
  },
};

export function RestorationPage({ lang }: { lang: Lang }) {
  const t = <T,>(b: { ms: T; en: T }): T => b[lang];
  return (
    <Shell lang={lang} altUrl={altHref('restoration', lang)}>
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <header className="max-w-3xl">
          <h1 className="font-display [font-size:var(--text-fluid-hero)]">
            {t(copy.title)}
          </h1>
          <p className="mt-4 text-xl text-ink-soft">{t(copy.lede)}</p>
        </header>

        <section className="mt-12">
          <h2 className="font-display [font-size:var(--text-fluid-h2)]">
            {t(copy.processH)}
          </h2>
          <ol className="mt-6 grid max-w-3xl gap-0">
            {t(copy.processSteps).map((step, i) => (
              <li
                key={i}
                className="relative border-l border-gold/60 pb-6 pl-8 last:pb-0"
              >
                <span
                  aria-hidden="true"
                  className="absolute -left-[13px] top-0 grid h-[26px] w-[26px] place-items-center rounded-full bg-green-700 font-display text-[13px] font-semibold text-ivory"
                >
                  {i + 1}
                </span>
                <p className="max-w-prose -translate-y-0.5">{step}</p>
              </li>
            ))}
          </ol>
        </section>

        <Divider className="my-14" />

        <section>
          <h2 className="font-display [font-size:var(--text-fluid-h2)]">
            {t(copy.trackerH)}
          </h2>
          <p className="prose-flow mt-3 text-ink-soft">{t(copy.trackerNote)}</p>
          <div className="mt-8">
            <PhaseTracker lang={lang} detailed />
          </div>
        </section>

        <section className="mt-14">
          <h2 className="font-display [font-size:var(--text-fluid-h2)]">
            {t(copy.faqH)}
          </h2>
          <div className="mt-6 max-w-3xl divide-y divide-ink/10">
            {t(copy.faqs).map((f) => (
              <details key={f.q} className="group py-4">
                <summary className="cursor-pointer list-none font-display text-lg marker:hidden [&::-webkit-details-marker]:hidden">
                  <span
                    aria-hidden="true"
                    className="mr-3 inline-block text-gold-deep transition-transform group-open:rotate-90"
                  >
                    ›
                  </span>
                  {f.q}
                </summary>
                <p className="mt-3 max-w-prose pl-7">{f.a}</p>
              </details>
            ))}
          </div>
        </section>
      </div>
    </Shell>
  );
}
