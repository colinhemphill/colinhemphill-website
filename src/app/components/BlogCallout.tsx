import ButtonLink from '@/strum/ButtonLink';
import HeadingWithIcon from '@/strum/HeadingWithIcon';
import { ArrowRight, Rss } from 'lucide-react';

export default function BlogCallout() {
  return (
    <aside className="mt-24 text-center md:mt-32">
      <HeadingWithIcon
        className="items-center justify-center text-center text-4xl md:text-5xl"
        Icon={Rss}
        level={2}
        text="Colin’s Blog"
      />
      <p className="mx-auto mb-6 mt-4 max-w-3xl text-xl font-semibold md:text-2xl">
        Read up on Colin’s explorations of front end web development, music
        production, audio engineering, and podcasting.
      </p>

      <ButtonLink href="/blog" size="xl">
        Blog <ArrowRight size="1em" />
      </ButtonLink>
    </aside>
  );
}
