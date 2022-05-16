import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { closeModal } from "../../redux/features/modal/modalSlice";
import { createPost } from "../../redux/features/post/postSlice";

export function PostModal() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ content: "" });
  const handleCloseModal = () => {
    dispatch(closeModal());
  };
  const handleSubmit = (data) => {
    dispatch(createPost(data));
    dispatch(closeModal());
  };
  return (
    <>
      <div className="fixed top-0 left-0 right-0 bottom-0 z-50 bg-[rgba(0,0,0,.5)]" />

      <div>
        <div className="z-50  bg-lime-200 flex flex-col w-80 h-52 justify-evenly p-2 fixed top-[50%] left-[50%] modalPostion rounded-lg lg:w-96 ">
          <button className="self-end" onClick={handleCloseModal}>
            <span className="material-symbols-outlined">close</span>
          </button>
          <textarea
            onChange={(e) =>
              setFormData({ ...formData, content: e.target.value })
            }
            value={formData.content}
            className="h-40 resize-none p-2"
            placeholder="enter a text"
          ></textarea>
          <button onClick={() => handleSubmit(formData)}>Post</button>
        </div>
      </div>
    </>
  );
}
