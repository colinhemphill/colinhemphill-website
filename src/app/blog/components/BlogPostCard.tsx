import Card from '@/strum/Card/Card';
import CardBody from '@/strum/Card/CardBody';
import CardFooter from '@/strum/Card/CardFooter';
import CardTopImg from '@/strum/Card/CardTopImg';
import Heading from '@/strum/Heading';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function BlogPostCard({
  description,
  image,
  imageAlt,
  slug,
  title,
}: BlogPost) {
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
        <div className="text-lg text-neutral-6">{}</div>
        <p className="mt-2 line-clamp-3">{description}</p>
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
