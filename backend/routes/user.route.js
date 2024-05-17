import express from "express";
import { body } from "express-validator";
import { getMyData, signIn, signUp } from "../controllers/user.controller.js";
import { isLoggedIn } from "../controllers/auth.controller.js";

const route = express.Router();

route.post(
  "/",
  [
    body("email", "Email not valid").trim().isEmail(),
    body("name", "null")
      .trim()
      .escape()
      .notEmpty()
      .isLength({ min: 3 })
      .withMessage("name min length is 3"),
    body("password", "null")
      .trim()
      .escape()
      .notEmpty()
      .isLength({ min: 8 })
      .withMessage("password min length is 8"),
    body("confirmPassword", "null")
      .trim()
      .escape()
      .notEmpty()
      .custom((value, { req }) => {
        const password = req.body.password;
        if (password !== value) throw new Error("password is not same");
        return true;
      }),
  ],
  signUp
);

route.post(
  "/signin",
  [
    body("email", "Email not valid").trim().isEmail(),
    body("password", "null")
      .trim()
      .escape()
      .notEmpty()
      .isLength({ min: 8 })
      .withMessage("password min length is 8"),
  ],
  signIn
);

route.get("/me", isLoggedIn, getMyData);

export const userRoute = route;
