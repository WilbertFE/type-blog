import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import { userRoute } from "./routes/user.route.js";
import { connectDB } from "./database/connection.js";
import { blogRoute } from "./routes/blog.route.js";
import { authRoute } from "./routes/auth.route.js";
import { commentRoute } from "./routes/comment.route.js";
import { likeRoute } from "./routes/like.route.js";

dotenv.config();

const port = process.env.SERVER_PORT || 6005;
const app = express();

// middleware configuration
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: "GET, POST, PUT, DELETE",
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());

// routes
app.use("/api/users", userRoute);
app.use("/api/blogs", blogRoute);
app.use("/api/auth", authRoute);
app.use("/api/comments", commentRoute);
app.use("/api/likes", likeRoute);

app.listen(port, () => {
  console.log(`Your application is listening on http://localhost:${port}`);
  connectDB();
});
