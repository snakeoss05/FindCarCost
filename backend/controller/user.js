import User from "../models/user.js";
import bcryptjs from "bcryptjs";
import otpGenerator from "otp-generator";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";

export async function Login(req, res) {
  const { email, password } = req.body;

  const secretOrPrivateKey = process.env.ACCESS_TOKEN_SECRET;
  const user = await User.findOne({ email: email });

  try {
    if (!user) {
      return res.status(400).json({ message: "User not registered." });
    }

    const isPasswordMatch = await bcryptjs.compare(password, user.password);

    if (!isPasswordMatch) {
      return res.status(400).json({ message: "Wrong password" });
    }
    const tokenData = {
      userId: user._id,
    };
    const token = jwt.sign(tokenData, secretOrPrivateKey, { expiresIn: "1d" });

    res.json({ user: user, token: token, message: "Login Successful" });
  } catch (error) {
    console.error(error);
    return res.json("Internal server error.", error);
  }
}
export async function Register(req, res) {
  const { name, lastname, email, password } = req.body;
  const profilePicture = req.file;

  try {
    if (!name || !email || !password) {
      return res.json({
        success: false,
        message: "All fields are required",
      });
    }

    const existingUser = await User.findOne({ email: email });

    if (existingUser) {
      return res.status(400).json(
        { message: "User already exists" }
        // Pass status as the second argument
      );
    }

    if (!profilePicture) {
      return res.status(400).json(
        { message: "No files received." } // Check the response format and structure
      );
    }
    // generate otp
    let otp = otpGenerator.generate(6, {
      upperCaseAlphabets: false,
      lowerCaseAlphabets: false,
      specialChars: false,
    });
    let result = await User.findOne({ otp: otp });
    while (result) {
      otp = otpGenerator.generate(6, {
        upperCaseAlphabets: false,
      });
      result = await User.findOne({ otp: otp });
    }

    const filePath = profilePicture.path;

    const imageUrlUnique = filePath.split("\\").join("/");

    const imageUrl = `http://192.168.1.2:3000/${imageUrlUnique}`;

    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    const newUser = new User({
      name: name,
      lastname: lastname,
      email: email,
      password: hashedPassword,
      profilePicture: imageUrl,
      otp: otp,
      isVerified: false,
    });

    const savedUser = await newUser.save();
    return res.status(200).json({ message: "Register successful" });
  } catch (error) {
    console.error(error); // Log the error for debugging purposes
    return res.status(400).json({ message: "Bad Request: " + error.message });
  }
}
export async function getFriends(req, res) {
  const { query } = req.query;

  try {
    if (!query) {
      return res.status(400).json({ message: "no valid query" });
    }
    const results = await User.find({
      $or: [
        { name: { $regex: query, $options: "i" } },
        { lastname: { $regex: query, $options: "i" } },
      ],
    });
    return res.status(200).json(results);
  } catch (err) {
    console.error(err); // Log the err for debugging purposes
    return res.status(400).json({ err: "Bad Request: " + err.message });
  }
}

export async function emailVerify(req, res) {
  const { otp, email } = await req.body;
  try {
    const response = await User.find({ email })
      .sort({ createdAt: -1 })
      .limit(1);

    if (response[0].otp != otp) {
      return res.status(400).json({
        message: "The OTP is not valid",
      });
    }
    await User.findOneAndUpdate({ email: email }, { isVerified: true });
    return res.status(200).json({ success: true, message: "success verified" });
  } catch {
    return res.status(400).json({ error: "Bad Request: " + error.message });
  }
}
export async function UpdateUser(req, res) {
  const userId = req.user._id;
  const { name, lastname, email, password } = req.body;
  if (!name && !lastname && !email && !password)
    return res.status(400).json({ message: "No data to update" });
  try {
    const updateFields = {};
    if (name) updateFields.name = name;
    if (lastname) updateFields.lastname = lastname;
    if (email) updateFields.email = email;
    if (password) {
      const salt = await bcryptjs.genSalt(10);
      const hashedPassword = await bcryptjs.hash(password, salt);
      updateFields.password = hashedPassword;
    }

    const results = await User.findOneAndUpdate(
      { _id: new mongoose.Types.ObjectId(userId) },
      { $set: updateFields },
      { new: true }
    );
    return res
      .status(200)
      .json({ message: "success updated", results: results });
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
}
