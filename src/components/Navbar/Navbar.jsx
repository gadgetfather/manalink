import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/auth-context";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export function Navbar() {
  const { setUserInfo } = useAuth();

  const handleLogout = () => {
    setTimeout(() => {
      localStorage.removeItem("manalink.user");
      localStorage.removeItem("manalink.token");
      setUserInfo({ token: "", user: "" });
    }, 2000);

    toast.error("You have been logged out", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  return (
    <nav className="h-12 bg-red-400 p-2 flex justify-between">
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
        <span onClick={handleLogout} className="material-symbols-outlined">
          logout
        </span>
      </div>
    </nav>
  );
}
