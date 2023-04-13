import { Inter, JetBrains_Mono } from 'next/font/google';
import Script from 'next/script';
import colors from 'tailwindcss/colors';
import Header from './components/Header';

// STYLES
import Separator from '@/strum/Separator';
import { Metadata } from 'next';
import { PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';
import Footer from './components/Footer';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
});

export const revalidate = 60 * 5;

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

export const metadata: Metadata = {
  // https://beta.nextjs.org/docs/api-reference/metadata#metadatabase
  metadataBase: new URL('https://colinhemphill.com'),

  applicationName: 'Colin Hemphill’s Portfolio',
  authors: { name: 'Colin Hemphill' },
  creator: 'Colin Hemphill',
  description:
    'Colin Hemphill is a front end software developer, musician, and podcaster in Austin, TX.',
  generator: 'Next.js',
  openGraph: metadataOpenGraphDefaults,
  icons: [],
  keywords: [
    'colin',
    'hemphill',
    'personal',
    'website',
    'portfolio',
    'engineer',
    'developer',
    'front end',
    'react',
    'music',
    'podcasting',
    'blog',
  ],
  publisher: 'Colin Hemphill',
  robots: {
    index: true,
    follow: true,
  },
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: colors.cyan[300] },
    { media: '(prefers-color-scheme: light)', color: colors.cyan[700] },
  ],
  title: {
    default: 'Web Developer and Noise-Maker | Colin Hemphill',
    template: '%s | Colin Hemphill',
  },
  twitter: metadataTwitterDefaults,
  viewport: { width: 'device-width', initialScale: 1 },
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html className={twMerge(inter.variable, jetbrainsMono.variable)} lang="en">
      <body className="bg-neutral-0 text-neutral-10 selection:bg-primary-9 selection:text-neutral-0">
        <Header />
        <main>{children}</main>

        <Separator direction="down" from={1} to={0} />
        <Footer />
      </body>

      <Script
        data-domain="resume.colinhemphill.com"
        src="https://plausible.io/js/plausible.js"
        strategy="afterInteractive"
      />
    </html>
  );
}
