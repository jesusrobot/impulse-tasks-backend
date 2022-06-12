import { Router } from "express";
import {
  createUser,
  deleteUser,
  getUser,
  updateUser,
} from "../controllers/users.js";

const router = Router();

router.get("/", getUser);
router.post("/", createUser);
router.put("/", updateUser);
router.delete("/", deleteUser);

export default router;
