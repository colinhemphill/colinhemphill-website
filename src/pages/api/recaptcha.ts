import { NextApiRequest, NextApiResponse } from 'next';

const verifyURL = 'https://www.google.com/recaptcha/api/siteverify';
const recaptchaSecretKey = process.env.CAPTCHA_SECRET_KEY;

const api = async (
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> => {
  const body = JSON.parse(req.body);
  const { token } = body;

  const response = await fetch(
    `${verifyURL}?response=${token}&secret=${recaptchaSecretKey}`,
    {
      body: JSON.stringify({ response: token, secret: recaptchaSecretKey }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    },
  );
  const responseBody = await response.json();

  const { success } = responseBody;

  if (!success) {
    res.writeHead(500);
    return res.send({
      message: 'There was an error verifying recaptcha validity',
      valid: false,
    });
  }

  res.send({ valid: true });
};

export default api;
