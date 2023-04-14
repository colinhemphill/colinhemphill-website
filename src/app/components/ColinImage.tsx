'use client';

import Image from 'next/image';
import ColinPhoto from 'public/img/Colin-Anime-Small.png';
import { useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';

export default function ColinImage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      className={twMerge(
        'z-0 flex items-center justify-center transition-all delay-300 duration-700 ease-out [mask-image:linear-gradient(to_bottom,white_65%,transparent_95%)]',
        mounted ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0',
      )}
    >
      <Image
        alt="An illustration of Colin Hemphill in an anime style"
        className="h-64 w-auto md:h-96"
        priority
        src={ColinPhoto}
      />
    </div>
  );
}
