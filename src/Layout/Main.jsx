import React from "react";
import { Outlet } from "react-router-dom";

import backgroundImage from "../assets/Rectangle1.png";
import HeaderLite from "../Pages/HeaderLite/HeaderLite";

const Main = () => {
  return (
    <div>
      <div className="absolute inset-0 bg-black bg-opacity-70 "></div>
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
        className="relative bg-cover bg-center h-screen mix-blend-multiply"
      >

      </div>
      <div className="absolute w-full top-0">
        <HeaderLite></HeaderLite>
        <Outlet></Outlet>

      </div>
    </div>
  );
};

export default Main;
