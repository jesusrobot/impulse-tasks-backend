import User from "../models/user.js";
import bcryptjs from "bcryptjs";

export const getUser = (req, res) => {
  res.json({ verb: "GET" });
};

export const createUser = async (req, res) => {
  const { name, email, password } = req.body;
  const user = new User({ name, email, password });
  const salt = bcryptjs.genSaltSync();
  user.password = bcryptjs.hashSync(password, salt);
  await user.save();
  res.json({ user });
};

export const updateUser = (req, res) => {
  res.json({ verb: "PUT" });
};

export const deleteUser = (req, res) => {
  res.json({ verb: "DELETE" });
};
