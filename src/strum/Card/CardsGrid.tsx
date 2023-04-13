import { PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

export default function CardsGrid({
  children,
  className,
}: PropsWithChildren<WithClassName>) {
  return (
    <div
      className={twMerge(
        'grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3',
        className,
      )}
    >
      {children}
    </div>
  );
}
