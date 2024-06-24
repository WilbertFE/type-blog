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

export { getMyData, getUser };
