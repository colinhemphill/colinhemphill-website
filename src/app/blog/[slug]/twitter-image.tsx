/* eslint-disable @next/next/no-img-element */
import { revalidate } from '@/app/layout';
import { hygraphEndpoint, hygraphHeaders } from '@/utils/hygraph';
import dayjs from 'dayjs';
import { ImageResponse } from 'next/server';
import { BlogPostParams } from './page';

export const alt = 'Colin Hemphill’s Blog';
export const contentType = 'image/png';
export const runtime = 'edge';
export const size = {
  width: 1600,
  height: 900,
};

export default async function twitter({ params }: { params: BlogPostParams }) {
  const response = await fetch(hygraphEndpoint, {
    method: 'POST',
    headers: hygraphHeaders,
    body: JSON.stringify({
      query: `{
        blogPost(where: { slug: "${params.slug}" }) {
          content
          image {
            height
            url
            width
          }
          imageAlt
          title
        }
      }`,
      variables: {
        slug: params.slug,
      },
    }),
    next: { revalidate },
  });
  const { data } = await response.json();
  const blogPost: BlogPost = data.blogPost;
  const formattedDate = dayjs(blogPost.date, 'YYYY-MM-DD').format(
    'MMMM D, YYYY',
  );

  return new ImageResponse(
    (
      <div tw="bg-zinc-900 flex items-center p-12">
        <div tw="flex flex-col w-8/12 pr-12">
          <div
            style={{
              fontFamily: 'Inter Bold',
            }}
            tw="text-white text-8xl uppercase font-bold"
          >
            {blogPost.title}
          </div>
          <div
            style={{
              fontFamily: 'Inter Regular',
            }}
            tw="text-cyan-300 text-6xl mt-4"
          >
            {formattedDate}
          </div>
        </div>
        <div tw="flex w-4/12">
          <div tw="flex">
            <img
              alt={blogPost.imageAlt}
              src={blogPost.image.url}
              style={{
                objectFit: 'cover',
              }}
              tw="rounded-2xl max-w-full max-h-full"
            />
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
