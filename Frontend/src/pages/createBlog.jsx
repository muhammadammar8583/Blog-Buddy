import React, { useState, useRef } from "react";
import JoditEditor from "jodit-react";
import Input from "../reuseable/Input";
import Button from "../reuseable/Button";

const createBlog = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");

  const editor = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const blog = { title, content, author };

    try {
      const response = await fetch("http://localhost:3000/blogs/createblog", {
        method: "POST",
        body: JSON.stringify(blog),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response) {
        const data = await response.json();
        console.log("Blog saved:", data);
      } else {
        console.error("Failed to save blog");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mt-10">
        <h2 className="text-4xl text-center font-medium mb-10">
          What's on your mind? Care to share with us!
        </h2>
        <div className="">
          <p className="text-2xl mb-4">Blog Title</p>
          <Input
            name="title"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border-2 w-3/4 h-10 mb-10"
          />

          <p className="text-2xl mb-4">Blog Author:</p>
          <Input
            name="author"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="border-2 w-3/4 h-10 mb-10"
          />

          <p className="text-2xl mb-4">Blog Description:</p>
          <JoditEditor
            ref={editor}
            name="content"
            value={content}
            onBlur={(newContent) => setContent(newContent)}
            onChange={(newContent) => {
              setContent(newContent);
            }}
            className="mb-4 relative"
          />

          <Button
            type="submit"
            className="bg-blue-600 text-white font-medium p-2 rounded-xl absolute left-1/2"
            btnText="Save Blog"
          />
        </div>
      </div>
    </form>
  );
};

export default createBlog;
