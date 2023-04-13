import { revalidate } from '@/app/layout';
import { hygraphEndpoint, hygraphHeaders } from '@/utils/hygraph';
import dayjs from 'dayjs';
import { MetadataRoute } from 'next';

const baseUrl = 'https://colinhemphill.com';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  let routes: MetadataRoute.Sitemap = [];

  routes = routes.concat([
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
    },
  ]);

  const response = await fetch(hygraphEndpoint, {
    method: 'POST',
    headers: hygraphHeaders,
    body: JSON.stringify({
      query: `{
        blogPosts(orderBy: date_DESC) {
          date
          id
          slug
        }
      }`,
    }),
    next: { revalidate },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch blog posts.');
  }

  const { data } = await response.json();
  const blogPosts: Array<BlogPost> = data.blogPosts;

  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((blogPost) => ({
    lastModified: dayjs(blogPost.date, 'YYYY-MM-DD').toDate(),
    url: `${baseUrl}/blog/${blogPost.slug}`,
  }));

  routes = routes.concat(blogRoutes);

  return routes;
}
