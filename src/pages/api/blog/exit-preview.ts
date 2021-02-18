import { NextApiRequest, NextApiResponse } from 'next';

const api = async (
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> => {
  res.clearPreviewData();
  res.writeHead(307, { Location: '/' });
  res.end();
};

export default api;
