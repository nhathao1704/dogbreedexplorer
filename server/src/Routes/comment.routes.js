import express from "express";
import { addcomment, getComments } from "../controllers/comment.controller.js";
import { protect } from "../middleware/auth.middleware.js";

const commentrouter = express.Router();

commentrouter.post("/:dogId", protect, addcomment);
commentrouter.get("/:dogId", getComments);

export default commentrouter;