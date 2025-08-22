import { VariantProps, cva } from 'class-variance-authority';
import { PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

export const alertVariants = cva('alert border rounded-md', {
  variants: {
    color: {
      neutral: 'border-neutral-6 bg-neutral-1 text-neutral-11',
      primary: 'border-primary-6 bg-primary-1 text-primary-11',
      success: 'border-success-6 bg-success-1 text-success-11',
      warning: 'border-warning-6 bg-warning-1 text-warning-11',
      danger: 'border-danger-6 bg-danger-0 text-danger-6',
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
  size,
  ...props
}: PropsWithChildren<AlertProps>) {
  return (
    <div
      className={twMerge(
        alertVariants({
          color,
          margin,
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
