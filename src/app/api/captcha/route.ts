import { verify } from 'hcaptcha';
import { NextResponse } from 'next/server';

const captchaSecretKey = process.env.HCAPTCHA_SECRET_KEY as string;

export async function POST(request: Request) {
  const body = await request.json();
  const { token } = body;

  const { success } = await verify(captchaSecretKey, token);

  if (!success) {
    return NextResponse.json(
      {
        message: 'There was an error verifying recaptcha validity',
        valid: false,
      },
      { status: 500 },
    );
  } else {
    return NextResponse.json({ valid: true });
  }
}
