import Link from 'next/link';
import { Shell } from '@/components/Shell';
import { EightStar } from '@/components/Motif';

export default function NotFound() {
  return (
    <Shell lang="ms" altUrl="/en/">
      <div className="mx-auto max-w-2xl px-4 py-24 text-center sm:px-6">
        <span className="inline-block text-gold">
          <EightStar size={40} />
        </span>
        <h1 className="mt-6 font-display [font-size:var(--text-fluid-h2)]">
          Halaman tidak ditemui
        </h1>
        <p className="mt-3 text-lg text-ink-soft">
          Page not found. Mungkin pautan telah berubah semasa laman ini
          diperbaharui.
        </p>
        <p className="mt-8">
          <Link
            href="/"
            className="inline-block rounded-md bg-green-700 px-5 py-2.5 font-medium text-ivory hover:bg-green-900"
          >
            Kembali ke halaman utama · Back to home
          </Link>
        </p>
      </div>
    </Shell>
  );
}
