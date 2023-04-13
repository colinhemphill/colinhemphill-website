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
          'underline underline-offset-4 transition-colors duration-300 group-hocus:decoration-primary-6',
          active ? 'decoration-primary-6' : 'decoration-neutral-6',
        )}
      >
        Hemphill
      </span>
    </Link>
  );
}
