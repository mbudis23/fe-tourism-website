"use client";
import { useState } from "react";
import Button from "../atoms/Button";
import H2 from "../atoms/H2";
import InputText from "../atoms/InputText";
import P from "../atoms/P";
import { useRouter } from "next/navigation";

export default function HeroSectionSearch() {
  const [search, setSearch] = useState<string>("");
  const router = useRouter();
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
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        placeholder="Search destinations..."
      />
      <div className="flex justify-between w-full items-center">
        <Button className="text-[#F59E0B] underline">Advance Search</Button>
        <Button
          onClick={() => {
            if (search) {
              localStorage.setItem("searchKeyword", search); // simpan ke localStorage
              router.push(`/search`); // navigasi ke halaman tujuan
            }
          }}
          customFontSize="text-[12px]"
          customPadding="px-[12px] py-[6px]"
          className="text-white bg-[#0D9488] h-fit"
        >
          Find Destination
        </Button>
      </div>
      <div className="flex gap-[16px]">
        <span>
          <P className="text-[#1E293B]">Region</P>
          <InputText />
        </span>
        <span>
          <P className="text-[#1E293B]">Tourism Type</P>
          <InputText />
        </span>
        <span>
          <P className="text-[#1E293B]">Rating</P>
          <InputText />
        </span>
      </div>
    </div>
  );
}
