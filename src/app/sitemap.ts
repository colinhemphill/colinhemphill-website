import { MetadataRoute } from 'next';
import { allBlogPosts } from './(main)/blog/[slug]/utils/allBlogPosts';

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

  const blogRoutes: MetadataRoute.Sitemap = allBlogPosts.map((blogPost) => ({
    lastModified: new Date(blogPost.date),
    url: `${baseUrl}/blog/${blogPost.slug}`,
  }));

  routes = routes.concat(blogRoutes);

  return routes;
}
