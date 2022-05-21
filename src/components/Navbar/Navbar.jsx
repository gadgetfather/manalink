import React, { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";

import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "../../redux/features/auth/authSlice";
import { toastError } from "../Toast/Toast";
export function Navbar() {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.user);
  const user = useSelector((state) => state.auth.user);

  const handleLogout = () => {
    setTimeout(() => dispatch(userLogout()), 2000);
    toastError("You have been logged out");
  };
  const [filteredData, setFilteredData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [theme, setTheme] = useState(localStorage.getItem("manalinkTheme"));
  const handleFilter = (e, data) => {
    let text = e.target.value.toLowerCase().trim();
    let textLength = text.length;
    let result = data.filter((user) =>
      user.username.toLowerCase().substring(0, textLength).includes(text)
    );
    if (textLength > 0) {
      result.length > 0
        ? setFilteredData(result)
        : setFilteredData([{ id: 0, username: "Not Found" }]);
    } else setFilteredData([]);
  };
  const handleChangeTheme = () => {
    const root = document.getElementById("root");

    if (theme === "light") {
      setTheme("dark");
      root.classList.add("dark");
      localStorage.setItem("manalinkTheme", theme);
    } else if (theme === "dark") {
      setTheme("light");
      root.classList.remove("dark");
      localStorage.setItem("manalinkTheme", theme);
    }
  };
  useEffect(() => {
    handleChangeTheme();
  }, []);
  return (
    <nav className="h-12 bg-primary-orange-600 p-2 flex justify-between sticky top-0 z-40 rounded-b-lg">
      <div>
        <Link className="text-lg font-semibold" to={"/home"}>
          Manalink
        </Link>
      </div>

      <div className="flex items-center gap-2">
        <div className="relative">
          <input
            onChange={(e) => {
              handleFilter(e, users);
              setSearchValue(e.target.value);
            }}
            value={searchValue}
            placeholder="search for the user"
            className="px-2 py-1 w-40 rounded-md outline-none lg:mr-80 lg:w-60"
            type="search"
          />
          {filteredData.length > 0 ? (
            <div className="absolute bg-white border w-40 h-24 overflow-auto lg:w-60">
              {filteredData.map((user) =>
                user.username === "Not Found" ? (
                  "No user found"
                ) : (
                  <>
                    <Link
                      onClick={() => {
                        setFilteredData([]);
                        setSearchValue("");
                      }}
                      key={uuid()}
                      className=" "
                      to={`/${user.username}`}
                    >
                      <p className="p-1 w-full border-b hover:bg-slate-500">
                        {user.username}
                      </p>
                    </Link>
                  </>
                )
              )}
            </div>
          ) : (
            ""
          )}
        </div>
        <img
          className="w-8 h-8 rounded-full object-cover"
          src={user.profileImg}
          alt=""
        />
        <span
          onClick={handleChangeTheme}
          className="material-symbols-outlined cursor-pointer"
        >
          dark_mode
        </span>
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
