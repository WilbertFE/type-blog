import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    content: String,
    creator: String,
    likes: {
      type: Number,
      default: 0,
    },
    disLike: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

export const Blog = mongoose.model("Blog", blogSchema);
