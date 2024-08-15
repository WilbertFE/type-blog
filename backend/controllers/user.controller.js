import { User } from "../models/user.model.js";

const getMyData = async (req, res) => {
  try {
    const userID = req.user;
    const userDoc = await User.findById(userID);

    if (!userDoc) {
      return res.status(404).json({ message: "user not found" });
    }

    const user = userDoc.toObject();

    delete user.refreshToken;
    delete user.createdAt;
    delete user.updatedAt;
    delete user.__v;

    res.status(200).json(user);
  } catch (err) {
    console.error(err.message);
    res.sendStatus(500);
  }
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

const getUserByUsername = async (req, res) => {
  try {
    const { username } = req.params;
    const user = await User.findOne({ username }).collation({
      locale: "en",
      strength: 2,
    });
    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }
    res.status(200).json(user);
  } catch (err) {
    console.log(err.message);
    res.sendStatus(500);
  }
};

export { getMyData, getUser, updateUser, getUserByUsername };
