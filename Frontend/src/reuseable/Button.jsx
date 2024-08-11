import React from "react";

const Button = ({ type, className, btnText, onClick, children }) => {
  return (
    <button type={type} className={className} onClick={onClick}>
      {children}
      {btnText}
    </button>
  );
};

export default Button;
