import { Quote } from '@prisma/client';
import { useRouter } from 'next/router';
import QuoteItem from '../quotes/QuoteItem';
import { useAutoAnimate } from '@formkit/auto-animate/react';

type QuoteListProps = {
  quotes: Quote[];
};

const sortQuotes = (quotes: Quote[], newest: boolean) => {
  return quotes.sort((quoteA, quoteB) => {
    if (newest) {
      return quoteA.createdAt > quoteB.createdAt ? 1 : -1;
    } else {
      return quoteA.createdAt < quoteB.createdAt ? 1 : -1;
    }
  });
};

const QuoteList = ({ quotes }: QuoteListProps) => {
  const router = useRouter();

  const parent = useAutoAnimate({});

  const isSortingNewest = router.query.sort === 'oldest';

  const sortedQuotes = sortQuotes(quotes, isSortingNewest);

  const changeSortingHandler = () => {
    router.push(`?sort=${isSortingNewest ? 'newest' : 'oldest'}`, undefined, {
      shallow: true,
    });
  };

  return (
    <>
      <div className="pb-4 mb-1 border-b-[2px] border-solid border-indigo-500">
        <button
          className="inline-flex items-center rounded-md shadow-sm border border-transparent bg-indigo-100 px-4 py-2 text-base font-medium text-indigo-700 hover:bg-indigo-200 active:bg-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          onClick={changeSortingHandler}
        >
          Sort {isSortingNewest ? 'Newest' : 'Oldest'}
        </button>
      </div>
      <ul ref={parent} className="m-0 p-0 list-none">
        {sortedQuotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </>
  );
};

export default QuoteList;
