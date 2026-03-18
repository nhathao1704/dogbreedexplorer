import express from "express";
import {toggleFavorite,getFavorites,} from "../controllers/user.controller.js"
import { protect } from "../middleware/auth.middleware.js";

const userroutes = express.Router();
   userroutes.post("/favorite/:dogId", protect, toggleFavorite);
   userroutes.get("/favorites", protect, getFavorites);

export default userroutes