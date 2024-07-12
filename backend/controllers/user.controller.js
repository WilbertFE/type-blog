import { User } from "../models/user.model.js";

const getMyData = async (req, res) => {
  res.status(200).json(req.user);
};

const getUser = async (req, res) => {
  const { userID } = req.params;
  const user = await User.findById(userID);

  if (!user) {
    return res.sendStatus(404);
  }
  res.status(200).json(user);
};

const updateUser = async (req, res) => {
  try {
    await User.updateOne({ _id: req.body._id }, req.body);
    res.status(200).json({ updatedUser: req.body });
  } catch (err) {
    res.status(500).json({ errors: [{ msg: err.message }] });
  }
};

export { getMyData, getUser, updateUser };
