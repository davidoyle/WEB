import Head from 'next/head';
import { useRouter } from 'next/router';
import Navigation from './Navigation';
import Breadcrumbs from './Breadcrumbs';
import PageTOC from './PageTOC';
import RelatedResources from './RelatedResources';

const PageShell = ({ title, description, children, mainClassName = 'py-8', tocItems = [] }) => {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <Navigation />
      <Breadcrumbs />
      <main className={mainClassName}>
        {tocItems.length ? (
          <div className="grid gap-8 px-6 lg:grid-cols-[minmax(0,1fr)_260px] lg:px-[8vw]">
            <div>{children}</div>
            <PageTOC items={tocItems} />
          </div>
        ) : (
          children
        )}
      </main>
      <RelatedResources route={router.pathname} />
    </div>
  );
};

export default PageShell;
