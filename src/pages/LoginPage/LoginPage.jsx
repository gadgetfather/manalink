import React, { useState, useEffect } from "react";
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
    <div className="w-full min-h-screen  flex justify-center items-center font-body ">
      <ToastContainer />
      <div className="hidden min-h-screen w-[50%] tint-image lg:block"></div>
      <div className=" w-[100%] min-h-screen flex items-center justify-center flex-col bg-[#f5f5f5] lg:w-[50%]">
        <h1 className="text-4xl font-bold ">Real gaming takes the stage</h1>
        <p className="mb-4">Join Manalink Today </p>
        <div className="shadow-xl p-4 rounded-md lg:w-80">
          <h1 className="mb-3 font-body  text-2xl font text-center">
            Log in to Manalink
          </h1>
          <form className=" p-4 flex flex-col gap-2 rounded-lg ">
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
            <button
              onClick={(e) => {
                e.preventDefault();
                setFormData({
                  username: "Gadgetfather",
                  password: "akshay123",
                });
              }}
              className="bg-primary-orange-600 px-4 py-2 rounded-md font-medium hover:bg-primary-orange-800 "
            >
              Fill Test Credentials
            </button>
            <button
              type="submit"
              onClick={(e) => handleLogin(e)}
              className="bg-primary-orange-600 px-4 py-2 rounded-md font-medium hover:bg-primary-orange-800 "
            >
              Login
            </button>
            <span className="text-sm self-center mt-2">
              Join us today
              <Link
                to="/signup"
                className="text-primary-orange-600 underline cursor-pointer"
              >
                {" "}
                Sign up
              </Link>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
}
