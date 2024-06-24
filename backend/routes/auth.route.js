import express from "express";
import { isLoggedIn } from "../controllers/auth.controller.js";
import { User } from "../models/user.model.js";

const router = express.Router();

router.get("/", isLoggedIn, (req, res) => {
  res.sendStatus(200);
});

router.post("/google", (req, res, next) => {
  const { displayName, email, image } = req.body;
  try {
    const user = User.findOne({ email });
    if (user) {
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
      res
        .status(200)
        .cookie("access_token", token, {
          httpOnly: true,
        })
        .json({ msg: "Logged in" });
    }
  } catch (err) {}
});

export const authRoute = router;
