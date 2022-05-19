import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  openEditCommentModal,
  openModal,
} from "../../redux/features/modal/modalSlice";
import {
  deleteComment,
  downvoteComment,
  editComment,
  upvoteComment,
} from "../../redux/features/post/postThunk";

export function Comment(props) {
  const { username, text, _id, votes } = props;
  const dispatch = useDispatch();
  const { postId } = useParams();
  const [postData, setPostData] = useState({ postId: postId, commentId: _id });
  const modal = useSelector((state) => state.modal);

  const currentUser = useSelector((state) => state.auth.user);

  const handleUpvote = () => {
    dispatch(upvoteComment(postData));
  };
  const handleDownvote = () => {
    dispatch(downvoteComment(postData));
  };
  const handleEditComment = () => {
    dispatch(openEditCommentModal({ text, _id }));
  };
  const handleDeleteComment = () => {
    dispatch(deleteComment(postData));
  };
  return (
    <div className="border-b p-2">
      <div className="flex items-center gap-2">
        <img
          className="w-10 h-10 rounded-full"
          src="https://picsum.photos/200"
          alt=""
        />
        <h2>{username}</h2>
      </div>
      <div className="pt-2">
        <p>{text}</p>
      </div>
      <div className="flex items-center gap-4 mt-2">
        {votes.upvotedBy.some(
          (user) => user.username === currentUser.username
        ) ? (
          <span
            onClick={handleDownvote}
            className="cursor-pointer material-symbols-outlined filled"
          >
            thumb_up
          </span>
        ) : (
          <span
            onClick={handleUpvote}
            className="cursor-pointer material-symbols-outlined"
          >
            thumb_up
          </span>
        )}

        {username === currentUser.username ? (
          <span
            onClick={() => handleEditComment(postData)}
            className="cursor-pointer material-symbols-outlined"
          >
            edit
          </span>
        ) : (
          ""
        )}
        {username === currentUser.username ? (
          <span
            onClick={handleDeleteComment}
            className="cursor-pointer material-symbols-outlined ml-auto"
          >
            delete
          </span>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
