import { NextApiRequest, NextApiResponse } from 'next';
import { cmsClient, linkResolver } from '../../../cms/prismic';

const api = async (
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> => {
  const {
    query: { token, documentId },
  } = req;
  const ref = token as string;

  const redirectUrl = await cmsClient(req)
    .getPreviewResolver(ref, documentId as string)
    .resolve(linkResolver, '/');

  if (!redirectUrl) {
    return res.status(401).json({ message: 'Invalid token' });
  }

  res.setPreviewData({ ref }, { maxAge: 60 * 60 });
  res.redirect(redirectUrl);
};

export default api;
