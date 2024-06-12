import React, { useState } from "react";
import Layout from "./Layout";
import { useAuth } from "../context/AuthContext";
import axios from "axios";
import toast from "react-hot-toast";
export default function AccountDetails() {
  const { user, updateAction } = useAuth();
  const [infoAccount, setrinfoAccount] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
  });

  function HandleChange(event) {
    const { name, value } = event.target;
    setrinfoAccount((prevFormdata) => ({
      ...prevFormdata,
      [name]: value,
    }));
  }
  async function handleSubmit(e) {
    e.preventDefault();
    const updateFields = {};
    if (infoAccount.name) updateFields.name = infoAccount.name;
    if (infoAccount.lastname) updateFields.lastname = infoAccount.lastname;
    if (infoAccount.email) updateFields.email = infoAccount.email;
    if (infoAccount.password) updateFields.password = infoAccount.password;

    updateAction(updateFields);
  }
  return (
    <Layout>
      <div className="px-4 py-8 lg:py-32 lg:ps-20 w-full lg:w-1/3">
        <h1 className=" font-bold text-xl lg:text-2xl">Acoount Details</h1>
        <h2 className="my-12 uppercase font-semibold text-1xl lg:text-xl ">
          Profile Details
        </h2>
        <form className="grid gap-4 grid-cols-1 px-4">
          <label
            htmlFor="Name"
            className="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
            <span className="text-xs font-medium text-gray-700">
              {" "}
              First Name{" "}
            </span>

            <input
              type="text"
              id="Name"
              onFocus={(e) => {
                e.target.placeholder = "";
              }}
              onBlur={(e) => (e.target.placeholder = user.name)}
              onChange={HandleChange}
              name="name"
              placeholder={user.name}
              className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
            />
          </label>
          <label
            htmlFor="LastName"
            className="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
            <span className="text-xs font-medium text-gray-700">
              {" "}
              Last Name{" "}
            </span>

            <input
              type="text"
              id="LastName"
              onFocus={(e) => {
                e.target.placeholder = "";
              }}
              onBlur={(e) => (e.target.placeholder = user.lastname)}
              onChange={HandleChange}
              name="lastname"
              placeholder={user.lastname}
              className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
            />
          </label>
          <label
            htmlFor="UserEmail"
            className="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 relative">
            <span className="text-xs font-medium text-gray-700"> Email </span>

            <input
              type="email"
              id="UserEmail"
              onBlur={(e) => {
                e.target.placeholder = user.email;
              }}
              onFocus={(e) => (e.target.placeholder = "")}
              onChange={HandleChange}
              name="email"
              placeholder={user.email}
              className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
            />
            <img
              src="https://cdn-icons-png.freepik.com/512/10148/10148110.png?ga=GA1.1.1586744004.1715461305"
              className="w-4 h-4 absolute   right-2  top-2"
            />
          </label>
          <label
            htmlFor="Password"
            className="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
            <span className="text-xs font-medium text-gray-700">
              {" "}
              Password{" "}
            </span>

            <input
              type="password"
              id="Password"
              onFocus={(e) => {
                e.target.placeholder = "";
              }}
              onBlur={(e) => (e.target.placeholder = "********")}
              name="password"
              onChange={HandleChange}
              placeholder="********"
              className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
            />
          </label>
          <button
            className="btn btn-success text-white hover:shadow-lg"
            onClick={handleSubmit}>
            Save Changes
          </button>
        </form>
      </div>
    </Layout>
  );
}
