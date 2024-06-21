import express from "express";
import {
  createAddress,
  getAddress,
  updateAddress,
  getUserByAddress,
  deleteAddress,
} from "../controller/Addresses.js";

const router = express.Router();

router.post("/create", createAddress);
router.get("/myAddresses/:id", getAddress);
router.put("/update/:id", updateAddress);
router.delete("/delete/:id", deleteAddress);
router.post("/getuserbyaddress", getUserByAddress);

export default router;
