import express from "express";
import {
  getMyData,
  getUser,
  updateUserImage,
} from "../controllers/user.controller.js";
import { isLoggedIn } from "../controllers/auth.controller.js";

const route = express.Router();

route.get("/me", isLoggedIn, getMyData);

route.get("/:username", getUser);

route.post("/image", isLoggedIn, updateUserImage);

export const userRoute = route;
