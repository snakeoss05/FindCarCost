import React from "react";
import Layout from "../../pages/Layout";
export default function Friends() {
  return (
    <Layout>
      <div className="bg-gray-100 lg:bg-white h-[calc(100vh-75px)] lg:h-full  p-4 px-8  flex flex-col gap-4 w-full lg:w-[400px] overflow-y-auto">
        <p className="text-3xl font-bold text-gray-700 text-center py-4">
          Friends
        </p>
        <div>
          <div className="divider my-0 py-0 h-1" />
          <ul className="menu px-4 gap-2">
            <li className="flex flex-row justify-center align-center gap-2 bg-white py-2 rounded-lg border border-gray-200">
              <div className="pe-2">
                <img
                  src="http://localhost:3000/uploads/1716905724747.png"
                  className="w-16 rounded-full border-2 border-sky-500 "
                />
              </div>

              <div className="flex flex-col  justify-center ps-2 ">
                <p className="font-bold text-gray-700 text-lg">Ahmed zekri</p>
                <p className="text-gray-400 text-sm">in world far away</p>
              </div>
              <i class="fa-solid fa-user-minus text-red-500 text-lg hover:text-red-700 hover:scale-110 transition duration-300 cursor-pointer my-auto"></i>
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
}
