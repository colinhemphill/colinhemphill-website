import BreadcrumbItem from '@/strum/BreadcrumbItem';
import Breadcrumbs from '@/strum/Breadcrumbs';
import CardsGrid from '@/strum/Card/CardsGrid';
import Heading from '@/strum/Heading';
import PreviewSection from '@/strum/PreviewSection';
import Section from '@/strum/Section';
import Separator from '@/strum/Separator';
import {
  metadataOpenGraphDefaults,
  metadataTwitterDefaults,
} from '@/utils/metadata';
import { Metadata } from 'next';
import { allBlogPosts } from './[slug]/utils/allBlogPosts';
import BlogPostCard from './components/BlogPostCard';

export const metadata: Metadata = {
  title: 'Blog',
  openGraph: {
    ...metadataOpenGraphDefaults,
    description:
      'Colin’s explorations of front end web development, music production, audio engineering, and podcasting.',
    title: 'Blog',
  },
  twitter: {
    ...metadataTwitterDefaults,
    description:
      'Colin’s explorations of front end web development, music production, audio engineering, and podcasting.',
    title: 'Blog',
  },
};

export default function BlogPage() {
  return (
    <>
      <Separator direction="up" from={0} to={1} size="sm" />

      <Section size="sm">
        <Breadcrumbs>
          <BreadcrumbItem href="/" title="Home" />
          <BreadcrumbItem active href="/blog" title="Blog" />
        </Breadcrumbs>
      </Section>

      <Section>
        <Heading level={1}>Blog Posts</Heading>
        <Heading level={2}>
          Front End Web Development, Music Production, Audio Engineering, and
          Podcasting
        </Heading>
        <p className="mt-4 italic">
          The views expressed on this blog are my own, and do not necessarily
          reflect those of my employer.
        </p>
      </Section>

      <PreviewSection className="pb-24">
        <CardsGrid>
          {allBlogPosts.map((post) => (
            <BlogPostCard key={post._id} {...post} />
          ))}
        </CardsGrid>
      </PreviewSection>
    </>
  );
}
