import { readingTime } from 'reading-time-estimator';
import { BlogPostParameters } from '../page';
import { allBlogPosts } from './all-blog-posts';

export function getBlogPost(parameters: BlogPostParameters) {
  const blogPost = allBlogPosts.find((post) => post.slug === parameters.slug);
  if (blogPost) {
    const readingStats = readingTime(blogPost.body.raw, {
      wordsPerMinute: 200,
      language: 'en',
    });
    return { blogPost, readingStats };
  } else {
    throw new Error(`Blog post ${parameters.slug} not found`);
  }
}

export function getBlogPostShareData(parameters: BlogPostParameters) {
  const blogPost = allBlogPosts.find((post) => post.slug === parameters.slug);
  if (blogPost) {
    const { date, image, ogImage, title } = blogPost;
    return { date, image, ogImage, title };
  } else {
    throw new Error(`Blog post ${parameters.slug} not found`);
  }
}
