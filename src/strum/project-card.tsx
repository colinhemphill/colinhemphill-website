import Card from '@/strum/card/card';
import CardBody from '@/strum/card/card-body';
import CardFooter from '@/strum/card/card-footer';
import CardTopImg from '@/strum/card/card-top-img';
import Heading from '@/strum/heading';
import { Project } from '@content';

export default function ProjectCard({
  body,
  image,
  subtitle,
  title,
  url,
}: Project) {
  return (
    <Card>
      <CardTopImg
        alt={`${title} logo`}
        height={image.height}
        src={image.src}
        width={image.width}
      />
      <CardBody>
        <Heading level={3}>{title}</Heading>
        <div className="text-neutral-11 text-lg">{subtitle}</div>
        <div className="mt-2" dangerouslySetInnerHTML={{ __html: body.html }} />
      </CardBody>
      <CardFooter className="text-center">
        <a className="link-solid" href={url}>
          {title} website
        </a>
      </CardFooter>
    </Card>
  );
}
