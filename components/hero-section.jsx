import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section
      className=" z-[6] bg-no-repeat bg-cover bg-[position:50%_100%] pt-33"
      style={{
        backgroundImage:
          "url('/images/globeBG.png'),url('/images/greenShadowBG.png')",
        backgroundPosition: "50% 40%, 50% 70%",
        backgroundRepeat: "no-repeat, no-repeat",
        backgroundSize: "cover, cover",
      }}
    >
      <div className="flex flex-col items-center px-10">
        <header className="flex flex-col items-center text-center gap-4">
          <h1 className="text-center text-[34px] md:text-[48px] lg:text-[64px] leading-[46px] md:leading-[56px] lg:leading-[73px] tracking-[0px] uppercase font-dela-gothic max-w-[400px] md:max-w-[830px]">
            Document Your Dev Journey
            {/* The Developer’s Timeline */}
            {/* Your Dev Story Starts Here */}
          </h1>
          <p className="max-w-[600px] text-center">
            Build something your future self will thank you for — by documenting
            your journey, preserving your growth, and leaving a legacy.
          </p>

          <Button variant="secondary" className="common-btn">
            Explore DevHistory
          </Button>
        </header>
      </div>
      <div>
        <div className="relative aspect-[311/548] max-w-[311px] h-auto mx-auto overflow-hidden -mt-3">
          <Image
            src="/images/greenNinja.svg"
            alt="Green ninja cartoon illustration standing confidently"
            fill
            priority
            className="object-cover"
          />
        </div>
      </div>
      <div>
        <div className="relative aspect-[1440/148] w-full h-auto mx-auto overflow-hidden -mt-14">
          <Image
            src="/images/grass.svg"
            alt="Green grassy landscape background"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
