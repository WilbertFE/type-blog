import { User } from "../models/user.model.js";

const getMyData = async (req, res) => {
  const userId = req.user;
  const user = await User.findOne({ googleId: userId });
  if (!user) {
    return res.sendStatus(403);
  }
  res.status(200).json({ user: user });
};

export { getMyData };
