import React, { useState } from "react";
import "./style.css"

function TextInput({ id, name, placeholder, value, onChange, type }) {
  return (
    <input
      type={type}
      id={id}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      
      className="textInput"
    />
  );
}

export default TextInput;