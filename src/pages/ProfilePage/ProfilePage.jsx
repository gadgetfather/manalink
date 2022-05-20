import React, { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { useState } from "react";
import { MobileMenu, Navbar, PostCard, Sidebar } from "../../components";
import { useDispatch, useSelector } from "react-redux";

import { useParams } from "react-router-dom";
import { getSingleUser } from "../../redux/features/user/userThunk";
import { getPosts } from "../../redux/features/post/postThunk";

export function ProfilePage() {
  const { profile } = useParams();
  const { posts } = useSelector((state) => state.post);
  const {
    user: { username: currentUser },
  } = useSelector((state) => state.auth);

  const {
    visitingUser: { username },
  } = useSelector((state) => state.user);

  const [showHover, setShowHover] = useState(false);
  const userPosts = posts.filter((post) => post.username === profile).reverse();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());

    dispatch(getSingleUser(profile));
  }, [dispatch, profile]);
  return (
    <div className="lg:w-[80%] xl:w-[70%] 2xl:w-[60%] mx-auto flex flex-col ">
      <Navbar />
      <ToastContainer />

      <div className="min-h-screen grid grid-cols-1   lg:grid-layout ">
        <Sidebar />
        <div className="border-r">
          <div className="border-b pb-2 w-full px-2 flex flex-col ">
            <div className="flex items-center gap-2 pb-2">
              <div
                onMouseEnter={() => setShowHover(true)}
                onMouseLeave={() => setShowHover(false)}
                className="w-20 h-20 relative"
              >
                <img
                  className=" rounded-full object-center"
                  src="https://picsum.photos/200"
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
                    <input id="image" className="z-50 hidden" type="file" />
                  </div>
                ) : (
                  ""
                )}
              </div>

              <h1 className="font-medium text-lg">{username}</h1>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores iste corporis repellat expedita tempora excepturi
            </p>
            {profile === currentUser ? (
              <button className="ml-auto mr-2">Edit</button>
            ) : (
              <button className="ml-auto mr-2">follow</button>
            )}
          </div>
          {userPosts.map((post) => (
            <PostCard key={post.id} {...post} />
          ))}
        </div>
      </div>
      <MobileMenu />
    </div>
  );
}
