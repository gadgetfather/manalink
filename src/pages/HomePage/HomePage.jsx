import React from "react";

import { ToastContainer } from "react-toastify";
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
