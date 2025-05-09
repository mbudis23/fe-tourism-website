export default function renderStarts(rating: number = 0) {
  const fullStars = Math.floor(rating); // jumlah bintang penuh
  const hasHalfStar = rating % 1 >= 0.5; // apakah ada setengah bintang
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0); // sisa bintang kosong
  return (
    <>
      {"★".repeat(fullStars)}
      {hasHalfStar && "½"}
      {"☆".repeat(emptyStars)}
    </>
  );
}
