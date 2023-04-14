import { VariantProps, cva } from 'class-variance-authority';
import { DetailedHTMLProps, HTMLAttributes, PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

const headingVariants = cva('font-bold', {
  variants: {
    color: {
      danger: 'text-danger-7 dark:text-danger-6',
      neutral: 'text-neutral-10',
      neutralSubtle: 'text-neutral-7',
      primary: 'text-primary-7',
    },
    size: {
      1: 'text-4xl md:text-5xl md:leading-normal',
      2: 'text-3xl md:text-4xl',
      3: 'text-2xl md:text-3xl',
      4: 'text-xl md:text-2xl',
      5: 'text-lg md:text-xl',
      6: 'text-base md:text-lg',
    },
  },
  defaultVariants: {
    color: 'neutral',
  },
});

export type HeadingProps = DetailedHTMLProps<
  HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
> &
  VariantProps<typeof headingVariants> & {
    level: 1 | 2 | 3 | 4 | 5 | 6;
  };

export default function Heading({
  children,
  className,
  color,
  level,
  size,
}: PropsWithChildren<HeadingProps>) {
  const classes = twMerge(
    headingVariants({ color, size: size || level }),
    level === 1 &&
      'bg-gradient-to-r from-primary-10 to-primary-6 bg-clip-text text-transparent',
    className,
  );

  switch (level) {
    case 1: {
      return <h1 className={classes}>{children}</h1>;
    }
    case 2: {
      return <h2 className={classes}>{children}</h2>;
    }
    case 3: {
      return <h3 className={classes}>{children}</h3>;
    }
    case 4: {
      return <h4 className={classes}>{children}</h4>;
    }
    case 5: {
      return <h5 className={classes}>{children}</h5>;
    }
    case 6: {
      return <h6 className={classes}>{children}</h6>;
    }
  }
}
