import Address from "../models/Addresses.js";

export const createAddress = async (req, res) => {
  const address = new Address(req.body);
  try {
    const savedAddress = await address.save();
    res.status(200).json(savedAddress);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getAddress = async (req, res) => {
  try {
    const address = await Address.find({ userId: req.params.id }).select(
      "display_name type"
    );
    res.status(200).json(address);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const updateAddress = async (req, res) => {
  try {
    const updatedAddress = await Address.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res
      .status(200)
      .json({ updatedAddress, message: "Address has been updated" });
  } catch (error) {
    return res.status(500).json({ message: "Bad Request: " + error.message });
  }
};
export const deleteAddress = async (req, res) => {
  try {
    await Address.findByIdAndDelete(req.params.id);
    res.status(200).json("Address has been deleted");
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getUserByAddress = async (req, res) => {
  const { departureQ, destinationQ } = req.params;

  if (!departureQ || !destinationQ) {
    return res.status(400).json({ message: "Invalid address data" });
  }

  try {
    const matchedAddresses = await Address.find({
      $and: [{ $or: [departureQ] }, { $or: [destinationQ] }],
    }).populate({
      path: "userId",
      select: "name lastname profilePicture",
    });

    res.json(matchedAddresses);
  } catch (error) {
    res.status(500).json(error);
  }
};
