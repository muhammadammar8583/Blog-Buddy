import React, { useState, useEffect } from "react";
import CardComp from "../reuseable/cardComp.jsx";
import { useNavigate } from "react-router-dom";

const Blogs = () => {
  const [allBlogs, setAllBlogs] = useState([]);

  useEffect(() => {
    const getData = async () => {
      let response = await fetch(`http://localhost:3000/blogs`);
      let data = await response.json();
      setAllBlogs(data);
    };
    getData();
  }, []);

  const navigate = useNavigate();
  const getBlog = (e) => {
    navigate(`/blogs/${e._id}`, { state: e });
  };

  return (
    <div>
      {allBlogs
        ? allBlogs.map((data, index) => {
            return (
              <CardComp
                key={index}
                data={data}
                viewBlog={() => {
                  getBlog(data);
                }}
              />
            );
          })
        : "Loading"}
    </div>
  );
};

export default Blogs;
