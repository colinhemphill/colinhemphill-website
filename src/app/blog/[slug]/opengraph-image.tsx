/* eslint-disable @next/next/no-img-element */
import { formatDateString } from '@/utils/date';
import { ImageResponse } from 'next/server';
import { BlogPostParams } from './page';
import { getBlogPost } from './utils/getBlogPost';

export const alt = 'Colin Hemphill’s Blog';
export const contentType = 'image/png';
export const runtime = 'edge';
export const size = {
  width: 1200,
  height: 630,
};

export default async function og({ params }: { params: BlogPostParams }) {
  const { blogPost } = getBlogPost(params);
  const formattedDate = formatDateString(blogPost.date);
  const { image, ogImage } = blogPost;

  const shareImage = ogImage ?? image;
  let imageSrc = shareImage.src;
  if (!shareImage.src.includes('http')) {
    imageSrc = `https://colinhemphill.com${shareImage.src}`;
  }

  return new ImageResponse(
    (
      <div tw="bg-zinc-900 flex items-center p-12">
        <div tw="flex flex-col w-8/12 pr-12">
          <div
            style={{
              fontFamily: 'Inter Bold',
            }}
            tw="text-white text-6xl uppercase font-bold"
          >
            {blogPost.title}
          </div>
          <div
            style={{
              fontFamily: 'Inter Regular',
            }}
            tw="text-cyan-300 text-4xl mt-4"
          >
            {formattedDate}
          </div>
        </div>
        <div tw="flex w-4/12">
          <div tw="flex">
            <img
              alt={blogPost.image.alt}
              src={imageSrc}
              height={blogPost.image.height}
              style={{
                objectFit: 'cover',
              }}
              tw="rounded-2xl max-w-full max-h-full"
              width={blogPost.image.width}
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
