import { twMerge } from 'tailwind-merge';

interface Props {
  direction: 'down' | 'up';
  from: 0 | 1 | 2;
  size?: 'sm' | 'md' | 'lg';
  to: 0 | 1 | 2;
}

function Curve({ direction, from, to }: Props) {
  const switchOn = direction === 'down' ? from : to;

  let pathClasses;
  switch (switchOn) {
    case 0: {
      pathClasses = 'stroke-neutral-0 fill-neutral-0';
      break;
    }
    case 1: {
      pathClasses = 'stroke-neutral-1 fill-neutral-1';
      break;
    }
    case 2: {
      pathClasses = 'stroke-neutral-2 fill-neutral-2';
      break;
    }
  }

  if (direction === 'down') {
    return (
      <path
        className={pathClasses}
        d="M2400,0C1920,66.7,1200,66.7,0,0L2400,0z"
      />
    );
  } else {
    return (
      <path className={pathClasses} d="M0,50c480-66.7,1200-66.7,2400,0H0z" />
    );
  }
}

export default function Separator({ direction, from, size = 'md', to }: Props) {
  const switchOn = direction === 'down' ? to : from;

  let bgClasses;
  switch (switchOn) {
    case 0: {
      bgClasses = 'bg-neutral-0';
      break;
    }
    case 1: {
      bgClasses = 'bg-neutral-1';
      break;
    }
    case 2: {
      bgClasses = 'bg-neutral-2';
      break;
    }
  }

  let height;
  switch (size) {
    case 'sm': {
      height = 20;
      break;
    }
    case 'md': {
      height = 40;
      break;
    }
    case 'lg': {
      height = 60;
      break;
    }
  }

  return (
    <svg
      aria-hidden="true"
      className={twMerge('block', bgClasses)}
      width="100%"
      height={height}
      viewBox="0 0 2400 50"
      preserveAspectRatio="none"
    >
      <Curve direction={direction} from={from} to={to} />
    </svg>
  );
}
