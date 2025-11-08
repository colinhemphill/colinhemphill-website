import { VariantProps } from 'class-variance-authority';
import Link, { LinkProps } from 'next/link';
import { PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';
import { buttonVariants } from './button';

export type ButtonLinkProperties = LinkProps &
  VariantProps<typeof buttonVariants> & { className?: string };

export default function ButtonLink({
  children,
  color,
  className,
  size,
  variant,
  ...linkProperties
}: PropsWithChildren<ButtonLinkProperties>) {
  return (
    <Link
      className={twMerge(buttonVariants({ color, size, variant }), className)}
      {...linkProperties}
    >
      <div className="flex items-center justify-center gap-2">{children}</div>
    </Link>
  );
}
