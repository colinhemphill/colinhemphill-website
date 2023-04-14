import { PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

interface SectionProps {
  as?: React.ElementType;
  bg?: 1 | 2 | 3;
  size?: 'sm' | 'md' | 'lg';
}

export default function Section({
  as = 'section',
  bg = 1,
  children,
  size = 'lg',
}: PropsWithChildren<SectionProps>) {
  const Component = as;

  let bgClass;
  switch (bg) {
    case 1: {
      bgClass = 'bg-neutral-1';
      break;
    }
    case 2: {
      bgClass = 'bg-neutral-2';
      break;
    }
    case 3: {
      bgClass = 'bg-neutral-3';
      break;
    }
  }

  let sizeClass;
  switch (size) {
    case 'sm': {
      sizeClass = 'py-4 md:py-8';
      break;
    }
    case 'md': {
      sizeClass = 'py-8 md:py-16';
      break;
    }
    case 'lg': {
      sizeClass = 'py-16 md:py-24';
      break;
    }
  }

  return (
    <Component className={twMerge(bgClass, sizeClass)}>
      <div className="container">{children}</div>
    </Component>
  );
}
