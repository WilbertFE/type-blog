import { Blog } from "../models/blog.model.js";
import { User } from "../models/user.model.js";

const createBlog = async (req, res) => {
  const { title, description, content } = req.body;
  const _id = req.user;

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
  try {
    const { username } = req.params;
    const user = await User.find({ username });

    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }

    const blogs = await Blog.find({ userID: user[0]._id });

    if (!blogs) {
      return res
        .status(404)
        .json({ errors: [{ msg: "User blogs not found" }] });
    }
    res.status(200).json(blogs);
  } catch (err) {
    console.log(err.message);
    res.sendStatus(500);
  }
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
