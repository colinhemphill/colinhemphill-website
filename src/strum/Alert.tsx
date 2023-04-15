import { VariantProps, cva } from 'class-variance-authority';
import { PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

export const alertVariants = cva('alert border rounded-md', {
  variants: {
    color: {
      neutral: 'border-neutral-3 bg-neutral-0 text-neutral-6',
      primary: 'border-primary-3 bg-primary-0 text-primary-6',
      success: 'border-success-3 bg-success-0 text-success-6',
      warning: 'border-warning-3 bg-warning-0 text-warning-6',
      danger: 'border-danger-3 bg-danger-0 text-danger-6',
    },
    margin: {
      default: '',
      lg: 'my-16',
    },
    size: {
      sm: 'text-sm p-2',
      md: 'text-base p-4',
      lg: 'text-lg border-2 p-6',
    },
  },
  defaultVariants: {
    color: 'neutral',
    margin: 'default',
    size: 'md',
  },
});

export type AlertProps = React.HtmlHTMLAttributes<HTMLDivElement> &
  VariantProps<typeof alertVariants>;

export default function Alert({
  children,
  className,
  color,
  margin,
  ...props
}: PropsWithChildren<AlertProps>) {
  return (
    <div
      className={twMerge(
        alertVariants({
          color,
          margin,
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
