import mongoose from "mongoose";

const addressSchema = new mongoose.Schema({
  type: { type: String },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  display_name: { type: String, required: true },
  road: { type: String },
  city_district: { type: String },
  city: { type: String },
  state: { type: String },
  postcode: { type: String },
  country: { type: String },
  suburb: { type: String },
});

const Address = mongoose.model("Address", addressSchema);
export default Address;
