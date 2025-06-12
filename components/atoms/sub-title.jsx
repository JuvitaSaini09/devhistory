import React from "react";

const SubTitle = ({ children, color = "white" }) => {
  return <p className={`max-w-[600px] text-[${color}]`}>{children}</p>;
};

export default SubTitle;
