import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeEditPostModal } from "../../redux/features/modal/modalSlice";
import { editPost } from "../../redux/features/post/postThunk";

export function EditPostModal() {
  const { editPostText, editPostId } = useSelector((state) => state.modal);
  const [editedData, setEditedData] = useState({
    postData: editPostText,
    postId: editPostId,
  });
  const dispatch = useDispatch();
  const handlecloseEditPostModal = () => {
    dispatch(closeEditPostModal());
  };
  const handleSubmitEditPost = () => {
    dispatch(editPost(editedData));
    dispatch(closeEditPostModal());
  };

  return (
    <>
      <div className="fixed top-0 left-0 right-0 bottom-0 z-50 bg-[rgba(0,0,0,.5)]" />

      <div>
        <div className="z-50  bg-gray-600 flex flex-col w-80 h-52 justify-evenly p-2 fixed top-[50%] left-[50%] modalPostion rounded-lg lg:w-96 ">
          <button onClick={handlecloseEditPostModal} className="self-end">
            <span className="material-symbols-outlined">close</span>
          </button>
          <textarea
            onChange={(e) =>
              setEditedData({ ...editedData, postData: e.target.value })
            }
            value={editedData.postData}
            className="h-40 resize-none p-2"
            placeholder="enter a text"
          ></textarea>
          <button onClick={handleSubmitEditPost}>Post</button>
        </div>
      </div>
    </>
  );
}
