import HeroSection from "@/components/hero-section";
import HowItWorksSection from "@/components/how-it-works-section";
import WhyIBuiltThisSection from "@/components/why-i-built-this-section";

export default function LandingPage() {
  return (
    <main>
      <HeroSection />
      <HowItWorksSection />
      <WhyIBuiltThisSection />
    </main>
  );
}
