import React from "react";
import Layout from "./Layout";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
export default function Profile() {
  const { user } = useAuth();
  return (
    <Layout>
      <div className="p-4">
        <img
          src={user.profilePicture}
          className="w-24 h-24 rounded-full mx-auto object-cover border-2 border-sky-500 shadow-xl"
        />
        <div className="text-center mt-4 gap-2">
          <p className="text-2xl font-bold text-gray-700">
            {" "}
            {user.name} {user.lastname}
          </p>
          <p className="text-gray-500 text-sm">{user.email}</p>
          <Link to="/accounts/details">
            <button className="btn btn-primary btn-sm mt-4">
              Edit Profile
            </button>
          </Link>
        </div>
      </div>
      <div>
        <div className="divider my-0 py-0 h-1" />
        <ul className="menu p-4">
          <li>
            <Link
              to="/profile/friends"
              className="normal-case text-base font-semibold lg:text-xl">
              <div className="flex flex-col">
                <span className="text-gray-700 text-base">Friends </span>
                <span className="text-gray-400 text-[12px]">See all</span>
              </div>

              <span className="badge badge-outline badge-sm">69</span>
            </Link>
          </li>
          <li>
            <Link
              to="/profile/ratings"
              className="normal-case text-base font-semibold lg:text-xl ">
              <div className="flex flex-col">
                <span className="text-gray-700 text-base">Ratings</span>
                <span className="text-gray-400 text-[12px] ">See all</span>
              </div>

              <i className="fa-regular fa-face-smile ms-auto text-xl text-gray-500"></i>
            </Link>
          </li>
          <li>
            <Link
              to="/accounts/details"
              className="normal-case text-base font-semibold lg:text-xl">
              <div className="flex flex-col">
                <span className="text-gray-700 text-base">
                  Payment Methods{" "}
                </span>
                <span className="text-gray-400 text-[12px]">
                  Manage your saved payment methods
                </span>
              </div>

              <i className="fa-regular fa-handshake ms-auto text-xl text-gray-500"></i>
            </Link>
          </li>
          <li>
            <Link
              to="/accounts/details"
              className="normal-case text-base font-semibold lg:text-xl ">
              <div className="flex flex-col">
                <span className="text-gray-700 text-base">Wallet</span>
                <span className="text-gray-400 text-[12px] ">
                  Check your wallet balance
                </span>
              </div>

              <i className="fa-solid fa-wallet ms-auto text-xl text-gray-500"></i>
            </Link>
          </li>
          <li>
            <Link
              to="/profile/addresses"
              className="normal-case text-base font-semibold lg:text-xl ">
              <div className="flex flex-col">
                <span className="text-gray-700 text-base">Addresses</span>
                <span className="text-gray-400 text-[12px] ">
                  Mange your saved addresses
                </span>
              </div>

              <i className="fa-solid fa-map-location-dot  ms-auto text-xl text-gray-500"></i>
            </Link>
          </li>

          <li>
            <Link
              to="/accounts/details"
              className="normal-case text-base font-semibold lg:text-xl ">
              <div className="flex flex-col">
                <span className="text-gray-700 text-base">
                  Help And Support
                </span>
                <span className="text-gray-400 text-[12px] ">
                  Need help? Contact us
                </span>
              </div>

              <i className="fa-regular fa-circle-question ms-auto text-xl text-gray-500"></i>
            </Link>
          </li>
        </ul>
      </div>
    </Layout>
  );
}
