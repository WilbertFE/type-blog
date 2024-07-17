import { Like } from "../models/like.model.js";

const getLike = async (req, res) => {
  try {
    const { blogID } = req.params;
    const likes = await Like.find({ blogID });
    res.status(200).json(likes);
  } catch (err) {
    res.sendStatus(500);
  }
};

const createLike = async (req, res) => {
  try {
    const { blogID } = req.params;
    const { _id } = req.user;
    const likes = await Like.create({ blogID, userID: _id });
    res.sendStatus(201);
  } catch (err) {
    console.error(err.message);
    res.sendStatus(500);
  }
};

export { getLike, createLike };