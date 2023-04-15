import Heading from '@/strum/Heading';
import HeroImage from './HeroImage';

export default function Hero() {
  return (
    <div className="container flex flex-col items-center gap-10 py-16 md:py-48 lg:flex-row">
      <div className="flex-1">
        <h1 className="bg-gradient-to-r from-primary-10 to-primary-6 bg-clip-text text-center text-6xl font-extrabold text-transparent md:text-8xl lg:text-left">
          Colin Hemphill
        </h1>
        <Heading
          className="mx-auto mt-4 max-w-sm text-center md:max-w-md lg:mx-0 lg:text-left xl:max-w-none"
          level={2}
          size={1}
        >
          A web developer and noise-maker in Austin
        </Heading>
      </div>
      <div className="flex-initial">
        <HeroImage />
      </div>
    </div>
  );
}
