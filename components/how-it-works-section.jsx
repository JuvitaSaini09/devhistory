import Image from "next/image";
import React from "react";
import HowItWorksStep from "./how-it-works-step";
import { stepData } from "@/constants/data";
import BirdsAndMountains from "./birds-and-mountains";

const HowItWorksSection = () => {
  return (
    <section>
      <div className="px-20 py-[120px] max-w-[1097px] flex flex-col items-center w-full relative mx-auto gap-10">
        <h1 className="text-[var(--theme-color-01)] uppercase font-semibold tracking-wider text-2xl">
          How DevHistory Works
        </h1>

        {stepData.map((step, index) => (
          <HowItWorksStep
            key={index}
            phase={step.phase}
            title={step.title}
            description={step.description}
            stepNumber={step.stepNumber}
            justifyContent={step.justifyContent}
          />
        ))}
      </div>

      <BirdsAndMountains />
    </section>
  );
};

export default HowItWorksSection;
