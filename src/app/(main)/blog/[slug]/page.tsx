import BreadcrumbItem from '@/strum/BreadcrumbItem';
import Breadcrumbs from '@/strum/Breadcrumbs';
import Loading from '@/strum/Loading';
import Section from '@/strum/Section';
import Separator from '@/strum/Separator';
import { Metadata } from 'next';
import { Suspense } from 'react';
import BlogPost from './components/BlogPost';
import { getBlogPost } from './utils/getBlogPost';

export interface BlogPostParams {
  slug: string;
}

export async function generateMetadata({
  params,
}: {
  params: BlogPostParams;
}): Promise<Metadata> {
  const { blogPost } = getBlogPost(params);

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

export default async function BlogPage({ params }: { params: BlogPostParams }) {
  const { blogPost, readingStats } = getBlogPost(params);

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
