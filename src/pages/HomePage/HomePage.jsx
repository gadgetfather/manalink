import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth-context";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function HomePage() {
  const { setUserInfo } = useAuth();
  const navigate = useNavigate();
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
    <div>
      <h1>Homepage</h1>
      <ToastContainer />
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
