import React, { useState, useEffect } from "react";
import CardComp from "../reuseable/cardComp.jsx";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Blogs = () => {
  const [allBlogs, setAllBlogs] = useState([]);

  useEffect(() => {
    const getData = async () => {
      let response = await fetch("http://localhost:3000/blogs");
      let data = await response.json();
      setAllBlogs(data);
    };
    getData();
  }, []);

  const navigate = useNavigate();

  const getBlog = (e) => {
    navigate(`/blogs/${e._id}`, { state: e });
  };

  const deleteBlog = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        try {
          fetch(`http://localhost:3000/blogs/${id}`, {
            method: "DELETE",
          });
          //Update the state to remove the deleted blog
          setAllBlogs(allBlogs.filter((blog) => blog._id !== id));
        } catch (error) {
          console.log(error);
        }

        Swal.fire({
          title: "Deleted!",
          text: "Your blog has been deleted.",
          icon: "success",
        });
      }
    });
  };

  const updateBlog = async (blog) => {
    navigate(`/createBlog/${blog._id}`, { state: blog });
  };

  return (
    <div className="flex flex-wrap">
      {allBlogs
        ? allBlogs.map((data, index) => {
            return (
              <CardComp
                key={index}
                data={data}
                viewBlog={() => {
                  getBlog(data);
                }}
                deleteBlog={() => {
                  deleteBlog(data._id);
                }}
                updateBlog={() => {
                  updateBlog(data);
                }}
              />
            );
          })
        : "Loading"}
    </div>
  );
};

export default Blogs;
