import React, { useState } from "react";
import "./index.css";

// Компонент Accordion
export const Accordion = ({ title, defaultOpen = false, children }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const toggleAccordion = () => setIsOpen(!isOpen);

  return (
    <div className="accordion-container">
      <div className="accordion-header" onClick={toggleAccordion}>
        <h3>{title}</h3>
        <button className="accordion-toggle-btn">{isOpen ? '-' : '+'}</button>
      </div>
      {isOpen && <div className="accordion-content">{children}</div>}
    </div>
  );
};
