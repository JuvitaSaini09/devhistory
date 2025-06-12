import React from "react";

const MainTitle = ({ children }) => {
  return (
    <h1 className="text-center text-[34px] md:text-[48px] lg:text-[64px] leading-[46px] md:leading-[56px] lg:leading-[73px] tracking-[0px] uppercase font-dela-gothic max-w-[400px] md:max-w-[830px]">
      {children}
    </h1>
  );
};

export default MainTitle;
