import React, { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Circle,
  Tooltip,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { geocode, reverseGeocode } from "../../hooks/geocode";
import Slider from "rc-slider";
import axios from "axios";
import "rc-slider/assets/index.css";
export default function Map({
  setLoading,
  setAddress,
  setDestination,
  departure,
  destination,
  filter,
}) {
  const [homePosition, sethomePosition] = useState(null);
  const [destinationPosition, setDestinationPosition] = useState(null);
  const [people, setPeople] = useState([]);
  const [range, setRange] = useState(1000); // Default radius in meters
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (!destination) {
      setDestinationPosition(null);
    }
    if (!departure) {
      sethomePosition(null);
    }
  }, [destination, departure]);

  const isWithinRange = (personPosition) => {
    if (!homePosition) return false;
    const R = 6371000; // Earth's radius in meters
    const dLat = ((personPosition[0] - homePosition[0]) * Math.PI) / 180;
    const dLon = ((personPosition[1] - homePosition[1]) * Math.PI) / 180;
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
        if (homePosition) {
          setDestinationPosition([lat, lng]);
        } else {
          sethomePosition([lat, lng]);
        }

        const fetchedAddress = await reverseGeocode(lat, lng);
        if (departure) {
          setDestination(fetchedAddress.display_name);
        } else {
          setAddress(fetchedAddress.display_name);
        }
      },
    });
    return null;
  };

  useEffect(() => {
    if (departure && destination) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    }
  }, [departure, destination]);

  const customIcon = new L.Icon({
    iconUrl: "/images/home-location-svgrepo-com.svg", // Replace with the path to your custom icon
    iconSize: [30, 30], // Size of the icon

    // Point from which the popup should open relative to the iconAnchor
  });
  // Creating a custom icon

  return (
    <div className="w-full  relative flex flex-col  lg:w-[750px] lg:h-[750px] m-auto overflow-hidden z-50 ">
      <div
        className="w-full h-full  h-[900px] transition-all duration-300 ease-in relative mt-0 lg:mt-4  lg:w-[750px] lg:h-[750px] m-auto overflow-hidden "
        style={{ height: show ? "900px" : "100px" }}>
        <MapContainer
          center={homePosition || [36.826461108709594, 10.127514077760775]}
          zoom={10}
          className={`w-full h-full  z-0 ${show ? "block" : "hidden"}`}
          scrollWheelZoom={true}>
          <svg
            fill="#3dc5ff"
            height="200px"
            width="200px"
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 297 297"
            xml:space="preserve"
            stroke="#3dc5ff">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <g>
                {" "}
                <path d="M148.5,142.498c-2.07,0-3.755,1.77-3.755,3.941c0,2.176,1.685,3.943,3.755,3.943s3.755-1.768,3.755-3.943 C152.255,144.268,150.571,142.498,148.5,142.498z"></path>{" "}
                <path d="M148.499,95.823c-27.866,0-50.537,22.707-50.537,50.617c0,42.686,47.201,84.801,49.211,86.574 c0.469,0.414,0.98,0.5,1.326,0.5c0.346,0,0.857-0.086,1.328-0.502c2.008-1.771,49.211-43.889,49.211-86.572 C199.038,118.53,176.366,95.823,148.499,95.823z M148.5,164.43c-9.816,0-17.802-8.07-17.802-17.99 c0-9.918,7.985-17.988,17.802-17.988c9.816,0,17.802,8.07,17.802,17.988C166.302,156.36,158.317,164.43,148.5,164.43z"></path>{" "}
                <path d="M293.099,122.735L154.633,15.803c-3.613-2.789-8.652-2.789-12.266,0L3.902,122.735c-3.398,2.625-4.75,7.119-3.363,11.182 c1.386,4.063,5.203,6.793,9.496,6.793h39.424v132.545c0,5.541,4.492,10.035,10.033,10.035h178.02 c5.541,0,10.033-4.494,10.033-10.035V140.709h39.422c4.293,0,8.11-2.73,9.496-6.793 C297.849,129.854,296.496,125.36,293.099,122.735z M159.117,243.549c-2.935,2.588-6.706,4.014-10.618,4.014 c-3.91,0-7.681-1.426-10.615-4.012c-2.206-1.945-53.969-48.156-53.969-97.111c0-35.656,28.972-64.664,64.584-64.664 c35.613,0,64.587,29.008,64.587,64.664C213.086,195.393,161.321,241.606,159.117,243.549z"></path>{" "}
              </g>{" "}
            </g>
          </svg>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {homePosition && (
            <>
              <Marker
                position={homePosition}
                icon={customIcon}
                style={{ color: "blue" }}>
                <Popup>Your location: {departure}</Popup>
                <Tooltip>Depart</Tooltip>
              </Marker>
              <Circle center={homePosition} radius={range} />
            </>
          )}
          {destinationPosition && (
            <>
              <Marker position={destinationPosition}>
                <Popup>Your location: {destination}</Popup>
                <Tooltip>Destination</Tooltip>
              </Marker>
              <Circle center={destinationPosition} radius={range} />
            </>
          )}
          {people
            .filter((person) => isWithinRange(person.homePosition))
            .map((person, idx) => (
              <Marker key={idx} position={person.homePosition}>
                <Popup>{person.address}</Popup>
              </Marker>
            ))}
          <LocationSelector />
        </MapContainer>
      </div>

      <div
        className="bg-white px-4 py-4 w-full  rounded-t-[25px] translate-y-[-10%]  z-50  text-center"
        style={{ boxShadow: "rgba(0, 0, 0, 0.15) 0px -20px 20px 0px" }}>
        <i
          className="fa-solid fa-arrow-up transition-transform transition-time-300 transition text-xl lg:hidden hover:text-gray-700 hover:cursor-pointer transition duration-300 "
          onClick={() => setShow(!show)}
          style={{ transform: show ? "rotate(0deg)" : "rotate(180deg)" }}></i>
        <p className="text-gray-700 m">Adjust Range (meters): {range}</p>
        <Slider
          min={1000}
          max={10000}
          step={1000}
          value={range}
          onChange={(value) => setRange(value)}
          style={{ width: "80%", margin: "0 auto" }}
        />
      </div>
    </div>
  );
}
