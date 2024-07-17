import express from "express";
import { createLike, getLike } from "../controllers/like.controller.js";
import { isLoggedIn } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/:blogID", isLoggedIn, createLike);

router.get("/:blogID", getLike);

export const likeRoute = router;
