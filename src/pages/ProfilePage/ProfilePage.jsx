import React, { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { useState } from "react";
import {
  EditProfileModal,
  MobileMenu,
  Navbar,
  PostCard,
  Sidebar,
} from "../../components";
import { useDispatch, useSelector } from "react-redux";

import { useParams } from "react-router-dom";

import {
  follow,
  getSingleUser,
  unfollow,
} from "../../redux/features/user/userThunk";
import { getPosts } from "../../redux/features/post/postThunk";
import { openEditProfileModal } from "../../redux/features/modal/modalSlice";
import { editProfile } from "../../redux/features/user/userThunk";
import { toastError } from "../../components/Toast/Toast";
export function ProfilePage() {
  const { profile } = useParams();
  const { posts } = useSelector((state) => state.post);
  const {
    user: { username: currentUser, following, profileImg: imgs },
  } = useSelector((state) => state.auth);
  const { editProfile: editProfileModal } = useSelector((state) => state.modal);
  const { visitingUser } = useSelector((state) => state.user);
  const user = useSelector((state) => state.auth.user);

  const { username, _id, bio, profileImg } = visitingUser;
  const [showHover, setShowHover] = useState(false);
  const userPosts = posts.filter((post) => post.username === profile).reverse();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());

    dispatch(getSingleUser(profile));
  }, [dispatch, profile]);

  const handleFollow = () => {
    dispatch(follow(_id));
  };
  const handleUnfollow = () => {
    dispatch(unfollow(_id));
  };
  const handleEditProfileModal = () => {
    dispatch(openEditProfileModal(bio));
  };
  // Cloudinary
  const imageHandler = async (e) => {
    try {
      const data = new FormData();
      data.append("file", e.target.files[0]);
      data.append("cloud_name", process.env.REACT_APP_CLOUDINARY_CLOUD_NAME);
      data.append(
        "upload_preset",
        process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET ?? ""
      );

      fetch(process.env.REACT_APP_CLOUDINARY_API_URL ?? "", {
        method: "post",
        mode: "cors",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          const obj = {
            ...visitingUser,
            profileImg: data.url,
          };

          dispatch(editProfile(obj));
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="lg:w-[80%] xl:w-[70%] 2xl:w-[60%] mx-auto flex flex-col ">
      <Navbar />
      <ToastContainer />
      {editProfileModal && <EditProfileModal />}
      <div className="min-h-[calc(100vh_-_88px)] grid grid-cols-1   lg:grid-layout ">
        <Sidebar />
        <div className="border-r">
          <div className="border-b pb-2 w-full px-2 flex flex-col ">
            <div className="flex items-center gap-2 pb-2 pt-4">
              <div
                onMouseEnter={() => setShowHover(true)}
                onMouseLeave={() => setShowHover(false)}
                className="w-20 h-20 relative"
              >
                <img
                  className="w-full h-full rounded-full object-cover"
                  src={profileImg}
                  alt=""
                />
                {profile === currentUser ? (
                  <div
                    className={` absolute ${
                      showHover ? "flex" : "hidden"
                    } items-center justify-center left-0 right-0 top-0 bottom-0 text-sm bg-sky-500/50 rounded-full cursor-pointer z-20`}
                  >
                    <label className="cursor-pointer" htmlFor="image">
                      <span className="material-symbols-outlined">
                        photo_camera
                      </span>
                    </label>
                    <input
                      onChange={imageHandler}
                      id="image"
                      className="z-50 hidden"
                      type="file"
                    />
                  </div>
                ) : (
                  ""
                )}
              </div>

              <h1 className="font-medium text-lg dark:text-slate-200">
                {username}
              </h1>
              <div className="flex gap-4 ml-auto mr-10">
                <div className="flex-col text-center">
                  <p>{visitingUser.followers.length || 0}</p>
                  <p>Followers</p>
                </div>
                <div className="flex-col text-center">
                  <p>{visitingUser.following.length || 0}</p>
                  <p>Following</p>
                </div>
              </div>
            </div>

            <p className="dark:text-slate-200">{bio}</p>

            {profile === currentUser ? (
              <button
                onClick={handleEditProfileModal}
                className="ml-auto mr-2 bg-primary-orange-600 px-4 py-2 rounded-md font-medium hover:bg-primary-orange-800"
              >
                Edit
              </button>
            ) : (
              <>
                {following.some((user) => user.username === profile) ? (
                  <button
                    onClick={handleUnfollow}
                    className="ml-auto mr-2 bg-primary-orange-600 px-4 py-2 rounded-md font-medium hover:bg-primary-orange-800"
                  >
                    following
                  </button>
                ) : (
                  <button
                    onClick={handleFollow}
                    className="ml-auto mr-2 bg-primary-orange-600 px-4 py-2 rounded-md font-medium hover:bg-primary-orange-800"
                  >
                    follow
                  </button>
                )}
              </>
            )}
          </div>
          {userPosts.length > 0 ? (
            userPosts.map((post) => <PostCard key={post.id} {...post} />)
          ) : (
            <h1 className="text-center mt-4 font-medium text-3xl dark:text-slate-200">
              No posts yet...
            </h1>
          )}
        </div>
      </div>
      <MobileMenu />
    </div>
  );
}
