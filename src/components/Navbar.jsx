import React, { useContext, useEffect, useState } from "react";
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import userIcon from "../assets/user.png";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const navigate = useNavigate();


  // Try to get the theme from localStorage if available, otherwise default to 'light'
  const [theme, setTheme] = React.useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  React.useEffect(() => {
    document.querySelector('html').setAttribute('data-theme', theme);
  }, [theme]);



  const linkClass = ({ isActive }) =>
    isActive
      ? " p-2 text-green-500 rounded-lg hover:bg-transparent font-bold text-lg"
      : " p-2 rounded-lg hover:bg-transparent hover:text-green-500 hover:bg-green-300 font-bold text-lg text-black";

  const links = (
    <>
      <NavLink to="/" className={linkClass} >
        Home
      </NavLink>
      <NavLink to="/find-tutors" className={linkClass} >
        Find Tutors
      </NavLink>
      {user && (
        <NavLink to="/addTutorial" className={linkClass} >
          Add Tutorial
        </NavLink>
      )}
      {user && (
        <NavLink to="/myTutorials" className={linkClass} >
          My Tutorials
        </NavLink>
      )}
      {user && (
        <NavLink to="/booked-tutors" className={linkClass} >
          My Booked Tutors
        </NavLink>
      )}
      <NavLink to="/about" className={linkClass} >
        About Us
      </NavLink>
    </>
  );

  const signOut = () => {
    logOut();
    navigate("/auth/login");
    toast.success("Logout successfully!");
  };

  return (
    <nav className="bg-green-200 bg-opacity-30 z-10 sticky top-0 w-full">
      <div className="navbar px-4">
        {/* Start Section */}
        <div className="navbar-start">
          <div className="dropdown">
            <label
              tabIndex={0}
              className="btn btn-ghost lg:hidden"
              role="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <div
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] shadow rounded-box w-52 bg-green-100"
            >

              {/*==========================================================  */}
              <button onClick={toggleTheme} data-tooltip-content={"Change Theme"} data-tooltip-id="my-tooltip" data-tooltip-place="top">
                {theme === 'dark' ?
                  (<div>
                    {/* sun icon */}
                    <svg
                      className="swap-off h-10 w-10 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24">
                      <path
                        d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                    </svg>
                  </div>)
                  :
                  (<div>
                    {/* moon icon */}
                    <svg
                      className="swap-on h-10 w-10 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24">
                      <path
                        d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                    </svg>
                  </div>)}

              </button>
              {/*==========================================================  */}

              {links}

              <div className="mb-2">
                {user && user?.email ? (
                  <button
                    onClick={signOut}
                    className="btn text-black btn-neutral w-full bg-green-500 rounded-lg border-none hover:bg-green-700" data-tooltip-id="my-tooltip"
                    data-tooltip-content={"You Can Logout"}
                    data-tooltip-place="top"
                  >
                    Logout
                  </button>
                ) : (
                  <div>
                    <Link
                      to="/auth/login"
                      className="btn btn-neutral bg-green-500 rounded-lg border-none text-black hover:bg-green-700 mr-2"
                      data-tooltip-id="my-tooltip"
                      data-tooltip-content={"Please Login"}
                      data-tooltip-place="top"
                    >
                      Login
                    </Link>
                    <Link
                      to="/auth/register"
                      className="btn btn-neutral bg-green-500 rounded-lg border-none text-black hover:bg-green-700"
                      data-tooltip-id="my-tooltip"
                      data-tooltip-content={"Register If Not Account"}
                      data-tooltip-place="top"
                    >
                      Register
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
          <Link to="/" className="text-xl md:text-2xl text-green-500 font-semibold">
            LinguaConnect
          </Link>
        </div>

        {/* Center Section */}
        <div className="navbar-center hidden lg:flex">
          <div className="menu menu-horizontal px-1 space-x-4">
            {links}

            {/*==========================================================  */}
            <button onClick={toggleTheme} data-tooltip-content={"Change Theme"} data-tooltip-id="my-tooltip" data-tooltip-place="top">

              {theme === 'dark' ?
                (<div>
                  {/* sun icon */}
                  <svg
                    className="swap-off h-10 w-10 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24">
                    <path
                      d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                  </svg>
                </div>)
                :
                (<div>
                  {/* moon icon */}
                  <svg
                    className="swap-on h-10 w-10 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24">
                    <path
                      d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                  </svg>
                </div>)}

            </button>
            {/*==========================================================  */}
          </div>
        </div>

        {/* End Section */}
        <div className="navbar-end ">
          <div className="dropdown">
            <div tabIndex={0} role="" className="m-1">
              {user && user?.email ? (
                <img
                  className="w-10 h-10 rounded-full border-2 border-green-500"
                  src={user?.photoURL}
                  alt=""

                  data-tooltip-id="my-tooltip"
                  data-tooltip-content={user?.displayName || "User"}
                  data-tooltip-place="top"
                />
              ) : (
                <img
                  className="my-tooltip w-10 h-10 rounded-full"
                  src={userIcon}
                  alt=""

                  data-tooltip-id="my-tooltip"
                  data-tooltip-content={"No Logged User"}
                  data-tooltip-place="top"
                />
              )}
            </div>
            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
              <li><a>{user?.displayName || "No logged User"}</a></li>
            </ul>
          </div>

          <div className="hidden lg:ml-2 lg:flex lg:items-center lg:gap-3">
            <div>
              {user && user?.email ? (
                <button
                  onClick={signOut}
                  className="btn btn-neutral bg-green-500 rounded-lg border-none text-black hover:bg-green-700" data-tooltip-id="my-tooltip"
                  data-tooltip-content={"You Can Logout"}
                  data-tooltip-place="top"
                >
                  Logout
                </button>
              ) : (
                <div>
                  <Link
                    to="/auth/login"
                    className="btn btn-neutral bg-green-500 rounded-lg border-none hover:bg-green-700 text-black mr-2"
                    data-tooltip-id="my-tooltip"
                    data-tooltip-content={"Please Login"}
                    data-tooltip-place="top"
                  >
                    Login
                  </Link>
                  <Link
                    to="/auth/register"
                    className="btn btn-neutral bg-green-500 rounded-lg border-none hover:bg-green-700 text-black"
                    data-tooltip-id="my-tooltip"
                    data-tooltip-content={"Register If Not Account"}
                    data-tooltip-place="top"
                  >
                    Register
                  </Link>
                </div>
              )}
            </div>
          </div>


        </div>
        <Tooltip id="my-tooltip" />

      </div>
    </nav>

  );
};

export default Navbar;

