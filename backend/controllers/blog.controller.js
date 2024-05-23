import { Blog } from "../models/blog.model.js";

const createBlog = async (req, res) => {
  const { title, description, content } = req.body;
  const googleId = req.user;
  const blog = await Blog.create({
    title,
    description,
    content,
    googleId,
  });
  res.sendStatus(201);
};

export { createBlog };
