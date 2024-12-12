import "./index.css";

export const Heading = ({ level = 1, className = "", children }) => {
  const Tag = `h${level}`; 

  return <Tag className={`heading heading-level-${level} ${className}`}>{children}</Tag>;
};
