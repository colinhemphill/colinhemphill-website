import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';

interface Props {
  description?: string;
  pageTitle: string;
}

const PageHead = ({
  description = 'Colin Hemphill is a web developer and noise-maker in Austin, TX.',
  pageTitle,
}: Props): JSX.Element => {
  const { pathname } = useRouter();

  const baseURL =
    typeof window !== 'undefined'
      ? window.location.origin
      : 'https://colinhemphill.com';
  const url = baseURL + pathname;
  const imgPath = baseURL + '/img/ColinHemphill-Logo-SocialShare.png';
  const title = `Colin Hemphill | ${pageTitle}`;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />

      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:site_name" content="" />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="profile" />
      <meta property="og:image" content={imgPath} />
      <meta property="profile:first_name" content="Colin" />
      <meta property="profile:last_name" content="Hemphill" />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@colin_hemphill" />
      <meta name="twitter:creator" content="@colin_hemphill" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imgPath} />
    </Head>
  );
};

export default PageHead;
