import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  passwordHash: { type: String, required: true },
  role: {
    type: Number,
    default: 0,
  },
});

export const User = mongoose.model("User", userSchema, "users");