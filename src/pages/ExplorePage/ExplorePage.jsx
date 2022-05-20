import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import {
  MobileMenu,
  Navbar,
  PersonCard,
  PostCard,
  Sidebar,
} from "../../components";
import { getPosts } from "../../redux/features/post/postThunk";
import { getAllUsers } from "../../redux/features/user/userThunk";

export function ExplorePage() {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.post);
  const { users } = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(getPosts());
    dispatch(getAllUsers());
  }, []);

  return (
    <div className="lg:w-[80%] xl:w-[70%] 2xl:w-[60%] mx-auto flex flex-col">
      <Navbar />
      <ToastContainer />

      <div className="min-h-screen grid grid-cols-1   lg:grid-layout">
        <Sidebar />
        <div>
          <h1 className="text-center text-3xl font-bold mb-2">
            Explore New Things...
          </h1>
          {posts.map((post) => (
            <PostCard key={post.id} {...post} />
          ))}
        </div>
        <div className="hidden border lg:flex flex-col  sticky top-[48px] h-[calc(100vh_-_48px)] gap-4 pt-2 border-r pb-3">
          {users.map((user) => (
            <PersonCard key={user.id} {...user} />
          ))}
        </div>
      </div>
      <MobileMenu />
    </div>
  );
}
