import React from "react";

const Button = ({ type, className, btnText }) => {
  return (
    <button type={type} className={className}>
      {btnText}
    </button>
  );
};

export default Button;
