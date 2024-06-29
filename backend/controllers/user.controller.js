import { User } from "../models/user.model.js";

const getMyData = async (req, res) => {
  res.status(200).json(req.user);
};

const getUser = async (req, res) => {
  const username = req.params.username;
  const user = await User.findOne({ username });

  if (!user) {
    return res.sendStatus(404);
  }
  res.status(200).json(user);
};

const updateUserImage = async (req, res) => {
  const { image } = req.body;
  const user = await User.findOneAndUpdate({ _id: req.user._id }, { image });
  if (!user) {
    return res.sendStatus(404);
  }
  res.status(201).json({ user });
};

export { getMyData, getUser, updateUserImage };
