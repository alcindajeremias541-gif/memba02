import { HeroSection } from "@/components/home/HeroSection";
import { TrendingResources } from "@/components/home/TrendingResources";
import { SourcesSection } from "@/components/home/SourcesSection";
import { CallToAction } from "@/components/home/CallToAction";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center">
      <HeroSection />
      <TrendingResources />
      <SourcesSection />
      <CallToAction />
    </div>
  );
}
