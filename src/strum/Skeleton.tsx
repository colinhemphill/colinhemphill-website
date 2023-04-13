import { twMerge } from 'tailwind-merge';

export default function Skeleton({ className }: WithClassName) {
  return (
    <div
      className={twMerge(
        'mt-2 h-[1em] animate-pulse rounded-md bg-neutral-3 first-of-type:mt-0',
        className,
      )}
    />
  );
}
