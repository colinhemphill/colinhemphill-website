import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/strum/accordion';
import Card from '@/strum/card/card';
import CardBody from '@/strum/card/card-body';
import CardFooter from '@/strum/card/card-footer';
import CardTopImg from '@/strum/card/card-top-img';
import CardsGrid from '@/strum/card/cards-grid';
import Section from '@/strum/section';
import { getCodingLinks } from '@/utilities/fetchers/coding';
import { getProjects } from '@/utilities/fetchers/projects';
import { getSocialLinks } from '@/utilities/fetchers/social';
import { githubLink } from '@/utilities/nav-links';
import Link from 'next/link';
import { Suspense } from 'react';
import LinkInBioButton from './link-in-bio-button';
import LinkInBioEvent from './link-in-bio-event';

export default function LinkInBio() {
  return (
    <Section>
      <Suspense>
        <LinkInBioEvent />
      </Suspense>

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
                    <div className="text-neutral-11">{project.subtitle}</div>
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

      <p className="border-neutral-3 bg-neutral-2 text-neutral-11 mt-8 rounded-md border p-4 text-sm">
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
