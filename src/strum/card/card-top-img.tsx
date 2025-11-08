import Image, { ImageProps } from 'next/image';
import { twMerge } from 'tailwind-merge';

export default function CardTopImg({
  alt,
  className,
  height,
  src,
  width,
}: ImageProps) {
  return (
    <Image
      alt={alt}
      className={twMerge(
        'border-neutral-3 inline-block w-full rounded-t-md border-b',
        className,
      )}
      height={height}
      src={src}
      width={width}
    />
  );
}
