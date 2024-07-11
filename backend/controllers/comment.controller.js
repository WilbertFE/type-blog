import { Comment } from "../models/comment.model.js";

const createComment = async (req, res) => {
  try {
    const { blogID, content } = req.body;
    const { username, image } = req.user;
    const newComment = await Comment.create({
      content,
      blogID,
      creator: username,
      image,
    });
    res.status(201).json(newComment);
  } catch (err) {
    console.error(err.message);
    res.sendStatus(500);
  }
};

const getAllComments = async (req, res) => {
  try {
    const { blogID } = req.params;
    const blogs = await Comment.find({ blogID });
    res.status(200).json(blogs);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

export { createComment, getAllComments };
