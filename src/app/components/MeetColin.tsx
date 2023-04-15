'use client';

import Heading from '@/strum/Heading';
import useInViewAnimate from '@/utils/useInViewAnimate';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';
import Illustration from '../../../public/illustrations/optimized/man-with-bicycle.png';

export default function MeetColin() {
  const { staggerClassName, viewRef } = useInViewAnimate('meet-colin');

  return (
    <div
      className="flex flex-col items-center gap-10 lg:flex-row"
      ref={viewRef}
    >
      <Image
        alt="Illustration of a man standing in front of a bicycle"
        className={twMerge('h-auto max-w-[75%] lg:w-[500px]', staggerClassName)}
        src={Illustration}
      />

      <div className={staggerClassName}>
        <Heading level={2}>Hello, I’m Colin</Heading>

        <div className="mt-4 flex items-center justify-start gap-4">
          <div className="text-xl md:text-2xl lg:text-3xl">
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
    </div>
  );
}
