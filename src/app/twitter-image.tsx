import { ImageResponse } from 'next/server';

export const alt = 'Colin Hemphill';
export const contentType = 'image/png';
export const runtime = 'edge';
export const size = {
  width: 1600,
  height: 900,
};

export default async function twitter() {
  return new ImageResponse(
    (
      <div tw="bg-zinc-900 w-full h-full flex py-8 px-16 flex-col items-center justify-center text-zinc-50 text-center">
        <div tw="font-bold text-9xl flex">
          <div tw="border-b-8 border-transparent pr-4">Colin</div>
          <div tw="border-b-8 border-cyan-300">Hemphill</div>
        </div>
        <div tw="text-6xl mt-10 text-zinc-400 w-8/12">
          A web developer and noise-maker in Austin, TX
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
