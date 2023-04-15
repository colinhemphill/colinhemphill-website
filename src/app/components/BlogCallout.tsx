'use client';

import ButtonLink from '@/strum/ButtonLink';
import HeadingWithIcon from '@/strum/HeadingWithIcon';
import useInViewAnimate from '@/utils/useInViewAnimate';
import { ArrowRight, Rss } from 'lucide-react';
import { twMerge } from 'tailwind-merge';

export default function BlogCallout() {
  const { staggerClassName, viewRef } = useInViewAnimate(
    'blog-callout',
    'fast',
  );

  return (
    <aside className="mt-24 text-center md:mt-32" ref={viewRef}>
      <HeadingWithIcon
        className={twMerge(
          'items-center justify-center text-center text-4xl md:text-5xl',
          staggerClassName,
        )}
        Icon={Rss}
        level={2}
        text="Colin’s Blog"
      />
      <p
        className={twMerge(
          'mx-auto mb-6 mt-4 max-w-3xl text-xl font-semibold md:text-2xl',
          staggerClassName,
        )}
      >
        Read up on Colin’s explorations of front end web development, music
        production, audio engineering, and podcasting.
      </p>

      <ButtonLink className={staggerClassName} href="/blog" size="xl">
        Blog <ArrowRight size="1em" />
      </ButtonLink>
    </aside>
  );
}
