import React from "react";
import reactDom from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { openModal } from "../../redux/features/modal/modalSlice";
import { PostModal } from "../PostModal/PostModal";

export function Sidebar() {
  const user = useSelector((state) => state.auth.user);
  const { isOpen } = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  const handleOpenModel = () => {
    dispatch(openModal());
  };
  return (
    <div className="hidden lg:h-[calc(100vh - 48px)] lg:block">
      <div className="flex flex-col   sticky top-[48px] h-[calc(100vh_-_48px)] gap-4 pt-4 border-r ">
        <NavLink
          to={"/home"}
          className={({ isActive }) =>
            isActive
              ? "flex items-center cursor-pointer bg-secondary-color-600 text-white ml-4 w-[60%] rounded-md py-1 pl-5"
              : "flex items-center cursor-pointer   w-[60%]  py-1 pl-5"
          }
        >
          <span className="material-symbols-outlined">home</span>
          <h2>Home</h2>
        </NavLink>
        <NavLink
          to={"/explore"}
          className={({ isActive }) =>
            isActive
              ? "flex items-center cursor-pointer bg-secondary-color-600 w-[60%] text-white ml-4 rounded-md py-1 pl-5"
              : "flex items-center cursor-pointer  w-[60%]  py-1 pl-5"
          }
        >
          <span className="material-symbols-outlined">explore</span>
          <h2>Explore</h2>
        </NavLink>
        <NavLink
          to={"/bookmarks"}
          className={({ isActive }) =>
            isActive
              ? "flex items-center cursor-pointer bg-secondary-color-600 w-[60%] text-white ml-4 rounded-md py-1 pl-5"
              : "flex items-center cursor-pointer  w-[60%]  py-1 pl-5"
          }
        >
          <span className="material-symbols-outlined">bookmark</span>
          <h2>Bookmarked</h2>
        </NavLink>
        <NavLink
          to={`/${user.username}`}
          className={({ isActive }) =>
            isActive
              ? "flex items-center cursor-pointer bg-secondary-color-600 w-[60%] text-white ml-4 rounded-md py-1 pl-5"
              : "flex items-center cursor-pointer  w-[60%]  py-1 pl-5"
          }
        >
          <span className="material-symbols-outlined">person</span>
          <h2>Profile</h2>
        </NavLink>
        <button
          onClick={handleOpenModel}
          className="bg-primary-orange-600 font-medium mx-2 rounded-2xl px-4 py-2 hover:bg-primary-orange-700"
        >
          New Post
        </button>
        <div className="flex items-center mt-auto pb-2 gap-2">
          <img
            className="w-10 h-10 rounded-full object-cover"
            src={user.profileImg}
            alt=""
          />
          <h2>{user.username}</h2>
        </div>
      </div>
    </div>
  );
}
