import { PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

export default function CardBody({
  children,
  className,
}: PropsWithChildren<WithClassName>) {
  return <div className={twMerge('flex-1 p-4', className)}>{children}</div>;
}
