import MainTitle from "@/components/atoms/main-header";
import SubTitle from "@/components/atoms/sub-title";
import WorkCard from "@/components/work-card";

const companies = [
  {
    id: "1",
    name: "DevMagic Pvt Ltd",
    joinedAt: "Jan 2024",
    isCurrent: true,
    summary: ["Wrote blog engine", "Setup Gemini extraction"],
  },
  {
    id: "2",
    name: "Startup X",
    joinedAt: "May 2022",
    leftAt: "Nov 2022",
    isCurrent: false,
  },
];

export default function TimelinePage() {
  return (
    <main className="container mx-auto pt-33">
      <section>
        <header className="flex flex-col items-center text-center gap-4">
          <MainTitle>Work Experience</MainTitle>
          <SubTitle>My professional journey through time</SubTitle>
        </header>
      </section>
      <section className="px-6 mt-16">
        <div className="grid grid-cols-1 gap-9">
          {Array(4)
            .fill(0)
            .map((_, index) => (
              <WorkCard key={index} />
            ))}
        </div>
      </section>
    </main>
  );
}
