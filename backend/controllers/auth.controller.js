import { User } from "../models/user.model.js";
import jwt from "jsonwebtoken";

const isLoggedIn = async (req, res, next) => {
  const accessToken = req.cookies.access_token;
  if (!accessToken) {
    return res.sendStatus(401);
  }
  const payload = jwt.verify(
    accessToken,
    process.env.JWT_SECRET,
    (err, decoded) => {
      if (err) {
        return res.sendStatus(403);
      }
      return decoded;
    }
  );
  if (req.user) {
    return next();
  } else {
    const { id } = payload;
    const user = await User.findById(id);
    req.user = user;
    next();
  }
};

const googleAuth = async (req, res, next) => {
  const { displayName, email, image } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user) {
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
      res
        .status(200)
        .cookie("access_token", token, {
          httpOnly: true,
        })
        .json({ data: user });
    } else {
      const newUser = await User.create({
        username:
          displayName.toLowerCase().split(" ").join("_") +
          Date.now().toString(),
        email,
        displayName,
        image,
      });

      const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET);

      res
        .status(200)
        .cookie("access_token", token, {
          httpOnly: true,
        })
        .json({ data: newUser });
    }
  } catch (err) {
    next(err);
  }
};

const logout = async (req, res) => {
  req.user = null;
  res
    .status(200)
    .cookie("access_token", "", { expires: new Date(0) })
    .json("logout successfully");
};

export { isLoggedIn, googleAuth, logout };
