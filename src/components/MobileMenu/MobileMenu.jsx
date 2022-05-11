import React from "react";
import { Link } from "react-router-dom";
export function MobileMenu() {
  return (
    <div className="h-10 bg-yellow-200 absolute w-full bottom-0 flex justify-between items-center px-2">
      <Link to="/">
        <span className="material-symbols-outlined">home</span>
      </Link>

      <Link to={"/"}>
        <span className="material-symbols-outlined">bookmark</span>
      </Link>
      <Link to={"/"}>
        <span className="material-symbols-outlined">add_circle</span>
      </Link>
      <Link to={"/"}>
        <span className="material-symbols-outlined">explore</span>
      </Link>
      <Link to={"/"}>
        <span className="material-symbols-outlined">person</span>
      </Link>
    </div>
  );
}
