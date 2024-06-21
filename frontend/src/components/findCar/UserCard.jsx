import React from "react";

export default function UserCard({ users }) {
  return (
    <div className="grid relative grid-cols-5 content-center  text-center z-10 hover:after:opacity-100 after:content-['']  gap-2 p-2 rounded-lg border border-gray-200 after:absolute after:inset-0 after:z-[-1] after:opacity-0 after:bg-gradient-to-r after:from-slate-50 after:to-neutral-300  after:transition-opacity after:ease-in after:duration-500  bg-gradient-to-r from-slate-300 to-neutral-50 opacity-100  ">
      <div className="col-span-1 flex justify-center  ">
        <div className="relative after:content-['✓'] after:right-0  lg:after:right-0  after:text-green-500 after:text-center  after:text-white after:rounded-full  after:absolute   after:top-0  after:block after:h-6 after:w-6 after:bg-green-500">
          <img
            src="http://192.168.1.2:3000/uploads/1716989317653.png"
            alt="people"
            className="h-12 lg:h-16 w-12 lg:w-16   object-cover  rounded-full "
          />
        </div>
      </div>

      <div className="col-span-3  flex flex-col justify-center">
        <span className="text-lg font-bold mb-2 me-2 text-nowrap">
          {users.name} {users.lastname}{" "}
          <span className="text-gray-500">{users.rating}</span>
        </span>

        <p className="text-gray-500 text-sm">
          Number of reviews : {users.reviews}
        </p>
      </div>
      <div className="col-span-1  flex flex-col justify-center">
        <label
          htmlFor="my_modal_7"
          className="btn btn-circle  text-center border-none hover:border-none bg-transparent hover:bg-transparent">
          <i className="fa-solid fa-user text-lg text-gray-500   hover:text-gray-700 cursor-pointer hover:scale-110 transition duration-300"></i>
        </label>
      </div>
    </div>
  );
}
