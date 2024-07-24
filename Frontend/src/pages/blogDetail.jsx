import React from "react";
import { useLocation } from "react-router-dom";
import HTMLReactParser from "html-react-parser";

const blogDetail = () => {
  const locationData = useLocation();

  return (
    <div className="h-32 w-full mt-10 ml-10">
      <h3 className="text-4xl font-normal tracking-wide mb-4">
        {locationData.state.title}
      </h3>
      <h4 className="text-2xl font-light mb-10">
        <span className="font-normal">Author:</span> {locationData.state.author}
      </h4>
      <p>{HTMLReactParser(locationData.state.content)}</p>
    </div>
  );
};

export default blogDetail;
