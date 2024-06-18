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
import { reverseGeocode } from "../../hooks/geocode";
export default function SelectAddress({ setAddress, address }) {
  const [position, setPosition] = useState(null);
  const LocationSelector = () => {
    useMapEvents({
      click: async (e) => {
        const { lat, lng } = e.latlng;

        setPosition([lat, lng]);

        const fetchedAddress = await reverseGeocode(lat, lng);

        setAddress(fetchedAddress);
      },
    });
    return null;
  };

  return (
    <div className="w-full h-full  h-[300px] rounded-lg transition-all duration-300 ease-in relative mt-0  lg:w-[450px] lg:h-[450px] m-auto overflow-hidden ">
      <MapContainer
        center={position || [36.826461108709594, 10.127514077760775]}
        zoom={10}
        className={`w-full h-full  z-0 `}
        scrollWheelZoom={true}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {position && (
          <>
            <Marker position={position} style={{ color: "blue" }}>
              <Tooltip>Your location: {address.display_name}</Tooltip>
            </Marker>
            <Circle center={position} radius={500} />
          </>
        )}

        <LocationSelector />
      </MapContainer>
    </div>
  );
}
