import { readingTime } from 'reading-time-estimator';
import { BlogPostParams } from '../page';
import { allBlogPosts } from './allBlogPosts';

export function getBlogPost(params: BlogPostParams) {
  const blogPost = allBlogPosts.find((post) => post.slug === params.slug);
  if (blogPost) {
    const readingStats = readingTime(blogPost.body.raw, 150);
    return { blogPost, readingStats };
  } else {
    throw new Error(`Blog post ${params.slug} not found`);
  }
}
