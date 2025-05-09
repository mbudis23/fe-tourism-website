import Image from "next/image";
import P from "../atoms/P";

type ReviewCardProps = {
  review: string;
  reviewer_name: string;
  reviwer_image: string;
  reviewer_job: string;
};

export default function ReviewCard({
  review,
  reviewer_name,
  reviwer_image,
  reviewer_job,
}: ReviewCardProps) {
  return (
    <div className="rounded-[8px] shadow-md flex flex-col p-[16px] h-full justify-between bg-white gap-[12px]">
      <P>&quot;{review}&quot;</P>
      <div className="flex gap-[12px]">
        <Image
          alt=""
          src={reviwer_image ? reviwer_image : "/img/bgImage-heroSection-1.png"}
          width={50}
          height={50}
          className="rounded-full aspect-square object-cover"
        />
        <div className="flex flex-col">
          <P className="font-bold text-black">{reviewer_name}</P>
          <P className="text-gray-400">{reviewer_job}</P>
        </div>
      </div>
    </div>
  );
}
