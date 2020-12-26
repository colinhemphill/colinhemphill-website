import {
  faAddressCard,
  faCode,
  faEnvelope,
  faPodcast,
} from '@fortawesome/free-solid-svg-icons';
import { InferGetStaticPropsType } from 'next';
import React from 'react';
import { getCMSIntegration } from '../cms';
import ContactForm from '../components/ContactForm/ContactForm';
import Footer from '../components/Footer/Footer';
import Hero from '../components/Hero/Hero';
import PageHead from '../components/PageHead';
import Project from '../components/Project/Project';
import Section from '../components/Section/Section';
import SectionHeader from '../components/SectionHeader/SectionHeader';
import Separator from '../components/Separator/Separator';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const getStaticProps = async () => {
  const CMS = getCMSIntegration();
  const personalInformation = await CMS.getPersonalInformation();
  const personalProjects = await CMS.getPersonalProjects();
  const links = await CMS.getLinks();

  return {
    props: {
      links,
      personalInformation,
      personalProjects,
    },
    revalidate: 60,
  };
};

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const Page = (props: Props): JSX.Element => {
  const { links, personalInformation, personalProjects } = props;

  return (
    <>
      <PageHead pageTitle="Web Developer & Noise-Maker" />

      <Hero />
      <Separator background="white" direction="down" foreground="primary" />

      <Section color="white">
        <SectionHeader icon={faAddressCard} text="About Colin" />
        <p>
          I have worked in professional web development since 2013, and
          currently specialize in front end technologies like React. I strive to
          build beautiful, accessible, functional, and performant applications
          that make the web a friendly and enjoyable experience for everyone.
        </p>
        <p>
          As a hobbyist, I spend most of my free time working in podcasting and
          music production. With a bachelor’s degree in Audio Engineering
          Technology from Belmont University, a premiere music business and
          liberal arts school in Nashville, I do creative and production work
          for personal projects as well as volunteer work at churches.
        </p>
        <p>
          My wife and I live in Austin, but have spent much of our lives in DFW
          as well. Together we enjoy video games, D&D, and anime, and have a
          Green Cheeked Conure named Mugi.
        </p>
      </Section>

      <Separator background="white" direction="up" foreground="light" />

      <Section color="light">
        <SectionHeader icon={faCode} text="Professional Work" />
        <p>
          My current position is Front End Engineer II at{' '}
          <a
            href="https://www.thezebra.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            The Zebra
          </a>
          , a website created to simplify insurance shopping by comparing quotes
          across hundreds of providers. At The Zebra, I create front end
          applications in React and Vue.js for our product team. I am
          responsible for implementing designs, building new features, and
          making continual improvements to our funnel experience. We focus on
          strict accessibility standards, performance, A/B testing, and
          maximizing conversions, while maintaining a user experience that makes
          the complex task of comparing insurance rates fast and simple. I am
          often responsible for managing tech initiatives on our Auto Funnel
          team, as well as mentoring lower-level developers.
        </p>
        <p>
          If you would like to view my professional résumé, it is available
          digitally or as a PDF download at{' '}
          <a
            href="https://resume.colinhemphill.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            resume.colinhemphill.com
          </a>
          .
        </p>
      </Section>

      <Separator background="white" direction="down" foreground="light" />

      <Section color="white">
        <SectionHeader icon={faPodcast} text="Personal Projects" />
        <p>
          Each of the following is a website that I designed, built, and shipped
          from the ground up! In addition to maintaining the web presence, I am
          involved in each as a hobbyist or as an indirect supporter.
        </p>

        <div className="row row-cols-lg-3 row-cols-md-2 row-cols-1 g-xs">
          {personalProjects.map((project) => (
            <div className="col" key={project.id}>
              <Project
                description={project.description}
                href={project.href}
                id={project.id}
                image={project.image}
                subtitle={project.subtitle}
                title={project.title}
              />
            </div>
          ))}
        </div>
      </Section>

      <Separator background="white" direction="up" foreground="light" />

      <Section color="light">
        <SectionHeader icon={faEnvelope} text="Get In Touch" />
        <ContactForm />
      </Section>

      <Separator background="dark" direction="down" foreground="light" />

      <Footer links={links} personalInformation={personalInformation} />
    </>
  );
};

export default Page;
