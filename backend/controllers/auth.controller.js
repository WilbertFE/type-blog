import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";

const authToken = async (req, res, next) => {
  const jwtToken = req.cookies.token;
  if (!jwtToken) {
    return res.status(401).json({ errors: { msg: "Not Authorized" } });
  }
  const userID = jwt.verify(
    jwtToken,
    process.env.JWT_SECRET,
    (err, decoded) => {
      if (err) {
        return res.status(403).json({ errors: { msg: "Forbidden" } });
      }
      return decoded.data.id;
    }
  );
  const userData = await User.findById(userID);
  req.user = {
    email: userData.email,
    name: userData.name,
  };
  return next();
};

const isLoggedIn = (req, res, next) => {
  req.user ? next() : res.sendStatus(401);
};

export { authToken, isLoggedIn };
