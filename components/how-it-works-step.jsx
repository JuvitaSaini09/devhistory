import Image from "next/image";
import React from "react";

const HowItWorksStep = ({
  phase,
  title,
  description,
  stepNumber,
  justifyContent = "start",
}) => {
  const textBlock = (
    <div className="flex flex-col max-w-[420px] items-start gap-4">
      <p className="text-[16px] font-semibold text-[var(--theme-color-01)]">
        {phase}
      </p>
      <h3 className="text-[32px] font-normal leading-[1.4] tracking-[-1px] uppercase mt-0 mb-0 text-[color:var(--neutral-01)] font-dela-gothic">
        {title}
      </h3>
      <p className="text-[18px]  text-[var(--gray-01)] ">{description}</p>
    </div>
  );

  const imageBlock = (
    <div className="w-20 h-20 relative z-10 mx-0 my-0 md:mx-auto md:my-auto">
      <Image
        src="/images/coin.svg"
        fill
        alt="coin which tell the step"
        className="mx-auto"
      />
      <h4 className="text-[24px] font-normal text-[color:var(--neutral-01)] font-dela-gothic absolute top-6 left-8 ">
        {stepNumber}
      </h4>
    </div>
  );

  return (
    <div className={`w-full lg:w-[1020px] flex justify-${justifyContent}`}>
      <div className="flex flex-col md:flex-row gap-[90px] align-center justify-between w-full max-w-[590px]">
        <div className="flex flex-col items-start md:hidden w-full gap-[30px]">
          {imageBlock}
          {textBlock}
        </div>
        <div className=" hidden md:flex w-full">
          {justifyContent === "start" ? (
            <>
              {textBlock}
              {imageBlock}
            </>
          ) : (
            <>
              {imageBlock}
              {textBlock}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default HowItWorksStep;
