import React from "react";
import { useLoaderData } from "react-router-dom";

const Booking = () => {
  const { id, name, details } = useLoaderData();
  return (
    <div className="flex mt-20 gap-20">
      <div className=" ml-10 text-white w-6/12">
        <h1 className="text-7xl font-bold ">{name ? name : ""}</h1>
        <p className="my-10">{details ? details : ""}</p>
      </div>
      <div className="w-6/12">
        <div className=" relative mt-5 flex flex-col justify-center max-h-screen overflow-hidden">
          <div className="w-2/3 p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl">
            
            <form className="mt-6">
              <div className="mb-2">
                <label className="block text-sm font-semibold text-gray-800">
                  Origin
                </label>
                <input
                  type="text"
                  name="origin"
                  placeholder="Origin"
                  required
                  className="block w-full px-4 py-2 mt-2 text-yellow-700 bg-white border rounded-md focus:border-yellow-400 focus:ring-yellow-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              <div className="mb-2">
                <label className="block text-sm font-semibold text-gray-800">
                  Destination
                </label>
                <input
                  type="text"
                  name="destination"
                  placeholder="destination"
                  required
                  className="block w-full px-4 py-2 mt-2 text-yellow-700 bg-white border rounded-md focus:border-yellow-400 focus:ring-yellow-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>

              <div className="mt-6">
                <button className="w-full px-4 py-2 tracking-wide text-black transition-colors duration-200 transform bg-yellow-500 rounded-md hover:bg-yellow-400 focus:outline-none focus:bg-yellow-400">
                  Start Booking
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
