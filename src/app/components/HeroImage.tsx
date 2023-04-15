'use client';

import { delay, duration } from '@/utils/animations';
import usePrefersReducedMotion from '@/utils/usePrefersReducedMotion';
import { animate } from 'motion';
import Image from 'next/image';
import Laptop from 'public/illustrations/laptop.png';
import Illustration from 'public/illustrations/man-with-guitar.png';
import { useEffect, useRef } from 'react';

export default function ColinImage() {
  const viewRef = useRef<HTMLDivElement>(null);
  const illustrationRef = useRef<HTMLImageElement>(null);
  const laptopRef = useRef<HTMLImageElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    animate(
      viewRef.current as Element,
      {
        opacity: 1.0,
      },
      {
        delay,
        duration,
      },
    );

    if (!prefersReducedMotion) {
      animate(
        illustrationRef.current as Element,
        {
          y: [0.0, -8.0, 0.0, 8.0, 0.0],
        },
        {
          delay: delay + 1,
          duration: 6.0,
          repeat: Infinity,
        },
      );
      animate(
        laptopRef.current as Element,
        {
          y: [0.0, 4.0, 0.0, -4.0, 0.0],
        },
        {
          delay: delay + 1.5,
          duration: 6.0,
          repeat: Infinity,
        },
      );
    }
  }, [prefersReducedMotion]);

  return (
    <div
      className="relative mx-auto max-w-[90%] opacity-0 md:w-[500px] md:max-w-full"
      ref={viewRef}
    >
      <Image
        alt="A 3D illustration of a young man playing an acoustic guitar"
        className="-scale-x-1 h-auto w-full pl-[10%]"
        priority
        ref={illustrationRef}
        src={Illustration}
      />
      <Image
        alt="A 3D illustration of a laptop"
        className="absolute bottom-0 left-0 w-[45%] md:max-w-full"
        priority
        ref={laptopRef}
        src={Laptop}
      />
    </div>
  );
}
