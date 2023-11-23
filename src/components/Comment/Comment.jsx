export const Comment = ({ comment }) => {
  return (
    <div key={comment.id} className={"mt-8 border-t-2 border-gray-800"}>
      <div className={"mt-5 pl-8"}>
        <span className={"text-md text-gray-400"}>{comment.content}</span>
      </div>
    </div>
  );
};
