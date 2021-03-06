import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  EditPostModal,
  MobileMenu,
  Navbar,
  PersonCard,
  PostCard,
  Sidebar,
} from "../../components";
import { getPosts } from "../../redux/features/post/postThunk";
import { getAllUsers } from "../../redux/features/user/userThunk";

export function HomePage() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.post.posts);
  const { editPostModal } = useSelector((state) => state.modal);
  const { users } = useSelector((state) => state.user);
  const {
    user: { following, username },
  } = useSelector((state) => state.auth);
  const reversePosts = [...posts].reverse();
  const followingUserNameArr = [...following].map((user) => user.username);
  const followingOnlyPosts = reversePosts.filter((post) =>
    followingUserNameArr.includes(post.username)
  );
  const userAndFollowingPost = reversePosts
    .filter((post) => post.username === username)
    .reverse()
    .concat(followingOnlyPosts);

  useEffect(() => {
    dispatch(getPosts());
    dispatch(getAllUsers());
  }, []);

  return (
    <div className="lg:w-[80%] xl:w-[70%] 2xl:w-[60%] mx-auto flex flex-col">
      <Navbar />
      <ToastContainer />
      {editPostModal && <EditPostModal />}
      <div className="min-h-[calc(100vh_-_88px)] grid grid-cols-1   lg:grid-layout">
        <Sidebar />
        <div>
          <div className="border-b h-16 pl-2 flex items-center ">
            <h1 className="text-xl font-semibold dark:text-white">
              Welcome Back...
            </h1>
          </div>
          {userAndFollowingPost.length > 0 ? (
            userAndFollowingPost.map((post) => (
              <PostCard key={post.id} {...post} />
            ))
          ) : (
            <div className="text-center mt-8 dark:text-white">
              <h1 className="font-semibold text-3xl ">
                Follow some people to get started
              </h1>
              <span className="font-semibold mt-4 text-6xl material-symbols-outlined">
                arrow_right_alt
              </span>
              <p className="text-2xl">or</p>
              <div className="mt-4">
                <Link
                  className="text-lg bg-primary-orange-600 px-4 py-2 rounded-md font-medium hover:bg-primary-orange-800"
                  to="/explore"
                >
                  Explore
                </Link>
              </div>
            </div>
          )}
        </div>
        <div className="hidden  lg:flex flex-col  sticky top-[48px] h-[calc(100vh_-_48px)] gap-4 pt-2 border-r border-l pb-3">
          <h2 className="text-center font-medium text-2xl dark:text-slate-200">
            Some amazing people
          </h2>
          {users.map((user) => (
            <PersonCard key={user.id} {...user} />
          ))}
        </div>
      </div>
      <MobileMenu />
    </div>
  );
}
