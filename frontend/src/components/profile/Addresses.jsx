import React, { useEffect, useState } from "react";
import Layout from "../../pages/Layout";
import SelectAddress from "../addresses/SelectAddress";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";
import toast from "react-hot-toast";
export default function Addresses() {
  const { user } = useAuth();
  const [show, setShow] = useState(false);
  const [myAddresses, setMyAddresses] = useState([]);
  const [address, setAddress] = useState({});
  const [display_name, setDisplay_name] = useState("");
  const [addressType, setAddressType] = useState("Home");
  const createAddress = async () => {
    const { address: addr, display_name } = address;
    const data = {
      ...addr,
      type: addressType,
      userId: user._id,
      display_name: display_name,
    };

    try {
      const response = await axios.post(
        "http://192.168.1.2:3000/api/address/create",
        data
      );
      if (response.status == 200) setMyAddresses([...myAddresses, data]);
      toast.success("Address created successfully");
      setShow(false);
    } catch (err) {
      toast.error("Something went wrong");
    }
  };
  const getAddress = async () => {
    try {
      const response = await axios.get(
        `http://192.168.1.2:3000/api/address/myAddresses/${user._id}`
      );

      if (response.status == 200) setMyAddresses(response.data);
    } catch (err) {
      toast.error("Something went wrong");
    }
  };
  useEffect(() => {
    getAddress();
  }, []);
  const deleteAddress = async (id) => {
    try {
      const response = await axios.delete(
        `http://192.168.1.2:3000/api/address/delete/${id}`
      );
      if (response.status == 200) {
        toast.success("Address deleted successfully");
        setMyAddresses(myAddresses.filter((address) => address._id !== id));
      }
    } catch (err) {
      toast.error(err.data.message);
    }
  };
  return (
    <Layout>
      <div className="bg-gray-100 h-full w-full lg:h-screen px-4 pb-16 lg:pb-0 flex flex-col  gap-4  overflow-y-auto ">
        <p className="text-3xl font-bold text-gray-700 text-center py-4 ">
          Addresses
        </p>
        <div className="flex flex-col lg:flex-row p-4 gap-4 w-full  h-84  ">
          {myAddresses.map((address) => (
            <div
              className="p-4 flex flex-col border border-gray-200 w-full lg:w-1/4 h-fit bg-white relative shadow"
              key={address._id}>
              <span className="text-[12px] text-gray-400 font-semibold bg-gray-100 px-4 py-2 uppercase w-fit absolute top-0 left-0">
                {address?.type}
              </span>
              <div className="gap-4 flex flex-row text-gray-400 ms-auto">
                <i
                  className="fa-solid fa-trash hover:text-red-500  cursor-pointer "
                  onClick={() => deleteAddress(address._id)}></i>
              </div>
              <div className="flex flex-col py-4 gap-2 capitalize">
                <p className="text-xl font-bold text-gray-500 border-b-2 pb-2 w-fit">
                  {address?.type}
                </p>
                <p className="text-md font-semibold text-gray-500 mb-4">
                  {user.name} {user.lastname}
                </p>
                <p className="text-sm font-normal text-gray-400 w-full lg:w-3/4">
                  {address?.display_name}
                </p>
              </div>
            </div>
          ))}
          {show && (
            <div className="p-4 flex flex-col border border-gray-200 bg-white relative shadow w-full lg:w-fit">
              <i
                className="fa-solid fa-xmark p-2 rounded-full cursor-pointer hover:bg-gray-100 absolute top-3 right-4"
                onClick={() => setShow(false)}></i>
              <div className="flex flex-col py-4 gap-2 capitalize">
                <div className="my-2">
                  <select
                    className="select select-bordered select-sm lg:select-md w-fit max-w-xs  "
                    onChange={(e) => setAddressType(e.target.value)}>
                    <option disabled defaultValue>
                      Address Type
                    </option>
                    <option value="Home">Home</option>
                    <option value="Destination">Desténation</option>
                  </select>
                </div>
                <div className="my-2">
                  <SelectAddress address={address} setAddress={setAddress} />
                </div>
                <div>
                  <p className="text-1xl font-bold text-gray-700 text-center my-2">
                    Your current address
                  </p>
                  <input
                    type="text"
                    value={address.display_name}
                    onChange={(e) => setDisplay_name(e.target.value)}
                    placeholder="Street name, number..."
                    className="input input-bordered w-full"
                  />
                </div>
                <div className="flex flex-row">
                  <button
                    className="btn btn-info btn-primary btn-sm ms-auto mt-2 text-white"
                    onClick={createAddress}>
                    Save
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        <button
          className="btn btn-success btn-primary text-white mx-auto "
          onClick={() => setShow(true)}>
          Add New Address
        </button>
      </div>
    </Layout>
  );
}
