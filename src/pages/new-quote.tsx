import { NextPage } from 'next';
import Head from 'next/head';
import QuoteForm from '../components/quotes/QuoteForm';

const NewQuotePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>New Quote</title>
        <meta name="description" content="Add a new quote" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <QuoteForm />;
    </>
  );
};

export default NewQuotePage;
