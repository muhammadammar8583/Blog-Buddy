import React, { useState, useRef, useEffect, useMemo } from "react";
import Input from "../reuseable/Input";
import Button from "../reuseable/Button";
import { useLocation } from "react-router-dom";
import JoditEditor from "jodit-react";

const createBlog = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [isEdit, setIsEdit] = useState(false);

  const location = useLocation();
  const editor = useRef(null);

  useEffect(() => {
    if (location.state) {
      const { title, author, content } = location.state;
      setTitle(title), setAuthor(author), setContent(content), setIsEdit(true);
    }
  }, [location.state]);

  const config = useMemo(
    () => ({
      readonly: false,
      height: "500",
    }),
    []
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    const blog = { title, content, author };

    try {
      let response;
      if (isEdit) {
        response = await fetch(
          `http://localhost:3000/blogs/${location.state._id}`,
          {
            method: "PUT",
            body: JSON.stringify(blog),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
      } else {
        response = await fetch("http://localhost:3000/blogs/createblog", {
          method: "POST",
          body: JSON.stringify(blog),
          headers: {
            "Content-Type": "application/json",
          },
        });
      }
      if (response) {
        const data = await response.json();
        console.log(isEdit ? "Blog Updated" : "Blog saved:", data);
      } else {
        console.error(isEdit ? "Failed to upate blog" : "Failed to save blog");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mt-8">
        <h2 className="text-4xl text-center font-medium mb-10">
          {isEdit
            ? "Edit Your Blog"
            : "What's on your mind? Care to share with us!"}
        </h2>
        <div className="w-full">
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
            config={config}
            tabIndex={1} // tabIndex of textarea
            value={content}
            onBlur={(newContent) => setContent(newContent)}
            onChange={(newContent) => {
              setContent(newContent);
            }}
            className="h-96 mb-4 relative"
          />

          <Button
            type="submit"
            className="bg-blue-600 text-white font-medium p-2 rounded-xl absolute left-1/2"
            btnText={isEdit ? "Update Blog" : "Save Blog"}
          />
        </div>
      </div>
    </form>
  );
};

export default createBlog;
