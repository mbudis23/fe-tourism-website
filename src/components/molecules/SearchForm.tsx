// "use client";
// import Button from "@/components/atoms/Button";
// import H1 from "@/components/atoms/H1";
// import H3 from "@/components/atoms/H3";
// import InputText from "@/components/atoms/InputText";
// import P from "@/components/atoms/P";
// import Image from "next/image";
// import { useRouter } from "next/navigation";
// import { useEffect, useState } from "react";

// interface TourismPlace {
//   place_id: number;
//   place_name: string;
//   rating: number;
//   count_people: number;
//   category: string;
//   description: string;
// }

// export default function SearchForm() {
//   const router = useRouter();
//   const [search, setSearch] = useState("");
//   const [listDest, setListDest] = useState<TourismPlace[]>([]);

//   // Ambil keyword dari localStorage saat halaman pertama dibuka
//   useEffect(() => {
//     const value = localStorage.getItem("searchKeyword");
//     if (value) {
//       setSearch(value); // akan memicu useEffect kedua
//     }
//   }, []);

//   // Fetch data dari API setelah search terisi
//   useEffect(() => {
//     if (!search) return;

//     fetch(`http://localhost:3001/api/places/search/${search}/10/0`)
//       .then((res) => {
//         if (!res.ok) throw new Error("Fetch failed");
//         return res.json();
//       })
//       .then((data) => {
//         console.log("Data diterima:", data.data);
//         // parsing rating dan count_people agar sesuai tipe
//         const parsed = data.data.map(
//           (item: any): TourismPlace => ({
//             ...item,
//             rating: parseFloat(item.rating),
//             count_people: parseInt(item.count_people, 10),
//           })
//         );
//         setListDest(parsed);
//       })
//       .catch((err) => console.error("Gagal fetch:", err));
//   }, [search]);

//   return (
//     <div className="bg-[#F8FAFC] px-[64px] py-[96px] text-black">
//       {/* Search Bar */}
//       <div className="bg-white p-[24px] shadow rounded-[8px] flex flex-col gap-[16px]">
//         <H1 className="text-[#48847F] text-center">Where do you want to go?</H1>
//         <InputText
//           placeholder="Search destinations..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//         />
//         <Button
//           onClick={() => {
//             if (search) {
//               localStorage.setItem("searchKeyword", search);
//               router.replace("/search"); // refresh halaman
//             }
//           }}
//           customFontSize="text-[12px]"
//           customPadding="px-[12px] py-[6px]"
//           className="text-white bg-[#0D9488] h-fit"
//         >
//           Find Destination
//         </Button>
//       </div>

//       {/* Hasil Pencarian */}
//       <div className="flex flex-row w-full justify-between gap-[24px] mt-[32px]">
//         <div className="w-fit p-[12px] text-gray-500 italic">Advanced</div>

//         <div className="w-full p-[12px] gap-[16px] flex flex-col">
//           {listDest.length === 0 ? (
//             <P className="text-center text-gray-400 mt-[24px]">
//               No destinations found.
//             </P>
//           ) : (
//             listDest.map((item) => (
//               <div
//                 className="p-[16px] rounded-[16px] flex flex-row bg-white shadow gap-[16px]"
//                 key={item.place_id}
//               >
//                 <Image
//                   src={"/img/bgImage-heroSection-1.png"}
//                   alt={item.place_name}
//                   width={100}
//                   height={100}
//                   className="aspect-square object-cover rounded-md"
//                 />
//                 <div className="flex flex-col gap-[4px]">
//                   <H3 bold="font-bold">{item.place_name}</H3>
//                   <P className="text-sm text-gray-500 italic">
//                     {item.category}
//                   </P>
//                   <P className="text-sm text-yellow-600">
//                     {item.rating.toFixed(2)} ★ ({item.count_people} reviews)
//                   </P>
//                   <P className="text-sm text-gray-700">
//                     {item.description.length > 100
//                       ? item.description.slice(0, 100) + "..."
//                       : item.description}
//                   </P>
//                 </div>
//               </div>
//             ))
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }
