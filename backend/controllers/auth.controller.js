import { User } from "../models/user.model.js";
import jwt from "jsonwebtoken";

const isLoggedIn = async (req, res, next) => {
  try {
    const accessToken = req.cookies.access_token;
    const refreshToken = req.cookies.refresh_token;

    // if no access token
    if (!accessToken) {
      if (!refreshToken) {
        return res.sendStatus(401);
      }
      const refreshPayload = jwt.verify(
        refreshToken,
        process.env.JWT_SECRET,
        (err, decoded) => {
          if (err) {
            return null;
          }
          return decoded;
        }
      );
      if (!refreshPayload) {
        return res.sendStatus(403);
      }
      const { id } = refreshPayload;
      const user = await User.findById(id);
      if (!user) {
        return res.sendStatus(403);
      }
      if (user.refreshToken !== refreshToken) {
        return res.sendStatus(403);
      }
      const newAccessToken = genAccessToken(user._id);
      res.cookie("access_token", newAccessToken, {
        httpOnly: true,
      });
      req.user = user.id;
      return next();
    }

    // if access token is exists
    const payload = jwt.verify(
      accessToken,
      process.env.JWT_SECRET,
      (err, decoded) => {
        if (err) {
          return null;
        }
        return decoded;
      }
    );

    // invalid accessToken but valid refresh token
    if (!payload) {
      if (!refreshToken) {
        return res.sendStatus(403);
      }
      const refreshPayload = jwt.verify(
        refreshToken,
        process.env.JWT_SECRET,
        (err, decoded) => {
          if (err) {
            return null;
          }
          return decoded;
        }
      );

      if (!refreshPayload) {
        return res.sendStatus(403);
      }

      const { id } = refreshPayload;
      const user = await User.findById(id);
      if (!user) {
        return res.sendStatus(403);
      }
      if (user.refreshToken !== refreshToken) {
        return res.sendStatus(403);
      }

      const newAccessToken = genAccessToken(user._id);
      res.cookie("access_token", newAccessToken, {
        httpOnly: true,
      });
      req.user = user.id;
      return next();
    }

    const { id } = payload;
    const user = await User.findById(id);
    if (!user) {
      return res.sendStatus(403);
    }
    req.user = user.id;
    next();
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

const googleAuth = async (req, res) => {
  const { displayName, email, image } = req.body;
  try {
    const user = await User.findOne({ email }).collation({
      locale: "en",
      strength: 2,
    });

    // if user already exists
    if (user) {
      const accessToken = genAccessToken(user._id);
      const refreshToken = genRefreshToken(user._id);

      await user.updateOne({ refreshToken });

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
      // if user not exists
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
    res.sendStatus(500);
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
