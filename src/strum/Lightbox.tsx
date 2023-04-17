'use client';

import Button from '@/strum/Button';
import { X } from 'lucide-react';
import Image, { ImageProps } from 'next/image';
import React, { useState } from 'react';
import { twMerge } from 'tailwind-merge';

interface Lightbox extends ImageProps {
  rounded?: boolean;
}

const Lightbox: React.FC<Lightbox> = ({
  alt,
  className,
  height,
  rounded = true,
  src,
  width,
}) => {
  const [showLightbox, setShowLightbox] = useState(false);

  const toggleLightbox = () => {
    const newState = !showLightbox;
    setShowLightbox(newState);

    const body = document.body;
    if (newState === true) {
      body.setAttribute('data-menu-open', 'true');
    } else {
      body.removeAttribute('data-menu-open');
    }
  };

  return (
    <>
      {showLightbox && (
        <>
          {/* overlay */}
          <div
            className={twMerge(
              'fixed left-0 top-0 z-10 h-full w-full bg-black transition-opacity duration-300',
              showLightbox ? 'opacity-95' : 'pointer-events-none opacity-0',
            )}
            onClick={toggleLightbox}
          />
          <div
            className="fixed left-0 top-0 z-20 flex h-full w-full items-center justify-center"
            onClick={toggleLightbox}
          >
            <Image
              alt={alt}
              className="max-h-full max-w-full object-contain"
              height={height}
              src={src}
              width={width}
            />
          </div>
          <Button
            className="fixed right-10 top-10 z-20 h-10 w-10 rounded-full p-0"
            onClick={toggleLightbox}
          >
            <span className="sr-only">Close enlarged image</span>
            <X name="Close" />
          </Button>
        </>
      )}

      <div className="my-8 flex items-center justify-center">
        <Image
          alt={alt}
          className={twMerge(
            'cursor-pointer',
            rounded && 'rounded-md',
            className,
          )}
          height={height}
          onClick={toggleLightbox}
          src={src}
          width={width}
        />
      </div>
    </>
  );
};

export default Lightbox;
