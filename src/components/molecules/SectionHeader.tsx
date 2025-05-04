import H2 from "../atoms/H2";
import P from "../atoms/P";

type SectionHeaderProps = {
  title: string;
  description?: string;
};

export default function SectionHeader({
  title,
  description,
}: SectionHeaderProps) {
  return (
    <>
      <H2 className="text-[#48847F] text-center">{title}</H2>
      <P className="text-gray-400 text-center">{description}</P>
    </>
  );
}
