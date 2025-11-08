'use client';

import { delay, duration } from '@/utilities/animations';
import usePrefersReducedMotion from '@/utilities/use-prefers-reduced-motion';
import { animate } from 'motion';
import Image from 'next/image';
import Laptop from 'public/illustrations/laptop.png';
import Illustration from 'public/illustrations/man-with-guitar.png';
import { useEffect, useRef } from 'react';

export default function ColinImage() {
  const viewReference = useRef<HTMLDivElement>(null);
  const illustrationReference = useRef<HTMLImageElement>(null);
  const laptopReference = useRef<HTMLImageElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    animate(
      viewReference.current as Element,
      {
        opacity: 1,
      },
      {
        delay,
        duration,
      },
    );

    if (!prefersReducedMotion) {
      animate(
        illustrationReference.current as Element,
        {
          y: [0, -8, 0, 8, 0],
        },
        {
          delay: delay + 1,
          duration: 6,
          repeat: Infinity,
        },
      );
      animate(
        laptopReference.current as Element,
        {
          y: [0, 4, 0, -4, 0],
        },
        {
          delay: delay + 1.5,
          duration: 6,
          repeat: Infinity,
        },
      );
    }
  }, [prefersReducedMotion]);

  return (
    <div
      className="relative mx-auto max-w-[90%] opacity-0 md:w-[450px] md:max-w-full"
      ref={viewReference}
    >
      <Image
        alt="A 3D illustration of a young man playing an acoustic guitar"
        className="h-auto w-full pl-[10%]"
        priority
        ref={illustrationReference}
        src={Illustration}
      />
      <Image
        alt="A 3D illustration of a laptop"
        className="absolute bottom-0 left-0 w-[45%] md:max-w-full"
        priority
        ref={laptopReference}
        src={Laptop}
      />
    </div>
  );
}
