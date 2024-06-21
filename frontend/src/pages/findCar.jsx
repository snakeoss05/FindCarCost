import React, { useEffect, useState } from "react";
import Layout from "./Layout";
import Map from "../components/findCar/Map";
import UserCard from "../components/findCar/UserCard";
import Loading from "../components/findCar/Loading";
import FilterBar from "../components/findCar/FilterBar";
import axios from "axios";
import Modal from "../components/Modal";
import qs from "qs";
export default function FindCar() {
  const [loading, setLoading] = useState(false);
  const [address, setAddress] = useState({});
  const [people, setPeople] = useState([]);
  const [destination, setDestination] = useState({});
  const [showFilter, setShowFilter] = useState(false);
  const [showMap, setShowMap] = useState(false);
  const [filter, setFilter] = useState({
    city_district: true,
    city: true,
    state: true,
    postcode: true,
  });

  function ReverseAddress() {
    setAddress({ ...address, display_name: destination.display_name });
    setDestination({ ...destination, display_name: address.display_name });
  }
  const handleInputs = (e) => {
    setFilter({ ...filter, [e.target.name]: e.target.checked });
  };
  const fetchPeople = async () => {
    const departureQuery = {};
    const destinationQuery = {};
    departureQuery.type = "departure";
    destinationQuery.type = "destination";
    if (filter.city_district)
      departureQuery.city_district = address.address.city_district;
    if (filter.city) departureQuery.city = address.address.city;
    if (filter.state) departureQuery.state = address.address.state;
    if (filter.postcode) departureQuery.postcode = address.address.postcode;
    if (filter.city_district)
      destinationQuery.city_district = destination.address.city_district;
    if (filter.city) destinationQuery.city = destination.address.city;
    if (filter.state) destinationQuery.state = destination.address.state;
    if (filter.postcode)
      destinationQuery.postcode = destination.address.postcode;

    try {
      const response = await axios.post(
        "http://192.168.1.2:3000/api/address/getuserbyaddress",
        {
          departureQuery,
          destinationQuery,
        }
      );
      setPeople(response.data);
      console.log(response.data);
    } catch (err) {
      console.error(err);
      return [];
    }
  };
  const users = {
    name: "John",
    lastname: "Doe",
    rating: "4.5",
    reviews: "5",
  };

  useEffect(() => {
    if (address.display_name && destination.display_name) fetchPeople();
  }, [address, destination]);
  return (
    <Layout>
      <div className="flex flex-col lg:flex-row-reverse overflow-hidden h-full w-full">
        <Map
          departure={address.display_name}
          destination={destination.display_name}
          setLoading={setLoading}
          setAddress={setAddress}
          setDestination={setDestination}
        />

        <div className="flex flex-col px-4 gap-2  lg:gap-4 h-full overflow-y-auto ">
          <div
            className="p-2 px-4  flex flex-row  hover:bg-gray-100 transition duration-300 cursor-pointer flex items-center gap-2 rounded-lg border-b border-gray-200"
            onClick={() => setShowMap(!showMap)}>
            <i className="fa-solid fa-map-location-dot"></i>
            <i
              className={`fa-solid fa-caret-right mb-auto text-lg transform ${
                showMap && "rotate-90"
              } transition duration-300`}></i>
            <span className="text-sm font-medium text-gray-500 ">Map</span>
          </div>
          {showMap && (
            <div className="grid grid-cols-8 gap-4 p-4  ">
              <div className="flex gap-2 flex-col col-span-1">
                <i className="fa-solid fa-house-flag text-lg"></i>
                <i className="fa-solid fa-circle text-[6px]"></i>
                <i className="fa-solid fa-circle text-[6px]"></i>
                <i className="fa-solid fa-circle text-[6px]"></i>
                <i className="fa-solid fa-location-dot text-lg"></i>
              </div>
              <div className="flex flex-col gap-4 col-span-6">
                <input
                  type="text"
                  placeholder="Choose a starting point or click on the map…"
                  className="input input-bordered w-full"
                  value={address.display_name}
                  onChange={(e) =>
                    setAddress({ ...address, display_name: e.target.value })
                  }
                />
                <input
                  type="text"
                  placeholder="Choose a destination or click on the map…"
                  className="input input-bordered w-full  "
                  value={destination.display_name}
                  onChange={(e) =>
                    setDestination({
                      ...destination,
                      display_name: e.target.value,
                    })
                  }
                />
              </div>
              <div className="col-span-1 flex flex-col justify-evenly">
                <i
                  className="fa-solid fa-delete-left text-lg hover:text-red-500 transition duration-300 hover:scale-110"
                  onClick={() => {
                    setAddress({ ...address, display_name: "" });
                  }}></i>
                <svg
                  width="21px"
                  height="21px"
                  onClick={ReverseAddress}
                  viewBox="0 0 21 21"
                  xmlns="http://www.w3.org/2000/svg"
                  className="rotate-90 text-gray-500 h-6 w-6 cursor-pointer hover:text-blue-700 transition duration-300 hover:scale-110">
                  <g
                    fill="none"
                    fillRule="evenodd"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    transform="translate(4 2)">
                    <path d="m4.5 8.5-4 4 4 4" />
                    <path d="m12.5 12.5h-12" />
                    <path d="m8.5.5 4 4-4 4" />
                    <path d="m12.5 4.5h-12" />
                  </g>
                </svg>
                <i
                  className="fa-solid fa-delete-left text-lg hover:text-red-500 transition duration-300 hover:scale-110"
                  onClick={() =>
                    setDestination({ ...destination, display_name: "" })
                  }></i>
              </div>
            </div>
          )}

          <div
            className="p-2 px-4  flex flex-row  hover:bg-gray-100 transition duration-300 cursor-pointer flex items-center gap-2 rounded-lg border-b border-gray-200"
            onClick={() => setShowFilter(!showFilter)}>
            <i className="fa-solid fa-filter text-lg"></i>
            <i
              className={`fa-solid fa-caret-right mb-auto text-lg transform ${
                showFilter && "rotate-90"
              } transition duration-300`}></i>
            <span className="text-sm font-medium text-gray-500 ">Filter</span>
          </div>
          {showFilter && <FilterBar filter={filter} setFilter={handleInputs} />}
          {loading && <Loading />}
          <div className="flex flex-col gap-4 overflow-y-auto">
            <UserCard users={users} />
          </div>

          <Modal />
        </div>
      </div>
    </Layout>
  );
}
