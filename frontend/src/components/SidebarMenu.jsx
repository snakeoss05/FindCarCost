import React from "react";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

export default function SidebarMenu() {
  const { user, logOut } = useAuth();
  return (
    <div className="absolute lg:relative bottom-0 w-full  flex flex-row lg:h-screen lg:flex-col lg:justify-between border-e bg-white lg:w-fit overflow-hidden z-50">
      <div className="p-3 lg:px-4 lg:py-6 w-full lg:w-fit  ">
        <div>
          <img
            src="/images/creative.jpg"
            className="hidden lg:block  lg:h-16 lg:w-16 rounded-full mb-4 object-cover mx-auto"
          />
          <ul className="space-y-0 lg:space-y-2 flex flex-row lg:block  items-center justify-around w-full ">
            <li className="flex flex-row items-center gap-2 lg:block ">
              <a
                href="#"
                className="flex items-center gap-2 rounded-lg   px-4 py-2 text-gray-500 hover:bg-gray-100  hover:text-gray-700 focus:bg-gray-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5 opacity-75  lg:mt-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="text-sm font-medium hidden lg:block">
                  {" "}
                  General{" "}
                </span>
              </a>
            </li>
            <li className="flex flex-row  items-center gap-2 lg:block ">
              <Link
                to="/findcar"
                className="flex items-center gap-2 rounded-lg   px-4 py-2 text-gray-500 hover:bg-gray-100  hover:text-gray-700">
                <i className="fa-solid fa-magnifying-glass size-5 opacity-75 mt-1 "></i>

                <span className="text-sm font-medium hidden lg:block">
                  Find Car Cost
                </span>
              </Link>
            </li>

            <li className="flex flex-row  lg:hidden items-center gap-2 lg:block">
              <Link to="/profile">
                <div className="d-block lg:hidden relative  rounded-full border-gray-200 p-2 after:content-[''] after:ml-1 after:text-gray-900 after:absolute after:right-full after:top-2  after:block after:h-5 after:w-5 after:border-b-2 before:content-[''] before:ml-1 before:text-gray-900 before:absolute before:left-full before:top-2  before:block before:h-5 before:w-5 before:border-b-2 shadow-lg">
                  <img
                    alt="profile picture"
                    src={user?.profilePicture}
                    className="size-10 rounded-full object-cover  shadow-md"
                  />
                </div>
              </Link>
            </li>
            <li className="flex flex-row items-center gap-2 lg:block">
              <Link
                to="/chat"
                className="flex items-center  gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100  hover:text-gray-700 focus:bg-gray-100 ">
                <i className="fa-brands fa-rocketchat size-5 opacity-75 mt-0 lg:mt-2"></i>
                <span className="text-sm font-medium hidden lg:block">
                  Chat
                </span>
              </Link>
            </li>
            <li className="flex flex-row  items-center gap-2 lg:block">
              <details className="group [&_summary::-webkit-details-marker]:hidden relative">
                <summary className="group flex items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700 focus:bg-gray-100">
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-5 opacity-75"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                    <span className="text-sm font-medium hidden lg:block">
                      {" "}
                      Account{" "}
                    </span>
                  </div>
                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </summary>
                <ul className="absolute right-0 top-0 py-2  space-y-1 px-4 transform -translate-y-full lg:-translate-y-0 lg:top-full lg:mt-0 lg:space-y-0 lg:px-0 bg-white rounded-lg">
                  <li>
                    <Link
                      to="/accounts/details"
                      className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 lg:px-8">
                      Details
                    </Link>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 lg:px-8">
                      Security
                    </a>
                  </li>
                  <li>
                    <form action="#">
                      <button
                        onClick={logOut}
                        type="submit"
                        className="w-full rounded-lg px-4 py-2 text-sm font-medium text-gray-500 [text-align:_inherit] hover:bg-gray-100 hover:text-gray-700 lg:px-8">
                        Logout
                      </button>
                    </form>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>

      <div className="hidden lg:block lg:sticky inset-x-0 bottom-0 border-t border-gray-100  items-center ">
        <a
          href="#"
          className="flex flex-col lg:flex-row items-center gap-2 bg-white p-4 hover:bg-gray-50">
          <img
            alt="profile picture"
            src={user?.profilePicture}
            className="size-10 rounded-full object-cover"
          />

          <div>
            <p className="text-xs">
              <strong className="block font-medium">
                {user?.name + " " + user?.lastname}
              </strong>

              <span className="text-gray-500 hidden md:inline">
                {user?.email}
              </span>
            </p>
          </div>
        </a>
      </div>
    </div>
  );
}
