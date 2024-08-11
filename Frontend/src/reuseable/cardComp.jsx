import React from "react";
import Button from "../reuseable/Button.jsx";

const cardComp = ({ data, viewBlog, deleteBlog, updateBlog }) => {
  return (
    <div className="relative h-[32rem] w-full p-4 ml-5 mt-5 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <img
        className="rounded-t-lg h-48 w-full object-contain"
        src={`http://localhost:3000/${data.featureImage}`}
        alt="feature image"
      />

      <div className="p-2 mb-8">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {data.title}
        </h5>

        <h6 className="flex items-center mb-2 text-xl font-bold text-gray-700 dark:text-gray-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5 mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
            />
          </svg>
          {data.author}
        </h6>

        <p className="flex mb-2 text-gray-700 dark:text-gray-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5 mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
            />
          </svg>
          {data.date}
        </p>

        <div
          className="mb-3 font-normal text-gray-700 dark:text-gray-400"
          dangerouslySetInnerHTML={{ __html: data.content.slice(0, 160) }}
        />
      </div>
      <Button
        btnText="Read More"
        onClick={viewBlog}
        className="absolute left-4 bottom-5 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-2xl hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      />
      <Button
        btnText="Delete Blog"
        onClick={deleteBlog}
        className="absolute left-32 bottom-5  mr-1 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-2xl hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      />
      <Button
        btnText="Update Blog"
        onClick={updateBlog}
        className="absolute bottom-5 right-9 items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-2xl hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      />
    </div>
  );
};

export default cardComp;
