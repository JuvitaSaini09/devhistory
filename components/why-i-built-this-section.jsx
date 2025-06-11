import React from "react";

const WhyIBuiltThisSection = () => {
  return (
    <section>
      <div className="px-20 py-[120px] max-w-[1097px] flex flex-col items-center w-full relative mx-auto gap-5">
        <h1 className="text-[var(--theme-color-01)] uppercase font-semibold tracking-wider text-2xl">
          Why I Built It
        </h1>
        <header className="flex flex-col items-center text-center gap-4">
          <h1 className="text-center text-[34px] md:text-[48px] lg:text-[64px] leading-[46px] md:leading-[56px] lg:leading-[73px] tracking-[0px] uppercase font-dela-gothic max-w-[400px] md:max-w-[830px]">
            Because...
          </h1>
          <p className="max-w-[600px] text-center text-[18px]  text-[var(--gray-01)] ">
            I used to forget the little and big wins from past companies.
            Sometimes I wrote them down — in a notebook, Notion, or docs — but
            when I actually needed them (for resumes, updates, etc), I could
            never find them. So I built DevHistory — a simple way to log my
            work, summarize it with AI, and store it all in one place. Now
            future me says, “Thank you.”
          </p>
        </header>
      </div>
    </section>
  );
};

export default WhyIBuiltThisSection;
