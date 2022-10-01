import { useState } from 'react';
import { useRouter } from 'next/router';
import { Quote } from '@prisma/client';
import { trpc } from '../../utils/trpc';
import { useSetAtom } from 'jotai';
import { notificationAtom } from '../../state/atoms/notificationAtom';
import Modal from '../UI/Modal';
import DeleteQuoteAlert from './DeleteQuoteAlert';

type HighlightedQuoteProps = {
  quote: Quote;
};

const HighlightedQuote = ({ quote }: HighlightedQuoteProps) => {
  const router = useRouter();

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const setNofitication = useSetAtom(notificationAtom);

  const utils = trpc.useContext();
  const deleteQuote = trpc.useMutation(['quotes.deleteById'], {
    onSuccess() {
      utils.invalidateQueries(['quotes.getAll']);
      setNofitication({
        title: 'Quote deleted!',
        message: 'You have successfully deleted a quote.',
      });
    },
  });
  const deleteComments = trpc.useMutation(['comments.deleteAllByQuoteId'], {
    onSuccess() {
      deleteQuote.mutate({ id: quote.id });
    },
  });

  const handleDelete = () => {
    setIsModalOpen(false);
    deleteComments.mutate({ quoteId: quote.id });
    router.replace('/');
  };

  return (
    <>
      <figure className="bg-slate-800 rounded-md py-16 px-12 mt-12 mb-12 mx-auto w-11/12 max-w-2xl">
        <p className="text-white text-5xl font-medium">{quote.text}</p>
        <figcaption className="text-indigo-300 italic text-2xl text-left">
          {quote.author}
        </figcaption>
        <div className="w-full max-w-2xl mx-0 text-right">
          <button
            className="inline-flex items-center rounded-md border border-transparent bg-indigo-100 px-4 py-2 text-base font-medium text-indigo-700 hover:bg-indigo-200 active:bg-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            onClick={() => setIsModalOpen(true)}
          >
            Delete Quote
          </button>
        </div>
      </figure>

      <Modal isOpen={isModalOpen} closeModal={() => setIsModalOpen(false)}>
        <DeleteQuoteAlert
          onDelete={handleDelete}
          onCancel={() => setIsModalOpen(false)}
        />
      </Modal>
    </>
  );
};

export default HighlightedQuote;
