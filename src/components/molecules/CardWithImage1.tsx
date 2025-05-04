import Image from "next/image";
import H3 from "../atoms/H3";
import P from "../atoms/P";

type CardWithImage1Props = {
  src?: string;
  alt?: string;
  title?: string;
  location?: string;
  rating?: string;
  description?: string;
  //   key?: any;
};

export default function CardWithImage1({
  src,
  alt = "",
  title,
  location,
  rating,
  description,
}: //   key,
CardWithImage1Props) {
  return (
    <div className="aspect-[32/40] rounded-[8px] shadow-md grid grid-rows-2 max-h-[400px] overflow-hidden">
      <Image
        alt={alt}
        src={src ? src : "/img/bgImage-heroSection-1.png"}
        width={500}
        height={500}
        className="rounded-t-[8px] object-cover"
      />
      <div className="bg-white rounded-b-[8px] p-[16px] gap-[12px] flex flex-col">
        <H3 bold="font-bold">{title}</H3>
        <div className="flex justify-between w-full text-[12px]">
          <p className="text-gray-400">{location}</p>
          <div>{rating}</div>
        </div>
        <P className="text-gray-600">{description}</P>
      </div>
    </div>
  );
}
