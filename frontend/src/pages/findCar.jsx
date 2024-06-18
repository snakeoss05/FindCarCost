import React, { useEffect, useState } from "react";
import Layout from "./Layout";
import Map from "../components/findCar/Map";
import UserCard from "../components/findCar/UserCard";
import Loading from "../components/findCar/Loading";
import FilterBar from "../components/findCar/FilterBar";
import axios from "axios";
export default function FindCar() {
  const [loading, setLoading] = useState(false);
  const [address, setAddress] = useState("");
  const [people, setPeople] = useState([]);
  const [destination, setDestination] = useState("");
  const [filter, setFilter] = useState({
    city_district: true,
    city: true,
    state: true,
    postcode: true,
  });

  function ReverseAddress() {
    setAddress(destination);
    setDestination(address);
  }
  const handleInputs = (e) => {
    setFilter({ ...filter, [e.target.name]: e.target.checked });
  };
  const fetchPeople = async () => {
    const departureQ = {};
    departureQ.type = "depart";
    if (filter.city) departureQ.city = address.city;
    if (filter.state) departureQ.state = address.state;
    if (filter.city_district) departureQ.city_district = address.city_district;
    if (filter.postcode) departureQ.postcode = address.postcode;

    // Build the query for destination
    const destinationQ = {};
    destinationQ.type = "destination";
    if (filter.city) destinationQ.city = destination.city;
    if (filter.state) destinationQ.state = destination.state;
    if (filter.city_district)
      destinationQ.city_district = destination.city_district;
    if (filter.postcode) destinationQ.postcode = destination.postcode;
    try {
      const response = await axios.get(
        "http://localhost:3000/api/address/getuserbyaddress",
        { params: { departureQ, destinationQ } }
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
    if (address && destination) fetchPeople();
  }, [address, destination]);
  return (
    <Layout>
      <div className="flex flex-col lg:flex-row-reverse overflow-hidden h-full w-full">
        <Map
          departure={address}
          destination={destination}
          setLoading={setLoading}
          setAddress={setAddress}
          setDestination={setDestination}
        />
        <div className="flex flex-col px-4  gap-4 h-full overflow-y-auto">
          <div className="grid grid-cols-8 gap-4 p-4">
            <div className="flex gap-2 flex-col col-span-1">
              <i class="fa-solid fa-house-flag text-lg"></i>
              <i class="fa-solid fa-circle text-[6px]"></i>
              <i class="fa-solid fa-circle text-[6px]"></i>
              <i class="fa-solid fa-circle text-[6px]"></i>
              <i class="fa-solid fa-location-dot text-lg"></i>
            </div>
            <div className="flex flex-col gap-4 col-span-6">
              <input
                type="text"
                placeholder="Choose a starting point or click on the map…"
                className="input input-bordered w-full"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
              <input
                type="text"
                placeholder="Choose a destination or click on the map…"
                className="input input-bordered w-full  "
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
              />
            </div>
            <div className="col-span-1 flex flex-col justify-evenly">
              <i
                className="fa-solid fa-delete-left text-lg hover:text-red-500 transition duration-300 hover:scale-110"
                onClick={() => {
                  setAddress("");
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
                onClick={() => setDestination("")}></i>
            </div>
          </div>
          <FilterBar filter={filter} setFilter={handleInputs} />
          {loading && <Loading />}
          <div className="flex flex-col gap-4 overflow-y-auto">
            <UserCard users={users} />
          </div>
        </div>
      </div>
    </Layout>
  );
}
