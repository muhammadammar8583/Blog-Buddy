import { Blogs } from "../models/blogs.models.js";
import fs from "fs";
import path from "path";

let date = new Date().toDateString();

const handleCreateBlog = async (req, res) => {
  const { title, content, author } = req.body;
  const featureImage = req.file ? req.file.path : null;
  try {
    const blog = await Blogs.create({
      title,
      content,
      author,
      date,
      featureImage,
    });
    res.status(201).json({
      message: "Blog created successfully!",
      blog,
    });
  } catch (error) {
    res.status(500).json({ message: "Error creating blog", error });
  }
};

const handleUpdateBlog = async (req, res) => {
  const { title, content, author } = req.body;
  const featureImage = req.file ? req.file.path : null;

  try {
    const updatedData = { title, content, author };
    if (featureImage) updatedData.featureImage = featureImage;
    const blog = await Blogs.findByIdAndUpdate(req.params.id, updatedData);
    res.status(200).json({
      message: "Blog updated successfully!",
      blog,
    });
  } catch (error) {
    res.status(500).json({ message: "Error updating blog", error });
  }
};

const handleDeleteBlog = async (req, res) => {
  try {
    const blog = await Blogs.findById(req.params.id);

    if (!blog) {
      return res.status(404).json({ message: "Blog not found!" });
    }

    if (blog.featureImage) {
      const imagePath = path.join("./uploads", "..", blog.featureImage);
      fs.unlink(imagePath, (err) => {
        if (err) {
          console.error("Error deleting image", err);
          return res.status(500).json({ message: "Error deleting image" });
        }
        console.log("Image deleted successfully!");
      });
    }

    await Blogs.findByIdAndDelete(req.params.id);
    res.status(200).json({
      message: "Blog deleted successfully!",
    });
  } catch (error) {
    res.status(500).json({ message: "Error deleting blog", error });
  }
};

const handleGetAllBlogs = async (req, res) => {
  try {
    const blogs = await Blogs.find();
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving blogs", error });
  }
};

const handleGetSingleBlog = async (req, res) => {
  try {
    const blog = await Blogs.findById(req.params.id);
    res.status(200).json(blog);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving blog", error });
  }
};

export {
  handleCreateBlog,
  handleUpdateBlog,
  handleDeleteBlog,
  handleGetAllBlogs,
  handleGetSingleBlog,
};
