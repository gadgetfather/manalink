import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { dislikePost, likePost } from "../../redux/features/post/postThunk";

export function PostCard(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { username: currentUser } = useSelector((state) => state.auth.user);
  const {
    _id,
    content,
    username,
    likes: { likeCount, likedBy },
  } = props;
  const handleNavigateToProfile = () => {
    navigate(`/${username}`);
  };
  const handleLike = (id) => {
    dispatch(likePost(id));
  };

  const handleDislike = (id) => {
    dispatch(dislikePost(id));
  };

  return (
    <div className=" p-2   flex flex-col border-b    ">
      <div className="flex items-center gap-2">
        <img
          className="h-10 w-10 rounded-full"
          src="https://picsum.photos/200"
          alt=""
        />
        <h2 onClick={handleNavigateToProfile}>{username}</h2>
      </div>
      <div className="text-base">
        <p className="whitespace-pre-line py-2">{content}</p>
      </div>
      <div className="pt-2 flex justify-between">
        <div className="flex items-center justify-center gap-2">
          {likedBy.some((user) => user.username === currentUser) ? (
            <span
              onClick={() => handleDislike(_id)}
              className="cursor-pointer material-symbols-outlined heartFilled text-red-500"
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
        <span className="cursor-pointer material-symbols-outlined">chat</span>
        <span className="cursor-pointer material-symbols-outlined">share</span>
        <span className="cursor-pointer material-symbols-outlined">
          bookmark
        </span>
      </div>
    </div>
  );
}
