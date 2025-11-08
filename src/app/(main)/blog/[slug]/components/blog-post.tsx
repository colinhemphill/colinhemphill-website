import { CustomMDXComponents } from '@/app/components/custom-mdx-components';
import Badge from '@/strum/badge';
import Heading from '@/strum/heading';
import { formatDateString } from '@/utilities/date';
import { sortAlphabetical } from '@/utilities/sort';
import { Post } from '@content';
import { MDXComponents } from 'mdx/types';
import { useMDXComponent } from 'next-contentlayer2/hooks';
import Image from 'next/image';
import ColinPhoto from 'public/img/Colin-Square-Small.jpg';

interface BlogPostProperties extends Post {
  readingStats: ReadingTime;
}

export default function BlogPost({
  body,
  date,
  image,
  readingStats,
  tags,
  title,
}: BlogPostProperties) {
  const formattedDate = formatDateString(date);
  const sortedTags = sortAlphabetical(tags, 'title');
  const MDXContent = useMDXComponent(body.code);

  return (
    <div className="blog-post leading-relaxed">
      <div className="flex flex-col gap-4">
        <Heading
          className="from-primary-12 to-primary-9 bg-gradient-to-r bg-clip-text text-transparent"
          level={1}
        >
          {title}
        </Heading>

        <div className="flex items-center gap-4">
          <div className="bg-neutral-7 h-14 w-14 rounded-full p-0.5">
            <Image
              alt="A headshot of Colin Hemphill"
              className="rounded-full"
              src={ColinPhoto}
            />
          </div>
          <div className="text-lg">
            <div>Written by Colin Hemphill</div>
            <div>
              {formattedDate} • <em>{readingStats.text}</em>
            </div>
          </div>
        </div>

        <div className="italic">
          The views expressed on this blog are my own, and do not necessarily
          reflect those of my employer.
        </div>
      </div>

      <Image
        alt={image.alt}
        className="mt-10 rounded-2xl"
        height={image.height}
        priority
        src={image.src}
        width={image.width}
      />

      <article className="mt-10">
        {/* eslint-disable-next-line react-hooks/static-components */}
        <MDXContent components={CustomMDXComponents as MDXComponents} />
      </article>

      <div className="border-neutral-3 mt-10 flex flex-wrap gap-2 border-t-2 pt-10">
        {sortedTags.map((tag) => (
          <Badge color="primary" key={tag.title}>
            {tag.title}
          </Badge>
        ))}
      </div>
    </div>
  );
}
