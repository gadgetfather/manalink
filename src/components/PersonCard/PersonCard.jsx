import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { follow, unfollow } from "../../redux/features/user/userThunk";

export function PersonCard(props) {
  const navigate = useNavigate();
  const { username, _id } = props;
  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const handleFollow = (e) => {
    e.stopPropagation();
    dispatch(follow(_id));
  };
  const handleUnfollow = (e) => {
    e.stopPropagation();
    dispatch(unfollow(_id));
  };
  const navigateToProfile = () => {
    navigate(`/${username}`);
  };
  return (
    <>
      {username !== user.username ? (
        <div
          onClick={navigateToProfile}
          className="cursor-pointer flex flex-col p-2 border-b"
        >
          <div className="flex items-center gap-2">
            <img
              className="w-10 h-10 rounded-full"
              src="https://picsum.photos/200"
              alt=""
            />
            <h2>{username}</h2>
          </div>
          <div className="mt-2 ml-auto mr-4">
            {user.following.some((user) => user.username === username) ? (
              <button onClick={(e) => handleUnfollow(e)}>Following</button>
            ) : (
              <button onClick={(e) => handleFollow(e)}>Follow</button>
            )}
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
