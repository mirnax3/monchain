import Document, { DocumentContext, Html, Main, NextScript } from 'next/document';
import { Head } from 'next/document';
import React from 'react';

const AppHead = () => {
  return (
    <Head>
      <link rel="icon" href="/favicon.ico" />
      <link rel="shortcut icon" href="/logo.png" />

      {/* Google font */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap"
        rel="stylesheet"
      />
    </Head>
  );
};

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    return await Document.getInitialProps(ctx);
  }

  render() {
    return (
      <Html>
        <AppHead />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
