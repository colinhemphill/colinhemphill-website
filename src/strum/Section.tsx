import { VariantProps, cva } from 'class-variance-authority';
import { PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

export const sectionVariants = cva('', {
  variants: {
    bg: {
      1: 'bg-neutral-1',
      2: 'bg-neutral-2',
      3: 'bg-neutral-3',
    },
    size: {
      sm: 'py-4 md:py-8',
      md: 'py-8 md:py-16',
      lg: 'py-16 md:py-24',
    },
  },
  defaultVariants: {
    bg: 1,
    size: 'lg',
  },
});

export type SectionProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof sectionVariants> & {
    as?: React.ElementType;
    bg?: 1 | 2 | 3;
    className?: string;
    size?: 'sm' | 'md' | 'lg';
  };

export default function Section({
  as = 'section',
  bg,
  children,
  className,
  size,
}: PropsWithChildren<SectionProps>) {
  const Component = as;

  return (
    <Component className={twMerge(sectionVariants({ bg, size }), className)}>
      <div className="container">{children}</div>
    </Component>
  );
}
