import express from "express";
import {
  getMyData,
  getUser,
  updateUser,
} from "../controllers/user.controller.js";
import { isLoggedIn } from "../controllers/auth.controller.js";
import { body, validationResult } from "express-validator";
import { User } from "../models/user.model.js";

const route = express.Router();

route.put(
  "/",
  [
    body("displayName", "null")
      .trim()
      .escape()
      .notEmpty()
      .isLength({ min: 3 })
      .withMessage("Name min length is 3"),
    body("username", "null")
      .trim()
      .escape()
      .notEmpty()
      .withMessage("Username cannot be empty")
      .custom(async (value) => {
        const user = await User.findOne({ username: value }).collation({
          locale: "en",
          strength: 2,
        });
        if (user) {
          if (value === user.username) {
            return true;
          } else {
            throw new Error("Username already in use");
          }
        }
      }),
  ],
  (req, res, next) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      return next();
    }
    res.status(400).json({ errors: errors.array() });
  },
  updateUser
);

route.get("/me", isLoggedIn, getMyData);

route.get("/:username", getUser);

export const userRoute = route;
