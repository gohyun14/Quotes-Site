import Link from 'next/link';

const NoQuotesFound = () => {
  return (
    <div className="my-4 mx-auto p-8 flex flex-col items-center justify-center shadow-md rounded-md bg-indigo-100">
      <p className="text-indigo-700 my-10 text-5xl">No quotes found!</p>
      <Link href={`/new-quote`}>
        <a className="text-md font-medium bg-indigo-600 text-white shadow-sm rounded-md mb-10 py-3 px-6 cursor-pointer hover:bg-indigo-700 active:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
          Add a Quote
        </a>
      </Link>
    </div>
  );
};

export default NoQuotesFound;
