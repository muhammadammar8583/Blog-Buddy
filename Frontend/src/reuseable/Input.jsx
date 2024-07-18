import React from "react";

const Input = ({ name, id, value, onChange, className }) => {
  return (
    <input
      type="text"
      name={name}
      id={id}
      value={value}
      onChange={(e) => onChange(e)}
      className={className}
    />
  );
};

export default Input;
