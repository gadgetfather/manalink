import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addComment } from "../../redux/features/post/postThunk";

export function CommentForm() {
  const { postId } = useParams();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ comment: "", postId: postId });
  const handlePostComment = (formData) => {
    dispatch(addComment(formData));
    setFormData({ ...formData, comment: "" });
  };
  return (
    <div className="w-full border-b  flex flex-col p-2">
      <div className="w-full ">
        <textarea
          value={formData.comment}
          onChange={(e) =>
            setFormData({ ...formData, comment: e.target.value })
          }
          placeholder="For comment"
          className="w-full border p-2 resize-none"
        ></textarea>
      </div>
      <button
        onClick={() => handlePostComment(formData)}
        className="self-end bg-primary-orange-600 px-4 py-2 rounded-md font-medium hover:bg-primary-orange-800"
      >
        Comment
      </button>
    </div>
  );
}
