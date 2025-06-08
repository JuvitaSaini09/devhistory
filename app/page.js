import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <section>
        <div className="border flex flex-col items-center pb-[59px]">
          <div className="flex flex-col items-center text-center gap-4">
            <h1 className="text-center text-[34px] md:text-[48px] lg:text-[64px] leading-[46px] md:leading-[56px] lg:leading-[73px] tracking-[0px] uppercase font-dela-gothic max-w-[400px] md:max-w-[830px]">
              Document Your Dev Journey
              {/* The Developer’s Timeline */}
              {/* Your Dev Story Starts Here */}
            </h1>
            <p className="max-w-[600px] text-center">
              Build something your future self will thank you for — by
              documenting your journey, preserving your growth, and leaving a
              legacy.
            </p>
            <Button
              variant="secondary"
              className="gap-2 bg-[var(--theme-color-01)] rounded-[10px]  px-6 py-3 font-semibold h-14 text-[18px]"
            >
              Explore DevHistory
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
