import { PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

export default function Card({
  children,
  className,
}: PropsWithChildren<WithClassName>) {
  return (
    <div
      className={twMerge(
        'border-neutral-3 bg-neutral-1 flex flex-col rounded-md border',
        className,
      )}
    >
      {children}
    </div>
  );
}
