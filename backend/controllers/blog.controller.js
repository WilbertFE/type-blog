import { Blog } from "../models/blog.model.js";

const createBlog = async (req, res) => {
  const { title, description, content } = req.body;
  const { username } = req.user;

  const blog = await Blog.create({
    title,
    description,
    content,
    creator: username,
  });
  res.sendStatus(201);
};

export { createBlog };
