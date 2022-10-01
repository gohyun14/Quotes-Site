import Link from 'next/link';
import { useRouter } from 'next/router';

const MainNavigation = () => {
  const router = useRouter();

  const liStyle = 'ml-6 text-xl';
  const aStyle = 'no-underline hover:text-white ';

  return (
    <header className="w-full h-20 flex py-0 px-20 justify-between items-center bg-indigo-600">
      <div className="text-4xl text-white">Great Quotes</div>
      <nav>
        <ul className="list-none flex m-0 p-0">
          <li className={liStyle}>
            <Link href="/">
              <a
                className={
                  aStyle +
                  (router.pathname === '/' ? 'text-white' : 'text-indigo-100')
                }
              >
                All Quotes
              </a>
            </Link>
          </li>
          <li className={liStyle}>
            <Link href="/new-quote">
              <a
                className={
                  aStyle +
                  (router.pathname == '/new-quote'
                    ? 'text-white'
                    : 'text-indigo-100')
                }
              >
                Add a Quote
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
