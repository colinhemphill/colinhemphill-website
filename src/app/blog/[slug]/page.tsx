import BreadcrumbItem from '@/strum/BreadcrumbItem';
import Breadcrumbs from '@/strum/Breadcrumbs';
import Loading from '@/strum/Loading';
import Separator from '@/strum/Separator';
import {
  metadataOpenGraphDefaults,
  metadataTwitterDefaults,
} from '@/utils/metadata';
import { allPosts } from '@content';
import { Suspense } from 'react';
import Section from '../../../strum/Section';
import BlogPost from './components/BlogPost';

export interface BlogPostParams {
  slug: string;
}

export async function generateMetadata({ params }: { params: BlogPostParams }) {
  const { blogPost } = getBlogPost(params);

  return {
    title: { absolute: `${blogPost.title} | Colin Hemphill’s Blog` },
    openGraph: {
      ...metadataOpenGraphDefaults,
      description: blogPost.description,
      title: { absolute: `${blogPost.title} | Colin Hemphill’s Blog` },
    },
    twitter: {
      ...metadataTwitterDefaults,
      description: blogPost.description,
      title: { absolute: `${blogPost.title} | Colin Hemphill’s Blog` },
    },
  };
}

function getBlogPost(params: BlogPostParams) {
  const blogPost = allPosts.find((post) => post.slug === params.slug);
  if (!blogPost) {
    throw new Error(`Blog post ${params.slug} not found`);
  }

  return { blogPost };
}

export default async function BlogPage({ params }: { params: BlogPostParams }) {
  const { blogPost } = getBlogPost(params);

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
          {/* @ts-expect-error Async Server Component */}
          <BlogPost {...blogPost} />
        </Suspense>
      </Section>
    </>
  );
}
