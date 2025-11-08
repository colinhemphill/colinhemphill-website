import BreadcrumbItem from '@/strum/breadcrumb-item';
import Breadcrumbs from '@/strum/breadcrumbs';
import Loading from '@/strum/loading';
import Section from '@/strum/section';
import Separator from '@/strum/separator';
import { Metadata } from 'next';
import { Suspense } from 'react';
import BlogPost from './components/blog-post';
import { getBlogPost } from './utilities/get-blog-post';

export interface BlogPostParameters {
  slug: string;
}

export async function generateMetadata(properties: {
  params: Promise<BlogPostParameters>;
}): Promise<Metadata> {
  const parameters = await properties.params;
  const { blogPost } = getBlogPost(parameters);

  return {
    title: { absolute: `${blogPost.title} | Colin Hemphill’s Blog` },
    openGraph: {
      description: blogPost.description,
      title: { absolute: `${blogPost.title} | Colin Hemphill’s Blog` },
      type: 'article',
      url: `https://colinhemphill.com/blog/${blogPost.slug}`,
    },
    twitter: {
      description: blogPost.description,
      title: { absolute: `${blogPost.title} | Colin Hemphill’s Blog` },
    },
  };
}

export default async function BlogPage(properties: {
  params: Promise<BlogPostParameters>;
}) {
  const parameters = await properties.params;
  const { blogPost, readingStats } = getBlogPost(parameters);

  return (
    <>
      <Separator direction="up" from={0} to={1} size="sm" />

      <Section size="sm">
        <Breadcrumbs>
          <BreadcrumbItem href="/" title="Home" />
          <BreadcrumbItem href="/blog" title="Blog" />
          <BreadcrumbItem active href="/blog/test" title={blogPost.title} />
        </Breadcrumbs>
      </Section>

      <Section>
        <Suspense fallback={<Loading />}>
          <BlogPost readingStats={readingStats} {...blogPost} />
        </Suspense>
      </Section>
    </>
  );
}
