import mongoose from "mongoose";

const likeSchema = new mongoose.Schema(
  {
    userID: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Like = mongoose.model("Like", likeSchema);
