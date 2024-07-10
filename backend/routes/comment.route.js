import express from "express";
import { createComment } from "../controllers/comment.controller.js";

const route = express.Router();

route.post("/", createComment);

export const commentRoute = route;
