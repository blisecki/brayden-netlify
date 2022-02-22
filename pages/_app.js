import '@styles/globals.css'
import Head from 'next/head'

function Application({ Component, pageProps }) {

  return (<>
  <Head>
    <title>Brayden Lisecki</title>
  </Head>
  <Component {...pageProps} />
  </>
  )
}

export default Application
