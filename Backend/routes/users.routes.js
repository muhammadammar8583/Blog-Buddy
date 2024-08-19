import express from "express";
import {
  handleCreateUser,
  handleLoginUser,
  handleCheckUser,
} from "../controllers/users.controller.js";

const router = express.Router();

router.post("/", handleCreateUser);
router.post("/login", handleCheckUser, handleLoginUser);

export default router;
