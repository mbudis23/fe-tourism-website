import HeroSection from "@/components/organisms/HeroSection";
import PopularDestinationSection from "@/components/organisms/PopularDestinationSection";
import TravelerStoriesSection from "@/components/organisms/TravelerStoriesSection";

export default function Home() {
  return (
    <div className="flex flex-col text-black">
      <HeroSection />
      <PopularDestinationSection />
      <TravelerStoriesSection />
    </div>
  );
}
