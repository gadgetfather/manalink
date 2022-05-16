import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
// import { useAuth } from "../../context/auth-context";
import "react-toastify/dist/ReactToastify.css";
import { toastError } from "../../components/Toast/Toast";
import { userSignup } from "../../redux/features/auth/authSlice";

export function SignupPage() {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const location = useLocation();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirm_password: "",
  });
  const handleSignup = (e) => {
    e.preventDefault();

    if (
      !formData.confirm_password ||
      !formData.password ||
      !formData.username
    ) {
      toastError("Fill complete form");
    } else if (formData.password !== formData.confirm_password) {
      toastError("Passwords should be same");
    } else {
      dispatch(userSignup(formData));
    }
  };
  useEffect(() => {
    if (token && location.pathname === "/signup") {
      navigate("/home");
    }
  }, [token, navigate, location]);
  return (
    <div className="w-full min-h-screen bg-white flex justify-center items-center font-body tint-image">
      <ToastContainer />
      <div className="bg-gray-300 p-4 rounded-md lg:w-80">
        <h1 className="mb-3 font-body font-bold text-2xl font">
          Create an account
        </h1>
        <form
          onSubmit={(e) => handleSignup(e)}
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
          <input
            onChange={(e) =>
              setFormData({ ...formData, confirm_password: e.target.value })
            }
            className="border-solid border-[1px] border-gray-400 rounded-md p-2"
            placeholder="Confirm Password"
            type="password"
            value={formData.confirm_password}
          />
          <button className="rounded-md bg-slate-800 text-blue-50 mt-2 p-2  ">
            Create
          </button>
          <span className="text-sm self-center mt-2">
            Already have account?{" "}
            <Link to="/" className="text-blue-600 underline cursor-pointer">
              {" "}
              login
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
}
