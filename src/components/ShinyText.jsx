import React from "react";

const ShinyText = ({ children, className = "", speed = 3, disabled = false }) => {
  const style = {
    "--shiny-duration": `${speed}s`,
  };

  return (
    <span
      className={`rb-shiny-text ${disabled ? "rb-shiny-disabled" : ""} ${className}`}
      style={style}
    >
      {children}
    </span>
  );
};

export default ShinyText;



