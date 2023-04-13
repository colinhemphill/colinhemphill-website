import Card from '@/strum/Card/Card';
import CardBody from '@/strum/Card/CardBody';
import CardFooter from '@/strum/Card/CardFooter';
import CardTopImg from '@/strum/Card/CardTopImg';
import Heading from '@/strum/Heading';

export default function ProjectCard({
  description,
  image,
  subtitle,
  title,
  url,
}: PersonalProject) {
  return (
    <Card>
      <CardTopImg
        alt={`${title} logo`}
        height={parseInt(image.height)}
        src={image.url}
        width={parseInt(image.width)}
      />
      <CardBody>
        <Heading level={3}>{title}</Heading>
        <div className="text-lg text-neutral-6">{subtitle}</div>
        <p className="mt-2">{description}</p>
      </CardBody>
      <CardFooter className="text-center">
        <a className="link-solid" href={url}>
          {title} website
        </a>
      </CardFooter>
    </Card>
  );
}
