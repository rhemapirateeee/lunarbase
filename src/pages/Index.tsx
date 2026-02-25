import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import MissionSection from "@/components/MissionSection";
import CTASection from "@/components/CTASection";
import ParticleField from "@/components/ParticleField";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background">
      <ParticleField />
      <div className="relative z-10">
        <HeroSection />
        <FeaturesSection />
        <MissionSection />
        <CTASection />
      </div>
    </div>
  );
};

export default Index;
