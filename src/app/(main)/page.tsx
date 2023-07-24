import BlogCallout from '@/app/components/BlogCallout';
import ContactForm from '@/app/components/ContactForm';
import CreateSoftware from '@/app/components/CreateSoftware';
import Hero from '@/app/components/Hero';
import MeetColin from '@/app/components/MeetColin';
import CardsGrid from '@/strum/Card/CardsGrid';
import HeadingWithIcon from '@/strum/HeadingWithIcon';
import PreviewSection from '@/strum/PreviewSection';
import ProjectCard from '@/strum/ProjectCard';
import Section from '@/strum/Section';
import Separator from '@/strum/Separator';
import { getProjects } from '@/utils/fetchers/projects';
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
