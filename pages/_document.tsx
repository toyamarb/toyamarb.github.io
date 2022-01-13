import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:title" content="Toyama.rb" />
          <meta name="twitter:description" content="富山のRubyコミュニティ" />
          <meta
            name="twitter:image"
            content="https://toyamarb.github.io/logo.png"
          />
          <meta property="og:url" content="https://toyamarb.github.io/" />
          <meta property="og:title" content="Toyama.rb" />
          <meta property="og:description" content="富山のRubyコミュニティ" />
          <meta
            property="og:image"
            content="https://toyamarb.github.io/logo.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="96x96"
            href="/favicon-96x96.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap"
            rel="stylesheet"
          />
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
