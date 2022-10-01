import CommentItem from './CommentItem';
import { Comment } from '@prisma/client';
import { useAutoAnimate } from '@formkit/auto-animate/react';

type CommentsListProps = {
  comments: Comment[];
};

const CommentsList = ({ comments }: CommentsListProps) => {
  const parent = useAutoAnimate({});

  return (
    <ul
      ref={parent}
      className="list-none my-4 mx-0 p-0 flex flex-row flex-wrap justify-center"
    >
      {comments.map((comment) => (
        <CommentItem key={comment.id} comment={comment} />
      ))}
    </ul>
  );
};

export default CommentsList;
