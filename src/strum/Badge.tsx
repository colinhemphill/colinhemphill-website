import { VariantProps, cva } from 'class-variance-authority';
import { PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

export const badgeVariants = cva('inline-block rounded-md border font-bold', {
  variants: {
    color: {
      neutral: 'border-neutral-3 bg-neutral-0 text-neutral-6',
      primary: 'border-primary-3 bg-primary-0 text-primary-6',
      success: 'border-success-3 bg-success-0 text-success-6',
      warning: 'border-warning-3 bg-warning-0 text-warning-6',
      danger: 'border-danger-3 bg-danger-0 text-danger-6',
    },
    size: {
      sm: 'text-xs p-1',
      md: 'text-sm py-1 px-2',
      lg: 'text-base py-2 px-3',
    },
  },
  defaultVariants: {
    color: 'neutral',
    size: 'md',
  },
});

export type BadgeProps = React.HtmlHTMLAttributes<HTMLDivElement> &
  VariantProps<typeof badgeVariants>;

export default function Badge({
  children,
  className,
  color,
  size,
  ...props
}: PropsWithChildren<BadgeProps>) {
  return (
    <div
      className={twMerge(
        badgeVariants({
          color,
          size,
        }),
        className,
      )}
      role="alert"
      {...props}
    >
      {children}
    </div>
  );
}
