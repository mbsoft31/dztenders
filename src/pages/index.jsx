import Head from 'next/head'
import Container from '@/components/Container'
import { Header } from '@/components/Header'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { Hero } from '@/components/Hero'

export default function Home() {
  return (
    <div className={'bg-gray-800'}>
      <Head>
        <title>Home - DZ Tenders</title>
        <meta name="description" content="DZ tenders" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* TODO: add shadow to header */}
      <Header className={'bg-gray-100 py-5'} />

      <main>
        <Hero />
        <PrimaryFeatures />
      </main>
    </div>
  )
}
