import { useRouter } from 'next/router';
import { NextPage } from 'next';
import Head from 'next/head';
import { trpc } from '../../utils/trpc';
import HighlightedQuote from '../../components/quotes/HighlightedQuote';
import Comments from '../../components/comments/Comments';
import LoadingSpinner from '../../components/UI/LoadingSpinner';

const QuoteDetailPage: NextPage = () => {
  const router = useRouter();
  const quoteId = router.query.quoteId as string;

  const quote = trpc.useQuery(['quotes.getById', { id: quoteId }]);
  const comments = trpc.useQuery([
    'comments.getAllByQuoteId',
    { quoteId: quoteId },
  ]);

  if (quote.status !== 'success' || comments.status !== 'success') {
    return <LoadingSpinner />;
  }

  return (
    <>
      <Head>
        <title>Quote</title>
        <meta name="description" content="Fullscreen Quote" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {quote.data && <HighlightedQuote quote={quote.data} />}
      <Comments comments={comments.data} />
    </>
  );
};

export default QuoteDetailPage;
