import HeroSection from "@/components/organisms/HeroSection";
import PopularDestinationSection from "@/components/organisms/PopularDestinationSection";
import TravelerStoriesSection from "@/components/organisms/TravelerStoriesSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wisata Gas",
  description: "Siap membantu mencari destinasi terbaik",
};
export default function Home() {
  return (
    <div className="flex flex-col text-black">
      <HeroSection />
      <PopularDestinationSection />
      <TravelerStoriesSection />
    </div>
  );
}
