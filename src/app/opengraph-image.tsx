/* eslint-disable @next/next/no-img-element */
import { appUrl } from '@/utils/env';
import { loadOpengraphImageFonts } from '@/utils/loadOpengraphImageFonts';
import { ImageResponse } from 'next/server';

export const alt = 'Colin Hemphill';
export const contentType = 'image/png';
export const runtime = 'edge';
export const size = {
  width: 1200,
  height: 630,
};

export default async function og() {
  try {
    const { inter400, inter700 } = await loadOpengraphImageFonts();

    return new ImageResponse(
      (
        <div
          style={{ fontFamily: 'Inter 400' }}
          tw="bg-zinc-900 w-full h-full items-center justify-between flex py-8 px-16 text-zinc-50"
        >
          <div tw="flex flex-col w-8/12">
            <div style={{ fontFamily: 'Inter 700' }} tw="text-8xl flex">
              <div tw="border-b-8 border-transparent pr-4">Colin</div>
              <div tw="border-b-8 border-cyan-300">Hemphill</div>
            </div>
            <div tw="text-5xl mt-4 text-zinc-400">
              A web developer and noise-maker in Austin, TX
            </div>
          </div>
          <img
            alt="A man sitting down and strumming an acoustic guitar"
            tw="w-4/12"
            src={`${appUrl}/illustrations/man-with-guitar.png`}
          />
        </div>
      ),
      {
        ...size,
        fonts: [
          {
            name: 'Inter 400',
            data: await inter400,
          },
          {
            name: 'Inter 700',
            data: await inter700,
          },
        ],
      },
    );
  } catch (err: any) {
    console.error(`${err.message}`);
    return new Response('Failed to generate og image', {
      status: 500,
    });
  }
}
