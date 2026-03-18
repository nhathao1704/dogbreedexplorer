// src/index.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/connectionDB.js";
import dogRoutes from "./Routes/dog.routes.js";
import authroutes from "./Routes/auth.routes.js";
import userroutes from "./Routes/user.routes.js"
import commentroutes from "./Routes/comment.routes.js";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// static images
app.use("/images", express.static("images"));

// connect DB
connectDB();

// routes
app.use("/api/dogs", dogRoutes);
app.use("/api/auth", authroutes);
app.use("/api/user",userroutes);
app.use("/api/comment",commentroutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});


