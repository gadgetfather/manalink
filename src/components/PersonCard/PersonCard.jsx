import React from "react";

export function PersonCard() {
  return (
    <div className=" flex flex-col p-2 border-b">
      <div className="flex items-center gap-2">
        <img
          className="w-10 h-10 rounded-full"
          src="https://picsum.photos/200"
          alt=""
        />
        <h2>Username</h2>
      </div>
      <div className="mt-2 ml-auto mr-4">
        <button>Follow</button>
      </div>
    </div>
  );
}
