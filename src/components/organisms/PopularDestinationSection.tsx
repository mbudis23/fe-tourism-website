import CardWithImage1 from "../molecules/CardWithImage1";
import SectionHeader from "../molecules/SectionHeader";

const DUMMY_DATA = [
  {
    title: "Tegallang Rice Terrace",
    location: "Bali",
    rating: "4.8",
    description:
      "Experience the breathtaking beauty of Tegallang Rice Terrace, a UNESCO World Heritage site, where lush green rice paddies cascade down the hillsides, creating a stunning landscape that showcases Bali's agricultural heritage.",
  },
  {
    title: "Tegallang Rice Terrace",
    location: "Bali",
    rating: "5.0",
    description:
      "Experience the breathtaking beauty of Tegallang Rice Terrace, a UNESCO World Heritage site, where lush green rice paddies cascade down the hillsides, creating a stunning landscape that showcases Bali's agricultural heritage.",
    src: "/img/bgImage-heroSection-1.png",
  },
];

export default function PopularDestinationSection() {
  return (
    <div className="w-full bg-white p-[80px] flex flex-col gap-[24px]">
      <SectionHeader
        title="Popular Destinations"
        description="Discover the most loved destinations across Indonesia's beautiful
        archipelago"
      />
      <div className="flex p-[24px] mx-[-80px] gap-[16px]">
        {DUMMY_DATA.map((item, index) => {
          return (
            <div key={index}>
              <CardWithImage1
                alt={item.title}
                description={item.description}
                location={item.location}
                rating={item.rating}
                src={item.src}
                title={item.title}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
