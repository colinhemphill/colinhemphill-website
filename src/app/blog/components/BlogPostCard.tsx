import Badge from '@/strum/Badge';
import Card from '@/strum/Card/Card';
import CardBody from '@/strum/Card/CardBody';
import CardFooter from '@/strum/Card/CardFooter';
import CardTopImg from '@/strum/Card/CardTopImg';
import Heading from '@/strum/Heading';
import { sortAlphabetical } from '@/utils/sort';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function BlogPostCard({
  description,
  image,
  imageAlt,
  slug,
  tags,
  title,
}: BlogPost) {
  const sortedTags = sortAlphabetical(tags, 'text');

  return (
    <Card>
      <CardTopImg
        alt={imageAlt}
        height={parseInt(image.height)}
        src={image.url}
        width={parseInt(image.width)}
      />
      <CardBody>
        <Heading className="line-clamp-2" level={3}>
          {title}
        </Heading>
        <p className="mt-2 line-clamp-3">{description}</p>
        <div className="mt-4 flex flex-wrap items-start gap-1">
          {sortedTags.map((tag) => (
            <Badge key={tag.id} size="sm">
              {tag.text}
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
