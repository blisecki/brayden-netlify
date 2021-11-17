import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Brayden Lisecki</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="BRAYDEN LISECKI" />
        <p className="description">
          coming soon
        </p>
        <p><a href="mailto:hello@braydenlisecki.com">hello@braydenlisecki.com</a></p>
      </main>

    </div>
  )
}
