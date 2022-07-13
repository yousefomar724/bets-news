import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang='pt'>
        <Head>
          <meta
            name='viewport'
            content='width=device-width, initial-scale=1'
          ></meta>
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link
            rel='preconnect'
            href='https://fonts.gstatic.com'
            crossOrigin='true'
          />
          <link data-href='https://fonts.googleapis.com/css2?family=Fira+Code&family=Lato&family=Open+Sans&display=swap' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
