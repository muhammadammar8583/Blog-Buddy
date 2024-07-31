import React from "react";
import Button from "../reuseable/Button.jsx";

const cardComp = ({ data, viewBlog, deleteBlog, updateBlog }) => {
  return (
    <div className="relative w-full p-4 ml-5 mt-5 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <img
        className="rounded-t-lg h-48 w-full object-contain"
        src={`http://localhost:3000/${data.featureImage}`}
        alt="feature image"
      />

      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {data.title}
        </h5>

        <h6 className="mb-2 text-xl font-bold text-gray-700 dark:text-gray-400">
          {data.author}
        </h6>

        <p className="text-gray-700 dark:text-gray-400">{data.date}</p>

        <div
          className="mb-3 font-normal text-gray-700 dark:text-gray-400"
          dangerouslySetInnerHTML={{ __html: data.content.slice(0, 160) }}
        />
      </div>
      <Button
        btnText="Read More"
        onClick={viewBlog}
        className="absolute left-2 bottom-2 mr-1 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      />
      <Button
        btnText="Delete Blog"
        onClick={deleteBlog}
        className="absolute left-36 bottom-2  mr-1 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      />
      <Button
        btnText="Update Blog"
        onClick={updateBlog}
        className="absolute bottom-2 right-2 items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      />
    </div>
  );
};

export default cardComp;
