import React from "react";

const Button = ({ type, className, btnText, onClick }) => {
  return (
    <button type={type} className={className} onClick={onClick}>
      {btnText}
    </button>
  );
};

export default Button;
