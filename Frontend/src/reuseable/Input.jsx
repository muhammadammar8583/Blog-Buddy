import React from "react";

const Input = ({ type, name, id, value, onChange, className }) => {
  return (
    <input
      type={type}
      name={name}
      id={id}
      value={value}
      onChange={(e) => onChange(e)}
      className={className}
    />
  );
};

export default Input;
