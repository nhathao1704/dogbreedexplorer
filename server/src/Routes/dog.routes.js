// src/routes/dog.routes.js
import express from "express";
import {
  getAllDogs,
  searchDogs,
  getDogById
} from "../controllers/dog.controller.js";

const router = express.Router();

router.get("/", getAllDogs);
router.get("/search", searchDogs);  // ✅ PHẢI trước /:id
router.get("/:id", getDogById);     // ✅ PHẢI sau /search

export default router;
