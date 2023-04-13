import BreadcrumbItem from '@/strum/BreadcrumbItem';
import Breadcrumbs from '@/strum/Breadcrumbs';
import Heading from '@/strum/Heading';
import Separator from '@/strum/Separator';
import { Metadata } from 'next';
import ContactForm from '../components/ContactForm';
import Section from '../components/Section';
import { metadataOpenGraphDefaults, metadataTwitterDefaults } from '../layout';

export const metadata: Metadata = {
  title: 'Contact',
  openGraph: {
    ...metadataOpenGraphDefaults,
    description:
      'Get in touch with Colin for questions, comments, and opportunities.',
    title: 'Contact',
  },
  twitter: {
    ...metadataTwitterDefaults,
    description:
      'Get in touch with Colin for questions, comments, and opportunities.',
    title: 'Contact',
  },
};

export default function ContactPage() {
  return (
    <>
      <Separator direction="up" from={0} to={1} size="sm" />

      <Section size="sm">
        <Breadcrumbs>
          <BreadcrumbItem href="/" title="Home" />
          <BreadcrumbItem active href="/contact" title="Contact" />
        </Breadcrumbs>
      </Section>

      <Section>
        <Heading level={1}>Contact Form</Heading>
        <ContactForm />
      </Section>
    </>
  );
}
