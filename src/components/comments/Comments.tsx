import { useState } from 'react';
import { useRouter } from 'next/router';
import { Comment } from '@prisma/client';
import CommentList from './CommentsList';
import Modal from '../UI/Modal';
import NewCommentForm from '../comments/NewCommentForm';
import { trpc } from '../../utils/trpc';
import { useSetAtom } from 'jotai';
import { notificationAtom } from '../../state/atoms/notificationAtom';

type CommentsProps = {
  comments: Comment[];
};

const Comments = ({ comments }: CommentsProps) => {
  const setNofitication = useSetAtom(notificationAtom);

  const utils = trpc.useContext();
  const commentMutation = trpc.useMutation(['comments.create'], {
    onSuccess() {
      utils.invalidateQueries(['comments.getAllByQuoteId']);
      setNofitication({
        title: 'Comment added!',
        message: 'You have successfully added a comment.',
      });
    },
  });

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const router = useRouter();
  const quoteId = router.query.quoteId;

  const handleSubmit = (text: string) => {
    setIsModalOpen(false);
    commentMutation.mutate({ text: text, quoteId: quoteId });
  };

  return (
    <>
      <section className="text-center">
        <h2 className="text-2xl font-semibold mb-4">User Comments</h2>
        <button
          className="text-md font-medium bg-indigo-600 text-white shadow-sm rounded-md my-auto py-3 px-6 cursor-pointer hover:bg-indigo-700 active:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          onClick={() => {
            setIsModalOpen(true);
          }}
        >
          Add a Comment
        </button>

        <CommentList comments={comments} />
      </section>
      <Modal isOpen={isModalOpen} closeModal={() => setIsModalOpen(false)}>
        <NewCommentForm onSubmit={handleSubmit} />
      </Modal>
    </>
  );
};

export default Comments;
