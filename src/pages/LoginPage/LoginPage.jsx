import React, { useState, useEffect, useEffectOnce } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toastError } from "../../components/Toast/Toast";
import { userLogin } from "../../redux/features/auth/authSlice";
export function LoginPage() {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const location = useLocation();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ username: "", password: "" });
  const handleLogin = (e) => {
    e.preventDefault();
    if (!formData.password || !formData.username) {
      toastError("Fill complete form");
    } else {
      dispatch(userLogin(formData));
    }
  };

  useEffect(() => {
    if (token && location.pathname === "/") {
      navigate("/home");
    }
  }, [token, navigate, location]);
  return (
    <div className="w-full min-h-screen  flex justify-center items-center font-body tint-image">
      <ToastContainer />

      <div className="bg-gray-300 p-4 rounded-md lg:w-80">
        <h1 className="mb-3 font-body font-bold text-2xl font">
          Log in to Manalink
        </h1>
        <form
          onSubmit={(e) => handleLogin(e)}
          className=" p-4 flex flex-col gap-2 rounded-lg "
        >
          <input
            onChange={(e) =>
              setFormData({ ...formData, username: e.target.value })
            }
            className="border-solid border-[1px] border-gray-400 rounded-md p-2"
            placeholder="Enter username"
            type="text"
            value={formData.username}
          />

          <input
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            className="border-solid border-[1px] border-gray-400 rounded-md p-2"
            placeholder="Password"
            type="password"
            value={formData.password}
          />
          <button className="rounded-md bg-slate-800 text-blue-50 mt-2 p-2  ">
            Login
          </button>
          <span className="text-sm self-center mt-2">
            Join us today
            <Link
              to="/signup"
              className="text-blue-600 underline cursor-pointer"
            >
              {" "}
              Sign up
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
}
