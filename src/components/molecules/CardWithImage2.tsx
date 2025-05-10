// components/molecules/DestinationCard.tsx
import Image from "next/image";
import H3 from "../atoms/H3";
import P from "../atoms/P";

interface Props {
  place_id: number;
  place_name: string;
  rating: number;
  count_people: number;
  category: string;
  description: string;
}

export default function CardWithImage2({
  place_name,
  rating,
  count_people,
  category,
  description,
}: Props) {
  return (
    <div className="p-[16px] rounded-[16px] flex flex-row bg-white shadow gap-[16px]">
      <Image
        src={"/img/bgImage-heroSection-1.png"}
        alt={place_name}
        width={100}
        height={100}
        className="aspect-square object-cover rounded-md"
      />
      <div className="flex flex-col gap-[4px]">
        <H3 bold="font-bold">{place_name}</H3>
        <P className="text-sm text-gray-500 italic">{category}</P>
        <P className="text-sm text-yellow-600">
          {rating.toFixed(2)} ★ ({count_people} reviews)
        </P>
        <P className="text-sm text-gray-700">
          {description.length > 100
            ? description.slice(0, 100) + "..."
            : description}
        </P>
      </div>
    </div>
  );
}
