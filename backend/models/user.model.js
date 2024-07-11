import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    displayName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    image: {
      type: String,
      default: "https://github.com/shadcn.png",
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    refreshToken: {
      type: String,
      defualt: "",
    },
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.model("User", userSchema);
