import { Comment } from "../models/comment.model.js";

const createComment = async (req, res) => {
  try {
    const { blogID, content } = req.body;
    const { _id } = req.user;
    const newComment = await Comment.create({
      content,
      blogID,
      authorID: _id,
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
