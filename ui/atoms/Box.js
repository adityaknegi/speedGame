import React from "react";

const Box = ({className, children, width, height, bgColor, onClick }) => {
  return (
    <div
      className={`${className} rounded-md`}
      style={{ width: `${width}px`, height: `${height}px`, backgroundColor: bgColor }}
      onClick= {onClick}
    >{children}

    </div>
  );
};

export default Box;
