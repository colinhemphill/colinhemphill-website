import { NextApiRequest, NextApiResponse } from 'next';

const verifyURL = 'https://www.google.com/recaptcha/api/siteverify';
const recaptchaSecretKey = process.env.CAPTCHA_SECRET_KEY;

const api = async (req: NextApiRequest, res: NextApiResponse) => {
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
    return res.send('There was an errory veirfying recaptcha validity.');
  }

  return res.send(true);
};

export default api;
