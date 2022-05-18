import React from "react";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import { MobileMenu, Navbar, PostCard, Sidebar } from "../../components";

export function BookmarkPage() {
  const bookmarksArr = useSelector((state) => state.post.bookmarks);
  const posts = useSelector((state) => state.post.posts);
  const bookmarks = posts.filter((val) =>
    bookmarksArr.map((n) => n.id).includes(val.id)
  );

  return (
    <div className="lg:w-[80%] xl:w-[70%] 2xl:w-[60%] mx-auto flex flex-col">
      <Navbar />
      <ToastContainer />

      <div className="min-h-screen grid grid-cols-1   lg:grid-layout">
        <Sidebar />
        <div className="border-r pb-4">
          <h1 className="text-3xl mb-2 text-center font-semibold">
            Saved Posts
          </h1>
          {bookmarks.length > 0 ? (
            bookmarks.map((post) => <PostCard key={post.id} {...post} />)
          ) : (
            <h1 className="text-center mt-4 text-lg">Nothing is here ...</h1>
          )}
        </div>
      </div>
      <MobileMenu />
    </div>
  );
}
