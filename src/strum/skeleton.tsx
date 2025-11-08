import { twMerge } from 'tailwind-merge';

export default function Skeleton({ className }: WithClassName) {
  return (
    <div
      className={twMerge(
        'bg-neutral-3 mt-2 h-[1em] animate-pulse rounded-md first-of-type:mt-0',
        className,
      )}
    />
  );
}
