'use client';

import Heading from '@/strum/Heading';
import useInViewAnimate from '@/utils/useInViewAnimate';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';
import Illustration from '../../../public/illustrations/man-chair-coffee-trimmed.png';

export default function MeetColin() {
  const { staggerClassName, viewRef } = useInViewAnimate('meet-colin');

  return (
    <div
      className="flex flex-col items-center gap-24 lg:flex-row"
      ref={viewRef}
    >
      <div className={twMerge('flex-1', staggerClassName)}>
        <Heading level={2}>Hello, I’m Colin 👋</Heading>

        <div className="mt-4 flex max-w-prose items-center justify-start gap-4">
          <div className="text-xl md:text-2xl lg:text-3xl">
            <p>
              I’ve lived in Texas most of my life, and grew up fascinated with
              both computers and music.
            </p>
            <p className="mt-4 font-light text-neutral-6">
              In my full-time career I make software, with an emphasis on front
              end technology like React.
            </p>
            <p className="mt-4 font-light text-neutral-6">
              With training in audio engineering and music, I spend much of my
              free time in my home studio.
            </p>
          </div>
        </div>
      </div>

      <Image
        alt="Illustration of a man standing in front of a bicycle"
        className={twMerge(
          'h-auto max-w-[75%] flex-initial lg:w-[300px]',
          staggerClassName,
        )}
        src={Illustration}
      />
    </div>
  );
}
