import React from "react";

const SectionTitle = ({ children, className }) => {
  return (
    <h2
      className={`text-xl text-darkCyan font-workSans font-semibold ${className}`}
    >
      {children}
    </h2>
  );
};

export default SectionTitle;
