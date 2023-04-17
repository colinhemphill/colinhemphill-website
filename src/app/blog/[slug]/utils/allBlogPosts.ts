import { allPosts } from '@content';

const dev = process.env.NODE_ENV === 'development';

export const allBlogPosts = dev
  ? allPosts
  : allPosts.filter((post) => post.status === 'Published');
