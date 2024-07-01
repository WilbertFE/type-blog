import express from "express";
import {
  isLoggedIn,
  googleAuth,
  logout,
} from "../controllers/auth.controller.js";

const router = express.Router();

router.get("/", isLoggedIn, (req, res) => {
  res.sendStatus(200);
});

router.post("/google", googleAuth);

router.get("/logout", logout);

export const authRoute = router;
