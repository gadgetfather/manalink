import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeEditProfileModal } from "../../redux/features/modal/modalSlice";
import { editProfile } from "../../redux/features/user/userThunk";

export function EditProfileModal() {
  const dispatch = useDispatch();
  const { editProfileText } = useSelector((state) => state.modal);
  const { visitingUser } = useSelector((state) => state.user);

  console.log(editProfileText);
  const [text, setText] = useState(editProfileText);
  const handlecloseEditProfileModal = () => {
    dispatch(closeEditProfileModal());
  };
  const submitEdit = () => {
    dispatch(editProfile({ ...visitingUser, bio: text }));
    dispatch(closeEditProfileModal());
  };
  return (
    <>
      <div className="fixed top-0 left-0 right-0 bottom-0 z-50 bg-[rgba(0,0,0,.5)]" />

      <div>
        <div className="z-50  bg-yellow-600 flex flex-col w-80 h-52 justify-evenly p-2 fixed top-[50%] left-[50%] modalPostion rounded-lg lg:w-96 ">
          <button className="self-end">
            <span
              onClick={() => handlecloseEditProfileModal()}
              className="material-symbols-outlined"
            >
              close
            </span>
          </button>
          <textarea
            onChange={(e) => setText(e.target.value)}
            value={text}
            className="h-40 resize-none p-2"
            placeholder="enter a text"
          ></textarea>
          <button onClick={submitEdit}>Post</button>
        </div>
      </div>
    </>
  );
}
