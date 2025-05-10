import Link from "next/link";

export default function NavbarOption() {
  return (
    <div className="flex gap-[24px] max-md:hidden">
      <Link href={"/"} className="text-[16px] font-medium text-[#1E293B]">
        Home
      </Link>
      <Link href={"/"} className="text-[16px] font-medium text-[#1E293B]">
        About
      </Link>
      <Link href={"/"} className="text-[16px] font-medium text-[#1E293B]">
        Contact
      </Link>
    </div>
  );
}
