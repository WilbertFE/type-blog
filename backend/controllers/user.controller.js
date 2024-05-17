import { validationResult } from "express-validator";
import { User } from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const signUp = async (req, res) => {
  // validation
  const result = validationResult(req);
  if (result.isEmpty()) {
    const isDuplicate = await User.findOne({ email: req.body.email })
      .collation({ locale: "en", strength: 2 })
      .exec();
    if (isDuplicate) {
      return res
        .status(400)
        .json({ errors: [{ msg: "email already signed", path: "email" }] });
    }
    // hashing password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
    const newUserData = {
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
    };
    await User.create(newUserData);
    return res.status(201).json(req.body);
  }
  res.status(400).json({ errors: result.array() });
};

const signIn = async (req, res) => {
  // validation
  const result = validationResult(req);
  if (result.isEmpty()) {
    const user = await User.findOne({ email: req.body.email }).collation({
      locale: "en",
      strength: 2,
    });
    if (!user) {
      return res
        .status(400)
        .json({ errors: [{ msg: "email not found", path: "email" }] });
    }

    const hashedPassword = user.password;
    const plainPassword = req.body.password;

    const isMatchPassword = await bcrypt.compare(plainPassword, hashedPassword);

    if (!isMatchPassword) {
      return res
        .status(400)
        .json({ errors: [{ msg: "wrong password", path: "password" }] });
    }

    // craete jwt
    const userPayload = {
      id: user.id,
    };
    const userToken = jwt.sign({ data: userPayload }, process.env.JWT_SECRET);

    res.cookie("token", userToken, { httpOnly: true });

    return res.status(200).json(req.body);
  }
  res.status(400).json({ errors: result.array() });
};

const getMyData = async (req, res) => {
  return res.status(200).json(req.user);
};

export { signUp, signIn, getMyData };
