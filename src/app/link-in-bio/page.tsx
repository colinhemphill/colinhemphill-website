import Heading from '@/strum/Heading';
import Separator from '@/strum/Separator';
import {
  metadataOpenGraphDefaults,
  metadataTwitterDefaults,
} from '@/utils/metadata';
import ColinPhoto from '@public/img/Colin-Square-Small.jpg';
import { Metadata } from 'next';
import Image from 'next/image';
import LinkInBio from './components/LinkInBio';

export const metadata: Metadata = {
  title: 'Link-in-bio',
  openGraph: {
    ...metadataOpenGraphDefaults,
    description:
      'The basics about Colin and where to find him on the internet.',
    title: 'Link-in-bio',
  },
  twitter: {
    ...metadataTwitterDefaults,
    description:
      'The basics about Colin and where to find him on the internet.',
    title: 'Link-in-bio',
  },
};

export default function LinkInBioPage() {
  return (
    <>
      <header className="py-8 text-center md:py-16 md:text-left">
        <div className="container flex flex-col items-center justify-between gap-8 md:flex-row">
          <div>
            <Heading level={1}>Colin Hemphill</Heading>
            <Heading level={2}>
              A web developer and noise-maker in Austin
            </Heading>
          </div>
          <Image
            alt="A headshot of Colin Hemphill in his office"
            className="h-32 w-32 rounded-full md:h-48 md:w-48"
            src={ColinPhoto}
          />
        </div>
      </header>
      <Separator direction="down" from={0} to={1} />
      <LinkInBio />
    </>
  );
}
