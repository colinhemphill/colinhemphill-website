import { allPosts } from '@content';
import { readingTime } from 'reading-time-estimator';
import { BlogPostParams } from '../page';

export function getBlogPost(params: BlogPostParams) {
  const blogPost = allPosts.find((post) => post.slug === params.slug);
  if (blogPost) {
    const readingStats = readingTime(blogPost.body.raw, 150);
    return { blogPost, readingStats };
  } else {
    throw new Error(`Blog post ${params.slug} not found`);
  }
}
