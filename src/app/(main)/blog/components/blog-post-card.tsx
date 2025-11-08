import Badge from '@/strum/badge';
import Card from '@/strum/card/card';
import CardBody from '@/strum/card/card-body';
import CardFooter from '@/strum/card/card-footer';
import CardTopImg from '@/strum/card/card-top-img';
import Heading from '@/strum/heading';
import { formatDateString } from '@/utilities/date';
import { sortAlphabetical } from '@/utilities/sort';
import { Post } from '@content';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function BlogPostCard({
  date,
  description,
  image,
  slug,
  tags,
  title,
}: Post) {
  const sortedTags = sortAlphabetical(tags, 'title');
  const formattedDate = formatDateString(date);

  return (
    <Card>
      <CardTopImg
        alt={image.alt}
        height={image.height}
        src={image.src}
        width={image.width}
      />
      <CardBody>
        <Heading className="line-clamp-2" level={3}>
          {title}
        </Heading>
        <div className="text-neutral-11 mt-1 text-sm">{formattedDate}</div>
        <p className="mt-2 line-clamp-3">{description}</p>
        <div className="mt-4 flex flex-wrap items-start gap-1">
          {sortedTags.map((tag) => (
            <Badge key={tag.title} size="sm">
              {tag.title}
            </Badge>
          ))}
        </div>
      </CardBody>
      <CardFooter className="flex justify-center">
        <Link className="link-solid flex" href={`/blog/${slug}`}>
          Read more
          <ChevronRight />
        </Link>
      </CardFooter>
    </Card>
  );
}
