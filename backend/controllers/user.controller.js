import { User } from "../models/user.model.js";

const getMyData = async (req, res) => {
  const { googleId } = req.user;
  const user = await User.findOne({ googleId });
  if (!user) {
    return res.sendStatus(403);
  }
  res.status(200).json({ data: user });
};

export { getMyData };
