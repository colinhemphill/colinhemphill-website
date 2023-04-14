import Separator from '@/strum/Separator';
import { Metadata } from 'next';
import Hero from './components/Hero';
import MeetColin from './components/MeetColin';
import Section from './components/Section';

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
      </Section>

      {/* <Section>
        <PageContent />
        <BlogCallout />
      </Section> */}

      {/* <PreviewSection className="pb-24">
        <HeadingWithIcon
          Icon={LayoutTemplate}
          level={2}
          size={1}
          text="Personal Projects"
        />
        <p className="mt-4">
          Each of the following is a website that I designed, built, and shipped
          from the ground up! In addition to maintaining the web presence, I am
          involved in each as a hobbyist or as an indirect supporter.
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
            <ProjectsPreview />
          </Suspense>
        </CardsGrid>
      </PreviewSection>
    */}

      {/* <Section>
        <HeadingWithIcon Icon={Mail} level={2} text="Get In Touch" />
        <ContactForm />
      </Section> */}
    </>
  );
}
