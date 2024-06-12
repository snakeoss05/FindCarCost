import React from "react";
import Layout from "../../pages/Layout";

export default function Ratings() {
  return (
    <Layout>
      <div className="bg-gray-100 h-[calc(100vh-75px)] lg:h-full  p-4 px-8  flex flex-col gap-4 lg:flex-row   overflow-y-auto ">
        <div className="flex flex-col justify-center w-full lg:w-1/3 h-fit align-center p-4 bg-white rounded-lg border border-gray-200">
          <div
            className="flex flex-row items-center align-base text-2xl 
          ">
            <span className={`cursor-pointer text-slate-700 `}>&#9733;</span>
            <span className={`cursor-pointer  text-slate-700 `}>&#9733;</span>
            <span className={`cursor-pointer text-slate-700 `}>&#9733;</span>
            <span className={`cursor-pointer text-slate-700 `}>&#9733;</span>
            <span className={`cursor-pointer text-slate-200 `}>&#9733;</span>
            <p className="text-gray-400 text-sm ms-2 mt-1">4.0</p>
          </div>
          <div className="border-b border-gray-200 ">
            <p className="text-gray-400 text-sm my-4 h-20 overflow-y-auto">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Architecto accusantium ducimus quidem sapiente temporibus aperiam
              exercitationem eum accusamus sequi ea cumque debitis, illo, eius,
              fuga unde velit error sint nam?
            </p>
          </div>
          <div className="flex flex-row p-2">
            <img
              src="http://localhost:3000/uploads/1716905724747.png"
              className="w-16 rounded-full border-2 border-gray-200 "
            />
            <div className="flex flex-col  justify-center ps-2">
              <p className="font-bold text-gray-700 text-lg">Ahmed zekri</p>
              <p className="text-gray-400 text-sm">in world far away</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center w-full lg:w-1/3 h-fit align-center p-4 bg-white rounded-lg border border-gray-200">
          <div
            className="flex flex-row items-center align-base text-2xl 
          ">
            <span className={`cursor-pointer text-slate-700 `}>&#9733;</span>
            <span className={`cursor-pointer  text-slate-700 `}>&#9733;</span>
            <span className={`cursor-pointer text-slate-700 `}>&#9733;</span>
            <span className={`cursor-pointer text-slate-700 `}>&#9733;</span>
            <span className={`cursor-pointer text-slate-200 `}>&#9733;</span>
            <p className="text-gray-400 text-sm ms-2 mt-1">4.0</p>
          </div>
          <div className="border-b border-gray-200 ">
            <p className="text-gray-400 text-sm my-4 h-20 overflow-y-auto">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Architecto accusantium ducimus quidem sapiente temporibus aperiam
              exercitationem eum accusamus sequi ea cumque debitis, illo, eius,
              fuga unde velit error sint nam?
            </p>
          </div>
          <div className="flex flex-row p-2">
            <img
              src="http://localhost:3000/uploads/1717424693934.png"
              className="w-16 rounded-full border-2 border-gray-200 "
            />
            <div className="flex flex-col  justify-center ps-2">
              <p className="font-bold text-gray-700 text-lg">
                noussaier bibani
              </p>
              <p className="text-gray-400 text-sm">in world far away</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
