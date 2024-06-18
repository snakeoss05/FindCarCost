import React from "react";

export default function UserCard({ users }) {
  return (
    <div className="grid relative grid-cols-5 z-10 hover:after:opacity-100 after:content-['']  gap-2 p-4 rounded-lg border border-gray-200 after:absolute after:inset-0 after:z-[-1] after:opacity-0 after:bg-gradient-to-r after:from-slate-50 after:to-neutral-300  after:transition-opacity after:ease-in after:duration-500  bg-gradient-to-r from-slate-300 to-neutral-50 opacity-100  ">
      <div className="col-span-1 flex justify-center  ">
        <div className="relative after:content-['✓'] after:right-0 lg:after:right-0  after:text-green-500 after:text-center  after:text-white after:rounded-full  after:absolute   after:top-0  after:block after:h-6 after:w-6 after:bg-green-500">
          <img
            src="http://localhost:3000/uploads/1716989317653.png"
            alt="people"
            className="h-16 w-16   object-cover  rounded-full "
          />
        </div>
      </div>

      <div className="col-span-3 text-center">
        <span className="text-2xl font-bold mb-2 me-2 text-nowrap">
          {users.name} {users.lastname}
        </span>
        <span className="text-gray-500">{users.rating}</span>
        <p className="text-gray-500 text-sm">
          Number of reviews : {users.reviews}
        </p>
      </div>
      <div className="col-span-1 flex text-center">
        <i className="fa-solid fa-user text-2xl text-gray-500 m-4 hover:text-gray-700 cursor-pointer hover:scale-110 transition duration-300"></i>
      </div>
    </div>
  );
}
