import Link from "next/link";
import H3 from "../atoms/H3";
import P from "../atoms/P";

export default function Footer() {
  return (
    <div className="grid grid-cols-4 p-[80px] bg-[#1E293B] gap-[12px]">
      <div className="flex flex-col gap-[24px]">
        <H3 bold="font-black" className="text-[#F59E0B]">
          WisataGas
        </H3>
        <P className="font-bold">
          Discover Indonesia&apos;s hidden treasures with our curated travel
          experiences.
        </P>
      </div>
      <div className="flex flex-col gap-[24px]">
        <H3 bold="font-black" className="text-[#F59E0B]">
          Explore
        </H3>
        <div className="flex flex-col gap-[8px]">
          <Link href={"/"} className="text-white">
            Destinations
          </Link>
          <Link href={"/"} className="text-white">
            Experiences
          </Link>
          <Link href={"/"} className="text-white">
            Travel Guides
          </Link>
          <Link href={"/"} className="text-white">
            Local Culture
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-[24px]">
        <H3 bold="font-black" className="text-[#F59E0B]">
          Company
        </H3>
        <div className="flex flex-col gap-[8px]">
          <Link href={"/"} className="text-white">
            About Us
          </Link>
          <Link href={"/"} className="text-white">
            Contact
          </Link>
          <Link href={"/"} className="text-white">
            Careers
          </Link>
          <Link href={"/"} className="text-white">
            Partners
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-[24px]">
        <H3 bold="font-black" className="text-[#F59E0B]">
          Support
        </H3>
        <div className="flex flex-col gap-[8px]">
          <Link href={"/"} className="text-white">
            Help Center
          </Link>
          <Link href={"/"} className="text-white">
            Safety Tips
          </Link>
          <Link href={"/"} className="text-white">
            Terms of Service
          </Link>
          <Link href={"/"} className="text-white">
            Privacy Policy
          </Link>
        </div>
      </div>
    </div>
  );
}
