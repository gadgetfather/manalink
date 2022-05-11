import React from "react";

export function PostCard() {
  return (
    <div className=" p-2   flex flex-col border-b    ">
      <div className="flex items-center gap-2">
        <img
          className="h-10 w-10 rounded-full"
          src="https://picsum.photos/200"
          alt=""
        />
        <h2>Username</h2>
      </div>
      <div className="text-base">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          sint non dolore esse consectetur porro maiores, quas laudantium
          consequatur nesciunt!
        </p>
      </div>
      <div className="pt-2 flex justify-between">
        <span class="material-symbols-outlined">favorite</span>
        <span class="material-symbols-outlined">chat</span>
        <span class="material-symbols-outlined">share</span>
        <span class="material-symbols-outlined">bookmark</span>
      </div>
    </div>
  );
}
