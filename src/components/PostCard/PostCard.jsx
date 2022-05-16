import React from "react";
import { useNavigate } from "react-router-dom";

export function PostCard(props) {
  const navigate = useNavigate();
  const {
    _id,
    content,
    username,
    likes: { likeCount },
  } = props;
  const handleNavigateToProfile = () => {
    navigate(`/${username}`);
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
        <p className="whitespace-pre-line">{content}</p>
      </div>
      <div className="pt-2 flex justify-between">
        <div className="flex items-center justify-center gap-2">
          <span className="cursor-pointer material-symbols-outlined">
            favorite
          </span>
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
