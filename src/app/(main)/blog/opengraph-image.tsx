import { ImageResponse } from 'next/server';

export const alt = 'Colin Hemphill’s Blog';
export const contentType = 'image/png';
export const runtime = 'edge';
export const size = {
  width: 1200,
  height: 630,
};

export default async function og() {
  const inter400 = fetch(
    new URL(
      '../../../../node_modules/@fontsource/inter/files/inter-latin-400-normal.woff',
      import.meta.url,
    ),
  ).then((res) => res.arrayBuffer());
  const inter700 = fetch(
    new URL(
      '../../../../node_modules/@fontsource/inter/files/inter-latin-700-normal.woff',
      import.meta.url,
    ),
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{ fontFamily: 'Inter 400' }}
        tw="bg-zinc-900 w-full h-full flex py-8 px-16 flex-col items-center justify-center text-zinc-50 text-center"
      >
        <div style={{ fontFamily: 'Inter 700' }} tw="text-9xl flex">
          <div tw="border-b-8 border-transparent pr-4">Colin</div>
          <div tw="border-b-8 border-cyan-300">Hemphill</div>
        </div>
        <div tw="text-6xl mt-10 text-zinc-400">
          Blog posts about web, music, audio, and podcasting
        </div>
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
}
