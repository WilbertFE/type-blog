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

const updateUser = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.body._id, req.body, {
      new: true,
    });
    res.status(200).json({ updatedUser });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

export { getMyData, getUser, updateUser };
