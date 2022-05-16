import React from "react";
import { ToastContainer } from "react-toastify";
import { MobileMenu, Navbar, PostCard, Sidebar } from "../../components";

export function BookmarkPage() {
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
          {/* <PostCard />
          <PostCard />
          <PostCard />
          <PostCard /> */}
        </div>
      </div>
      <MobileMenu />
    </div>
  );
}
