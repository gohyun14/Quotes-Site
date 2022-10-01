import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { FormEvent } from 'react';
import { useAutoAnimate } from '@formkit/auto-animate/react';

type NewCommentFormProps = {
  onSubmit: (s: string) => void;
};

const NewCommentForm = ({ onSubmit }: NewCommentFormProps) => {
  const [value, setValue] = useState<string>('');
  const [showWarning, setShowWarning] = useState(false);

  const parent = useAutoAnimate({});

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (value === '') {
      setShowWarning(true);
      return;
    }

    onSubmit(value);
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit} ref={parent}>
      <Dialog.Title
        as="h3"
        className="text-lg font-medium leading-6 text-gray-900"
      >
        Enter a comment
      </Dialog.Title>
      {showWarning && (
        <Dialog.Description
          as="h1"
          className="text-sm font-normal text-indigo-500"
        >
          Comment cannot be empty!
        </Dialog.Description>
      )}
      <div className="mt-3">
        <textarea
          className="block w-full h-40 border border-gray-300 rounded-md p-2 bg-slate-100 focus:bg-indigo-50 focus:outline-indigo-600"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        ></textarea>
      </div>

      <div className="mt-4 text-center">
        <button
          type="submit"
          className="inline-flex justify-center shadow-sm rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-md font-medium text-white hover:bg-indigo-700 active:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Add comment
        </button>
      </div>
    </form>
  );
};

export default NewCommentForm;
