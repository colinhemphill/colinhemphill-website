import { Metadata } from 'next';

export const metadataOpenGraphDefaults: Metadata['openGraph'] = {
  description:
    'Colin Hemphill is a front end software developer, musician, and podcaster in Austin, TX.',
  images: {
    alt: 'Colin Hemphill’s Logo',
    height: 1080,
    url: '/img/ColinHemphill-Logo-SocialShare.png',
    width: 1920,
  },
  locale: 'en-US',
  title: {
    default: 'Web Developer and Noise-Maker | Colin Hemphill',
    template: '%s | Colin Hemphill',
  },
  type: 'website',
};

export const metadataTwitterDefaults: Metadata['twitter'] = {
  creator: '@colin_hemphill',
  description:
    'Colin Hemphill is a front end software developer, musician, and podcaster in Austin, TX.',
  images: {
    alt: 'Colin Hemphill’s Logo',
    height: 1080,
    url: '/img/ColinHemphill-Logo-SocialShare.png',
    width: 1920,
  },
  site: 'Colin Hemphill',
  title: {
    default: 'Web Developer and Noise-Maker | Colin Hemphill',
    template: '%s | Colin Hemphill',
  },
};
