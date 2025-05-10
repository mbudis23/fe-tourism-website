import Link from "next/link";
import H3 from "../atoms/H3";

export default function DisplayLogoName() {
  return (
    <Link href={"/"}>
      <H3 bold="font-bold" className="text-[#0D9488] cursor-pointer">
        Wisata<span className="text-[#F59E0B]">Gas</span>
      </H3>
    </Link>
  );
}
