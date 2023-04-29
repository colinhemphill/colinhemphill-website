const dev = process.env.NODE_ENV === 'development';

export const appUrl =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : `http://${process.env.VERCEL_URL}`;
