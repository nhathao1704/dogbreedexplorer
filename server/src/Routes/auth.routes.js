import {registerUser,loginUser} from "../controllers/auth.controller.js"
import express from "express"

const authroutes = express.Router();
    authroutes.post("/register",registerUser);
    authroutes.post("/login", loginUser);
export default authroutes