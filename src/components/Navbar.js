import React from "react";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 font-abc text-gray-700">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-lg dropdown-content bg-base-100 text-gray-700 rounded-box z-[1] mt-3 w-52  p-2 shadow"
          >
            <li className="hover:text-blue-600">
              <a>Features</a>
            </li>
            <li className="hover:text-blue-600">
              <a>Pricing</a>
            </li>
            <li className="hover:text-blue-600">
              <a>Resources</a>
            </li>
          </ul>
        </div>
        <a className="pl-5 text-3xl font-bold">Weblify</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 ">
          <li className="hover:text-blue-600">
            <a>Features</a>
          </li>
          <li className="hover:text-blue-600">
            <a>Pricing</a>
          </li>
          <li className="hover:text-blue-600">
            <a>Resources</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <button className="btn rounded-full ">Log In</button>
        <button className="btn m-3 px-6 rounded-full bg-blue-300">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Navbar;
