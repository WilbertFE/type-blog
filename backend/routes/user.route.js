import express from "express";
import { getMyData } from "../controllers/user.controller.js";
import { isLoggedIn } from "../controllers/auth.controller.js";
import { User } from "../models/user.model.js";

const route = express.Router();

route.get("/me", isLoggedIn, getMyData);

route.get("/:username", async (req, res) => {
  const username = req.params.username;
  const user = await User.findOne({ username });

  if (!user) {
    return res.sendStatus(404);
  }
  res.status(200).json(user);
});

// route.get("/username/:username", async (req, res) => {
//   const username = req.params.username;
//   const user = await User.findOne({ username }, null, {
//     collation: { locale: "en", strength: 2 },
//   });
//   if (!user) {
//     return res.sendStatus(404);
//   }
//   res.status(200).json(user);
// });

export const userRoute = route;
