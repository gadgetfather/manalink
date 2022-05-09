import React from "react";

export function SignupPage() {
  return (
    <div className="w-full min-h-screen bg-white flex justify-center items-center font-body tint-image">
      <div className="bg-gray-300 p-4 rounded-md lg:w-80">
        <h1 className="mb-3 font-body font-bold text-2xl font">
          Create an account
        </h1>
        <form className=" p-4 flex flex-col gap-2 rounded-lg ">
          <input
            className="border-solid border-[1px] border-gray-400 rounded-md p-2"
            placeholder="Enter username"
            type="text"
          />

          <input
            className="border-solid border-[1px] border-gray-400 rounded-md p-2"
            placeholder="Password"
            type="password"
          />
          <input
            className="border-solid border-[1px] border-gray-400 rounded-md p-2"
            placeholder="Confirm Password"
            type="password"
          />
          <button className="rounded-md bg-slate-800 text-blue-50 mt-2 p-2  ">
            Create
          </button>
          <span className="text-sm self-center mt-2">
            Already have account?{" "}
            <span className="text-blue-600 underline cursor-pointer">
              {" "}
              login
            </span>
          </span>
        </form>
      </div>
    </div>
  );
}
