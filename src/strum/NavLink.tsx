'use client';

import { VariantProps, cva } from 'class-variance-authority';
import Link, { LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';
import { PropsWithChildren } from 'react';

export const buttonVariants = cva(
  'list-none text-2xl font-semibold underline decoration-2 underline-offset-2 transition-colors duration-300 hocus:text-neutral-12 md:text-base',
  {
    variants: {
      state: {
        active: 'text-neutral-12 decoration-primary-11',
        default: 'text-neutral-11 decoration-transparent',
      },
    },
    defaultVariants: {
      state: 'default',
    },
  },
);

export type NavLinkProps = LinkProps &
  VariantProps<typeof buttonVariants> & {
    tabIndex?: number;
  };

export default function NavLink({
  children,
  href,
  onClick,
  tabIndex = 0,
  ...linkProps
}: PropsWithChildren<NavLinkProps>) {
  const pathname = usePathname();
  const state = pathname === href ? 'active' : 'default';

  return (
    <li className={buttonVariants({ state })}>
      <Link href={href} onClick={onClick} tabIndex={tabIndex} {...linkProps}>
        {children}
      </Link>
    </li>
  );
}
