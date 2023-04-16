import { revalidate } from '@/app/layout';
import { hygraphEndpoint, hygraphHeaders } from '@/utils/hygraph';
import BlogPostCard from './BlogPostCard';

async function getBlogPosts(): Promise<BlogPost[]> {
  const response = await fetch(hygraphEndpoint, {
    method: 'POST',
    headers: hygraphHeaders,
    body: JSON.stringify({
      query: `{
        blogPosts(orderBy: date_DESC) {
          date
          description
          id
          image {
            height
            url
            width
          }
          imageAlt
          slug
          tags {
            id
            text
          }
          title
        }
      }`,
    }),
    next: { revalidate },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch blog posts.');
  }

  const { data } = await response.json();
  const blogPosts = data.blogPosts;
  return blogPosts;
}

export default async function BlogPostPreviews() {
  const blogPosts = await getBlogPosts();

  return blogPosts.map((blogPost) => (
    <BlogPostCard key={blogPost.id} {...blogPost} />
  ));
}
