import express from "express";
import {
  handleCreateBlog,
  handleUpdateBlog,
  handleDeleteBlog,
  handleGetAllBlogs,
  handleGetSingleBlog,
} from "../controllers/blogs.controller.js";

const router = express.Router();

router.get("/", handleGetAllBlogs);

router.get("/:id", handleGetSingleBlog);

router.post("/createblog", handleCreateBlog);

router.put("/:id", handleUpdateBlog);

router.delete("/:id", handleDeleteBlog);

export default router;
