import { Comment } from "../models/comment.model.js";
import { CommentLike } from "../models/commentLike.model.js";

const createComment = async (req, res) => {
  try {
    const { blogID, content } = req.body;
    const _id = req.user;
    const newComment = await Comment.create({
      content,
      blogID,
      userID: _id,
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
    console.error(err.message);
    res.sendStatus(500);
  }
};

const deleteComment = async (req, res) => {
  try {
    const { commentID } = req.params;
    const deletedBlog = await Comment.findByIdAndDelete(commentID);
    res.status(200).json(deletedBlog._id);
  } catch (err) {
    console.error(err.message);
    res.sendStatus(500);
  }
};

const createCommentLike = async (req, res) => {
  try {
    const userID = req.user;
    const { commentID, blogID } = req.body;

    if (!userID || !commentID || !blogID) {
      return res.sendStatus(400);
    }

    const newCommentLike = await CommentLike.create({
      userID,
      commentID,
      blogID,
    });

    res.status(200).json(newCommentLike);
  } catch (err) {
    console.error(err.message);
    res.sendStatus(500);
  }
};

const deleteCommentLike = async (req, res) => {
  try {
    const userID = req.user;
    const { commentID } = req.params;

    if (!userID) {
      return res.sendStatus(400);
    }

    await CommentLike.deleteOne({ commentID });

    res.sendStatus(204);
  } catch (err) {
    console.error(err.message);
    res.sendStatus(500);
  }
};

const getAllCommentLikes = async (req, res) => {
  try {
    const commentLikes = await CommentLike.find({});
    res.status(200).json(commentLikes);
  } catch (err) {
    console.error(err.message);
  }
};

export {
  createComment,
  getAllComments,
  deleteComment,
  createCommentLike,
  deleteCommentLike,
  getAllCommentLikes,
};
