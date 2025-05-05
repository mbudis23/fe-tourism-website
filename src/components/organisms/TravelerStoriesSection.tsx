import ReviewCard from "../molecules/ReviewCard";
import SectionHeader from "../molecules/SectionHeader";

const DUMMY_DATA = [
  {
    reviewer_name: "John Doe",
    reviewer_job: "Travel Blogger",
    review:
      "This was the best trip of my life! The scenery was breathtaking and the culture was rich.",
    reviwer_image: "/next.svg",
  },
  {
    reviewer_name: "Jane Smith",
    reviewer_job: "Photographer",
    review:
      "I captured some amazing moments during my travels. The landscapes were stunning!",
    reviwer_image: "/next.svg",
  },
  {
    reviewer_name: "Alice Johnson",
    reviewer_job: "Adventure Seeker",
    review: "The adventures I had were unforgettable. I can't wait to go back!",
    reviwer_image: "/next.svg",
  },
  //   {
  //     reviewer_name: "Bob Brown",
  //     reviewer_job: "Food Enthusiast",
  //     review:
  //       "The food was incredible! I tried so many new dishes and loved every bite.",
  //     reviwer_image: "/next.svg",
  //   },
];

export default function TravelerStoriesSection() {
  return (
    <div className="w-full bg-[#F1F5F9] p-[80px] flex flex-col gap-[24px]">
      <SectionHeader
        title="Traveler Stories"
        description="Hear what our travelers have to say about their Indonesian adventures"
      />
      <div className="flex p-[24px] mx-[-80px] gap-[16px] overflow-hidden">
        {DUMMY_DATA.map((item, index) => {
          return (
            <div key={index}>
              <ReviewCard
                review={item.review}
                reviewer_name={item.reviewer_name}
                reviewer_job={item.reviewer_job}
                reviwer_image={item.reviwer_image}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
