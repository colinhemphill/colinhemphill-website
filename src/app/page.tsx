import CardMock from '@/strum/Card/CardMock';
import CardsGrid from '@/strum/Card/CardsGrid';
import HeadingWithIcon from '@/strum/HeadingWithIcon';
import PreviewSection from '@/strum/PreviewSection';
import ProjectsPreview from '@/strum/ProjectsPreview';
import Separator from '@/strum/Separator';
import { LayoutTemplate, Mail } from 'lucide-react';
import { Metadata } from 'next';
import { Suspense } from 'react';
import Section from '../strum/Section';
import BlogCallout from './components/BlogCallout';
import ContactForm from './components/ContactForm';
import CreateSoftware from './components/CreateSoftware';
import Hero from './components/Hero';
import MeetColin from './components/MeetColin';

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
          <Suspense
            fallback={
              <>
                <CardMock />
                <CardMock />
                <CardMock />
              </>
            }
          >
            {/* @ts-expect-error Async Server Component */}
            <ProjectsPreview />
          </Suspense>
        </CardsGrid>
      </PreviewSection>

      <Section>
        <HeadingWithIcon Icon={Mail} level={2} text="Get In Touch" />
        <ContactForm />
      </Section>
    </>
  );
}
