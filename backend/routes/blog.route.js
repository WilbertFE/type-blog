import express from "express";
import { body, validationResult } from "express-validator";
import { createBlog } from "../controllers/blog.controller.js";
import { isLoggedIn } from "../controllers/auth.controller.js";
import { Blog } from "../models/blog.model.js";

const router = express.Router();

router.post(
  "/",
  [
    body("title", "null")
      .trim()
      .escape()
      .notEmpty()
      .isLength({ min: 3 })
      .withMessage("Title min length is 3 characters"),
    body("description").trim().escape(),
    body("content", "null")
      .trim()
      .escape()
      .notEmpty()
      .withMessage("Content cannot be empty"),
  ],
  (req, res, next) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      return next();
    }
    res.status(400).json({ errors: errors.array() });
  },
  isLoggedIn,
  createBlog
);

router.get("/", async (req, res) => {
  const blogs = await Blog.find({});
  console.log(blogs);
  res.status(200).json(blogs);
});

export const blogRoute = router;
