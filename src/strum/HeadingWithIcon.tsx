import { LucideIcon } from 'lucide-react';
import { twMerge } from 'tailwind-merge';
import Heading, { HeadingProps } from './Heading';

interface HeadingWithIconProps extends WithClassName {
  Icon: LucideIcon;
  level: HeadingProps['level'];
  size?: HeadingProps['size'];
  text?: string;
}

export default function HeadingWithIcon({
  className,
  Icon,
  level,
  size,
  text,
}: HeadingWithIconProps) {
  return (
    <Heading
      className={twMerge('flex items-center', className)}
      level={level}
      size={size}
    >
      <div className="bg-neutral-11 mr-3 flex h-[1.15em] w-[1.15em] items-center justify-center rounded-full">
        <Icon className="stroke-neutral-1" size="0.65em" />
      </div>
      {text}
    </Heading>
  );
}
