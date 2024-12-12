import "./index.css";

export const Typography = ({ textSize = "", className = "", children }) => {
  return (
    <p className={`typography typography-${textSize} ${className}`}>{children}</p>
  );
};
