import Head from 'next/head';
import Navigation from './Navigation';

const PageShell = ({ title, description, children, mainClassName = 'py-8' }) => (
  <div className="min-h-screen bg-background text-foreground">
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Head>
    <Navigation />
    <main className={mainClassName}>{children}</main>
  </div>
);

export default PageShell;
