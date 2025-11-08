import { MetadataRoute } from 'next';
import { allBlogPosts } from './(main)/blog/[slug]/utilities/all-blog-posts';

const baseUrl = 'https://colinhemphill.com';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseRoutes: MetadataRoute.Sitemap = [
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
  ];

  const blogRoutes: MetadataRoute.Sitemap = allBlogPosts.map((blogPost) => ({
    lastModified: new Date(blogPost.date),
    url: `${baseUrl}/blog/${blogPost.slug}`,
  }));

  return [...baseRoutes, ...blogRoutes];
}
