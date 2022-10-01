import Link from 'next/link';

type QuoteItemProps = {
  key: string;
  id: string;
  text: string;
  author: string;
};

const QuoteItem = ({ id, text, author }: QuoteItemProps) => {
  return (
    <li className="my-4 mx-auto p-4 flex justify-between items-end shadow-md rounded-md bg-indigo-100 motion-safe:hover:scale-105 duration-200">
      <figure className="m-0 p-0 w-3/5">
        <blockquote className="m-0 text-left text-2xl text-indigo-700">
          <p className="m-0 mb-1">{text}</p>
        </blockquote>
        <figcaption className="italic text-gray-600">{author}</figcaption>
      </figure>
      <Link href={`/quotes/${id}`}>
        <a className="text-md font-medium bg-indigo-600 text-white shadow-sm rounded-md my-auto py-3 px-6 cursor-pointer hover:bg-indigo-700 active:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
          View Fullscreen
        </a>
      </Link>
    </li>
  );
};

export default QuoteItem;
