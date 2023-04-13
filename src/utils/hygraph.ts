export const hygraphEndpoint = process.env
  .NEXT_PUBLIC_HYGRAPH_CONTENT_API as string;

export const hygraphHeaders = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
  Authorization: `Bearer ${process.env.HYGRAPH_AUTH_TOKEN}`,
};
