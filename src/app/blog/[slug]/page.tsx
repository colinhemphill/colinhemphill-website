import Loading from '@/app/components/Loading';
import { revalidate } from '@/app/layout';
import BreadcrumbItem from '@/strum/BreadcrumbItem';
import Breadcrumbs from '@/strum/Breadcrumbs';
import Separator from '@/strum/Separator';
import { hygraphEndpoint, hygraphHeaders } from '@/utils/hygraph';
import { MDXComponents } from 'mdx/types';
import { compileMDX } from 'next-mdx-remote/rsc';
import { Suspense } from 'react';
import rehypeHighlight from 'rehype-highlight/lib';
import { useMDXComponents } from '../../../../mdx-components';
import Section from '../../components/Section';
import {
  metadataOpenGraphDefaults,
  metadataTwitterDefaults,
} from '../../layout';
import BlogPost, { BlogPostProps } from './components/BlogPost';

export interface BlogPostParams {
  slug: string;
}

export async function generateMetadata({ params }: { params: BlogPostParams }) {
  const blogPost = await getBlogPost(params);

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

async function getBlogPost(
  params: BlogPostParams,
  components?: MDXComponents,
): Promise<BlogPostProps> {
  const response = await fetch(hygraphEndpoint, {
    cache: 'no-cache',
    method: 'POST',
    headers: hygraphHeaders,
    body: JSON.stringify({
      query: `{
        blogPost(where: { slug: "${params.slug}" }) {
          content
          date
          description
          id
          image {
            height
            url
            width
          }
          imageAlt
          tags {
            id
            text
          }
          title
        }
      }`,
      variables: {
        slug: params.slug,
      },
    }),
    next: { revalidate },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch blog post.');
  }

  const { data } = await response.json();
  const blogPost = data.blogPost;

  const { content } = await compileMDX({
    components,
    options: {
      parseFrontmatter: false,
      mdxOptions: {
        rehypePlugins: [rehypeHighlight],
      },
    },
    source: blogPost.content,
  });

  return { ...blogPost, compiledContent: content };
}

export default async function BlogPage({ params }: { params: BlogPostParams }) {
  const components = useMDXComponents();
  const blogPost = await getBlogPost(params, components);

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
          <BlogPost {...blogPost} />
        </Suspense>
      </Section>
    </>
  );
}
