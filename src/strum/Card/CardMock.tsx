import PlaceholderImage from 'public/img/placeholder.jpg';
import Heading from '../Heading';
import Skeleton from '../Skeleton';
import Card from './Card';
import CardBody from './CardBody';
import CardFooter from './CardFooter';
import CardTopImg from './CardTopImg';

export default function CardMock() {
  return (
    <Card>
      <CardTopImg
        alt="Loading image"
        placeholder="blur"
        src={PlaceholderImage}
      />
      <CardBody>
        <Heading level={3}>
          <Skeleton />
          <Skeleton className="w-8/12" />
        </Heading>
        <div className="mt-4 text-lg">
          <Skeleton className="w-3/12" />
        </div>
        <p className="mt-4">
          <Skeleton className="w-11/12" />
          <Skeleton className="w-12/12" />
          <Skeleton className="w-4/12" />
        </p>
      </CardBody>
      <CardFooter className="flex justify-center">
        <Skeleton className="w-2/4" />
      </CardFooter>
    </Card>
  );
}
