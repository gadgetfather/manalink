import React from "react";

export function Sidebar() {
  return (
    <div className="hidden lg:h-[calc(100vh - 48px)] lg:block">
      <div className="flex flex-col   sticky top-[48px] h-[calc(100vh_-_48px)] gap-4 pt-4 border-r ">
        <div className="flex items-center cursor-pointer">
          <span class="material-symbols-outlined">home</span>
          <h2>Home</h2>
        </div>
        <div className="flex items-center cursor-pointer">
          <span class="material-symbols-outlined">explore</span>
          <h2>Explore</h2>
        </div>
        <div className="flex items-center cursor-pointer">
          <span class="material-symbols-outlined">bookmark</span>
          <h2>Bookmarked</h2>
        </div>
        <div className="flex items-center mt-auto pb-2 gap-2">
          <img
            className="w-10 h-10 rounded-full"
            src="https://picsum.photos/200"
            alt=""
          />
          <h2>Username</h2>
        </div>
      </div>
    </div>
  );
}
