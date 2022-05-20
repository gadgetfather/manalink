import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { openEditPostModal } from "../../redux/features/modal/modalSlice";
import {
  addToBookmarks,
  deletePost,
  dislikePost,
  likePost,
  removeFromBookmarks,
} from "../../redux/features/post/postThunk";
import { getAllUsers } from "../../redux/features/user/userThunk";

export function PostCard(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const { visitingUser } = useSelector((state) => state.user);

  const { users } = useSelector((state) => state.user);

  const { username: currentUser } = user;
  const { bookmarks } = useSelector((state) => state.post);
  const location = useLocation();

  const {
    _id,
    content,
    username,
    likes: { likeCount, likedBy },
    comments,
  } = props;
  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch, visitingUser]);
  const [editPost] = useState({ text: content, postId: _id });
  const handleNavigateToProfile = () => {
    navigate(`/${username}`);
  };
  const handleLike = (id) => {
    dispatch(likePost(id));
  };

  const handleDislike = (id) => {
    dispatch(dislikePost(id));
  };
  const handleAddToBookmark = (id) => {
    dispatch(addToBookmarks(id));
  };
  const handleRemoveFromBookmark = (id) => {
    dispatch(removeFromBookmarks(id));
  };
  const handleNavigateToSinglePost = (id) => {
    navigate(`/post/${id}`);
  };
  const handleDeletePost = (id) => {
    if (location.pathname.includes("/post/")) {
      navigate("/home");
      setTimeout(() => dispatch(deletePost(id)), 500);
      return;
    }
    dispatch(deletePost(id));
  };
  const handleEditPost = () => {
    dispatch(openEditPostModal(editPost));
  };

  return (
    <div className=" p-2   flex flex-col border-b    ">
      <div className="flex items-center gap-2">
        {users
          .filter((user) => user.username === username)
          .map((user) => (
            <img
              className="h-10 w-10 rounded-full object-cover"
              src={user.profileImg}
              alt=""
            />
          ))}
        <h2 className="cursor-pointer" onClick={handleNavigateToProfile}>
          {username}
        </h2>
        {username === currentUser ? (
          <div className="ml-auto flex gap-2">
            <span
              onClick={handleEditPost}
              title="edit post"
              className="material-symbols-outlined cursor-pointer"
            >
              edit
            </span>
            <span
              onClick={() => handleDeletePost(_id)}
              title="delete post"
              className="material-symbols-outlined cursor-pointer"
            >
              delete
            </span>
          </div>
        ) : (
          ""
        )}
      </div>
      <div
        onClick={() => handleNavigateToSinglePost(_id)}
        className="text-base cursor-pointer"
      >
        <p className="whitespace-pre-line py-2">{content}</p>
      </div>
      <div className="pt-2 flex justify-between">
        <div className="flex items-center justify-center gap-2">
          {likedBy.some((user) => user.username === currentUser) ? (
            <span
              onClick={() => handleDislike(_id)}
              className="cursor-pointer material-symbols-outlined filled text-red-500"
            >
              favorite
            </span>
          ) : (
            <span
              onClick={() => handleLike(_id)}
              className="cursor-pointer material-symbols-outlined"
            >
              favorite
            </span>
          )}
          {likeCount}
        </div>
        <div className="flex items-center gap-2">
          <span
            onClick={() => handleNavigateToSinglePost(_id)}
            className="cursor-pointer material-symbols-outlined mt-[.15rem]"
          >
            chat
          </span>
          {comments.length}
        </div>
        <span className="cursor-pointer material-symbols-outlined">share</span>
        {bookmarks.some((post) => post._id === _id) ? (
          <span
            onClick={() => handleRemoveFromBookmark(_id)}
            className="cursor-pointer material-symbols-outlined filled "
          >
            bookmark
          </span>
        ) : (
          <span
            onClick={() => handleAddToBookmark(_id)}
            className="cursor-pointer material-symbols-outlined"
          >
            bookmark
          </span>
        )}
      </div>
    </div>
  );
}
