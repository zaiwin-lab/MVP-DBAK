import localFont from 'next/font/local';

export const literata = localFont({
  src: [
    {
      path: '../fonts/literata-var.woff2',
      weight: '200 900',
      style: 'normal',
    },
    {
      path: '../fonts/literata-var-italic.woff2',
      weight: '200 900',
      style: 'italic',
    },
  ],
  variable: '--font-literata',
  display: 'swap',
});

export const alegreya = localFont({
  src: [
    { path: '../fonts/alegreya-sans-400.woff2', weight: '400', style: 'normal' },
    { path: '../fonts/alegreya-sans-400-italic.woff2', weight: '400', style: 'italic' },
    { path: '../fonts/alegreya-sans-500.woff2', weight: '500', style: 'normal' },
    { path: '../fonts/alegreya-sans-700.woff2', weight: '700', style: 'normal' },
  ],
  variable: '--font-alegreya',
  display: 'swap',
});
