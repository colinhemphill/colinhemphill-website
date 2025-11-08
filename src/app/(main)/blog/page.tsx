import BreadcrumbItem from '@/strum/breadcrumb-item';
import Breadcrumbs from '@/strum/breadcrumbs';
import CardsGrid from '@/strum/card/cards-grid';
import Heading from '@/strum/heading';
import PreviewSection from '@/strum/preview-section';
import Section from '@/strum/section';
import Separator from '@/strum/separator';
import {
  metadataOpenGraphDefaults,
  metadataTwitterDefaults,
} from '@/utilities/metadata';
import { Metadata } from 'next';
import { allBlogPosts } from './[slug]/utilities/all-blog-posts';
import BlogPostCard from './components/blog-post-card';

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
