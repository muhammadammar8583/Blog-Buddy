import React, { useState, useEffect } from "react";

const Blogs = () => {
  const [allBlogs, setAllBlogs] = useState("");

  useEffect(() => {
    const getData = async () => {
      let response = await fetch("http://localhost:3000/blogs");
      let data = await response.json();
      setAllBlogs(data);
    };
    getData();
  }, []);

  return (
    <div>
      {allBlogs
        ? allBlogs.map((data, index) => {
            return (
              <div key={index} className="h-40 w-full">
                <h1>{data.title}</h1>
                <p>{data.author}</p>
                <p>{data.content}</p>
              </div>
            );
          })
        : "Loading"}
    </div>
  );
};

export default Blogs;
