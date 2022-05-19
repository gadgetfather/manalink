import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { closeEditCommentModal } from "../../redux/features/modal/modalSlice";
import { editComment } from "../../redux/features/post/postThunk";

export function EditCommentModal() {
  const dispatch = useDispatch();
  const { postId } = useParams();
  const { editCommentText, editCommentId } = useSelector(
    (state) => state.modal
  );
  const [editedData, setEditedData] = useState({
    commentData: editCommentText,
    postId: postId,
    commentId: editCommentId,
  });
  const handlecloseEditCommentModal = () => {
    dispatch(closeEditCommentModal());
  };
  const handleSubmitEditComment = () => {
    dispatch(editComment(editedData));
    dispatch(closeEditCommentModal());
  };
  return (
    <>
      <div className="fixed top-0 left-0 right-0 bottom-0 z-50 bg-[rgba(0,0,0,.5)]" />

      <div>
        <div className="z-50  bg-yellow-600 flex flex-col w-80 h-52 justify-evenly p-2 fixed top-[50%] left-[50%] modalPostion rounded-lg lg:w-96 ">
          <button onClick={handlecloseEditCommentModal} className="self-end">
            <span className="material-symbols-outlined">close</span>
          </button>
          <textarea
            onChange={(e) =>
              setEditedData({ ...editedData, commentData: e.target.value })
            }
            value={editedData.commentData}
            className="h-40 resize-none p-2"
            placeholder="enter a text"
          ></textarea>
          <button onClick={handleSubmitEditComment}>Post</button>
        </div>
      </div>
    </>
  );
}
