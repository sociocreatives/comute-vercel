import '../styles/globals.css'
import Head from 'next/head'
import { SessionProvider } from "next-auth/react"

function MyApp({ Component, pageProps: { session, ...pageProps }, }) {
  return (
    <SessionProvider session={session}>
      <Head>
        <title>Comuter | arrive on time</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <div>
      <Component {...pageProps} />
      </div>
    </SessionProvider>
  )
}

export default MyApp
