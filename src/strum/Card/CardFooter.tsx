import { PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

export default function CardFooter({
  children,
  className,
}: PropsWithChildren<WithClassName>) {
  return (
    <div className={twMerge('border-t border-neutral-3 px-4 py-2', className)}>
      {children}
    </div>
  );
}
