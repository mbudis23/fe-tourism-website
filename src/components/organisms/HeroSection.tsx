import HeroSectionSearch from "../molecules/HeroSectionSearch";
import HeroSectionText from "../molecules/HeroSectionText";

export default function HeroSection() {
  return (
    <div className="flex flex-col items-center px-[80px] py-[80px] bg-[url('/img/bgImage-heroSection-1.png')] bg-cover bg-center gap-[48px]">
      <HeroSectionText />
      <HeroSectionSearch />
    </div>
  );
}
