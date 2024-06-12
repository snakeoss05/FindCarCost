import React, { useState } from "react";
import Layout from "../../pages/Layout";
export default function Addresses() {
  const [show, setShow] = useState(false);
  const [newAddress, setNewAddress] = useState({});
  return (
    <Layout>
      <div className="bg-gray-100 h-[calc(100vh-75px)] w-full lg:h-full p-4 px-8 flex flex-col  gap-4    overflow-y-auto">
        <p className="text-3xl font-bold text-gray-700 text-center py-4 ">
          Addresses
        </p>
        <div className="flex flex-col lg:flex-row p-8 gap-4 w-full  h-fit  ">
          <div className="p-4 flex flex-col border border-gray-200 w-full lg:w-1/4 bg-white relative shadow">
            <span className="text-[12px] text-gray-400 font-semibold bg-gray-100 px-4 py-2 uppercase w-fit absolute top-0 left-0">
              Default
            </span>
            <div className="gap-4 flex flex-row text-gray-400 ms-auto">
              <i class="fa-solid fa-pen cursor-pointer hover:text-gray-700"></i>
              <i class="fa-solid fa-trash hover:text-red-500  cursor-pointer "></i>
            </div>
            <div className="flex flex-col py-4 gap-2 capitalize">
              <p className="text-xl font-bold text-gray-500 border-b-2 pb-2 w-fit">
                Home
              </p>
              <p className="text-md font-semibold text-gray-500 mb-4">
                Ahmed Zekri
              </p>
              <p className="text-sm font-normal text-gray-400">
                Rue de evolution Cité ettahrir{" "}
              </p>
              <p className="text-sm font-normal text-gray-400">
                Tunisie, tunis{" "}
              </p>
              <p className="text-sm font-semibold text-gray-400">2024</p>
            </div>
          </div>
          {show && (
            <div className="p-4 flex flex-col border border-gray-200 bg-white relative shadow w-full lg:w-1/4">
              <i
                class="fa-solid fa-xmark p-2 rounded-full cursor-pointer hover:bg-gray-100 absolute top-3 right-4"
                onClick={() => setShow(false)}></i>
              <div className="flex flex-col py-4 gap-2 capitalize">
                <div className="px-8 my-2">
                  <select class="select select-bordered w-full max-w-xs select-sm w">
                    <option disabled selected>
                      Address Type
                    </option>
                    <option>Home</option>
                    <option>Desténation</option>
                  </select>
                </div>
                <div className="px-8">
                  <label className="form-control w-full max-w-xs">
                    <div className="label">
                      <span className="label-text text-[14px] text-gray-400 font-semibold ">
                        Address
                      </span>
                    </div>
                    <input
                      type="text"
                      placeholder="Type here"
                      className="input input-bordered w-full max-w-xs input-sm"
                    />
                  </label>
                </div>
                <div className="px-8">
                  <label className="form-control w-full max-w-xs">
                    <div className="label">
                      <span className="label-text text-[14px] text-gray-400 font-semibold ">
                        City
                      </span>
                    </div>
                    <input
                      type="text"
                      placeholder="Type here"
                      className="input input-bordered w-full max-w-xs input-sm"
                    />
                  </label>
                </div>
                <div className="px-8">
                  <label className="form-control w-full max-w-xs">
                    <div className="label">
                      <span className="label-text text-[14px] text-gray-400 font-semibold ">
                        Zip Code
                      </span>
                    </div>
                    <input
                      type="text"
                      placeholder="Type here"
                      className="input input-bordered w-full max-w-xs input-sm"
                    />
                  </label>
                </div>
                <div className="flex flex-row">
                  <button className="btn btn-info btn-primary btn-sm ms-auto mt-2 text-white">
                    Save
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="flex flex-col">
          <button
            className="btn btn-success btn-primary text-white mx-auto "
            onClick={() => setShow(true)}>
            Add New Address
          </button>
        </div>
      </div>
    </Layout>
  );
}
