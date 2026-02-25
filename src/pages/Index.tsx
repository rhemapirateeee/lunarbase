import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import EconomicsSection from "@/components/EconomicsSection";
import SecurityRoadmapSection from "@/components/SecurityRoadmapSection";
import CTASection from "@/components/CTASection";
import ParticleField from "@/components/ParticleField";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background">
      <ParticleField />
      <div className="relative z-10">
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <EconomicsSection />
        <SecurityRoadmapSection />
        <CTASection />
      </div>
    </div>
  );
};

export default Index;
