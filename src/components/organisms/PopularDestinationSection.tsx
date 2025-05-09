"use client";
import { useEffect, useState } from "react";
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

interface PopDestInterface {
  place_id: number;
  place_name: string;
  city: string;
  rating: number;
  description: string;
}

export default function PopularDestinationSection() {
  const [popDestData, setPopDestData] = useState<PopDestInterface[]>([]);
  useEffect(() => {
    fetch("http://localhost:3001/api/places/get-pop-dest")
      .then((res) => {
        if (!res.ok) throw new Error("Fetch failed");
        return res.json();
      })
      .then((data) => {
        console.log("Data diterima:", data.data);
        setPopDestData(data.data);
      })
      .catch((err) => console.error("Gagal fetch:", err));
  }, []);

  return (
    <div className="w-full bg-white p-[80px] flex flex-col gap-[24px]">
      <SectionHeader
        title="Popular Destinations"
        description="Discover the most loved destinations across Indonesia's beautiful
        archipelago"
      />
      <div className="flex p-[24px] mx-[-80px] gap-[16px]">
        {popDestData.map((item) => {
          return (
            <div key={item.place_id}>
              <CardWithImage1
                alt={item.place_name}
                description={item.description}
                location={item.city}
                rating={item.rating}
                src={"/img/bgImage-heroSection-1.png"}
                title={item.place_name}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
