import React, { useState } from "react";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <header className="relative bg-white w-full shadow-md h-20">
      <nav className="absolute z-20 px-60 h-full w-full">
        <div className="relative w-full h-full flex items-center justify-center">
          <div className="z-50 flex items-center absolute left-0">
            <img src={logo} alt="Logo" className="w-28" />
          </div>

          <div
            className="z-51 flex items-center border border-gray-300 rounded-full shadow-sm px-4 py-2 max-w-lg min-w-80 flex-1 cursor-pointer"
            onClick={toggleModal}
          >
            <button className="flex-1 text-gray-500 text-sm px-2 text-left focus:outline-none">
              Any where
            </button>
            <span className="border-l border-gray-300 h-5 mx-2"></span>
            <button className="flex-1 text-gray-500 text-sm px-2 text-left focus:outline-none">
              Any week
            </button>
            <span className="border-l border-gray-300 h-5 mx-2"></span>
            <button className="flex-1 text-gray-500 text-sm px-2 text-left focus:outline-none">
              Add guests
            </button>
            <button className="bg-pink-500 text-white rounded-full p-2 ml-2 focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 16l-4-4m0 0l4-4m-4 4h16"
                />
              </svg>
            </button>
          </div>

          <div className="z-50 flex items-center gap-4 absolute right-0">
            <button className="text-sm font-medium text-gray-700 hover:text-black">
              Airbnb your home
            </button>
            <div className="flex items-center gap-2">
              <button className="p-2 rounded-full hover:bg-gray-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
              <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center text-white">
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
                    strokeWidth={2}
                    d="M12 11c0-1.1-.9-2-2-2s-2 .9-2 2c0 1.1.9 2 2 2s2-.9 2-2zm-8 5c0 2.2 3.6 4 8 4s8-1.8 8-4V9a8 8 0 00-16 0v7z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {showModal && (
        <div className="z-40 overflow-y-auto">
          <div className="absolute inset-0 bg-gray-400 bg-opacity-50 w-[100vw] h-[100vh]"></div>
          <div className="absolute flex items-center justify-center w-full h-[160px] z-40">
            <nav className="z-40 flex items-center justify-center h-full w-full bg-white">
              <div
                className="flex items-center border border-gray-300 rounded-full shadow-sm px-4 py-2 max-w-lg min-w-80 flex-1 cursor-pointer"
                onClick={toggleModal}
              >
                <button className="flex-1 text-gray-500 text-sm px-2 text-left focus:outline-none">
                  Any where
                </button>
                <span className="border-l border-gray-300 h-5 mx-2"></span>
                <button className="flex-1 text-gray-500 text-sm px-2 text-left focus:outline-none">
                  Any week
                </button>
                <span className="border-l border-gray-300 h-5 mx-2"></span>
                <button className="flex-1 text-gray-500 text-sm px-2 text-left focus:outline-none">
                  Add guests
                </button>
                <button className="bg-pink-500 text-white rounded-full p-2 ml-2 focus:outline-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 16l-4-4m0 0l4-4m-4 4h16"
                    />
                  </svg>
                </button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
