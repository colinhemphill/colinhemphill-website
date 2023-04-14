'use client';

import Heading from '@/strum/Heading';
import lottie from 'lottie-web';
import { useEffect, useRef } from 'react';

export default function MeetColin() {
  const animationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: animationRef.current as Element,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'animations/abstract-sign-in.json',
    });
  }, []);

  return (
    <div className="flex gap-10" id="meet-colin">
      <div id="lottie-meet-colin" ref={animationRef} />
      <Heading level={2}>Meet Colin</Heading>
    </div>
  );
}
