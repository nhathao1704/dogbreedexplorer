import mongoose from "mongoose"

const commentSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    dog: { type: mongoose.Schema.Types.ObjectId, ref: "Dog" },
    text: String,
  },
  { timestamps: true }
);

export default mongoose.model("Comment", commentSchema);