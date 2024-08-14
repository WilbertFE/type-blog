import express from "express";
import {
  createComment,
  createCommentLike,
  deleteComment,
  deleteCommentLike,
  getAllCommentLikes,
  getAllComments,
} from "../controllers/comment.controller.js";
import { isLoggedIn } from "../controllers/auth.controller.js";
import { body, validationResult } from "express-validator";

const route = express.Router();

route.get("/likes", getAllCommentLikes);

route.post(
  "/",
  [
    body("content", "null")
      .trim()
      .notEmpty()
      .withMessage("Content cannot be empty"),
    body("blogID", "null")
      .trim()
      .notEmpty()
      .withMessage("Blog ID cannot be empty"),
  ],
  (req, res, next) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      return next();
    }
    res.status(400).json({ errors: errors.array() });
  },
  isLoggedIn,
  createComment
);

route.get("/:blogID", getAllComments);

route.delete("/:commentID", deleteComment);

route.post("/likes", isLoggedIn, createCommentLike);

route.delete("/likes", isLoggedIn, deleteCommentLike);

export const commentRoute = route;
