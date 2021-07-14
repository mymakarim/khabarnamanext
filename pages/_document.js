import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang='en'>
        <Head>
          <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='true' />
          <link rel='preconnect' href='https://fonts.gstatic.com' />
          <link href='https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap' />

          <meta name='application-name' content='IAP' />
          <meta name='apple-mobile-web-app-capable' content='yes' />
          <meta name='apple-mobile-web-app-status-bar-style' content='default' />
          <meta name='apple-mobile-web-app-title' content='IAP' />
          <meta name='description' content='Intellectual Applications and Products' />
          <meta name='format-detection' content='telephone=no' />
          <meta name='mobile-web-app-capable' content='yes' />
          <meta name='msapplication-config' content='/static/icons/browserconfig.xml' />
          <meta name='msapplication-TileColor' content='#2B5797' />
          <meta name='msapplication-tap-highlight' content='no' />
          <meta name='theme-color' content='#000000' />

          <link rel='apple-touch-icon' href='https://admin.iap.af/wp-content/uploads/2021/06/cropped-IAP-Square-Initials-scaled-1-192x192.jpg' />
          <link rel='manifest' href='/manifest.json' />
          <link rel='shortcut icon' href='https://admin.iap.af/wp-content/uploads/2021/06/cropped-IAP-Square-Initials-scaled-1-192x192.jpg' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
