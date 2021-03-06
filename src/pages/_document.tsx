import Document, { Html, Head, Main, NextScript, DocumentContext } from "next/document";

class MaiaViniciusDotMe extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preload" href="/fonts/Catamaran-Regular.ttf" as="font" type="font/ttf" />
          <link rel="preload" href="/fonts/Catamaran-Medium.ttf" as="font" type="font/ttf" />

          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
          <link rel="mask-icon" href="/favicons//safari-pinned-tab.svg" color="#161b22" />
          <meta name="msapplication-TileColor" content="#161b22" />
          <meta name="theme-color" content="#161b22" />
          <meta property="og:color" content="#161b22" />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="https://maiavinicius.me/icons/icon-128.png" />

          <meta name="twitter:card" content="summary" />
          <meta name="twitter:creator" content="@casper124578" />
        </Head>
        <body>
          <script>0</script>
          <Main />
          <NextScript />
        </body>
        
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-M2D5W9GCKX"></script>
        <script src="/ga.js"/>

      </Html>
    );
  }
}

export default MaiaViniciusDotMe;
