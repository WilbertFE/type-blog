import mongoose from "mongoose";

const commentSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    creator: {
      type: String,
      required: true,
    },
    blogID: {
      type: String,
      require: true,
    },
    likes: {
      type: Number,
      default: 0,
    },
    disLikes: {
      type: Number,
      default: 0,
    },
    image: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Comment = mongoose.model("Comment", commentSchema);
