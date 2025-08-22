import { VariantProps, cva } from 'class-variance-authority';
import { PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

export const badgeVariants = cva('inline-block rounded-md border font-bold', {
  variants: {
    color: {
      neutral: 'border-neutral-6 bg-neutral-1 text-neutral-11',
      primary: 'border-primary-6 bg-primary-1 text-primary-11',
      success: 'border-success-6 bg-success-1 text-success-11',
      warning: 'border-warning-6 bg-warning-1 text-warning-11',
      danger: 'border-danger-6 bg-danger-1 text-danger-11',
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
