"use client";
import { useState } from "react";
import Button from "../atoms/Button";
import H2 from "../atoms/H2";
import InputText from "../atoms/InputText";
import { useRouter } from "next/navigation";

export default function HeroSectionSearch() {
  const [search, setSearch] = useState<string>("");
  const router = useRouter();

  const handleSearch = () => {
    const trimmed = search.trim();
    if (!trimmed) {
      alert("Please enter a destination to search.");
      return;
    }

    localStorage.setItem("searchKeyword", trimmed); // simpan ke localStorage
    router.push("/search"); // navigasi ke halaman tujuan
  };

  return (
    <div
      id="search"
      className="bg-white rounded-[8px] w-full p-[32px] flex flex-col items-center gap-y-[16px]"
    >
      <H2 className="text-[#0D9488]" bold="font-bold">
        Find Your Perfect Experience!
      </H2>
      <InputText
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search destinations..."
      />
      <div className="flex justify-end w-full">
        <Button
          onClick={handleSearch}
          customFontSize="text-[12px]"
          customPadding="px-[12px] py-[6px]"
          className="text-white bg-[#0D9488] h-fit"
        >
          Find Destination
        </Button>
      </div>
    </div>
  );
}
