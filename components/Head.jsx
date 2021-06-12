import React from 'react';
import Head from 'next/head';
import { useToken } from '@chakra-ui/react';

const HeadInfo = ({ title, ogText, byline }) => {
  const primaryColor = useToken('colors', 'brand.primary');
  const ogIMGURL = ogText === 'cfHomepage'
    ? 'https://collective-fullstack.github.io/og.png'
    : `https://og.darcylf.me/image.js?text=${encodeURIComponent(ogText)}&theme=cf`;
  const ogDescription = ogText === 'cfHomepage'
    ? 'We are a small two person freelance company who specialize in web development. Previous work includes building everything from environmental monitoring systems to chat clients.'
    : `Collective Fullstack made ${ogText}: ${byline}`;

  return (
    <Head key="Head-main">
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta charSet="utf-8" />
      <title>{title}</title>

      <link rel="shortcut icon" href="/icons/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <meta name="msapplication-TileColor" content={primaryColor} />

      <meta name="title" content={`${title} | Collective Fullstack`} />
      <meta name="description" content={ogDescription} />
      <meta name="theme-color" content={primaryColor} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://collective-fullstack.github.io" />
      <meta property="og:title" content={`${title} | Collective Fullstack`} />
      <meta property="og:description" content={ogDescription} />
      <meta property="og:image" content={ogIMGURL} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://collective-fullstack.github.io" />
      <meta property="twitter:title" content={`${title} | Collective Fullstack`} />
      <meta property="twitter:description" content={ogDescription} />
      <meta property="twitter:image" content={ogIMGURL} />
    </Head>
  );
};

export default HeadInfo;
