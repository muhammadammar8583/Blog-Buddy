import React from "react";
import { useLocation } from "react-router-dom";

const blogDetail = () => {
  const locationData = useLocation();

  return (
    <div className="mt-10 ml-10 h-screen">
      <div className="">
        <h3 className="text-4xl font-normal tracking-wide mb-4">
          {locationData.state.title}
        </h3>
        <h4 className="text-2xl font-light mb-10">
          <span className="font-normal">Author:</span>{" "}
          {locationData.state.author}
        </h4>
        <div dangerouslySetInnerHTML={{ __html: locationData.state.content }} />
        {/* <p>{locationData.state.content}</p> */}
      </div>
    </div>
  );
};

export default blogDetail;
