import mongoose from "mongoose";

const commentSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    creatorID: {
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
    disLike: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

export const Comment = mongoose.model("Comment", commentSchema);
