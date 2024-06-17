import React from "react";

const SectionTitle = ({ children, className }) => {
  return (
    <h2
      className={`text-xl text-darkCyan font-workSans font-semibold mb-12  ${className}`}
    >
      {children}
    </h2>
  );
};

export default SectionTitle;
