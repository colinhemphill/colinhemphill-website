import { allPosts } from '@content';

const development = process.env.NODE_ENV === 'development';

export const allBlogPosts = (
  development
    ? allPosts
    : allPosts.filter((post) => post.status === 'Published')
).toSorted((a, b) => {
  return new Date(b.date).getTime() - new Date(a.date).getTime();
});
