import React, { useState, useRef, useEffect, useMemo } from "react";
import Input from "../reuseable/Input";
import Button from "../reuseable/Button";
import { useLocation } from "react-router-dom";
import JoditEditor from "jodit-react";
import Swal from "sweetalert2";

const createBlog = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [featureImage, setFeatureImage] = useState("");
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
      width: "91.6%",
      enableDragAndDropFileToEditor: true,
      imageDefaultWidth: 100,
      uploader: {
        insertImageAsBase64URI: true,
        imagesExtensions: ["jpg", "png", "jpeg", "gif"],
      },
    }),
    []
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    let blog = { title, content, author };
    let formdata = new FormData();
    formdata.append("image", featureImage);

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
        {
          isEdit
            ? Swal.fire({
                title: "Great!",
                text: "Blog updated successfully!",
                icon: "success",
              })
            : Swal.fire({
                title: "Great!",
                text: "Blog saved successfully!",
                icon: "success",
              });
        }
        console.log(isEdit ? "Blog Updated" : "Blog saved:", data);
      } else {
        {
          isEdit
            ? Swal.fire({
                title: "Oops!",
                text: "Failed to update blog",
                icon: "question",
              })
            : Swal.fire({
                title: "Oops!",
                text: "Failed to save blog",
                icon: "question",
              });
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} encType="multipart/form-data">
      <div className="ml-12 mt-8 h-screen">
        <h2 className="text-4xl text-center font-medium mb-8">
          {isEdit
            ? "Edit Your Blog"
            : "What's on your mind? Care to share with us!"}
        </h2>
        <div className="w-full">
          <p className="text-2xl mb-4">Blog title</p>
          <Input
            type="text"
            name="title"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border-2 w-11/12 h-10 mb-10"
          />

          <p className="text-2xl mb-4">Blog author:</p>
          <Input
            type="text"
            name="author"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="border-2 w-11/12 h-10 mb-10"
          />

          <p className="text-2xl mb-4">Blog feature image:</p>
          <Input
            type="file"
            name="file"
            onChange={(e) => setFeatureImage(e.target.files[0])}
            className="mb-10"
          />

          <p className="text-2xl mb-4">Blog description:</p>

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
            className="mb-4 relative"
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
