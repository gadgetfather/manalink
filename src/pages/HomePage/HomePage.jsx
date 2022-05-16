import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  MobileMenu,
  Navbar,
  PersonCard,
  PostCard,
  Sidebar,
} from "../../components";
import { createPost, getPosts } from "../../redux/features/post/postSlice";

export function HomePage() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.post.posts);
  const reversePosts = [...posts].reverse();
  useEffect(() => {
    dispatch(getPosts());
  }, [posts, dispatch]);
  return (
    <div className="lg:w-[80%] xl:w-[70%] 2xl:w-[60%] mx-auto flex flex-col">
      <Navbar />
      <ToastContainer />

      <div className="min-h-screen grid grid-cols-1   lg:grid-layout">
        <Sidebar />
        <div>
          {reversePosts.map((post) => (
            <PostCard key={post.id} {...post} />
          ))}
        </div>
        <div className="hidden border lg:flex flex-col  sticky top-[48px] h-[calc(100vh_-_48px)] gap-4 pt-2 border-r pb-3">
          <PersonCard />
          <PersonCard />
          <PersonCard />
        </div>
      </div>
      <MobileMenu />
    </div>
  );
}
