import { PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

export default function Card({
  children,
  className,
}: PropsWithChildren<WithClassName>) {
  return (
    <div
      className={twMerge(
        'flex flex-col rounded-md border border-neutral-3 bg-neutral-1',
        className,
      )}
    >
      {children}
    </div>
  );
}
