'use client';

import Heading from '@/strum/Heading';
import useInViewAnimate from '@/utils/useInViewAnimate';
import Illustration from '@public/illustrations/man-design-program.png';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

export default function CreateSoftware() {
  const { staggerClassName, viewRef } = useInViewAnimate('create-software');

  return (
    <div
      className="flex flex-col items-center gap-24 lg:flex-row"
      ref={viewRef}
    >
      <div className={twMerge('flex-1', staggerClassName)}>
        <Heading level={2}>Creating Quality Software 🧑‍💻</Heading>

        <div className="mt-4 flex max-w-prose items-center justify-start gap-4">
          <div className="text-xl md:text-2xl lg:text-3xl">
            <p>
              My goal is to make the web a friendly and enjoyable place for
              everyone.
            </p>
            <ul className="mt-4 list-disc pl-6 font-light text-neutral-6">
              <li className="my-1 pl-2">
                Design and build amazing front end experiences.
              </li>
              <li className="my-1 pl-2">
                Lead teams through technical expertise.
              </li>
              <li className="my-1 pl-2">
                Advocate for inclusion and accessibility.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Image
        alt="Illustration of a man in an office chair drinking a cup of coffee"
        className={twMerge(
          'h-auto max-w-[75%] flex-initial lg:w-[300px]',
          staggerClassName,
        )}
        src={Illustration}
      />
    </div>
  );
}
