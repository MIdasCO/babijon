import React, { useState } from "react";
import "./index.css";

export const Input = ({
  type = "text",
  placeholder = "",
  value = "",
  onChange,
  disabled = false,
  label = "",
}) => {
  const [isDanger, setIsDanger] = useState(false);

  const handleChange = (e) => {
    const inputValue = e.target.value;
    setIsDanger(inputValue.toLowerCase() === "danger");
    if (onChange) onChange(e);
  };

  return (
    <div className="input-wrapper">
      {label && (
        <label className={`input-label ${isDanger ? "danger" : ""}`}>
          {label}
        </label>
      )}
      <input type={type} placeholder={placeholder} value={value} onChange={handleChange} disabled={disabled} className={`input-field ${isDanger ? "danger" : ""}`}/>
    </div>
  );
};
