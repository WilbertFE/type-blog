import mongoose from "mongoose";

const commentLike = new mongoose.Schema({
  userID: {
    type: String,
    required: true,
  },
  commentID: {
    type: String,
    required: true,
  },
  blogID: {
    type: String,
    required: true,
  },
});

export const CommentLike = mongoose.model("comment-like", commentLike);
