import { VariantProps } from 'class-variance-authority';
import Link, { LinkProps } from 'next/link';
import { PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';
import { buttonVariants } from './Button';

export type ButtonLinkProps = LinkProps &
  VariantProps<typeof buttonVariants> & { className?: string };

export default function ButtonLink({
  children,
  color,
  className,
  size,
  variant,
  ...linkProps
}: PropsWithChildren<ButtonLinkProps>) {
  return (
    <Link
      className={twMerge(buttonVariants({ color, size, variant }), className)}
      {...linkProps}
    >
      <div className="flex items-center justify-center gap-2">{children}</div>
    </Link>
  );
}
