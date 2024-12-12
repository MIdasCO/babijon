import React, { useState } from "react";
import "./index.css";

export const Tooltip = ({ text, position = "top", children }) => {
  const [isHovered, setIsHovered] = useState(false);
  const tooltipPosition = `tooltip-${position}`;
  return (
    <div
      className="tooltip-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
      {isHovered && <div className={`tooltip ${tooltipPosition}`}>{text}</div>}
    </div>
  );
};
