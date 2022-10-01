import { useRouter } from 'next/router';
import type { NextPage } from 'next';
import { useEffect } from 'react';

const QuotesPage: NextPage = () => {
  const router = useRouter();
  useEffect(() => {
    router.push('/?sort=newest');
  }, []);

  return <p> </p>;
};

export default QuotesPage;
