'use client';

import Heading from '@/strum/Heading';
import { delay, duration, easeOut } from '@/utils/animations';
import { animate, inView, stagger } from 'motion';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import Illustration from '../../../public/illustrations/desk-chair-coffee.png';

export default function MeetColin() {
  const animationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    inView('#meet-colin', (info) => {
      animate(
        '.meet-colin-item',
        { opacity: 1, transform: 'none' },
        { duration, easing: easeOut, delay: stagger(delay, { start: delay }) },
      );
    });
  }, []);

  return (
    <div className="flex flex-col gap-10 lg:flex-row" id="meet-colin">
      <Image
        alt="Animation of a cursor over a web interface with a profile avatar"
        className="meet-colin-item h-[300px] w-auto translate-y-8 opacity-0"
        id="meet-colin-illustration"
        src={Illustration}
      />
      <Heading
        className="meet-colin-item translate-y-8 text-4xl opacity-0 md:text-6xl"
        level={2}
      >
        Meet Colin
      </Heading>
    </div>
  );
}
