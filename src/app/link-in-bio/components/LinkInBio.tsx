'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/strum/Accordion';
import Alert from '@/strum/Alert';
import Card from '@/strum/Card/Card';
import CardBody from '@/strum/Card/CardBody';
import CardFooter from '@/strum/Card/CardFooter';
import CardTopImg from '@/strum/Card/CardTopImg';
import CardsGrid from '@/strum/Card/CardsGrid';
import Section from '@/strum/Section';
import { getCodingLinks } from '@/utils/fetchers/coding';
import { getProjects } from '@/utils/fetchers/projects';
import { getSocialLinks } from '@/utils/fetchers/social';
import { githubLink } from '@/utils/nav-links';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import LinkInBioButton from './LinkInBioButton';

export default function LinkInBio() {
  const searchParams = useSearchParams();
  const event = searchParams.get('event');

  return (
    <Section>
      {event && (
        <Alert className="mb-8" color="primary">
          Hi there, it was nice to meet you at <strong>{event}</strong>! Here
          you’ll find links to my personal projects and to other places you can
          find me on the internet.
        </Alert>
      )}

      <Accordion defaultValue={['social']} type="multiple">
        <AccordionItem value="social">
          <AccordionTrigger>Social</AccordionTrigger>
          <AccordionContent>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
              {getSocialLinks().map((link) => (
                <LinkInBioButton key={link._id} {...link} />
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="projects">
          <AccordionTrigger>Projects</AccordionTrigger>
          <AccordionContent className="py-4">
            <CardsGrid className="gap-4">
              {getProjects().map((project) => (
                <Card key={project._id}>
                  <CardTopImg
                    alt={`${project.title} logo`}
                    height={project.image.height}
                    src={project.image.src}
                    width={project.image.width}
                  />
                  <CardBody>
                    <div className="text-lg font-bold">{project.title}</div>
                    <div className="text-neutral-6">{project.subtitle}</div>
                  </CardBody>
                  <CardFooter className="text-center">
                    <a className="link-solid" href={project.url}>
                      {project.title} website
                    </a>
                  </CardFooter>
                </Card>
              ))}
            </CardsGrid>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="coding">
          <AccordionTrigger>Coding</AccordionTrigger>
          <AccordionContent>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
              {getCodingLinks().map((link) => (
                <LinkInBioButton key={link._id} {...link} />
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <p className="mt-8 rounded-md border border-neutral-3 bg-neutral-2 p-4 text-sm text-neutral-6">
        This link-in-bio is part of my <Link href="/">personal website</Link>,
        which is built with the Next.js App Router, TypeScript, Contentlayer,
        and Tailwind CSS. All links are Bitly shortlinks with a custom domain,
        including the link that brought you to this page. The site is{' '}
        <a href={githubLink}>open-sourced</a> if you’re curious about its
        implementation!
      </p>
    </Section>
  );
}
