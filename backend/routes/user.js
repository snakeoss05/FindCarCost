import express from "express";
import {
  Login,
  Register,
  getFriends,
  emailVerify,
  UpdateUser,
} from "../controller/user.js";
import protectRoute from "../middleware/protectRoute.js";
import { upload } from "../storage/multer.js";
const router = express.Router();

router.post("/register", upload.single("profilePicture"), Register);
router.post("/login", Login);
router.get("/getFriends", getFriends);
router.post("/verify", emailVerify);
router.put("/update", protectRoute, UpdateUser);

export default router;
