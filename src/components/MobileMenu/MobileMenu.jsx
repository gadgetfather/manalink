import React from "react";
import { NavLink } from "react-router-dom";
export function MobileMenu() {
  return (
    <div className="h-10 bg-yellow-200 sticky w-full bottom-0 flex justify-between items-center px-2 lg:hidden">
      <NavLink
        to="/home"
        className={({ isActive }) =>
          isActive
            ? " cursor-pointer bg-red-400 p-1 rounded-full flex items-center  "
            : " cursor-pointer   "
        }
      >
        <span className="material-symbols-outlined">home</span>
      </NavLink>

      <NavLink
        to={"/bookmarks"}
        className={({ isActive }) =>
          isActive
            ? " cursor-pointer bg-red-400 p-1 rounded-full flex items-center  "
            : " cursor-pointer   "
        }
      >
        <span className="material-symbols-outlined">bookmark</span>
      </NavLink>
      <NavLink to={"/"}>
        <span className="material-symbols-outlined">add_circle</span>
      </NavLink>
      <NavLink
        to={"/explore"}
        className={({ isActive }) =>
          isActive
            ? " cursor-pointer bg-red-400 p-1 rounded-full flex items-center  "
            : " cursor-pointer   "
        }
      >
        <span className="material-symbols-outlined">explore</span>
      </NavLink>
      <NavLink
        to={"/profile"}
        className={({ isActive }) =>
          isActive
            ? " cursor-pointer bg-red-400 p-1 rounded-full flex items-center  "
            : " cursor-pointer   "
        }
      >
        <span className="material-symbols-outlined">person</span>
      </NavLink>
    </div>
  );
}
