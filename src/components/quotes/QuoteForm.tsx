import { LegacyRef } from 'react';
import { useRouter } from 'next/router';
import { FormEvent, useState } from 'react';
import { trpc } from '../../utils/trpc';
import { useSetAtom } from 'jotai';
import { notificationAtom } from '../../state/atoms/notificationAtom';
import { useAutoAnimate } from '@formkit/auto-animate/react';

const QuoteForm = () => {
  const router = useRouter();

  const [authorValue, setauthorValue] = useState<string>('');
  const [textValue, setTextValue] = useState<string>('');
  const [showAuthorWarning, setShowAuthorWarning] = useState<boolean>(false);
  const [showTextWarning, setShowTextWarning] = useState<boolean>(false);

  const parent1 = useAutoAnimate({}) as LegacyRef<HTMLDivElement>;
  const parent2 = useAutoAnimate({}) as LegacyRef<HTMLDivElement>;

  const setNofitication = useSetAtom(notificationAtom);

  const utils = trpc.useContext();
  const addQuote = trpc.useMutation(['quotes.create'], {
    onSuccess() {
      utils.invalidateQueries(['quotes.getAll']);
      setNofitication({
        title: 'Quote added!',
        message: 'You have successfully added a quote.',
      });
    },
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (authorValue === '' || textValue === '') {
      setShowAuthorWarning(authorValue === '');
      setShowTextWarning(textValue === '');
      return;
    }

    addQuote.mutate({ author: authorValue, text: textValue });

    setauthorValue('');
    setTextValue('');
    router.replace('/');
  };

  return (
    <div className="w-10/12 p-4 my-4 mx-auto shadow-lg rounded-md bg-white">
      <form className="relative" onSubmit={handleSubmit}>
        <div ref={parent1} className="mb-2">
          <label
            htmlFor="author"
            className={`block ${showAuthorWarning ? 'mb-0' : 'mb-2'} font-bold`}
          >
            Author
          </label>
          {showAuthorWarning && (
            <label className="text-sm font-normal text-indigo-500">
              Author cannot be empty!
            </label>
          )}
          <input
            type="text"
            id="author"
            value={authorValue}
            onChange={(e) => setauthorValue(e.target.value)}
            autoFocus
            className="block p-2 border border-gray-300 rounded-[4px] bg-slate-100 w-full text-md focus:bg-indigo-50 focus:outline-indigo-600"
          />
        </div>
        <div ref={parent2} className="mb-2">
          <label
            htmlFor="text"
            className={`block ${showTextWarning ? 'mb-0' : 'mb-2'} font-bold`}
          >
            Text
          </label>
          {showTextWarning && (
            <label className="text-sm font-normal text-indigo-500">
              Text cannot be empty!
            </label>
          )}
          <textarea
            id="text"
            rows={5}
            value={textValue}
            onChange={(e) => setTextValue(e.target.value)}
            className="block p-2 border border-gray-300 rounded-[4px] bg-slate-100 w-full text-md focus:bg-indigo-50 focus:outline-indigo-600"
          ></textarea>
        </div>
        <div className="text-center mt-3">
          <button className="text-md font-medium bg-indigo-600 text-white shadow-sm rounded-md my-auto py-3 px-6 cursor-pointer hover:bg-indigo-700 active:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            Add Quote
          </button>
        </div>
      </form>
    </div>
  );
};

export default QuoteForm;
