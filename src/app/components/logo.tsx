'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { twMerge } from 'tailwind-merge';

export default function Logo() {
  const pathname = usePathname();
  const active = pathname === '/';

  return (
    <Link className="group text-2xl font-extrabold md:text-3xl" href="/">
      Colin{' '}
      <span
        className={twMerge(
          'group-hover:decoration-primary-11 group-focus:decoration-primary-11 underline underline-offset-4 transition-colors duration-300',
          active ? 'decoration-primary-11' : 'decoration-neutral-9',
        )}
      >
        Hemphill
      </span>
    </Link>
  );
}
