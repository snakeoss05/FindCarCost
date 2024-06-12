import React, { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Circle,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { geocode } from "../hooks/geocode";
import { reverseGeocode } from "../hooks/geocode";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import Layout from "./Layout";

export default function FindCar() {
  const [position, setPosition] = useState(null);
  const [loading, setLoading] = useState(false);
  const [people, setPeople] = useState([]);
  const [address, setAddress] = useState("");
  const [destination, setDestination] = useState("");
  const [range, setRange] = useState(5000); // Default radius in meters
  const savedAddress = "1600 Amphitheatre Parkway, Mountain View, CA"; // Replace with your saved address

  useEffect(() => {
    const fetchPosition = async () => {
      const result = await geocode(savedAddress);
      if (result) {
        setPosition([result.lat, result.lon]);
      }
    };

    const fetchPeople = async () => {
      // Replace with your logic to fetch people and their addresses
      const peopleAddresses = [
        "1600 Amphitheatre Parkway, Mountain View, CA",
        "1 Infinite Loop, Cupertino, CA",
        "1601 Willow Rd, Menlo Park, CA",
      ];

      const peoplePositions = await Promise.all(
        peopleAddresses.map(async (address) => {
          const pos = await geocode(address);
          if (!pos) return null;

          return { address, position: [pos.lat, pos.lon] };
        })
      );
      setPeople(peoplePositions);
    };

    fetchPosition();
    fetchPeople();
  }, []);

  const isWithinRange = (personPosition) => {
    if (!position) return false;
    const R = 6371000; // Earth's radius in meters
    const dLat = ((personPosition[0] - position[0]) * Math.PI) / 180;
    const dLon = ((personPosition[1] - position[1]) * Math.PI) / 180;
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos((position[0] * Math.PI) / 180) *
        Math.cos((personPosition[0] * Math.PI) / 180) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; // Distance in meters
    return distance <= range;
  };
  const LocationSelector = () => {
    useMapEvents({
      click: async (e) => {
        const { lat, lng } = e.latlng;
        setPosition([lat, lng]);
        const fetchedAddress = await reverseGeocode(lat, lng);
        if (address) {
          setDestination(fetchedAddress);
        } else {
          setAddress(fetchedAddress);
        }
      },
    });
    return null;
  };

  return (
    <Layout>
      <div className="flex flex-col lg:flex-row-reverse ">
        <div className="w-full h-96 relative flex flex-col lg:p-8 lg:w-[750px] lg:h-[750px] m-auto overflow-hidden ">
          <MapContainer
            center={position || [51.505, -0.09]}
            zoom={10}
            className="w-full h-full absolute z-0"
            scrollWheelZoom={false}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {position && (
              <>
                <Marker position={position}>
                  <Popup>Your location: {savedAddress}</Popup>
                </Marker>
                <Circle center={position} radius={range} />
              </>
            )}
            {people
              .filter((person) => isWithinRange(person.position))
              .map((person, idx) => (
                <Marker key={idx} position={person.position}>
                  <Popup>{person.address}</Popup>
                </Marker>
              ))}
            <LocationSelector />
          </MapContainer>
          <div className="bg-white block p-4 w-full rounded-t-[25px] absolute bottom-0 z-50  overflow-hidden shadow-lg text-center">
            <p className="text-gray-700 m">Adjust Range (meters): {range}</p>
            <Slider
              min={1000}
              max={20000}
              step={1000}
              value={range}
              onChange={(value) => setRange(value)}
              style={{ width: "80%", margin: "0 auto" }}
            />
          </div>
        </div>

        <div className="flex flex-col px-4 gap-4 ">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="label label-text label-sm">
                Pick your Depart :
              </label>
              <select className="select select-bordered w-full max-w-xs ">
                <option disabled selected>
                  Select your Depart
                </option>
                <option>Default</option>
                <option>
                  {address ? address : "Select your depart from map"}
                </option>
              </select>
            </div>

            <div>
              <label className="label label-text label-sm">
                Pick your Destination :
              </label>
              <select className="select select-bordered w-full max-w-xs overflow-hidden ">
                <option disabled selected>
                  Select your Depart
                </option>
                <option>
                  {address ? address : "Select your destination from map"}
                </option>
              </select>
            </div>
          </div>
          {loading && (
            <span className="loading loading-infinity loading-lg text-blue-500 w-32 mx-auto"></span>
          )}
          <div className="grid relative grid-cols-5 z-10 hover:after:opacity-100 after:content-['']  gap-2 p-4 rounded-lg border border-gray-200 after:absolute after:inset-0 after:z-[-1] after:opacity-0 after:bg-gradient-to-r after:from-slate-50 after:to-neutral-300  after:transition-opacity after:ease-in after:duration-500  bg-gradient-to-r from-slate-300 to-neutral-50 opacity-100  ">
            <div className="relative col-span-1  after:content-['✓'] after:left-1/2 after:ml-4 lg:after:ml-0 after:text-green-500 after:text-center  after:text-white after:rounded-full  after:absolute  after:right-full after:top-2  after:block after:h-6 after:w-6 after:bg-green-500 ">
              <img
                src="http://localhost:3000/uploads/1716989317653.png"
                alt="people"
                className="w-16 h-16 object-cover ms-2 relative rounded-full "
              />
            </div>

            <div className="col-span-3 text-center">
              <span className="text-2xl font-bold mb-2 me-2 text-nowrap">
                John Doe
              </span>
              <span className="text-gray-500">5.0/5.0 </span>
              <p className="text-gray-500 text-sm">Number of reviews : 5</p>
            </div>
            <div className="col-span-1 flex text-center">
              <i className="fa-solid fa-user text-2xl text-sky-300 m-4 hover:text-sky-500"></i>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
