import DisplayLogoName from "../molecules/DisplayLogoName";
import NavbarOption from "../molecules/NavbarOption";

export default function Navbar() {
  return (
    <div className="w-full bg-white py-[24px] px-[80px] flex justify-between items-center max-sm:flex-col gap-[12px] shadow">
      <DisplayLogoName />
      <NavbarOption />
    </div>
  );
}
