import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import type { NextPage } from 'next';
import { trpc } from '../utils/trpc';

import QuoteList from '../components/quotes/QuoteList';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import NoQuotesFound from '../components/quotes/NoQuotesFound';

const AllQuotesPage: NextPage = () => {
  const loadedQuotes = trpc.useQuery(['quotes.getAll']);

  const router = useRouter();

  useEffect(() => {
    router.push('/?sort=newest', undefined, { shallow: true });
  }, []);

  // return loadedQuotes.data ? (
  //   <QuoteList quotes={loadedQuotes.data} />
  // ) : (
  //   <LoadingSpinner />
  // );

  if (loadedQuotes.status !== 'success') {
    return <LoadingSpinner />;
  }

  return loadedQuotes.data?.length > 0 ? (
    <>
      <Head>
        <title>All Quotes</title>
        <meta name="description" content="All Quotes" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <QuoteList quotes={loadedQuotes.data} />
    </>
  ) : (
    <NoQuotesFound />
  );
};

export default AllQuotesPage;
