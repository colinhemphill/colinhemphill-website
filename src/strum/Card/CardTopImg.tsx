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
        'inline-block w-full rounded-t-md border-b border-neutral-3',
        className,
      )}
      height={height}
      src={src}
      width={width}
    />
  );
}
