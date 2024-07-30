import express from "express";
import {
  handleCreateBlog,
  handleUpdateBlog,
  handleDeleteBlog,
  handleGetAllBlogs,
  handleGetSingleBlog,
} from "../controllers/blogs.controller.js";
import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    return cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    return cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

const router = express.Router();

router.get("/", handleGetAllBlogs);

router.get("/:id", handleGetSingleBlog);

router.post("/createblog", upload.single("featureImage"), handleCreateBlog);

router.put("/:id", handleUpdateBlog);

router.delete("/:id", handleDeleteBlog);

export default router;
