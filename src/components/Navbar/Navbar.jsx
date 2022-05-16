import React from "react";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { userLogout } from "../../redux/features/auth/authSlice";
import { toastError } from "../Toast/Toast";
export function Navbar() {
  const dispatch = useDispatch();
  const handleLogout = () => {
    setTimeout(() => dispatch(userLogout()), 2000);
    toastError("You have been logged out");
  };
  return (
    <nav className="h-12 bg-red-400 p-2 flex justify-between sticky top-0">
      <div>
        <Link className="text-lg font-semibold" to={"/home"}>
          Manalink
        </Link>
      </div>

      <div className="flex items-center gap-2">
        <img
          className="w-8 h-8 rounded-full object-center"
          src="https://picsum.photos/200"
          alt=""
        />
        <span
          onClick={handleLogout}
          className="material-symbols-outlined cursor-pointer"
        >
          logout
        </span>
      </div>
    </nav>
  );
}
