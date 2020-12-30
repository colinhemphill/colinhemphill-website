import { NextApiRequest, NextApiResponse } from 'next';
import { ErrorLevel, SitemapStream, streamToPromise } from 'sitemap';
import { createGzip } from 'zlib';
import { prismicGetBlogPosts } from '../../cms/prismic';

let sitemap;

const routes = [
  { changefreq: 'monthly', priority: 1, url: 'https://colinhemphill.com' },
  {
    changefreq: 'weekly',
    priority: 0.8,
    url: 'https://colinhemphill.com/blog',
  },
  {
    changefreq: 'monthly',
    priority: 1,
    url: 'https://resume.colinhemphill.com',
  },
];

const api = async (req: NextApiRequest, res: NextApiResponse) => {
  res.setHeader('Content-Type', 'application/xml');
  res.setHeader('Content-Encoding', 'gzip');

  if (sitemap) {
    return res.send(sitemap);
  }

  try {
    const sitemapStream = new SitemapStream({
      lastmodDateOnly: false,
      level: ErrorLevel.WARN,
    });
    const pipeline = sitemapStream.pipe(createGzip());

    routes.forEach((route) => {
      sitemapStream.write(route);
    });

    const blogPosts = await prismicGetBlogPosts();

    blogPosts.forEach((post) => {
      sitemapStream.write({
        changefreq: 'weekly',
        priority: 0.8,
        url: `https://colinhemphill.com/blog/${post.uid}`,
      });
    });

    sitemapStream.end();

    streamToPromise(pipeline).then((sm) => (sitemap = sm));
    pipeline.pipe(res).on('error', (err) => {
      throw err;
    });
  } catch (err) {
    console.error(err);
    res.writeHead(500);
    return res.end(err.message);
  }
};

export default api;
