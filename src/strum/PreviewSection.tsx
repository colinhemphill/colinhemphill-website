import { PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

export default function PreviewSection({
  children,
  className,
}: PropsWithChildren<WithClassName>) {
  return (
    <section className={twMerge('bg-neutral-1', className)}>
      <div className="mx-auto max-w-screen-2xl">
        <div className="bg-neutral-2 py-24 2xl:rounded-2xl">
          <div className="container">{children}</div>
        </div>
      </div>
    </section>
  );
}
