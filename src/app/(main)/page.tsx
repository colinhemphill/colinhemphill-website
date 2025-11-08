import BlogCallout from '@/app/components/blog-callout';
import ContactForm from '@/app/components/contact-form';
import CreateSoftware from '@/app/components/create-software';
import Hero from '@/app/components/hero';
import MeetColin from '@/app/components/meet-colin';
import CardsGrid from '@/strum/card/cards-grid';
import HeadingWithIcon from '@/strum/heading-with-icon';
import PreviewSection from '@/strum/preview-section';
import ProjectCard from '@/strum/project-card';
import Section from '@/strum/section';
import Separator from '@/strum/separator';
import { getProjects } from '@/utilities/fetchers/projects';
import { LayoutTemplate, Mail } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Web Developer and Noise-Maker',
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Separator direction="down" from={0} size="lg" to={1} />

      <Section>
        <MeetColin />
        <div className="py-16" />
        <CreateSoftware />
        <BlogCallout />
      </Section>

      <PreviewSection className="pb-24">
        <HeadingWithIcon
          Icon={LayoutTemplate}
          level={2}
          size={1}
          text="Personal Projects"
        />
        <p className="mt-4 text-xl">
          Each of the following is a website that I designed, built, and shipped
          from the ground up! In addition to maintaining the web presence, I am
          involved in them as a hobbyist or as an indirect supporter.
        </p>
        <CardsGrid className="mt-8">
          {getProjects().map((project) => (
            <ProjectCard key={project._id} {...project} />
          ))}
        </CardsGrid>
      </PreviewSection>

      <Section>
        <HeadingWithIcon Icon={Mail} level={2} text="Get In Touch" />
        <ContactForm />
      </Section>
    </>
  );
}
