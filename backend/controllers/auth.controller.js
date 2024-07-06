import { User } from "../models/user.model.js";
import jwt from "jsonwebtoken";

const isLoggedIn = async (req, res, next) => {
  try {
    if (req.user) {
      return next();
    }
    const accessToken = req.cookies.access_token;
    const refreshToken = req.cookies.refresh_token;

    if (!accessToken) {
      return res.sendStatus(401);
    }

    const payload = jwt.verify(
      accessToken,
      process.env.JWT_SECRET,
      (err, decoded) => {
        if (err) {
          res.status(403);
          throw new Error();
        }
        return decoded;
      }
    );
    if (payload) {
      const { id } = payload;
      const user = await User.findById(id);
      req.user = user;
    }

    next();
  } catch (err) {
    next(err.message);
  }
};

const googleAuth = async (req, res, next) => {
  const { displayName, email, image } = req.body;
  try {
    const user = await User.findOne({ email }).collation({
      locale: "en",
      strength: 2,
    });
    if (user) {
      const accessToken = genAccessToken(user._id);
      const refreshToken = genRefreshToken(user._id);

      res
        .status(200)
        .cookie("access_token", accessToken, {
          httpOnly: true,
        })
        .cookie("refresh_token", refreshToken, {
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

      const accessToken = genAccessToken(newUser._id);
      const refreshToken = genRefreshToken(newUser._id);

      await newUser.updateOne({ refreshToken });

      res
        .status(201)
        .cookie("access_token", accessToken, {
          httpOnly: true,
        })
        .cookie("refresh_token", refreshToken, {
          httpOnly: true,
        })
        .json({ data: newUser });
    }
  } catch (err) {
    console.error(err.message);
    next(err);
  }
};

const genAccessToken = (userID) => {
  return jwt.sign({ id: userID }, process.env.JWT_SECRET, { expiresIn: "15s" });
};

const genRefreshToken = (userID) => {
  return jwt.sign({ id: userID }, process.env.JWT_SECRET);
};

const logout = async (req, res) => {
  req.user = null;
  res
    .status(200)
    .cookie("access_token", "", { expires: new Date(0) })
    .cookie("refresh_token", "", { expires: new Date(0) })
    .json("logout successfully");
};

export { isLoggedIn, googleAuth, logout };
