"use client";
import Button from "../atoms/Button";
import H1 from "../atoms/H1";
import P from "../atoms/P";

export default function HeroSectionText() {
  const startExploring = () => {
    const target = document.getElementById("search");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="flex flex-col items-start gap-[24px] w-full">
      <H1 className="text-[#F59E0B]">
        Discover Indonesia&rsquo;s Hidden Treasures
      </H1>
      <P className="text-[white]">
        Explore breathtaking landscapes, vibrant cultures, agriculture, and
        unforgettable experiences across the Indonesian archipelago.
      </P>
      <Button onClick={startExploring} className="bg-[#F59E0B] text-white">
        Start Exploring
      </Button>
    </div>
  );
}
