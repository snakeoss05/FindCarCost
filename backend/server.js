import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import connectToMongoDB from "./db.js";
import { app, server } from "./socket.js";
import messageRoutes from "./routes/chat.js";
import express from "express";
import userRoutese from "./routes/user.js";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();
app.use(cors());
app.use(express.static(__dirname + "/public"));
app.use("/uploads", express.static("uploads"));
const PORT = process.env.PORT || 8000;
app.use(
  cors({
    origin: "http://localhost:5173", // Change to your client's origin
    credentials: true,
  })
);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(bodyParser.json());
app.use("/api/users", userRoutese);
app.use("/api/messages", messageRoutes);
app.use("*", (req, res) => res.status(404).json({ error: "ops not found" }));
server.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server is running on port ${PORT}`);
});
