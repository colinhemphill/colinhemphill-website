/* eslint-disable @next/next/no-img-element */
import { BlogPostParams } from '@/app/(main)/blog/[slug]/page';
import { getBlogPostShareData } from '@/app/(main)/blog/[slug]/utils/getBlogPost';
import { formatDateString } from '@/utils/date';
import { loadOpengraphImageFonts } from '@/utils/loadOpengraphImageFonts';
import { ImageResponse } from 'next/server';

export const alt = 'Colin Hemphill’s Blog';
export const contentType = 'image/png';
export const runtime = 'edge';
export const size = {
  width: 1200,
  height: 630,
};

export default async function og({ params }: { params: BlogPostParams }) {
  try {
    const { inter400, inter700 } = await loadOpengraphImageFonts();
    const { date, image, ogImage, title } = getBlogPostShareData(params);
    const formattedDate = formatDateString(date);

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
                fontFamily: 'Inter 700',
              }}
              tw="text-white text-6xl uppercase"
            >
              {title}
            </div>
            <div
              style={{
                fontFamily: 'Inter 400',
              }}
              tw="text-cyan-300 text-4xl mt-4"
            >
              {formattedDate}
            </div>
          </div>
          <div tw="flex w-4/12">
            <div tw="flex">
              <img
                alt={shareImage.alt}
                src={imageSrc}
                height={shareImage.height}
                style={{
                  objectFit: 'cover',
                }}
                tw="rounded-2xl max-w-full max-h-full"
                width={shareImage.width}
              />
            </div>
          </div>
        </div>
      ),
      {
        ...size,
        fonts: [
          {
            name: 'Inter 400',
            data: inter400,
          },
          {
            name: 'Inter 700',
            data: inter700,
          },
        ],
      },
    );
  } catch (err: any) {
    console.error(`${err.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
