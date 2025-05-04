import DisplayLogoName from "../molecules/DisplayLogoName";
import NavbarOption from "../molecules/NavbarOption";

export default function Navbar() {
  return (
    <div className="w-full bg-white py-[24px] px-[80px] flex justify-between items-center">
      <DisplayLogoName />
      <NavbarOption />
    </div>
  );
}
