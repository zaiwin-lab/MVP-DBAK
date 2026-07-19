import { altHref, type Lang } from '@/lib/i18n';
import { Shell } from '@/components/Shell';

const copy = {
  title: { ms: 'Hubungi Kami', en: 'Contact' },
  lede: {
    ms: 'Ke arah kesepakatan dan keharmonian untuk mencapai kemajuan bersama.',
    en: 'Towards consensus and harmony, achieving progress together.',
  },
  emailH: { ms: 'E-mel', en: 'Email' },
  emailNote: {
    ms: 'Saluran rasmi untuk semua urusan waris, media dan penyelidikan.',
    en: 'The official channel for all heir, media and research matters.',
  },
  addrH: { ms: 'Alamat urusan', en: 'Office address' },
  houseH: { ms: 'Lokasi Rumah Batu', en: 'Where Rumah Batu stands' },
  houseAddr: {
    ms: 'Lot 8, Seksyen 13, Jalan Datuk Ajibah Abol (dahulunya Datu’s Road), Kuching, Sarawak.',
    en: 'Lot 8, Section 13, Jalan Datuk Ajibah Abol (formerly Datu’s Road), Kuching, Sarawak.',
  },
  houseNote: {
    ms: 'Rumah Batu bukan tapak lawatan terbuka buat masa ini; lawatan teratur akan diumumkan di halaman Berita.',
    en: 'Rumah Batu is not an open visitor site at present; organised visits will be announced on the Updates page.',
  },
  mapCta: {
    ms: 'Buka lokasi di Google Maps',
    en: 'Open the location in Google Maps',
  },
  socialH: { ms: 'Saluran keluarga', en: 'Family channels' },
  socialItems: {
    ms: [
      'Facebook Group: "Waris Rumah Batu (Jalan Datuk Ajibah Abol)"',
      'YouTube: saluran Waris DBAK (rakaman majlis dan siri sejarah)',
    ],
    en: [
      'Facebook Group: "Waris Rumah Batu (Jalan Datuk Ajibah Abol)"',
      'YouTube: the Waris DBAK channel (ceremony recordings and history series)',
    ],
  },
  privacyH: { ms: 'Nota privasi', en: 'Privacy note' },
  privacy: {
    ms: 'Kami hanya menggunakan maklumat yang anda hantar untuk membalas dan menguruskan urusan anda, mengikut Notis Perlindungan Data Peribadi W8-DBAK di bawah Akta Perlindungan Data Peribadi 2010. Laman ini tidak menggunakan kuki penjejakan atau analitik pihak ketiga.',
    en: 'We use the information you send only to reply and handle your matter, under the W8-DBAK Personal Data Protection Notice and the Personal Data Protection Act 2010. This site uses no tracking cookies or third-party analytics.',
  },
};

export function ContactPage({ lang }: { lang: Lang }) {
  const t = <T,>(b: { ms: T; en: T }): T => b[lang];
  return (
    <Shell lang={lang} altUrl={altHref('contact', lang)}>
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <header className="max-w-3xl">
          <h1 className="font-display [font-size:var(--text-fluid-hero)]">
            {t(copy.title)}
          </h1>
          <p className="mt-4 font-display text-xl italic text-ink-soft">
            {t(copy.lede)}
          </p>
        </header>

        <div className="mt-12 grid max-w-4xl gap-10 sm:grid-cols-2">
          <section>
            <h2 className="font-display text-xl">{t(copy.emailH)}</h2>
            <p className="mt-2">
              <a
                href="mailto:maklum@w8dbak.com"
                className="font-medium text-green-700 underline underline-offset-4"
              >
                maklum@w8dbak.com
              </a>
            </p>
            <p className="mt-1 text-ink-soft">{t(copy.emailNote)}</p>
          </section>

          <section>
            <h2 className="font-display text-xl">{t(copy.addrH)}</h2>
            <address className="mt-2 not-italic">
              Ground Floor, No. 98, Lot 14537,
              <br />
              Pusat Komersil SWAN, Jalan Matang,
              <br />
              93050 Kuching, Sarawak
            </address>
          </section>

          <section>
            <h2 className="font-display text-xl">{t(copy.houseH)}</h2>
            <p className="mt-2">{t(copy.houseAddr)}</p>
            <p className="mt-1 text-sm text-ink-soft">{t(copy.houseNote)}</p>
            <p className="mt-3">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Jalan+Datuk+Ajibah+Abol+Kuching"
                rel="noopener"
                className="font-medium text-green-700 underline underline-offset-4"
              >
                {t(copy.mapCta)}
              </a>
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl">{t(copy.socialH)}</h2>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              {t(copy.socialItems).map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ul>
          </section>
        </div>

        <section className="prose-flow mt-12 rounded-xl bg-surface p-6">
          <h2 className="font-display text-xl">{t(copy.privacyH)}</h2>
          <p className="text-[0.98rem]">{t(copy.privacy)}</p>
        </section>
      </div>
    </Shell>
  );
}
