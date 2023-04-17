import BreadcrumbItem from '@/strum/BreadcrumbItem';
import Breadcrumbs from '@/strum/Breadcrumbs';
import Loading from '@/strum/Loading';
import Separator from '@/strum/Separator';
import {
  metadataOpenGraphDefaults,
  metadataTwitterDefaults,
} from '@/utils/metadata';
import { allPosts } from '@content';
import { useMDXComponents } from 'mdx-components';
import { MDXComponents } from 'mdx/types';
import { compileMDX } from 'next-mdx-remote/rsc';
import { Suspense } from 'react';
import rehypeHighlight from 'rehype-highlight';
import Section from '../../../strum/Section';
import BlogPost from './components/BlogPost';

export interface BlogPostParams {
  slug: string;
}

export async function generateMetadata({ params }: { params: BlogPostParams }) {
  const { blogPost } = await getBlogPost(params);

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

async function getBlogPost(params: BlogPostParams, components?: MDXComponents) {
  const blogPost = allPosts.find((post) => post.slug === params.slug);
  if (!blogPost) {
    throw new Error(`Blog post ${params.slug} not found`);
  }

  const { content } = await compileMDX({
    components,
    options: {
      parseFrontmatter: false,
      mdxOptions: {
        rehypePlugins: [rehypeHighlight],
      },
    },
    source: blogPost.body.raw,
  });

  return { blogPost, compiledContent: content };
}

export default async function BlogPage({ params }: { params: BlogPostParams }) {
  const components = useMDXComponents();
  const { blogPost, compiledContent } = await getBlogPost(params, components);

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
          <BlogPost compiledContent={compiledContent} {...blogPost} />
        </Suspense>
      </Section>
    </>
  );
}
