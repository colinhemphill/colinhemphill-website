import Document, {
  DocumentContext,
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';
import React from 'react';

class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext,
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head>
          <script
            async
            defer
            src="https://static.cdn.prismic.io/prismic.js?new=true&repo=resume-colinhemphill"
          />
          <link rel="preconnect" href="https://www.google.com" />
          <link rel="preconnect" href="https://www.google-analytics.com" />
          <link
            as="font"
            crossOrigin="true"
            href="/fonts/Inter-roman-var.woff2"
            rel="preload"
            type="font/woff2"
          />

          <link rel="manifest" href="/manifest.json" />
          <link rel="icon" href="/favicon.ico" />
          <meta name="theme-color" content="#0073e6" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
