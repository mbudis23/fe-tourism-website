"use client";
import Button from "@/components/atoms/Button";
import H1 from "@/components/atoms/H1";
import H3 from "@/components/atoms/H3";
import InputText from "@/components/atoms/InputText";
import P from "@/components/atoms/P";
import renderStarts from "@/components/molecules/renderStart";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AiOutlineUser } from "react-icons/ai";

interface RawTourismPlace {
  place_id: number;
  place_name: string;
  rating: string;
  count_people: string;
  category: string;
  description: string;
}

interface TourismPlace {
  place_id: number;
  place_name: string;
  rating: number;
  count_people: number;
  category: string;
  description: string;
}

export default function SearchPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [listDest, setListDest] = useState<TourismPlace[]>([]);

  const fetchDestinations = (query: string) => {
    if (!query) return;

    setIsLoading(true);

    fetch(
      `https://be-tourism-website-git-main-mbudis23s-projects.vercel.app/api/ai/searchAI`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
      }
    )
      .then((res) => {
        if (!res.ok) throw new Error("Fetch failed");
        return res.json();
      })
      .then((data: { success: boolean; data: RawTourismPlace[] }) => {
        if (!data.success || !Array.isArray(data.data)) {
          throw new Error("Invalid data structure");
        }

        const parsed: TourismPlace[] = data.data.map((item) => ({
          place_id: item.place_id,
          place_name: item.place_name,
          rating: parseFloat(item.rating),
          count_people: parseInt(item.count_people, 10),
          category: item.category,
          description: item.description,
        }));

        setListDest(parsed);
      })
      .catch((err) => {
        console.error("Gagal fetch:", err);
        alert(
          "Terjadi kesalahan saat mengambil data destinasi. Silakan coba lagi."
        );
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    const value = localStorage.getItem("searchKeyword");
    if (value) {
      setSearch(value);
      fetchDestinations(value); // langsung fetch pakai value dari localStorage
    }
  }, []);

  return (
    <div className="bg-[#F8FAFC] px-[64px] py-[96px] text-black">
      {isLoading && (
        <div className="fixed inset-0 bg-transparent flex items-center justify-center z-50 animate-fadeIn">
          <div className="w-12 h-12 border-4 border-t-transparent border-[#0D9488] rounded-full animate-spin" />
        </div>
      )}

      <div className="bg-white p-[24px] shadow rounded-[8px] flex flex-col">
        <H1 className="text-[#48847F] text-center">Where do you want to go?</H1>
        <InputText
          placeholder="Search destinations..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <div className="w-full flex justify-end">
          <Button
            onClick={() => fetchDestinations(search)}
            customFontSize="text-[12px]"
            customPadding="px-[12px] py-[6px]"
            className="text-white bg-[#0D9488] h-fit w-fit"
          >
            Find Destination
          </Button>
        </div>
      </div>

      <div className="flex flex-row w-full justify-between gap-[24px] mt-[24px]">
        <div className="w-full p-[12px] gap-[12px] flex flex-col">
          {listDest.length === 0 && search !== "" && (
            <P className="text-center text-gray-500">No destinations found.</P>
          )}

          {listDest.map((item, index) => (
            <div
              className="p-[12px] rounded-[16px] flex flex-row bg-white shadow gap-[12px] max-sm:flex-col"
              key={index}
            >
              <Image
                src={"/img/bgImage-heroSection-1.png"}
                alt=""
                width={500}
                height={500}
                className="aspect-square w-[25%] object-cover max-sm:w-full"
              />
              <div className="w-full flex flex-col gap-[12px]">
                <H3 bold="font-bold">{item.place_name}</H3>
                <div className="flex justify-between max-sm:flex-col">
                  <div className="flex gap-[8px]">
                    <P className="flex flex-col justify-center self-center h-full">
                      {typeof item.rating === "number"
                        ? item.rating.toFixed(1)
                        : "N/A"}
                    </P>
                    <P className="text-[#F59E0B] flex flex-col justify-center self-center h-full">
                      {renderStarts(item.rating)}
                    </P>
                    <P className="flex flex-col justify-center self-center h-full">
                      {item.count_people}
                    </P>
                    <P className="flex flex-col justify-center self-center h-full">
                      <AiOutlineUser />
                    </P>
                  </div>
                  <Button
                    onClick={() => {
                      const nomor = "6285102905071";
                      const pesan = `Halo, saya tertarik dengan destinasi ${item.place_name}`;
                      const url = `https://wa.me/${nomor}/?text=${encodeURIComponent(
                        pesan
                      )}`;
                      window.location.href = url;
                    }}
                    customPadding="px-[8px] py-[4px]"
                    className="bg-[#0D9488] text-white"
                  >
                    Book
                  </Button>
                </div>
                <P className="text-justify">{item.description}</P>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
