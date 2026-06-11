export const formatPrice = (value: number) => {
  const formattedPrice = value
    .toFixed(2)
    .replace(".", ",")
    .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return formattedPrice;
};
