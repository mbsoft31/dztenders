import Head from 'next/head'
import { Container } from '@/components/Container'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home - DZ Tenders</title>
        <meta name="description" content="DZ tenders" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Container>
          <div className="bg-red-200">hello react</div>
        </Container>
      </main>
    </div>
  )
}
