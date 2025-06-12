import React from "react";
import Image from "next/image";

const WorkCard = () => {
  return (
    <div className="h-100 bg-[var(--card-bg)] bg-[url('https://cdn.prod.website-files.com/68030369ec73392b8f0faf3c/68182ebcbf0ad75885693660_bg%20pattern.svg')] bg-center bg-no-repeat bg-cover rounded-[24px] pt-[40px] px-6 sm:px-[40px] overflow-hidden flex flex-col gap-9">
      <div className="flex justify-between">
        <div className="space-y-2">
          <h3 className="font-dela-gothic text-[var(--neutral-01)] text-[24px]">
            Carbonminus
          </h3>
          <p className="font-archivo text-[var(--gray-01)] text-[18px]">
            Frontend Developer
          </p>
        </div>
        <div>
          <p className="font-archivo text-[var(--gray-01)] text-[16px] sm:text-[18px]">
            2022 - Present
          </p>
          <h2 className="font-dela-gothic text-transparent bg-clip-text bg-gradient-to-b from-[#c9ec06] to-[#1a5b43] text-[16px] sm:text-[20px]">
            1.7 Years
          </h2>
        </div>
      </div>
      <div className="flex justify-between gap-1 h-full ">
        <div className="max-w-[100%] sm:max-w-[70%]">
          <p className="text-[16px] line-clamp-5 sm:line-clamp-6 overflow-hidden text-ellipsis">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            beatae sed, exercitationem voluptatibus minus et dolor iusto quis
            voluptate ipsum, quo ut dolore debitis, non voluptates maiores
            provident blanditiis mollitiaLorem ipsum dolor sit amet consectetur
            adipisicing elit. Assumenda beatae sed, exercitationem voluptatibus
            minus et dolor iusto quis voluptate ipsum, quo ut dolore debitis,
            non voluptates maiores provident blanditiis mollitia Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Assumenda beatae sed,
            exercitationem voluptatibus minus et dolor iusto quis voluptate
            ipsum, quo ut dolore debitis, non voluptates maiores provident
            blanditiis mollitiaLorem ipsum dolor sit amet consectetur
            adipisicing elit. Assumenda beatae sed, exercitationem voluptatibus
            minus et dolor iusto quis voluptate ipsum, quo ut dolore debitis,
            non voluptates maiores provident blanditiis mollitia.
          </p>
          <button className="neon-btn px-3 py-1 mt-2">View Details</button>
        </div>

        <div className="hidden sm:block aspect-[432/517] w-200 h-auto relative self-end ">
          <Image
            src="images/blueNinja.svg"
            alt="blue ninja"
            fill
            className="object-contain "
          />
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
