import express from "express";
import { getMyData } from "../controllers/user.controller.js";
import { isLoggedIn } from "../controllers/auth.controller.js";
import { User } from "../models/user.model.js";

const route = express.Router();

route.get("/me", isLoggedIn, getMyData);

route.get("/:googleId", async (req, res) => {
  const googleId = req.params.googleId;
  const user = await User.findOne({ googleId });

  if (!user) {
    return res.sendStatus(404);
  }
  res.status(200).json(user);
});

export const userRoute = route;
