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
      setTitle(title),
        setAuthor(author),
        setContent(content),
        setFeatureImage(featureImage),
        setIsEdit(true);
    }
  }, [location.state]);

  const config = useMemo(
    () => ({
      readonly: false,
      height: "400",
      width: "91.6%",
      enableDragAndDropFileToEditor: true,
      imageDefaultWidth: 100,
      showPlaceholder: false,
      uploader: {
        insertImageAsBase64URI: true,
        imagesExtensions: ["jpg", "png", "jpeg", "gif", "Webp"],
      },
    }),
    []
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    let formdata = new FormData();
    formdata.append("featureImage", featureImage);
    formdata.append("title", title);
    formdata.append("content", content);
    formdata.append("author", author);

    try {
      let response;
      if (isEdit) {
        response = await fetch(
          `http://localhost:3000/blogs/${location.state._id}`,
          {
            method: "PUT",
            body: formdata,
          }
        );
        setTitle("");
        setAuthor("");
        setContent("");
        setFeatureImage("");
      } else {
        response = await fetch("http://localhost:3000/blogs/createblog", {
          method: "POST",
          body: formdata,
        });
        setTitle("");
        setAuthor("");
        setContent("");
        setFeatureImage("");
      }
      if (response) {
        const data = await response.json();
        if (title && author && content) {
          Swal.fire({
            title: "Great!",
            text: isEdit
              ? "Blog updated successfully!"
              : "Blog saved successfully!",
            icon: "success",
          });
        }
        console.log(data);
      }
    } catch (error) {
      Swal.fire({
        title: "Oops!",
        text: isEdit ? "Failed to update blog" : "Failed to save blog",
        icon: "error",
      });
      console.log(error);
    }
  };

  return (
    <form
      action="/uploads"
      onSubmit={handleSubmit}
      encType="multipart/form-data"
      className="h-screen"
    >
      <div className="ml-10 mt-4 max-h-screen min-h-screen">
        <div className="h-screen">
          <h2 className="text-4xl text-center font-medium ">
            {isEdit
              ? "Edit Your Blog"
              : "What's on your mind? Care to share with us!"}
          </h2>
          <div className="">
            <div>
              <p className="text-2xl mb-2">Blog title:</p>
              <Input
                type="text"
                name="title"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="border-2 w-11/12 h-10 mb-5"
              />
            </div>
            <div>
              <p className="text-2xl mb-2">Blog author:</p>
              <Input
                type="text"
                name="author"
                id="author"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                className="border-2 w-11/12 h-10 mb-5"
              />
            </div>
            <div>
              <p className="text-2xl mb-2">Blog feature image:</p>
              <Input
                type="file"
                name="featureImage"
                onChange={(e) => setFeatureImage(e.target.files[0])}
                className="mb-5"
              />
            </div>
            <div className="pb-2">
              <p className="text-2xl mb-2">Blog description:</p>
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
                className="mb-1"
              />
            </div>
            <div className="flex justify-center items-center pb-4">
              <Button
                type="submit"
                className="bg-blue-600 text-white font-medium p-2 rounded-xl left-1/2"
                btnText={isEdit ? "Update Blog" : "Save Blog"}
              />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default createBlog;
