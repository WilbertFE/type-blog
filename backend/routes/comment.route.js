import express from "express";
import {
  createComment,
  getAllComments,
} from "../controllers/comment.controller.js";
import { isLoggedIn } from "../controllers/auth.controller.js";
import { body, validationResult } from "express-validator";

const route = express.Router();

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

export const commentRoute = route;
