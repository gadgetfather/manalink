import React, { useEffect, useState } from "react";
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
  const [sortByLike, setSortByLike] = useState(false);
  const [sortModal, setSortModal] = useState(false);
  const [sortedData, setSortedData] = useState(posts);
  useEffect(() => {
    if (sortByLike) {
      const data = [...posts].sort(
        (a, b) => b.likes.likeCount - a.likes.likeCount
      );

      setSortedData(data);
    } else {
      setSortedData(posts);
    }
  }, [sortByLike]);

  return (
    <div className="lg:w-[80%] xl:w-[70%] 2xl:w-[60%] mx-auto flex flex-col">
      <Navbar />
      <ToastContainer />

      <div className="min-h-[calc(100vh_-_88px)] grid grid-cols-1   lg:grid-layout">
        <Sidebar />
        <div>
          <div className="flex items-center gap-2  h-16 dark:text-slate-200">
            <h1 className="text-center text-3xl font-bold mb-2">
              Explore New Things...
            </h1>
            <div className="ml-auto mr-2 relative">
              <span
                onClick={() => setSortModal(!sortModal)}
                className="cursor-pointer material-symbols-outlined"
              >
                sort
              </span>
              {sortModal && (
                <div className="border  bg-slate-400  absolute w-32 p-2 right-4">
                  <p className="text-center">Sort by</p>
                  <span className="flex gap-2 items-center">
                    <input
                      onChange={() => setSortByLike(!sortByLike)}
                      checked={sortByLike}
                      name="likeSort"
                      type="checkbox"
                      id="likeSort"
                    />
                    <label htmlFor="likeSort">By like</label>
                  </span>
                </div>
              )}
            </div>
          </div>

          {sortedData.map((post) => (
            <PostCard key={post.id} {...post} />
          ))}
        </div>
        <div className="hidden lg:flex flex-col  sticky top-[48px] h-[calc(100vh_-_48px)] gap-4 pt-2 border-r border-l  pb-3">
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
