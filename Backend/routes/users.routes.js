import express from "express";
import {
  handleCreateUser,
  handleLoginUser,
} from "../controllers/users.controller.js";

const router = express.Router();

router.post("/", handleCreateUser);
router.post("/login", handleLoginUser);

export default router;
