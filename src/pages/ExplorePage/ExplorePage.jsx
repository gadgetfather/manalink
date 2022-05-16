import React from "react";
import { ToastContainer } from "react-toastify";
import {
  MobileMenu,
  Navbar,
  PersonCard,
  PostCard,
  Sidebar,
} from "../../components";

export function ExplorePage() {
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
          {/* <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard /> */}
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
