import ContactForm from '@/app/components/contact-form';
import BreadcrumbItem from '@/strum/breadcrumb-item';
import Breadcrumbs from '@/strum/breadcrumbs';
import Heading from '@/strum/heading';
import Section from '@/strum/section';
import Separator from '@/strum/separator';
import {
  metadataOpenGraphDefaults,
  metadataTwitterDefaults,
} from '@/utilities/metadata';
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
