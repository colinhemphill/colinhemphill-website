'use client';

import Heading from '@/strum/Heading';
import { delay, duration, easeOut, inViewAnimation } from '@/utils/animations';
import usePrefersReducedMotion from '@/utils/usePrefersReducedMotion';
import { animate, inView, stagger } from 'motion';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { twMerge } from 'tailwind-merge';
import Illustration from '../../../public/illustrations/optimized/man-chair-coffee.png';

const staggerItem = 'create-software-stagger-item';

export default function CreateSoftware() {
  const viewRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    inView(viewRef.current as Element, () => {
      animate(`.${staggerItem}`, inViewAnimation(prefersReducedMotion), {
        duration,
        easing: easeOut,
        delay: stagger(delay, { start: delay }),
      });
    });
  }, [prefersReducedMotion]);

  return (
    <div
      className="flex flex-col items-center gap-10 lg:flex-row"
      ref={viewRef}
    >
      <div className={staggerItem}>
        <Heading level={2}>Creating Quality Software</Heading>

        <div className="mt-4 flex items-center justify-start gap-4">
          <div className="text-3xl">
            <p>
              My goal is to make the web a friendly and enjoyable place for
              everyone.
            </p>
            <ul className="mt-4 list-disc pl-6 font-light text-neutral-6">
              <li className="my-1 pl-2">
                Design and build amazing front-end experiences.
              </li>
              <li className="my-1 pl-2">
                Lead teams through technical expertise.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Image
        alt="Animation of a cursor over a web interface with a profile avatar"
        className={twMerge('h-auto w-[40%]', staggerItem)}
        src={Illustration}
      />
    </div>
  );
}
