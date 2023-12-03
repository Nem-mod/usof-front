import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Link} from "react-router-dom";
import {fetchAuthMe, logout, selectIsAuth} from "../../store/slices/auth";

const Header = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);
  useEffect(() => {
    dispatch(fetchAuthMe());
  }, []);

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-800">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            MdodFlow
          </span>
        </a>

        {/* Burger menu*/}
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          {/*<svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"*/}
          {/*     viewBox="0 0 17 14">*/}
          {/*    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"*/}
          {/*          d="M1 1h15M1 7h15M1 13h15"/>*/}
          {/*</svg>*/}
        </button>
        {/* */}

        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col items-center ali p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-800 dark:border-gray-700">
            <li>
              <form action="get">
                <input
                  type="text"
                  id="first_name"
                  className="base_input p-2"
                  placeholder="Question"
                  required
                />
              </form>
            </li>
            <li>
              <Link to="/" className="nav_link" aria-current="page">
                Home
              </Link>
            </li>
            <li>
              <Link to="/users" className="nav_link" aria-current="page">
                Community
              </Link>
            </li>
            {isAuth ? (
              <>
                <li>
                  <Link to="/account" className="nav_link" aria-current="page">
                    Account
                  </Link>
                </li>
                <li>
                  <Link
                      to="/"
                    onClick={() => {
                      window.localStorage.clear();
                      dispatch(logout())
                    }}
                    className="nav_link"
                    aria-current="page"
                  >
                    Log out
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/login" className="text-blue-300 nav_link ">
                    Log in
                  </Link>
                </li>
                <li>
                  <Link to  ="/signup" className="nav_link">
                    Sign up
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
