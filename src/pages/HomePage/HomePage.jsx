import React from "react";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  MobileMenu,
  Navbar,
  PersonCard,
  PostCard,
  Sidebar,
} from "../../components";

export function HomePage() {
  return (
    <div className="lg:w-[80%] mx-auto flex flex-col">
      <Navbar />
      <ToastContainer />

      <div className="min-h-screen grid grid-cols-1   lg:grid-layout">
        <Sidebar />
        <div>
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
        </div>
        <div className="border flex flex-col  sticky top-[48px] h-[calc(100vh_-_48px)] gap-4 pt-2 border-r ">
          <PersonCard />
          <PersonCard />
          <PersonCard />
        </div>
      </div>
      <MobileMenu />
    </div>
  );
}
