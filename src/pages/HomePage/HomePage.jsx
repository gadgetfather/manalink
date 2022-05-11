import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth-context";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Navbar } from "../../components";

export function HomePage() {
  return (
    <div className="min-h-screen bg-gray-500">
      <ToastContainer />
      <Navbar />
    </div>
  );
}
