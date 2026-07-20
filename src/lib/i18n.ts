export type Lang = 'ms' | 'en';

export interface Bi<T = string> {
  ms: T;
  en: T;
}

export const pick = <T,>(b: Bi<T>, lang: Lang): T => b[lang];

/** Route keys shared by both languages. */
export type RouteKey =
  | 'home'
  | 'story'
  | 'house'
  | 'restoration'
  | 'waris8'
  | 'activities'
  | 'albums'
  | 'gallery'
  | 'news'
  | 'resources'
  | 'participate'
  | 'contact';

export const routes: Record<RouteKey, { ms: string; en: string; label: Bi }> = {
  home: { ms: '/', en: '/en/', label: { ms: 'Utama', en: 'Home' } },
  story: {
    ms: '/kisah-kami/',
    en: '/en/our-story/',
    label: { ms: 'Kisah Kami', en: 'Our Story' },
  },
  house: {
    ms: '/rumah-batu/',
    en: '/en/rumah-batu/',
    label: { ms: 'Rumah Batu', en: 'Rumah Batu' },
  },
  restoration: {
    ms: '/pemulihan/',
    en: '/en/restoration/',
    label: { ms: 'Perjalanan Pemulihan', en: 'Restoration Journey' },
  },
  waris8: {
    ms: '/waris-8/',
    en: '/en/waris-8/',
    label: { ms: 'Waris 8', en: 'Waris 8' },
  },
  activities: {
    ms: '/aktiviti/',
    en: '/en/activities/',
    label: { ms: 'Aktiviti & Pencapaian', en: 'Activities & Milestones' },
  },
  albums: {
    ms: '/aktiviti/album/',
    en: '/en/activities/albums/',
    label: { ms: 'Album Majlis', en: 'Event Albums' },
  },
  gallery: {
    ms: '/galeri/',
    en: '/en/gallery/',
    label: { ms: 'Galeri', en: 'Gallery' },
  },
  news: {
    ms: '/berita/',
    en: '/en/news/',
    label: { ms: 'Berita', en: 'Updates' },
  },
  resources: {
    ms: '/sumber/',
    en: '/en/resources/',
    label: { ms: 'Sumber & Arkib', en: 'Resources & Archive' },
  },
  participate: {
    ms: '/turut-serta/',
    en: '/en/participate/',
    label: { ms: 'Turut Serta', en: 'Participate' },
  },
  contact: {
    ms: '/hubungi/',
    en: '/en/contact/',
    label: { ms: 'Hubungi Kami', en: 'Contact' },
  },
};

export const href = (key: RouteKey, lang: Lang): string => routes[key][lang];

/** The same page in the other language, for the language switch. */
export const altHref = (key: RouteKey, lang: Lang): string =>
  routes[key][lang === 'ms' ? 'en' : 'ms'];

export const SITE_URL = 'https://dbaksarawak.org';
export const SITE_NAME: Bi = {
  ms: 'Rumah Batu — Waris DBAK',
  en: 'Rumah Batu — Waris DBAK',
};
