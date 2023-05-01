import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const HeaderLite = () => {
  return (
    <div className="navbar  text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>News</a>
            </li>
            <li>
              <a>Destination</a>
            </li>
            <li>
              <a>Blog</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </div>
        <Link to="/">
          <h2 className="text-2xl font-bold ml-10">Travel Guru</h2>
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-10">
          <li>
            <a>News</a>
          </li>
          <li>
            <a>Destination</a>
          </li>
          <li>
            <a>Blog</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>
      </div>
      <div className=" mr-20 ml-10">
        <Link to="/login">
        <button className="btn btn-warning">Login</button>
        </Link>
      </div>
    </div>
  );
};

export default HeaderLite;
