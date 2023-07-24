import ContactForm from '@/app/components/ContactForm';
import BreadcrumbItem from '@/strum/BreadcrumbItem';
import Breadcrumbs from '@/strum/Breadcrumbs';
import Heading from '@/strum/Heading';
import Section from '@/strum/Section';
import Separator from '@/strum/Separator';
import {
  metadataOpenGraphDefaults,
  metadataTwitterDefaults,
} from '@/utils/metadata';
import { Metadata } from 'next';

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
