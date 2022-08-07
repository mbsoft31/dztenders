import Head from 'next/head'
import Container from '@/components/Container'
import { Header } from "@/components/Header";

export default function Home() {
  return (
    <div className={'bg-gray-800'}>
      <Head>
        <title>Home - DZ Tenders</title>
        <meta name="description" content="DZ tenders" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header className={'bg-gray-100 py-5'} />

      <main>
      </main>
    </div>
  )
}
