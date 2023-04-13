'use client';

import Link, { LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';
import { PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

interface NavLinkProps extends LinkProps {
  tabIndex?: number;
}

export default function NavLink({
  children,
  href,
  onClick,
  tabIndex = 0,
  ...linkProps
}: PropsWithChildren<NavLinkProps>) {
  const pathname = usePathname();
  const active = pathname === href;

  return (
    <li
      className={twMerge(
        'list-none text-2xl font-semibold underline decoration-2 underline-offset-2 transition-colors duration-300 hocus:text-neutral-10 md:text-base',
        active
          ? 'text-neutral-10 decoration-primary-6'
          : 'text-neutral-6 decoration-transparent',
      )}
    >
      <Link href={href} onClick={onClick} tabIndex={tabIndex} {...linkProps}>
        {children}
      </Link>
    </li>
  );
}
