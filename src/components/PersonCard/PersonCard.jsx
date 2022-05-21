import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { follow, unfollow } from "../../redux/features/user/userThunk";

export function PersonCard(props) {
  const navigate = useNavigate();
  const { username, _id } = props;
  const { user } = useSelector((state) => state.auth);
  const { users } = useSelector((state) => state.user);

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
          className="cursor-pointer flex flex-col p-2 border-b dark:text-slate-200"
        >
          <div className="flex items-center gap-2">
            {users
              .filter((user) => user.username === username)
              .map((user) => (
                <img
                  key={user.id}
                  className="h-10 w-10 rounded-full object-cover"
                  src={user.profileImg}
                  alt=""
                />
              ))}
            <h2 className="text-lg font-medium">{username}</h2>
          </div>
          <div className="mt-2 ml-auto mr-4">
            {user.following.some((user) => user.username === username) ? (
              <button
                className="bg-primary-orange-600 px-4 py-2 rounded-md font-medium hover:bg-primary-orange-800"
                onClick={(e) => handleUnfollow(e)}
              >
                Following
              </button>
            ) : (
              <button
                className="bg-primary-orange-600 px-4 py-2 rounded-md font-medium hover:bg-primary-orange-800"
                onClick={(e) => handleFollow(e)}
              >
                Follow
              </button>
            )}
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
