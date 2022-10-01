import { Comment } from '@prisma/client';

type CommentItemProps = {
  comment: Comment;
};

const CommentItem = ({ comment }: CommentItemProps) => {
  return (
    <li className="text-indigo-600 my-3 mx-2 p-4 flex shadow-md rounded-md bg-indigo-100 motion-safe:hover:scale-105 duration-200">
      <p>{comment.text}</p>
    </li>
  );
};

export default CommentItem;
