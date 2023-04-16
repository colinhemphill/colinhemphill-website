import Badge from '@/strum/Badge';
import Heading from '@/strum/Heading';
import { sortAlphabetical } from '@/utils/sort';
import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import Image from 'next/image';
import ColinPhoto from 'public/img/Colin-Square-Small.jpg';
import { ReactNode } from 'react';
import readingTime from 'reading-time';

dayjs.extend(localizedFormat);

export interface BlogPostProps extends BlogPost {
  compiledContent: ReactNode;
}

export default function BlogPost({
  compiledContent,
  content,
  date,
  image,
  imageAlt,
  tags,
  title,
}: BlogPostProps) {
  const formattedDate = dayjs(date, 'YYYY-MM-DD').format('ll');
  const stats = readingTime(content);
  const sortedTags = sortAlphabetical(tags, 'text');

  return (
    <article className="blog-post">
      <div className="flex flex-col gap-4">
        <Heading
          className="bg-gradient-to-r from-primary-10 to-primary-6 bg-clip-text text-transparent"
          level={1}
        >
          {title}
        </Heading>

        <div className="flex items-center gap-4">
          <div className="h-14 w-14 rounded-full bg-neutral-7 p-0.5">
            <Image
              alt="A headshot of Colin Hemphill"
              className="rounded-full"
              priority
              src={ColinPhoto}
            />
          </div>
          <div className="text-lg">
            <div>Written by Colin Hemphill</div>
            <div>
              {formattedDate} • <em>{stats.text}</em>
            </div>
          </div>
        </div>

        <div className="italic">
          The views expressed on this blog are my own, and do not necessarily
          reflect those of my employer.
        </div>
      </div>

      <Image
        alt={imageAlt}
        className="mt-10 rounded-2xl"
        height={parseInt(image.height)}
        src={image.url}
        width={parseInt(image.width)}
      />

      <div className="mt-10">{compiledContent}</div>

      <div className="mt-10 flex gap-2 border-t-2 border-neutral-3 pt-10">
        {sortedTags.map((tag) => (
          <Badge color="primary" key={tag.id}>
            {tag.text}
          </Badge>
        ))}
      </div>
    </article>
  );
}
