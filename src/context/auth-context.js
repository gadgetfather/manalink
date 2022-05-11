import axios from "axios";
import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({
    token: localStorage.getItem("manalink.token") || "",
    user: JSON.parse(localStorage.getItem("manalink.user")) || "",
  });
  const navigate = useNavigate();

  const login = async (loginData) => {
    try {
      const response = await axios.post("/api/auth/login", {
        username: loginData.username,
        password: loginData.password,
      });
      if (response.status === 200) {
        setUserInfo({
          ...userInfo,
          token: response.data.encodedToken,
          user: response.data.foundUser,
        });
        toast.success("Login sucessful!", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

        localStorage.setItem("manalink.token", response.data.encodedToken);
        localStorage.setItem(
          "manalink.user",
          JSON.stringify(response.data.foundUser)
        );
        setTimeout(() => navigate("/home"), 2000);
      }
    } catch (error) {
      toast.error(error.response.data.errors[0], {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
  const signup = async (username, password) => {
    try {
      const response = await axios.post("/api/auth/signup", {
        username,
        password,
      });
      if (response.status === 201) {
        toast.success("signup sucessful!\nYou can login now", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setTimeout(() => navigate("/"), 2200);
      }
    } catch (error) {
      toast.error(error.response.data.errors[0], {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
  return (
    <AuthContext.Provider value={{ login, signup, userInfo, setUserInfo }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
