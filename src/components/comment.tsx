import type { Comment } from "../types/schema";

const CommentDiv = ({ id, author, text }: Comment) => {
  return (
    <div className="ml-4 mr-4 mt-4 bg-blue-200 rounded-2xl p-2">
      <span>
        {id}, <b>{author}</b>
      </span>
      <p className="text-sm ">{text}</p>
    </div>
  );
};

export default CommentDiv;
