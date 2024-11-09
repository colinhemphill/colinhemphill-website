import {
  metadataOpenGraphDefaults,
  metadataTwitterDefaults,
} from '@/utils/metadata';
import { Metadata, Viewport } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import { PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';
import colors from 'tailwindcss/colors';

// STYLES
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
});

export const revalidate = 600;

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

  title: {
    default: 'Web Developer and Noise-Maker | Colin Hemphill',
    template: '%s | Colin Hemphill',
  },
  twitter: metadataTwitterDefaults,
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: colors.cyan[300] },
    { media: '(prefers-color-scheme: light)', color: colors.cyan[700] },
  ],
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html className={twMerge(inter.variable, jetbrainsMono.variable)} lang="en">
      <body className="bg-neutral-0 text-neutral-10 selection:bg-primary-9 selection:text-neutral-0">
        {children}
      </body>
    </html>
  );
}
