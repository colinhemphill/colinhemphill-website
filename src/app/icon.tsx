import { ImageResponse } from 'next/server';

export const size = {
  width: 32,
  height: 32,
};
export const contentType = 'image/png';

export default function icon() {
  return new ImageResponse(
    (
      <div tw="rounded-full bg-cyan-300 text-black font-black w-full h-full flex items-center justify-center">
        CH
      </div>
    ),
    {
      ...size,
    },
  );
}
