"use client";
import { useEffect, useState } from "react";
import CardWithImage1 from "../molecules/CardWithImage1";
import SectionHeader from "../molecules/SectionHeader";

interface PopDestInterface {
  place_id: number;
  place_name: string;
  city: string;
  rating: number;
  description: string;
}

export default function PopularDestinationSection() {
  const [isLoading, setIsLoading] = useState(false);
  const [popDestData, setPopDestData] = useState<PopDestInterface[]>([]);
  useEffect(() => {
    setIsLoading(true);
    fetch("https://be-tourism-website.vercel.app/api/places/get-pop-dest")
      .then((res) => {
        if (!res.ok) throw new Error("Fetch failed");
        return res.json();
      })
      .then((data) => {
        console.log("Data diterima:", data.data);
        setPopDestData(data.data);
      })
      .catch((err) => console.error("Gagal fetch:", err))
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="w-full bg-white p-[80px] flex flex-col gap-[24px]">
      {isLoading && (
        <div className="fixed inset-0 bg-transparent flex items-center justify-center z-50 animate-fadeIn">
          <div className="w-12 h-12 border-4 border-t-transparent border-[#0D9488] rounded-full animate-spin" />
        </div>
      )}
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
