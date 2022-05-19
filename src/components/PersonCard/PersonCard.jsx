import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { follow, unfollow } from "../../redux/features/user/userThunk";

export function PersonCard(props) {
  const { username, _id } = props;
  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const handleFollow = () => {
    dispatch(follow(_id));
  };
  const handleUnfollow = () => {
    dispatch(unfollow(_id));
  };
  return (
    <>
      {username !== user.username ? (
        <div className=" flex flex-col p-2 border-b">
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
              <button onClick={handleUnfollow}>Following</button>
            ) : (
              <button onClick={handleFollow}>Follow</button>
            )}
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
