import express from "express";
import { getMyData } from "../controllers/user.controller.js";
import { isLoggedIn } from "../controllers/auth.controller.js";

const route = express.Router();

route.get("/me", isLoggedIn, getMyData);

export const userRoute = route;
