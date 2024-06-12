import mongoose from "mongoose";

const ratingSchema = new mongoose.Schema({
  rating: {
    type: Number,
    required: true,
  },
  rater: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  car: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Car",
    required: true,
  },
});

const Rating = mongoose.model("Rating", ratingSchema);

export default Rating;
