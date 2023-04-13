import { ImageResponse } from 'next/server';

export const alt = 'Colin Hemphill’s Blog';
export const contentType = 'image/png';
export const runtime = 'edge';
export const size = {
  width: 1200,
  height: 630,
};

export default async function og() {
  return new ImageResponse(
    (
      <div tw="bg-zinc-900 w-full h-full flex py-8 px-16 flex-col items-center justify-center text-zinc-50 text-center">
        <div tw="font-bold text-9xl flex">
          <div tw="border-b-8 border-transparent pr-4">Colin</div>
          <div tw="border-b-8 border-cyan-300">Hemphill</div>
        </div>
        <div tw="text-6xl mt-10 text-zinc-400">Get in touch</div>
      </div>
    ),
    {
      ...size,
    },
  );
}
