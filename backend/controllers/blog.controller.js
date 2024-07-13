import { Blog } from "../models/blog.model.js";

const createBlog = async (req, res) => {
  const { title, description, content } = req.body;
  const { _id } = req.user;

  const blog = await Blog.create({
    title,
    description,
    content,
    userID: _id,
  });

  res.status(201).json(blog);
};

const getAllBlogs = async (req, res) => {
  const blogs = await Blog.find({});
  res.status(200).json(blogs);
};

const getUserBlogs = async (req, res) => {
  const { username } = req.params;
  const blogs = await Blog.find({ creator: username });
  if (!blogs) {
    return res.status(404).json({ errors: [{ msg: "Couldnt find the blog" }] });
  }
  res.status(200).json(blogs);
};

const getBlog = async (req, res) => {
  const { blogID } = req.params;
  const blog = await Blog.findById(blogID);
  if (!blog) return res.sendStatus(404);
  res.status(200).json(blog);
};

const updateBlog = async (req, res) => {
  try {
    const newBlogData = await Blog.findByIdAndUpdate(
      req.body._id,
      req.body,
      { new: true } // Option to return the updated document
    );
    res.status(201).json(newBlogData);
  } catch (error) {
    res.status(500).json({ error: "Failed to update blog post" });
  }
};

const deleteBlog = async (req, res) => {
  try {
    const { blogID } = req.params;
    const deletedBlog = await Blog.findByIdAndDelete(blogID);
    res.sendStatus(200);
  } catch (err) {
    res.sendStatus(500);
  }
};

export {
  createBlog,
  getAllBlogs,
  getUserBlogs,
  getBlog,
  updateBlog,
  deleteBlog,
};
