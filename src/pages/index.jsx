import Head from 'next/head';
import dynamic from 'next/dynamic';

const App = dynamic(() => import('../App'), { ssr: false });

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Worker&apos;s Toolkit</title>
        <meta name="description" content="Rapid response toolkit for workers handling urgent situations." />
      </Head>
      <App />
    </>
  );
}
