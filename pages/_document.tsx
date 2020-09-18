import Document, { Html, Head, Main, NextScript } from 'next/document';
import handleAuthSSR from '../libs/auth';
import '../public/css/index.css'


export default class StoriiDocument extends Document {
  static async getInitialProps(ctx: any) {
    await handleAuthSSR(ctx);
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <meta name="mobile-web-app-capable" content="yes"></meta>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta content="width=device-width, initial-scale=1, user-scalable=no" name="viewport" />
          <meta name="robots" content="index, follow" />
          <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@500;700&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
