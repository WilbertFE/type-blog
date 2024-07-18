import express from "express";
import {
  createLike,
  deleteLike,
  getLike,
} from "../controllers/like.controller.js";
import { isLoggedIn } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/:blogID", isLoggedIn, createLike);

router.get("/:blogID", getLike);

router.delete("/", isLoggedIn, deleteLike);

export const likeRoute = router;
