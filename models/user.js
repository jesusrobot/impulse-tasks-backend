import mongoose from "mongoose";
const { Schema, model } = mongoose;

const userSchema = Schema({
  name: {
    type: String,
    required: [true, 'the "name" field is required'],
  },
  email: {
    type: String,
    required: [true, 'the "email" field is required'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'the "password" field is required'],
  },
  googleSignin: {
    type: Boolean,
    default: false,
  },
  role: {
    type: String,
    default: "USER_BASIC",
  },
  profilePicture: String,
  status: {
    type: Boolean,
    default: true,
  },
});

export default model("User", userSchema);
