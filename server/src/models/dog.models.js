// src/models/Dog.js
import mongoose from "mongoose";

const dogSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    origin: String,
    life_span: String,
    temperament: [String],  // ✅ Thay từ String thành [String]
    image: String
  },
  {
    collection: "dogs",
    timestamps: true
  }
);

export default mongoose.model("Dog", dogSchema);
