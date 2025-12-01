import Head from 'next/head';
import WCATToolkit from '../sections/WCATToolkit';

const WCATPage = () => (
  <div className="min-h-screen bg-gray-50">
    <Head>
      <title>WCAT Precedent Armory</title>
      <meta name="description" content="Searchable WCAT precedent armory with filters and copy-friendly phrases." />
    </Head>
    <main className="py-8 px-4 sm:px-6 lg:px-8">
      <WCATToolkit />
    </main>
  </div>
);

export default WCATPage;
