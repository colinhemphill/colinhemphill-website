import { VariantProps, cva } from 'class-variance-authority';
import { PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

export const buttonVariants = cva(
  'inline-block rounded-md font-bold outline-none transition-all focus:ring duration-300 disabled:opacity-60 disabled:pointer-events-none',
  {
    variants: {
      color: {
        neutral: 'hocus:bg-neutral-8 ring-neutral-4',
        primary: 'hocus:bg-primary-8 ring-primary-4',
        success: 'hocus:bg-success-8 ring-success-4',
      },
      size: {
        sm: 'text-base px-3 py-1',
        md: 'text-lg px-4 py-2',
        lg: 'text-xl px-5 py-3',
        xl: 'text-2xl px-6 py-4',
      },
      variant: {
        solid: '',
        outline:
          'border-2 bg-transparent hocus:border-transparent hocus:text-neutral-0',
      },
    },
    defaultVariants: {
      color: 'primary',
      size: 'md',
      variant: 'solid',
    },
    compoundVariants: [
      {
        color: 'neutral',
        variant: 'solid',
        className: 'bg-neutral-7 text-neutral-0',
      },
      {
        color: 'primary',
        variant: 'solid',
        className: 'bg-primary-7 text-neutral-0',
      },
      {
        color: 'success',
        variant: 'solid',
        className: 'bg-success-7 text-neutral-0',
      },
      {
        color: 'neutral',
        variant: 'outline',
        className: 'border-neutral-7 text-neutral-7',
      },
      {
        color: 'primary',
        variant: 'outline',
        className: 'border-primary-7 text-primary-7',
      },
      {
        color: 'success',
        variant: 'outline',
        className: 'border-success-7 text-success-7',
      },
    ],
  },
);

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

export default function Button({
  children,
  className,
  color,
  size,
  variant,
  ...buttonProps
}: PropsWithChildren<ButtonProps>) {
  return (
    <button
      className={twMerge(buttonVariants({ color, size, variant }), className)}
      type="button"
      {...buttonProps}
    >
      <div className="flex items-center justify-center gap-2">{children}</div>
    </button>
  );
}
