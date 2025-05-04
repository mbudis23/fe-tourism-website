import Button from "../atoms/Button";
import H2 from "../atoms/H2";
import InputText from "../atoms/InputText";

export default function HeroSectionSearch() {
  return (
    <div className="bg-white rounded-[8px] w-full p-[32px] flex flex-col items-center">
      <H2 className="text-[#0D9488]" bold="font-bold">
        Find Your Perfect Experience!
      </H2>
      <InputText placeholder="Search destinations..." />
      <div className="flex justify-between w-full items-center">
        <Button className="text-[#F59E0B] underline">Advance Search</Button>
        <Button
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
