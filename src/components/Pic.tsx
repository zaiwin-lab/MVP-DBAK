import manifest from '@/content/image-manifest.json';

type ManifestKey = keyof typeof manifest;

interface PicProps {
  name: string;
  alt: string;
  sizes?: string;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
}

/**
 * Responsive <picture> backed by the pre-generated WebP/JPEG sets in
 * public/images. Intrinsic width/height come from the build-time manifest so
 * media never shifts layout.
 */
export function Pic({
  name,
  alt,
  sizes = '100vw',
  className,
  imgClassName,
  priority,
}: PicProps) {
  const entry = manifest[name as ManifestKey];
  if (!entry) return null;
  const srcset = (ext: string) =>
    entry.widths.map((w) => `/images/${name}-${w}.${ext} ${w}w`).join(', ');
  const largest = entry.widths[entry.widths.length - 1];
  return (
    <picture className={className}>
      <source type="image/webp" srcSet={srcset('webp')} sizes={sizes} />
      <img
        src={`/images/${name}-${largest}.jpg`}
        srcSet={srcset('jpg')}
        sizes={sizes}
        alt={alt}
        width={entry.width}
        height={entry.height}
        loading={priority ? 'eager' : 'lazy'}
        decoding={priority ? 'sync' : 'async'}
        className={imgClassName}
      />
    </picture>
  );
}
