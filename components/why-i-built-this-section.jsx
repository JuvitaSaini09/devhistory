import React from "react";

const benefits = [
  {
    order: "01",
    title: "Never Forget Again",
    description:
      "Track your work consistently — no more digging through notebooks or docs.",
  },
  {
    order: "02",
    title: "Smart AI Summaries",
    description:
      "Write in your own words. Let AI clean it up into polished tasks.",
  },
  {
    order: "03",
    title: "Resume-Ready Logs",
    description:
      "Your progress, neatly saved — ready when you need to update your resume.",
  },
];

const WhyIBuiltThisSection = () => {
  return (
    <section>
      <div className="px-20 pt-[120px] pb-[50px] max-w-[1097px] flex flex-col items-center w-full relative mx-auto gap-5">
        <h1 className="text-[var(--theme-color-01)] uppercase font-semibold tracking-wider text-2xl">
          Why I Built It
        </h1>
        <header className="flex flex-col items-center text-center gap-4">
          <h1 className="text-center text-[34px] md:text-[48px] lg:text-[64px] leading-[46px] md:leading-[56px] lg:leading-[73px] tracking-[0px] uppercase font-dela-gothic max-w-[400px] md:max-w-[830px]">
            Because...
          </h1>
          <p className="max-w-[600px] text-center text-[18px]  text-[var(--gray-01)]">
            I used to forget the little and big wins from past companies.
            Sometimes I wrote them down — in a notebook, Notion, or docs — but
            when I actually needed them (for resumes, updates, etc), I could
            never find them. So I built DevHistory — a simple way to log my
            work, summarize it with AI, and store it all in one place. Now
            future me says, “Thank you.”
          </p>
        </header>
      </div>

      <div className="px-20">
        <div className="flex flex-wrap gap-6 justify-center">
          {benefits.map((benefit, index) => {
            return (
              <div
                key={index}
                className="flex flex-col gap-12 p-[30px] bg-[#04141c] w-[303px] h-[336px] rounded-3xl"
              >
                <h3 className="text-[var(--theme-color-01)] text-5xl font-dela-gothic uppercase ">
                  {benefit.order}
                </h3>

                <div className="flex flex-col gap-[8px]">
                  <h3 className="font-dela-gothic text-[22px] uppercase">
                    {benefit.title}
                  </h3>
                  <p className="text-[18px]  text-[var(--gray-01)]">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <p className="text-center mt-14 mb-5 text-[18px] font-semibold">
          Your past work matters. DevHistory makes sure it’s never forgotten.
        </p>
      </div>
    </section>
  );
};

export default WhyIBuiltThisSection;
